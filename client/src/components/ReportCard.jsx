import React from "react";
import { Link } from "react-router";
import ReportComments from "./ReportComments";

export default function ReportCard({
  title,
  description,
  imageUrl,
  createdAt,
  status,
  id,
  name,
  UserId,
  onDelete,
  currentUserId,
}) {
  const displayName = name || "Anonim";
  const avatar = `https://ui-avatars.com/api/?name=`;

  return (
    <div className="bg-white border rounded-lg shadow-md mb-6 p-4">
      {/* Report Content */}
      <div className="flex items-start gap-4 mb-4">
        {/* Content */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 mb-3">{description}</p>
          <p className="text-sm text-gray-500 mb-1">
            Pelapor: <span className="font-medium">{displayName}</span>
          </p>
          <p className="text-sm text-gray-500 mb-1">
            Created At:{" "}
            <span className="font-medium">
              {createdAt ? new Date(createdAt).toLocaleString() : ""}
            </span>
          </p>
          <p className="text-sm mb-3">
            Status:{" "}
            <span
              className={`font-semibold px-2 py-1 rounded-md
      ${
        status === "Belum Diproses"
          ? "bg-yellow-100 text-yellow-800"
          : status === "Dalam Proses"
          ? "bg-blue-100 text-blue-800"
          : status === "Sudah Selesai"
          ? "bg-green-100 text-green-800"
          : "bg-gray-100 text-gray-800"
      }
    `}
            >
              {status}
            </span>
          </p>

          {/* Tombol Edit & Delete */}
          {currentUserId === UserId && (
            <div className="flex gap-2">
              <Link to={`/reports/${id}/edit`}>
                <button className="text-black hover:bg-gray-100 rounded px-3 py-1 text-xs font-bold shadow">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => onDelete(id)}
                className="text-black hover:bg-gray-100 rounded px-3 py-1 text-xs font-bold shadow"
              >
                Hapus
              </button>
            </div>
          )}
        </div>

        {/* Image */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Laporan Image"
            className="w-48 h-32 object-cover rounded-lg flex-shrink-0 align-middle"
          />
        )}
      </div>

      {/* Comments Section */}
      <ReportComments reportId={id} />
    </div>
  );
}
