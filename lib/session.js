// Signed admin session tokens. Web Crypto only (no Node or DB imports), so proxy.js can use it.
// Token format: <sessionId>.<expiresAtSeconds>.<HMAC-SHA256(sessionId.expiresAt)>
// The signature check here is only a fast pre-filter; lib/admin-auth.js also requires the
// session id to exist in MongoDB, which is what makes logout final.
import { getSessionSecret } from "@/lib/env";

export const ADMIN_SESSION = "admin_session";
export const SESSION_MAX_AGE = 60 * 60 * 8; // 8 hours, in seconds

const encoder = new TextEncoder();

function toBase64Url(bytes) {
  let binary = "";
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function hmac(secret, data) {
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, [
    "sign",
  ]);
  return toBase64Url(new Uint8Array(await crypto.subtle.sign("HMAC", key, encoder.encode(data))));
}

/** Length-safe constant-time string comparison. */
export function safeEqual(a, b) {
  const left = encoder.encode(a);
  const right = encoder.encode(b);
  let diff = left.length ^ right.length;
  const length = Math.max(left.length, right.length);
  for (let i = 0; i < length; i++) {
    diff |= (left[i] ?? 0) ^ (right[i] ?? 0);
  }
  return diff === 0;
}

export async function sha256(value) {
  return toBase64Url(new Uint8Array(await crypto.subtle.digest("SHA-256", encoder.encode(value))));
}

/** Creates a fresh random session id and its signed token. */
export async function signNewSession() {
  const secret = getSessionSecret();
  if (!secret) return null;
  const sid = toBase64Url(crypto.getRandomValues(new Uint8Array(32)));
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_MAX_AGE;
  const token = `${sid}.${expiresAt}.${await hmac(secret, `${sid}.${expiresAt}`)}`;
  return { sid, token, expiresAt: new Date(expiresAt * 1000) };
}

/** Returns the session id when the token is well-formed, correctly signed and unexpired. */
export async function readSessionToken(token) {
  const secret = getSessionSecret();
  if (!secret || !token || token.length > 256) return null;

  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [sid, expiresAt, signature] = parts;
  if (!/^[A-Za-z0-9_-]{43}$/.test(sid) || !/^\d{1,12}$/.test(expiresAt)) return null;
  if (Number(expiresAt) * 1000 <= Date.now()) return null;
  if (!safeEqual(signature, await hmac(secret, `${sid}.${expiresAt}`))) return null;

  return sid;
}
