import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import EditPostForm from "./EditPostForm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditPostPage({
  params,
}: Props) {
  const isAuthenticated = await isAdminAuthenticated();

  if (!isAuthenticated) {
    redirect("/admin/login");
  }

  return <EditPostForm params={params} />;
}