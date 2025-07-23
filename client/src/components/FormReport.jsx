import React, { useState } from "react";
import SidebarDashboard from "../components/SideBarDashboard";
import http from "../lib/http";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

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

        toast.success("Report successfully");
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
        toast.success("Updated successfully");
      }

      navigate("/dashboard");

      setTitle("");
      setDescription("");
      setCategoryId("");
      setImageUrl("");
    } catch (err) {
      console.log("ERROR CREATE RESPORTS", err);
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
      console.log("ERROR GET DATA REPORTS COMPONENT FORM");
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
      console.log("ERROR FETCH DATA CATEGORIES", err);
      const msgErr = err.response?.data?.message || "Something went wrong.";
      toast.dismiss();
      toast.error(msgErr);
    }
  }

  useEffect(() => {
    fetchDataCategories();

    if (type === "edit") {
      fetchDataReports();
    }
  }, [type]);

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
            <div className="bg-white rounded-xl shadow p-3 md:p-4 mt-1 flex justify-center items-center">
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
        </div>
      </div>
    </section>
  );
}
