import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import BlogPost from "@/lib/models/BlogPost";
import { blogPostSchema } from "@/lib/validations/blogPost";
import { z } from "zod";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export async function GET() {
  try {
    await connectDB();

    const posts = await BlogPost.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      posts,
    });
  } catch (error) {
    console.error("GET /api/posts error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch posts",
      },
      { status: 500 }
    );
  }
}


export async function POST(request: Request) {
  try {

   const isAuthenticated = await isAdminAuthenticated();

  if (!isAuthenticated) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }

    await connectDB();

    const body = await request.json();

    const validatedData = blogPostSchema.parse(body);

    const post = await BlogPost.create(validatedData);

    return NextResponse.json(
      {
        success: true,
        message: "Post created successfully",
        post,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/posts error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create post",
      },
      { status: 500 }
    );
  }
}