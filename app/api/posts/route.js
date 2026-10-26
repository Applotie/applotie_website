import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import BlogPost from "@/lib/models/BlogPost";
import { blogPostSchema } from "@/lib/validations/blogPost";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { handleRouteError, jsonError, readJson, requireAdminMutation, slugify } from "@/lib/api-helpers";

// Fields safe to expose publicly: no database ids, version keys or draft-only data.
const PUBLIC_FIELDS = "-_id title slug excerpt featuredImage author category tags publishedAt updatedAt seo";

export async function GET() {
  try {
    const isAdmin = await isAdminAuthenticated();

    await connectDB();

    const posts = isAdmin
      ? await BlogPost.find().select("-__v").sort({ createdAt: -1 }).lean()
      : await BlogPost.find({ status: "published" }).select(PUBLIC_FIELDS).sort({ publishedAt: -1 }).lean();

    return NextResponse.json({ success: true, posts });
  } catch (error) {
    return handleRouteError(error, "Failed to fetch posts");
  }
}

export async function POST(request) {
  const denied = await requireAdminMutation(request);
  if (denied) return denied;

  const body = await readJson(request);
  if (!body.ok) return body.response;

  try {
    const data = blogPostSchema.parse(body.data);
    const slug = data.slug || slugify(data.title);
    if (!slug) return jsonError("Could not create a slug from this title. Enter one manually.", 400);

    await connectDB();

    const post = await BlogPost.create({
      ...data,
      slug,
      publishedAt: data.status === "published" ? new Date() : undefined,
    });

    return NextResponse.json(
      { success: true, message: "Post created successfully", post: post.toObject({ versionKey: false }) },
      { status: 201 }
    );
  } catch (error) {
    return handleRouteError(error, "Failed to create post");
  }
}
