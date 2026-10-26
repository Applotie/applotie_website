import { NextResponse } from "next/server";
import { z } from "zod";
import { createAdminSession, destroyAdminSession, isSameOrigin, sessionCookie } from "@/lib/admin-auth";
import { ConfigError, getAdminConfig } from "@/lib/env";
import { verifyPassword } from "@/lib/password";
import { safeEqual, sha256 } from "@/lib/session";
import { clearFailures, clientIp, recordFailure, retryAfter } from "@/lib/rate-limit";
import { jsonError, readJson } from "@/lib/api-helpers";

const credentialsSchema = z.object({
  username: z.string().trim().min(1).max(320),
  password: z.string().min(1).max(1024),
});

// Verified when the username is wrong, so both failure paths take the same time.
// Random bytes in the stored-hash format; no password can match it.
const DUMMY_HASH =
  "scrypt:131072:8:1:7z9kKqvO0n3m2GJm8hW3lA:2h1QeXqQ8m9fC4ZtYp1pYb5o2rZf7q1y8n0xWk3oJ6d4k1U2vC9sE0aB7mL5tR3uN8pQ1wE6yT4iO2sD9fG0hJ";

const INVALID = "Invalid username or password";

// Failed attempts allowed per 15 minutes: per client IP, and in total across all clients
// (the total does not depend on spoofable headers).
const WINDOW_MS = 15 * 60 * 1000;
const PER_IP_LIMIT = 5;
const GLOBAL_LIMIT = 50;
const GLOBAL_KEY = "login:all";

export async function POST(request) {
  if (!isSameOrigin(request)) return jsonError("Forbidden", 403);

  const ipKey = `login:${clientIp(request)}`;
  const wait = Math.max(retryAfter(ipKey, PER_IP_LIMIT), retryAfter(GLOBAL_KEY, GLOBAL_LIMIT));
  if (wait) {
    return NextResponse.json(
      { success: false, message: "Too many login attempts. Please try again later." },
      { status: 429, headers: { "Retry-After": String(wait) } }
    );
  }

  let config;
  try {
    config = getAdminConfig();
  } catch (error) {
    if (error instanceof ConfigError) {
      console.error(`[auth] admin login disabled. ${error.message}`);
      return jsonError("Admin login is not configured", 503);
    }
    throw error;
  }

  const body = await readJson(request, 8 * 1024);
  if (!body.ok) return body.response;

  const parsed = credentialsSchema.safeParse(body.data);
  if (!parsed.success) {
    recordFailure(ipKey, WINDOW_MS);
    return jsonError("Enter your username and password", 400);
  }

  const usernameOk = safeEqual(parsed.data.username.toLowerCase(), config.username.toLowerCase());
  // Digests are compared so the time taken does not depend on the configured password's length.
  const passwordOk = config.password
    ? safeEqual(await sha256(parsed.data.password), await sha256(config.password))
    : await verifyPassword(parsed.data.password, usernameOk ? config.passwordHash : DUMMY_HASH);

  if (!usernameOk || !passwordOk) {
    recordFailure(ipKey, WINDOW_MS);
    recordFailure(GLOBAL_KEY, WINDOW_MS);
    return jsonError(INVALID, 401);
  }
  clearFailures(ipKey);

  try {
    const token = await createAdminSession();
    if (!token) return jsonError("Admin login is not configured", 503);

    // Signing in again replaces this browser's previous session rather than leaving it valid.
    await destroyAdminSession(request.cookies.get(sessionCookie.name)?.value).catch(() => {});

    const response = NextResponse.json({ success: true, message: "Login successful" });
    response.cookies.set({ name: sessionCookie.name, value: token, ...sessionCookie.options });
    return response;
  } catch {
    return jsonError("Login is temporarily unavailable. Please try again.", 503);
  }
}
