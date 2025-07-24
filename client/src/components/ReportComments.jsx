import React, { useEffect, useState } from "react";
import http from "../lib/http";

export default function ReportComments({ reportId }) {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch komentar ketika reportId berubah
  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line
  }, [reportId]);

  async function fetchComments() {
    try {
      const res = await http.get(`/reports/${reportId}/comments`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setComments(res.data);
    } catch (err) {
      setComments([]);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    try {
      await http.post(
        `/reports/${reportId}/comments/add`,
        {
          content: input,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setInput("");
      fetchComments();
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(commentId) {
    if (!window.confirm("Hapus komentar ini?")) return;
    try {
      await http.delete(`/reports/${reportId}/comments/${commentId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      fetchComments();
    } catch (err) {
      alert("Gagal hapus komentar.");
    }
  }

  return (
    <div className="mt-4">
      <div className="text-sm font-semibold mb-2 text-gray-700">Komentar</div>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-3">
        <input
          className="input flex-1 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tulis komentar..."
          disabled={loading}
        />
        <button
          type="submit"
          className="px-3 py-1 bg-blue-600 text-white rounded-lg text-xs font-bold disabled:opacity-50"
          disabled={loading || !input.trim()}
        >
          Kirim
        </button>
      </form>
      <div className="space-y-2">
        {comments.length === 0 && (
          <div className="text-xs text-gray-400">Belum ada komentar</div>
        )}
        {comments.map((c) => (
          <div key={c.id} className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-blue-700">
              {c.User?.name || "Anonim"}:
            </span>
            <span>{c.content}</span>
            <button
              className="text-xs text-red-500 ml-2"
              onClick={() => handleDelete(c.id)}
              title="Hapus komentar"
            >
              Hapus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
