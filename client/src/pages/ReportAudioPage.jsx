import React, { useRef, useState } from "react";
import SidebarDashboard from "../components/SideBarDashboard";
import http from "../lib/http";
import { useNavigate } from "react-router";
import { Mic, Square } from "lucide-react";

export default function ReportAudioPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const mediaRecorderRef = useRef(null);
  const navigate = useNavigate();

  async function handleRecord() {
    setError("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new window.MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      let chunks = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        setAudioBlob(blob);
        setAudioUrl(URL.createObjectURL(blob));
        chunks = [];
      };

      mediaRecorder.start();
      setRecording(true);
    } catch (err) {
      setError("Gagal mengakses mikrofon.");
    }
  }

  function handleStop() {
    mediaRecorderRef.current && mediaRecorderRef.current.stop();
    setRecording(false);
  }

  async function handleGenerate() {
    setLoading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("audio", audioBlob, "audio.webm");

      const res = await http.post("/reports/generate-from-audio", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      navigate("/reports/confirm-audio", { state: res.data });
    } catch (err) {
      setError(err.response?.data?.message || "Gagal generate laporan.");
    }
    setLoading(false);
  }

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* SIDEBAR DESKTOP */}
      <div className="hidden md:block fixed top-0 left-0 h-full w-72 bg-white shadow-xl p-6 z-10">
        <SidebarDashboard />
      </div>

      {/* HEADER FIXED */}
      <div className="fixed top-0 left-0 right-0 z-30 bg-gray-50 border-b shadow-sm md:ml-72 md:pl-4 h-24 flex items-center">
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
              Laporkan Masalah Lewat Audio!
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="md:ml-72 md:pl-4 max-w-2xl mx-auto px-2 md:px-0 pt-28 md:pt-36 flex flex-col items-center">
        <form className="bg-white shadow-lg rounded-xl p-4 md:p-8 w-full max-w-lg flex flex-col items-center">
          <h3 className="font-bold text-lg md:text-2xl mb-4 text-blue-700 text-center">
            Rekam & Kirim Laporan Audio
          </h3>

          {error && <div className="text-red-600 text-sm mb-2">{error}</div>}

          <div className="flex flex-col items-center mb-4 w-full">
            {/* Tombol Rekam & Stop */}
            {!recording ? (
              <button
                type="button"
                className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg shadow"
                onClick={handleRecord}
              >
                <Mic className="w-6 h-6" />
                Mulai Rekam
              </button>
            ) : (
              <button
                type="button"
                className="flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold text-lg shadow"
                onClick={handleStop}
              >
                <Square className="w-6 h-6" />
                Stop Rekam
              </button>
            )}
          </div>

          {/* Preview Audio */}
          {audioUrl && (
            <audio controls src={audioUrl} className="mb-4 w-full">
              Your browser does not support the audio element.
            </audio>
          )}

          <button
            type="button"
            className="w-full bg-blue-700 text-white font-bold py-2 px-6 rounded-xl hover:bg-blue-800 transition mb-3 disabled:opacity-60"
            onClick={handleGenerate}
            disabled={!audioBlob || loading}
          >
            {loading ? "Memproses Audio..." : "Generate dari Audio"}
          </button>
          <button
            type="button"
            className="w-full px-5 py-2 bg-gray-200 rounded-xl hover:bg-gray-300 font-semibold text-gray-700"
            onClick={() => navigate(-1)}
            disabled={loading}
          >
            ← Kembali
          </button>
        </form>
      </div>
    </section>
  );
}
