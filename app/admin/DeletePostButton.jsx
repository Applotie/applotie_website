"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeletePostButton({ id }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    setLoading(true);

    try {
      const response = await fetch(`/api/posts/${id}`, { method: "DELETE" });
      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to delete post");
        return;
      }

      router.refresh();
    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={loading}
      className="rounded-lg border border-signal-red/25 px-3 py-2 text-xs font-bold text-burgundy transition hover:border-signal-red/50 hover:bg-signal-red/5 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
}
