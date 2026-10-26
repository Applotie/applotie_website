// Password hashing with scrypt (memory-hard, built into Node; OWASP-recommended parameters).
// Stored format: scrypt:<N>:<r>:<p>:<salt base64url>:<hash base64url>
// (":" not "$", because Next expands "$NAME" inside .env values.)
import { randomBytes, scrypt as scryptCb, timingSafeEqual } from "node:crypto";

const N = 2 ** 17;
const r = 8;
const p = 1;
const KEY_LENGTH = 64;

function scrypt(password, salt, keylen, options) {
  return new Promise((resolve, reject) =>
    scryptCb(password, salt, keylen, options, (err, key) => (err ? reject(err) : resolve(key)))
  );
}

// scrypt needs 128 * N * r bytes; allow headroom above Node's 32 MB default.
const maxmem = (n, rr) => 128 * n * rr * 2;

export async function hashPassword(password) {
  if (typeof password !== "string" || password.length < 8) {
    throw new Error("Password must be at least 8 characters");
  }
  const salt = randomBytes(16);
  const key = await scrypt(password, salt, KEY_LENGTH, { N, r, p, maxmem: maxmem(N, r) });
  return ["scrypt", N, r, p, salt.toString("base64url"), key.toString("base64url")].join(":");
}

export async function verifyPassword(password, stored) {
  const parts = String(stored).split(":");
  if (parts.length !== 6 || parts[0] !== "scrypt") return false;

  const [n, rr, pp] = parts.slice(1, 4).map(Number);
  // Refuse absurd parameters from a corrupted hash rather than burning CPU/memory on them.
  if (![n, rr, pp].every(Number.isInteger) || n < 2 ** 14 || n > 2 ** 20 || rr < 1 || rr > 32 || pp < 1 || pp > 4) {
    return false;
  }

  const salt = Buffer.from(parts[4], "base64url");
  const expected = Buffer.from(parts[5], "base64url");
  if (!salt.length || !expected.length) return false;

  const actual = await scrypt(String(password), salt, expected.length, { N: n, r: rr, p: pp, maxmem: maxmem(n, rr) });
  return timingSafeEqual(actual, expected);
}
