import "server-only";
import { createHmac } from "node:crypto";
import { cookies } from "next/headers";
import connectDB from "@/lib/mongodb";
import AdminSession from "@/lib/models/AdminSession";
import { getAdminConfig } from "@/lib/env";
import { ADMIN_SESSION, SESSION_MAX_AGE, readSessionToken, sha256, signNewSession } from "@/lib/session";

/**
 * HMAC of the configured admin credentials, stored with each session. Changing the username or
 * password, or removing them, therefore ends every existing session. Throws ConfigError if misconfigured.
 */
function credentialFingerprint() {
  const { username, password, passwordHash, sessionSecret } = getAdminConfig();
  return createHmac("sha256", sessionSecret)
    .update(`${username.toLowerCase()}\n${password ?? passwordHash}`)
    .digest("base64url");
}

/** Creates a server-side session and returns the signed cookie value (null if misconfigured). */
export async function createAdminSession() {
  const session = await signNewSession();
  if (!session) return null;
  await connectDB();
  await AdminSession.create({
    sidHash: await sha256(session.sid),
    credentialFp: credentialFingerprint(),
    expiresAt: session.expiresAt,
  });
  return session.token;
}

/** Deletes the server-side session for this token, so the cookie cannot be reused. */
export async function destroyAdminSession(token) {
  const sid = await readSessionToken(token);
  if (!sid) return;
  await connectDB();
  await AdminSession.deleteOne({ sidHash: await sha256(sid) });
}

/**
 * True only for a correctly signed, unexpired token whose session still exists in the database
 * and was created with the credentials configured now.
 */
export async function isAdminAuthenticated() {
  // Outside the try: cookies() signals Next.js that the route is dynamic, and that must not be swallowed.
  const cookieStore = await cookies();
  const sid = await readSessionToken(cookieStore.get(ADMIN_SESSION)?.value);
  if (!sid) return false;
  try {
    await connectDB();
    const session = await AdminSession.exists({
      sidHash: await sha256(sid),
      credentialFp: credentialFingerprint(),
      expiresAt: { $gt: new Date() },
    });
    return Boolean(session);
  } catch (error) {
    // Fail closed: if the session store is unreachable, nobody is treated as signed in.
    console.error("[auth] could not verify admin session:", error instanceof Error ? error.name : "unknown error");
    return false;
  }
}

/**
 * Rejects cross-site state-changing requests. The session cookie is SameSite=Strict already;
 * this is a second layer that does not depend on browser cookie behaviour.
 */
export function isSameOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) {
    // Browsers always send Origin on cross-origin POST/PUT/PATCH/DELETE; fall back to fetch metadata.
    const site = request.headers.get("sec-fetch-site");
    return !site || site === "same-origin" || site === "none";
  }
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export const sessionCookie = {
  name: ADMIN_SESSION,
  options: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  },
};
