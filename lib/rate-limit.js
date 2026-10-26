// Small in-memory fixed-window counters for failed logins.
// Per server instance: on multi-instance/serverless hosting this slows brute force rather than
// stopping it outright, so pair it with platform-level (WAF/edge) limits.

const buckets = new Map(); // key -> { count, resetAt }

function live(key, now) {
  const bucket = buckets.get(key);
  if (bucket && bucket.resetAt > now) return bucket;
  buckets.delete(key);
  return null;
}

/** Seconds until the key may try again, or 0 if it is under the limit. */
export function retryAfter(key, limit) {
  const now = Date.now();
  const bucket = live(key, now);
  return bucket && bucket.count >= limit ? Math.ceil((bucket.resetAt - now) / 1000) : 0;
}

export function recordFailure(key, windowMs) {
  const now = Date.now();
  // Drop stale entries so the map cannot grow without bound.
  if (buckets.size > 5000) {
    for (const [k, b] of buckets) if (b.resetAt <= now) buckets.delete(k);
  }
  const bucket = live(key, now);
  if (bucket) bucket.count += 1;
  else buckets.set(key, { count: 1, resetAt: now + windowMs });
}

export function clearFailures(key) {
  buckets.delete(key);
}

/**
 * Best-effort client IP. X-Forwarded-For is only trustworthy behind a proxy that overwrites it
 * (Vercel, most load balancers); the account-wide limit in the login route does not rely on it.
 */
export function clientIp(request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}
