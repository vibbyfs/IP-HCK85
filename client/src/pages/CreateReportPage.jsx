import React, { useState } from "react";
import SidebarDashboard from "../components/SideBarDashboard";

const categories = [
  { id: 1, name: "Kebersihan" },
  { id: 2, name: "Keamanan" },
  { id: 3, name: "Infrastruktur" },
  { id: 4, name: "Sosial" },
  { id: 5, name: "Lainnya" },
];

export default function CreateReportPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    categoryId: "",
    imageUrl: "",
  });
  const [notif, setNotif] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.description || !form.categoryId) {
      setNotif("Isi semua data wajib!");
      return;
    }
    setNotif("Laporan berhasil dikirim!");
    setForm({ title: "", description: "", categoryId: "", imageUrl: "" });
    setTimeout(() => setNotif(""), 2000);
  };

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="hidden md:block fixed top-0 left-0 h-full w-72 bg-white shadow-xl p-6 z-10">
        <SidebarDashboard />
      </div>

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
            <h2 className="text-lg md:text-2xl font-bold mb-1 pl-1 md:pl-0">
              Buat Laporan
            </h2>
            <div className="bg-white rounded-xl shadow p-3 md:p-4 mt-1">
              Silakan isi form laporan di bawah ini!
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT (mulai di bawah header) */}
      <div className="md:ml-72 md:pl-4 max-w-4xl mx-auto px-2 md:px-0 pt-28 md:pt-36">
        <form
          className="bg-white shadow-lg rounded-xl p-4 md:p-6 max-w-2xl mx-auto"
          onSubmit={handleSubmit}
        >
          {notif && (
            <div className="mb-4 text-sm bg-yellow-100 text-yellow-800 px-4 py-2 rounded">
              {notif}
            </div>
          )}
          {/* Judul */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Judul Laporan *</label>
            <input
              className="input w-full"
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Judul Laporan"
              required
            />
          </div>
          {/* Deskripsi */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Deskripsi *</label>
            <textarea
              className="input w-full"
              rows={4}
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Jelaskan laporan kamu secara detail"
              required
            />
          </div>
          {/* Kategori */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Kategori *</label>
            <select
              className="input w-full"
              name="categoryId"
              value={form.categoryId}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Kategori</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          {/* Gambar */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">URL Gambar</label>
            <input
              className="input w-full"
              type="text"
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              placeholder="Masukkan URL gambar (opsional)"
            />
          </div>
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-700 text-white font-bold py-2 px-6 rounded-xl hover:bg-blue-800 transition"
          >
            Kirim Laporan
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
