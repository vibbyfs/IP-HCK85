import React, { useState } from "react";
import { Link, useParams } from "react-router";

export default function ReportCard({
  username = "Anonim",
  avatar = "https://ui-avatars.com/api/?name=" + (username || "Anonim"),
  title,
  description,
  imageUrl,
  createdAt,
  comments = [],
  onDelete,
  id,
}) {
  const [showAllComments, setShowAllComments] = useState(false);
  const visibleComments = showAllComments ? comments : comments.slice(0, 3);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 max-w-xl mx-auto mb-6 relative">
      {/* Tombol Edit & Delete (pojok kanan atas, always show) */}
      <div className="absolute top-2 right-3 flex gap-2">
        <Link to={`/reports/${id}/edit`}>
          <button className="bg-yellow-50 text-yellow-600 hover:bg-yellow-100 rounded px-3 py-1 text-xs font-bold shadow">
            Edit
          </button>
        </Link>

        <button
          onClick={() => onDelete(id)}
          className="bg-red-50 text-red-600 hover:bg-red-100 rounded px-3 py-1 text-xs font-bold shadow"
        >
          Delete
        </button>
      </div>

      {/* Header User */}
      <div className="flex items-center mb-3">
        <img
          src={avatar}
          alt={username}
          className="w-10 h-10 rounded-full mr-3 bg-gray-100"
        />
        <div>
          <div className="font-semibold text-gray-800">{username}</div>
          <div className="text-xs text-gray-400">
            {createdAt ? new Date(createdAt).toLocaleString() : ""}
          </div>
        </div>
      </div>
      {/* Image */}
      {imageUrl && (
        <div className="mb-3 rounded-xl overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full object-cover max-h-80"
          />
        </div>
      )}
      {/* Title & Desc */}
      <div className="mb-3">
        <div className="font-bold text-lg">{title}</div>
        <div className="text-gray-700 text-sm">{description}</div>
      </div>
      {/* Komentar */}
      <div className="mt-4">
        <div className="text-sm font-semibold mb-1 text-gray-700">Komentar</div>
        <div className="space-y-2">
          {visibleComments.length === 0 && (
            <div className="text-xs text-gray-400">Belum ada komentar</div>
          )}
          {visibleComments.map((c, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <span className="font-semibold text-blue-700">
                {c.user || "Anonim"}:
              </span>
              <span>{c.text}</span>
            </div>
          ))}
          {comments.length > 3 && !showAllComments && (
            <button
              className="text-xs text-blue-500 hover:underline"
              onClick={() => setShowAllComments(true)}
            >
              Lihat Semua Komentar ({comments.length})
            </button>
          )}
          {showAllComments && comments.length > 3 && (
            <button
              className="text-xs text-blue-500 hover:underline"
              onClick={() => setShowAllComments(false)}
            >
              Sembunyikan Komentar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
