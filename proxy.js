import { NextResponse } from "next/server";
import { ADMIN_SESSION, readSessionToken } from "@/lib/session";

// Defense in depth for the admin area: a signature/expiry check only. Every admin page and API route
// still verifies the session against the database; this stops obvious unauthenticated requests early and keeps
// admin/API URLs out of search indexes.
export async function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const ok = await readSessionToken(request.cookies.get(ADMIN_SESSION)?.value);
    if (!ok) {
      const response = NextResponse.redirect(new URL("/admin/login", request.url));
      response.headers.set("X-Robots-Tag", "noindex, nofollow");
      return response;
    }
  }

  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  // Admin pages and API responses depend on the session cookie (GET /api/posts includes drafts for the
  // admin), so shared caches must never store them.
  response.headers.set("Cache-Control", "no-store");
  return response;
}

export const config = {
  matcher: ["/admin/:path*", "/api/:path*"],
};
