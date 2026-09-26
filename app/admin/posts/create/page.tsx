import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import CreatePostForm from "./CreatePostForm";

export default async function CreatePostPage() {
  const isAuthenticated = await isAdminAuthenticated();

  if (!isAuthenticated) {
    redirect("/admin/login");
  }

  return <CreatePostForm />;
}