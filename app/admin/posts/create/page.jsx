import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import PostForm from "../PostForm";

export default async function CreatePostPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");

  return <PostForm />;
}
