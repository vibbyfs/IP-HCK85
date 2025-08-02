import React, { useEffect, useState } from "react";
import http from "../lib/http";
import toast from "react-hot-toast";

export default function ReportComments({ reportId }) {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const loggedInUserId = parseInt(localStorage.getItem("UserId"));

  useEffect(() => {
    fetchComments();
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
      toast.success("Comment added successfully.");
    } catch (err) {
      console.log("ERROR POST COMMENT", err);
      const messageError =
        err.response?.data?.message || "Failed to add comment";
      toast.dismiss();
      toast.error(messageError);
    }
  }

  async function handleDelete(commentId) {
    try {
      await http.delete(`/reports/${reportId}/comments/${commentId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      toast.success("Comment deleted successfully");
      fetchComments();
    } catch (err) {
      console.log("ERROR DELETE COMMENT", err);
      const messageError =
        err.response?.data?.message || "Failed to delete comment";
      toast.dismiss();
      toast.error(messageError);
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
        />
        <button
          type="submit"
          className="px-3 py-1 bg-blue-600 text-white rounded-lg text-xs font-bold disabled:opacity-50"
        >
          Kirim
        </button>
      </form>
      <div className="space-y-2">
        {comments.length === 0 && (
          <div className="text-xs text-gray-400">Belum ada komentar</div>
        )}
        {comments.map((c) => {
          // Debug log untuk komentar
          console.log("Comment Debug:", {
            commentId: c.id,
            commentUserId: c.UserId,
            loggedInUserId,
            canDelete: c.UserId === loggedInUserId,
            commentUserIdType: typeof c.UserId,
            loggedInUserIdType: typeof loggedInUserId
          });
          
          return (
            <div
              key={c.id}
              className="flex justify-between items-center text-sm mb-1"
            >
              <div className="flex items-center gap-2 flex-1">
                <span className="font-semibold text-blue-700">
                  {c.User?.name || "Anonim"}:
                </span>
                <span>{c.content}</span>
              </div>

              {c.UserId === loggedInUserId && (
                <button
                  className="text-xs text-blue-600 ml-2"
                  onClick={() => handleDelete(c.id)}
                  title="Hapus komentar"
                >
                  Hapus
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
