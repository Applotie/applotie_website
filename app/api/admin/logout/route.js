import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { destroyAdminSession, isSameOrigin, sessionCookie } from "@/lib/admin-auth";
import { jsonError } from "@/lib/api-helpers";

export async function POST(request) {
  if (!isSameOrigin(request)) return jsonError("Forbidden", 403);

  try {
    // Remove the server-side session so a copied cookie stops working immediately.
    const cookieStore = await cookies();
    await destroyAdminSession(cookieStore.get(sessionCookie.name)?.value);
  } catch {
    // Still clear the cookie below; the session also expires on its own.
    console.error("[auth] could not delete session record during logout");
  }

  const response = NextResponse.json({ success: true, message: "Logged out successfully" });
  response.cookies.set({ name: sessionCookie.name, value: "", ...sessionCookie.options, maxAge: 0 });
  return response;
}
