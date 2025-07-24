import React, { useEffect, useState } from "react";
import SidebarDashboard from "../components/SideBarDashboard";
import http from "../lib/http";
import toast from "react-hot-toast";

const dummyActiveBill = {
  month: "Agustus 2025",
  amount: 20000,
  dueDate: "2025-08-31T23:59:59Z",
  status: "Belum Lunas", // Atau "Lunas"
};

export default function PaymentPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [activeBill, setActiveBill] = useState(dummyActiveBill);

  useEffect(() => {
    fetchTransactions();
    // fetchActiveBill(); // Uncomment jika sudah ada endpoint tagihan aktif
  }, []);

  async function fetchTransactions() {
    try {
      const { data } = await http.get("/transactions", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setTransactions(data);
    } catch (err) {
      toast.error("Gagal mengambil data transaksi");
    }
  }

  async function handlePayment() {
    try {
      const { data } = await http.get("/transactions/midtrans/initiate", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      window.snap.pay(data.transactionToken, {
        onSuccess: function (result) {
          toast.success("Payment berhasil");
          fetchTransactions(); // Refresh setelah bayar
        },
      });
    } catch (err) {
      toast.error("Gagal memproses pembayaran");
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
        <button
          className="mr-2 md:hidden p-2 rounded-full bg-white shadow"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          {/* Hamburger */}
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
              Pembayaran & Riwayat Iuran Warga
            </div>
          </div>
        </div>
      </div>
      {/* MAIN CONTENT (2 kolom di desktop, 1 kolom di mobile) */}
      <div className="md:mx-auto max-w-5xl mx-auto px-2 md:px-0 pt-28 md:pt-36 w-full">
        <div className="flex flex-col md:flex-row gap-20">
          {/* Kolom Riwayat Transaksi */}
          <div className="w-full md:w-2/3 order-2 md:order-1">
            <div className="bg-white rounded-xl shadow p-4 md:p-8">
              <div className="font-bold text-lg md:text-xl mb-6">
                Riwayat Transaksi
              </div>
              <div className="space-y-4">
                {transactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="rounded-xl border shadow-sm px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between bg-blue-50"
                  >
                    <div>
                      <div className="font-bold text-base">{tx.month}</div>
                      <div className="text-gray-500 text-sm mb-2">
                        Nominal:{" "}
                        <span className="font-semibold text-black">
                          Rp {tx.amount.toLocaleString("id-ID")}
                        </span>
                      </div>
                      <div className="text-sm mb-1">
                        Metode: <span className="font-medium">{tx.method}</span>
                      </div>
                      <div className="text-xs text-gray-400">
                        {`${new Date(tx.paidAt).toLocaleDateString("id-ID")}`}
                      </div>
                      <div className="text-sm font-semibold text-gray-700">
                        No. Pembayaran:{" "}
                        {tx.transactionId?.trim()
                          ? tx.transactionId
                          : `TRX-${Date.now().toString().slice(-10)}`}
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <span
                        className={
                          "px-4 py-1 rounded-xl text-xs font-semibold " +
                          (tx.paidAt
                            ? "bg-green-500"
                            : "bg-red-100 text-red-600")
                        }
                      >
                        {tx.status}
                      </span>
                    </div>
                  </div>
                ))}
                {transactions.length === 0 && (
                  <div className="text-center text-gray-400 py-6">
                    Belum ada transaksi iuran.
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Kolom Tagihan Aktif */}
          <div className="w-full md:w-2/3 order-1 md:order-2">
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow-xl rounded-2xl p-7 flex flex-col items-center justify-center mb-8 md:mb-0">
              <div className="font-bold text-2xl mb-1">Tagihan Bulan Ini</div>
              <div className="text-lg mb-2">{activeBill.month}</div>
              <div className="text-3xl font-extrabold mb-3">
                Rp {activeBill.amount.toLocaleString("id-ID")}
              </div>
              <div className="mb-5 text-sm">
                Jatuh tempo:{" "}
                <span className="font-semibold">
                  {new Date(activeBill.dueDate).toLocaleDateString("id-ID")}
                </span>
              </div>
              <button
                className={`w-full bg-white text-blue-700 hover:bg-blue-100 font-bold py-3 px-6 rounded-xl transition mb-2 shadow
                ${
                  activeBill.status === "Lunas"
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={activeBill.status === "Lunas"}
                onClick={handlePayment}
              >
                {activeBill.status === "Lunas"
                  ? "Sudah Lunas"
                  : "Bayar Sekarang"}
              </button>
              <div className="text-xs mt-2 text-white/80">
                Gunakan tombol di atas untuk melakukan pembayaran.
              </div>
            </div>
          </div>
        </div>
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
          <SidebarDashboard />
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
