import mongoose from "mongoose";

// One connection per server process, reused across requests (and across hot reloads in dev).
const cached = global.mongoose ?? { conn: null, promise: null };
global.mongoose = cached;

export class DatabaseUnavailableError extends Error {
  constructor(message = "Database unavailable") {
    super(message);
    this.name = "DatabaseUnavailableError";
  }
}

export default async function connectDB() {
  if (cached.conn) return cached.conn;

  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) throw new DatabaseUnavailableError("MONGODB_URI is not configured");

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      // Fail fast instead of hanging requests for 30s when the database is unreachable.
      serverSelectionTimeoutMS: 8000,
      bufferCommands: false,
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    // Never pass the driver error on: it can contain the connection string.
    console.error("[db] connection failed:", error instanceof Error ? error.name : "unknown error");
    throw new DatabaseUnavailableError();
  }

  return cached.conn;
}
