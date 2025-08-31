import React, { useState, useEffect } from "react";
import SidebarDashboard from "../components/SidebarDashboard";
import http from "../lib/http";
import { toast } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router";

export default function ConfirmAudioReportPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) navigate("/dashboard");
  }, [state, navigate]);

  const [title, setTitle] = useState(state?.title || "");
  const [description, setDescription] = useState(state?.description || "");
  const [categoryName, setCategoryName] = useState(state?.category || "");
  const [CategoryId, setCategoryId] = useState("");

  useEffect(() => {
    async function fetchDataCategories() {
      try {
        const response = await http.get("/categories", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        setCategories(response.data);

        const matched = response.data.find(
          (cat) =>
            cat.name.toLowerCase() === (state?.category || "").toLowerCase()
        );
        if (matched) setCategoryId(matched.id);
      } catch (err) {
        toast.error("Gagal ambil data kategori.");
      }
    }
    fetchDataCategories();
  }, []);

  const handleSelectCategory = (e) => {
    setCategoryId(e.target.value);
    const picked = categories.find((cat) => String(cat.id) === e.target.value);
    setCategoryName(picked ? picked.name : "");
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await http.post(
        "/reports/add",
        {
          title,
          description,
          CategoryId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      toast.success("Laporan berhasil dikirim!");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Gagal mengirim laporan.");
    }
  }

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* SIDEBAR DESKTOP */}
      <div className="hidden md:block fixed top-0 left-0 h-full w-72 bg-white shadow-xl p-6 z-10">
        <SidebarDashboard />
      </div>

      {/* HEADER FIXED */}
      <div className="fixed top-0 left-0 right-0 z-30 bg-gray-50 border-b shadow-sm md:ml-72 md:pl-4 h-24 flex items-center">
        {/* Hamburger mobile */}
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
        <div className="w-full">
          <div className="max-w-4xl mx-auto px-2 md:px-0">
            <div className="bg-white rounded-xl shadow p-3 md:p-4 mt-1 flex justify-center items-center">
              Konfirmasi Laporan dari Audio (Edit jika perlu)
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="md:ml-72 md:pl-4 max-w-4xl mx-auto px-2 md:px-0 pt-28 md:pt-36">
        <form
          className="bg-white shadow-lg rounded-xl p-4 md:p-6 max-w-2xl mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block font-semibold mb-1">
              Judul Laporan *
            </label>
            <input
              className="input w-full"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Judul Laporan"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Deskripsi *</label>
            <textarea
              className="input w-full"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Jelaskan laporan kamu secara detail"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Kategori *</label>
            <select
              className="input w-full"
              value={CategoryId}
              onChange={handleSelectCategory}
              required
            >
              <option value="">Pilih Kategori</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            {/* Untuk info hasil ekstrak kategori */}
            {categoryName && (
              <div className="text-xs mt-1 text-gray-500">
                Kategori dari audio: <span className="font-bold">{categoryName}</span>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-bold py-2 px-6 rounded-xl hover:bg-blue-800 transition mb-3"
          >
            Konfirmasi & Kirim
          </button>
          <button
            type="button"
            className="w-full px-5 py-2 bg-gray-200 rounded-xl hover:bg-gray-300 font-semibold text-gray-700"
            onClick={() => navigate(-1)}
          >
            ← Kembali
          </button>
        </form>
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
