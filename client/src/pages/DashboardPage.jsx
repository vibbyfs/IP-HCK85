import React, { useState } from "react";
import SidebarDashboard from "../components/SideBarDashboard";
import ReportCard from "../components/ReportCard";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const reports = [
    {
      username: "Budi",
      avatar: "https://ui-avatars.com/api/?name=Budi",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      title: "Lampu Jalan Mati",
      description: "Lampu jalan depan rumah mati sudah 2 hari.",
      createdAt: "2024-07-19T10:23:00Z",
      comments: [
        { user: "Andi", text: "Sudah dilapor ke pak RT?" },
        { user: "Siti", text: "Saya juga lihat, semoga cepat diperbaiki." },
        { user: "Dewi", text: "Ayo gotong royong besok pagi!" },
        { user: "Bambang", text: "Siap bantu tenaga!" },
      ],
    },
    {
      username: "Siti",
      avatar: "https://ui-avatars.com/api/?name=Siti",
      image: "",
      title: "Sampah Menumpuk",
      description: "Sampah di dekat pos ronda menumpuk, minta bantuan warga.",
      createdAt: "2024-07-20T07:12:00Z",
      comments: [{ user: "Budi", text: "Saya siap membantu besok." }],
    },
  ];

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* SIDEBAR DESKTOP */}
      <div className="hidden md:block fixed top-0 left-0 h-full w-72 bg-white shadow-xl p-6 z-10">
        <SidebarDashboard />
      </div>

      {/* HEADER FIXED (Mobile & Desktop) */}
      <div className="fixed top-0 left-0 right-0 z-30 bg-gray-50 border-b shadow-sm md:ml-72 md:pl-4 h-24 flex items-center">
        {/* Hamburger untuk mobile */}
        <button
          className="mr-2 md:hidden p-2 rounded-full bg-white shadow"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <svg
            className="w-7 h-7 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 8h16M4 16h16"
            />
          </svg>
        </button>
        {/* Judul + greeting */}
        <div className="w-full">
          <div className="max-w-4xl mx-auto px-2 md:px-0">
            
            <div className="bg-white rounded-xl shadow p-3 md:p-4 mt-1">
              Selamat datang di Dashboard!
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT (mulai di bawah header) */}
      <div className="md:ml-72 md:pl-4 max-w-4xl mx-auto px-2 md:px-0 pt-28 md:pt-36">
        {reports.map((report, idx) => (
          <ReportCard key={idx} {...report} />
        ))}
      </div>

      {/* SIDEBAR DRAWER (Mobile) */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-40 transition-opacity duration-300 ${
          sidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } md:hidden`}
        onClick={() => setSidebarOpen(false)}
      >
        <div
          className={`fixed left-0 top-0 h-full w-72 bg-white shadow-xl p-5 transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-3 right-3 text-gray-500"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <SidebarDashboard />
        </div>
      </div>
    </section>
  );
}
