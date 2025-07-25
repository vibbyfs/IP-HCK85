import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router";
import http from "../lib/http";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await http.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("access_token", response.data.access_token);

      navigate("/addresses/form");
    } catch (err) {
      console.error("Login error:", err);
      const msgErr = err.response?.data?.message || "Something went wrong.";
      toast.dismiss();
      toast.error(msgErr);
    }
  }

  async function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);

    try {
      const res = await http.post("/auth/login-google", {
        id_token: response.credential,
      });

      localStorage.setItem("access_token", res.data.access_token);

      toast.success("Login success");
      navigate("/addresses/form");
    } catch (err) {
      console.log("ERROR LOGIN WITH GOOGLE", err);
    }
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "119450448936-0cbt98b97e8m4vhfga46ora1d8u9936k.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
      theme: "outline",
      size: "large",
    });
    // google.accounts.id.prompt();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-md px-4">
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Masuk ke Akun Anda
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Selamat datang kembali di RT Care
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
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
              Masuk
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Belum punya akun?{" "}
              <Link
                to="/register"
                className=" text-blue-600 hover:text-blue-500 font-medium"
              >
                Daftar di sini
              </Link>
            </p>

            <div className="flex justify-center mt-3">
              <div id="buttonDiv"></div>
            </div>
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
