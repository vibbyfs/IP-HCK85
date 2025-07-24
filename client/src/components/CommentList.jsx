import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function CommentList({ comments = [], reportId }) {
  const [newComment, setNewComment] = useState("");
  const [allComments, setAllComments] = useState(comments || []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    try {
      const res = await http.post(
        `/reports/${reportId}/comments`,
        { content: newComment },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      toast.success("Comment added successfully");
      setAllComments([...allComments, res.data.comment]);
      setNewComment("");
    } catch (err) {
      console.log("ERROR COMMENT", err);
      toast.error("Failed to add comment");
    }
  };

  return (
    <div>
      <div className="max-h-32 overflow-y-auto space-y-1 mb-1">
        {allComments.length === 0 ? (
          <div className="text-xs text-gray-400">Belum ada komentar.</div>
        ) : (
          allComments.map((c, i) => (
            <div key={i} className="bg-gray-100 rounded p-1 text-xs">
              <span className="font-semibold">
                {c.user?.fullName || "Anonim"}:{" "}
              </span>
              {c.content}
            </div>
          ))
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
        <input
          className="input flex-1 text-xs"
          value={newComment}
          placeholder="Tulis komentar..."
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="px-2 py-1 rounded bg-blue-500 text-white text-xs"
          type="submit"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}
