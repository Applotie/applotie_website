import mongoose, { Schema } from "mongoose";

// Server-side record of each admin login, so logout and expiry are enforced by the server.
// Only a SHA-256 of the session id is stored; the raw id lives in the signed cookie.
const AdminSessionSchema = new Schema(
  {
    sidHash: { type: String, required: true, unique: true },
    // Keyed fingerprint of the admin credentials at sign-in; changing them ends the session.
    credentialFp: { type: String, required: true },
    // TTL index: MongoDB removes the record once it expires.
    expiresAt: { type: Date, required: true, index: { expireAfterSeconds: 0 } },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export default mongoose.models.AdminSession || mongoose.model("AdminSession", AdminSessionSchema);
