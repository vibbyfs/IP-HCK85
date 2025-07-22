import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import http from "../lib/http";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await http.post("/auth/register", {
        name,
        email,
        password,
      });

      navigate("/addresses/form");
      toast.success(
        "Registration successful. Please fill out your personal data."
      );
    } catch (err) {
      console.log("ERROR REGISTER", err);
      const msgErr = err.response?.data?.message || "Something went wrong.";
      toast.dismiss();
      toast.error(msgErr);
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-md px-4">
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Daftar Akun Baru
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Isi data diri Anda untuk mulai menggunakan RT Care
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Username Anda"
                className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-base sm:text-lg"
            >
              Buat Akun
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Sudah punya akun?{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                Masuk di sini
              </Link>
            </p>
          </div>
          <div className="mt-4 text-center">
            <Link
              to="/"
              className="text-sm text-gray-500 hover:text-blue-600 underline"
            >
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
