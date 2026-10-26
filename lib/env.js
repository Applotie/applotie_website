// Server-side configuration for the admin area. Reads process.env only; never import from client code.
// Errors name the missing variables but never include their values.

export class ConfigError extends Error {
  constructor(missing) {
    super(`Missing or invalid environment variables: ${missing.join(", ")}`);
    this.name = "ConfigError";
    this.missing = missing;
  }
}

// Values left as in .env.example are public knowledge, so they count as not set.
const unlessPlaceholder = (value) => (value && !/^replace_with_/i.test(value) ? value : "");

/** Session signing secret. SESSION_SECRET is preferred; ADMIN_SESSION_SECRET is the older name. */
export function getSessionSecret(env = process.env) {
  const secret = unlessPlaceholder(env.SESSION_SECRET || env.ADMIN_SESSION_SECRET);
  return secret.length >= 32 ? secret : null;
}

/**
 * Admin login settings. The password is ADMIN_PASSWORD, compared as written in the env file.
 * ADMIN_PASSWORD_HASH (from `npm run admin:set-password`) is only used when ADMIN_PASSWORD is not set.
 */
export function getAdminConfig(env = process.env) {
  const username = unlessPlaceholder((env.ADMIN_USERNAME || env.ADMIN_EMAIL || "").trim());
  const password = unlessPlaceholder(env.ADMIN_PASSWORD) || null;
  const passwordHash = (env.ADMIN_PASSWORD_HASH || "").trim();
  const sessionSecret = getSessionSecret(env);

  const missing = [];
  if (!username) missing.push("ADMIN_USERNAME");
  if (!password && !passwordHash.startsWith("scrypt:")) missing.push("ADMIN_PASSWORD");
  if (!sessionSecret) missing.push("SESSION_SECRET (32+ characters)");
  if (missing.length) throw new ConfigError(missing);

  return { username, password, passwordHash: password ? null : passwordHash, sessionSecret };
}
