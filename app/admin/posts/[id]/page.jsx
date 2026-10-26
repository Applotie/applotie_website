import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import PostForm from "../PostForm";

export default async function EditPostPage({ params }) {
  if (!(await isAdminAuthenticated())) redirect("/admin/login");

  const { id } = await params;
  return <PostForm id={id} />;
}
