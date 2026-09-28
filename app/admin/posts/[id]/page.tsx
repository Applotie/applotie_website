import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import EditPostForm from "./EditPostForm";

export default async function EditPostPage() {
  const isAuthenticated = await isAdminAuthenticated();

  if (!isAuthenticated) {
    redirect("/admin/login");
  }

  return <EditPostForm />;
}