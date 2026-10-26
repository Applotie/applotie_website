import { NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";
import connectDB from "@/lib/mongodb";
import BlogPost from "@/lib/models/BlogPost";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { blogPostUpdateSchema } from "@/lib/validations/blogPost";
import { handleRouteError, jsonError, readJson, requireAdminMutation } from "@/lib/api-helpers";

// Looking a post up by id is an editor feature; public pages read posts by slug.
export async function GET(_request, { params }) {
  if (!(await isAdminAuthenticated())) return jsonError("Unauthorized", 401);

  try {
    const { id } = await params;
    if (!isValidObjectId(id)) return jsonError("Post not found", 404);

    await connectDB();

    const post = await BlogPost.findById(id).select("-__v").lean();
    if (!post) return jsonError("Post not found", 404);

    return NextResponse.json({ success: true, post });
  } catch (error) {
    return handleRouteError(error, "Failed to fetch post");
  }
}

/**
 * Builds the update from only the fields that were sent (nested SEO fields included).
 * publishedAt is managed here, never taken from the client: set when a post goes live,
 * cleared when it is unpublished.
 */
function buildUpdate(data, currentStatus) {
  const { seo, ...fields } = data;
  const $set = { ...fields };
  const $unset = {};

  if (seo) {
    for (const [key, value] of Object.entries(seo)) {
      if (value !== undefined) $set[`seo.${key}`] = value;
    }
  }

  if (data.status === "published" && currentStatus !== "published") $set.publishedAt = new Date();
  if (data.status === "draft" && currentStatus === "published") $unset.publishedAt = "";

  return Object.keys($unset).length ? { $set, $unset } : { $set };
}

async function handleUpdate(request, { params }) {
  const denied = await requireAdminMutation(request);
  if (denied) return denied;

  const body = await readJson(request);
  if (!body.ok) return body.response;

  try {
    const { id } = await params;
    if (!isValidObjectId(id)) return jsonError("Post not found", 404);

    const data = blogPostUpdateSchema.parse(body.data);

    await connectDB();

    const existing = await BlogPost.findById(id).select("status").lean();
    if (!existing) return jsonError("Post not found", 404);

    const post = await BlogPost.findByIdAndUpdate(id, buildUpdate(data, existing.status), {
      returnDocument: "after",
      runValidators: true,
    })
      .select("-__v")
      .lean();

    if (!post) return jsonError("Post not found", 404);

    return NextResponse.json({ success: true, message: "Post updated successfully", post });
  } catch (error) {
    return handleRouteError(error, "Failed to update post");
  }
}

export const PUT = handleUpdate;
export const PATCH = handleUpdate;

export async function DELETE(request, { params }) {
  const denied = await requireAdminMutation(request);
  if (denied) return denied;

  try {
    const { id } = await params;
    if (!isValidObjectId(id)) return jsonError("Post not found", 404);

    await connectDB();

    const post = await BlogPost.findByIdAndDelete(id).select("_id").lean();
    if (!post) return jsonError("Post not found", 404);

    return NextResponse.json({ success: true, message: "Post deleted successfully" });
  } catch (error) {
    return handleRouteError(error, "Failed to delete post");
  }
}
