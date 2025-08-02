import React, { useEffect, useState } from "react";
import SidebarDashboard from "../components/SideBarDashboard";
import RightSidebar from "../components/RightSidebar";
import ReportCard from "../components/ReportCard";
import http from "../lib/http";
import toast from "react-hot-toast";
import { Navigate } from "react-router";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [reports, setReports] = useState([]);
  const loggedInUserId = parseInt(localStorage.getItem("UserId"));
  
  // Debug log
  console.log("DashboardPage Debug:", {
    loggedInUserId,
    userIdFromStorage: localStorage.getItem("UserId"),
    type: typeof loggedInUserId
  });

  async function fetchDataReports() {
    try {
      const response = await http.get("/reports", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      setReports(response.data);
    } catch (err) {
      const msgErr = err?.response?.data?.message || "Something went wrong.";
      toast.dismiss();
      toast.error(msgErr);
    }
  }

  async function handleDelete(id) {
    try {
      await http.delete(`/reports/${id}/delete`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setReports((prev) => prev.filter((r) => r.id !== id));
      toast.success("Report berhasil dihapus");
    } catch (err) {
      const msgErr = err?.response?.data?.message || "Something went wrong.";
      toast.dismiss();
      toast.error(msgErr);
    }
  }

  useEffect(() => {
    fetchDataReports();
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen relative">
      {/* SIDEBAR KIRI (Desktop) */}
      <div className="hidden md:block fixed top-0 left-0 h-full w-72 bg-white shadow-xl p-6 z-10">
        <SidebarDashboard />
      </div>

      {/* HEADER FIXED */}
      <div className="fixed top-0 left-0 right-0 z-30 bg-gray-50 border-b shadow-sm md:ml-72 md:pl-4 h-24 flex items-center">
        {/* Hamburger untuk mobile */}
        <button
          className="ml-2 mr-2 md:hidden p-3 rounded-full bg-white shadow"
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
            <div className="bg-white rounded-xl shadow p-3 md:p-4 mt-1 flex justify-center items-center">
              Selamat datang di Dashboard!
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="md:ml-72 md:mr-96 md:pl-4 md:pr-4 max-w-4xl mx-auto px-2 md:px-0 pt-36 flex flex-col md:block">
        {/* RightSidebar: tampil atas di mobile, hilang di desktop */}
        <div className="block md:hidden mb-4">
          <RightSidebar mobile />
        </div>

        {/* Report Cards */}
        <div>
          {reports.map((report, i) => (
            <ReportCard
              key={i}
              {...report}
              name={report.User?.name}
              currentUserId={loggedInUserId}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDEBAR: Desktop (fixed kanan) */}
      <div className="hidden md:block">
        <RightSidebar />
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
          {/* Tombol Close */}
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

          {/* Konten Sidebar */}
          <div className="mt-12">
            <SidebarDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
