import React from "react";
import { Link } from "react-router";
import ReportComments from "./ReportComments";

export default function ReportCard({
  title,
  description,
  imageUrl,
  createdAt,
  onDelete,
  id,
  name,
}) {
  const displayName = name || "Anonim";
  const avatar = `https://ui-avatars.com/api/?name=`;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 max-w-xl mx-auto mb-6 relative">
      {/* Tombol Edit & Delete */}
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
          alt={name || "Anonim"}
          className="w-10 h-10 rounded-full mr-3 bg-gray-100"
        />
        <div>
          <div className="font-semibold text-gray-800">{displayName}</div>
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
      <ReportComments reportId={id} />
    </div>
  );
}
