import { NextResponse } from "next/server";
import { z } from "zod";
import { isAdminAuthenticated, isSameOrigin } from "@/lib/admin-auth";
import { DatabaseUnavailableError } from "@/lib/mongodb";

export function jsonError(message, status, extra) {
  return NextResponse.json({ success: false, message, ...extra }, { status });
}

/** Returns an error response when the request may not modify data, otherwise null. */
export async function requireAdminMutation(request) {
  if (!isSameOrigin(request)) return jsonError("Forbidden", 403);
  if (!(await isAdminAuthenticated())) return jsonError("Unauthorized", 401);
  return null;
}

/**
 * Reads a JSON body, rejecting non-JSON content types, oversized payloads and malformed JSON.
 * Resolves to { ok: true, data } or { ok: false, response }.
 */
export async function readJson(request, maxBytes = 1024 * 1024) {
  const type = request.headers.get("content-type") || "";
  if (!type.toLowerCase().includes("application/json")) {
    return { ok: false, response: jsonError("Content-Type must be application/json", 415) };
  }
  const declared = Number(request.headers.get("content-length") || 0);
  if (declared > maxBytes) {
    return { ok: false, response: jsonError("Request body is too large", 413) };
  }
  const text = await request.text();
  if (new TextEncoder().encode(text).length > maxBytes) {
    return { ok: false, response: jsonError("Request body is too large", 413) };
  }
  try {
    return { ok: true, data: JSON.parse(text) };
  } catch {
    return { ok: false, response: jsonError("Request body must be valid JSON", 400) };
  }
}

/** URL-safe slug from free text, e.g. a post title. */
export function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120)
    .replace(/-+$/, "");
}

/** Maps known error types to safe client responses; everything else is logged and hidden. */
export function handleRouteError(error, fallbackMessage) {
  if (error instanceof z.ZodError) {
    return jsonError("Validation failed", 400, {
      errors: error.issues.map((issue) => ({ path: issue.path, message: issue.message })),
    });
  }
  if (error instanceof DatabaseUnavailableError) {
    return jsonError("The database is temporarily unavailable. Please try again.", 503);
  }
  if (error?.code === 11000) {
    return jsonError("A post with this slug already exists. Choose a different slug.", 409);
  }
  const detail = error instanceof Error ? `${error.name}: ${error.message}` : "unknown error";
  console.error(`[api] ${fallbackMessage}:`, detail.replace(/mongodb(\+srv)?:\/\/\S+/gi, "[redacted-uri]"));
  return jsonError(fallbackMessage, 500);
}
