import { cookies } from "next/headers";

const ADMIN_SESSION = "admin_session";

export async function isAdminAuthenticated() {
  const sessionSecret = process.env.ADMIN_SESSION_SECRET;

  // Never authenticate if the secret is missing.
  if (!sessionSecret) {
    console.error("ADMIN_SESSION_SECRET is not configured");
    return false;
  }

  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_SESSION);

  if (!session?.value) {
    return false;
  }

  return session.value === sessionSecret;
}

export { ADMIN_SESSION };