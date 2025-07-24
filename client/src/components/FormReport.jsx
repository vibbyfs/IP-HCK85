import React, { useState, useEffect } from "react";
import SidebarDashboard from "../components/SideBarDashboard";
import http from "../lib/http";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { Mic } from "lucide-react";

export default function FormReport(props) {
  const { type } = props;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [CategoryId, setCategoryId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (type === "create") {
        await http.post(
          "/reports/add",
          {
            title,
            description,
            CategoryId,
            imageUrl,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );

        toast.success("Report berhasil dikirim!");
      } else {
        await http.put(
          `/reports/${id}/update`,
          {
            title,
            description,
            CategoryId,
            imageUrl,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        toast.success("Report berhasil diupdate!");
      }

      navigate("/dashboard");
      setTitle("");
      setDescription("");
      setCategoryId("");
      setImageUrl("");
    } catch (err) {
      const msgErr = err.response?.data?.message || "Something went wrong.";
      toast.dismiss();
      toast.error(msgErr);
    }
  }

  async function fetchDataReports() {
    try {
      const response = await http.get(`/reports/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      const newReport = response.data;
      setTitle(newReport.title);
      setDescription(newReport.description);
      setCategoryId(newReport.CategoryId);
      setImageUrl(newReport.imageUrl);
    } catch (err) {
      const msgErr = err.response?.data?.message || "Something went wrong.";
      toast.dismiss();
      toast.error(msgErr);
    }
  }

  async function fetchDataCategories() {
    try {
      const response = await http.get("/categories", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setCategories(response.data);
    } catch (err) {
      const msgErr = err.response?.data?.message || "Something went wrong.";
      toast.dismiss();
      toast.error(msgErr);
    }
  }

  useEffect(() => {
    fetchDataCategories();
    if (type === "edit") fetchDataReports();
    // eslint-disable-next-line
  }, [type]);

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Sidebar kiri desktop */}
      <div className="hidden md:block fixed top-0 left-0 h-full w-72 bg-white shadow-xl p-6 z-10">
        <SidebarDashboard />
      </div>

      {/* Header fixed */}
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
        {/* Judul + tombol laporan suara */}
        <div className="w-full flex items-center justify-between max-w-4xl mx-auto px-2 md:px-0">
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow p-3 md:p-4 mt-1 flex justify-center items-center">
              Silakan isi form laporan di bawah ini!
            </div>
          </div>
          
        </div>
      </div>

      {/* Main Content */}
      <div className="md:ml-72 md:pl-4 max-w-4xl mx-auto px-2 md:px-0 pt-28 md:pt-36">
        
        <form
          className="bg-white shadow-lg rounded-xl p-4 md:p-6 max-w-2xl mx-auto"
          onSubmit={handleSubmit}
        >
          <button
            className="mb-7 px-4 py-2 bg-blue-700 text-white font-semibold rounded-xl shadow flex items-center gap-2 hover:bg-blue-800 transition"
            onClick={() => navigate("/reports/audio")}
            title="Buat Laporan Suara"
            type="button"
          >
            <Mic className="w-5 h-5" />
            <span className="hidden md:inline">Laporan Suara</span>
          </button>
          {/* Judul */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Judul Laporan *</label>
            <input
              className="input w-full"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              value={CategoryId}
              onChange={(e) => setCategoryId(e.target.value)}
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
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Masukkan URL gambar (opsional)"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-bold py-2 px-6 rounded-xl hover:bg-blue-800 transition mb-3"
          >
            {type === "edit" ? "Simpan Perubahan" : "Kirim Laporan"}
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

      {/* Sidebar Drawer (Mobile) */}
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
