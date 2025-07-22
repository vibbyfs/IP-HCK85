import React, { useState } from "react";
import SidebarDashboard from "../components/SideBarDashboard";

const dummyTransactions = [
  {
    id: 1,
    month: "Juli 2025",
    amount: 20000,
    status: "Lunas",
    paidAt: "2025-07-02T08:21:00Z",
    method: "Transfer",
  },
  {
    id: 2,
    month: "Juni 2025",
    amount: 20000,
    status: "Lunas",
    paidAt: "2025-06-05T09:44:00Z",
    method: "Tunai",
  },
  {
    id: 3,
    month: "Mei 2025",
    amount: 20000,
    status: "Belum Lunas",
    paidAt: null,
    method: "-",
  },
];

export default function PaymentPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const transactions = dummyTransactions;

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* SIDEBAR DESKTOP */}
      <div className="hidden md:block fixed top-0 left-0 h-full w-72 bg-white shadow-xl p-6 z-10">
        <SidebarDashboard />
      </div>

      {/* HEADER FIXED */}
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
        <div className="w-full">
          <div className="max-w-4xl mx-auto px-2 md:px-0">
            <h2 className="text-lg md:text-2xl font-bold mb-1 pl-1 md:pl-0">
              Pembayaran Iuran Bulanan
            </h2>
            <div className="bg-white rounded-xl shadow p-3 md:p-4 mt-1">
              Riwayat pembayaran iuran warga Anda
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="md:ml-72 md:pl-4 max-w-4xl mx-auto px-2 md:px-0 pt-28 md:pt-36">
        <div className="bg-white rounded-xl shadow p-4 md:p-8 max-w-2xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <div className="font-bold text-lg md:text-xl">
              Riwayat Transaksi
            </div>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-xl font-bold hover:bg-blue-700">
              Bayar Iuran
            </button>
          </div>
          {/* LIST CARD TRANSAKSI */}
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
                    {tx.paidAt
                      ? `Dibayar: ${new Date(tx.paidAt).toLocaleDateString(
                          "id-ID"
                        )}`
                      : "Belum dibayar"}
                  </div>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span
                    className={
                      "px-4 py-1 rounded-xl text-xs font-semibold " +
                      (tx.status === "Lunas"
                        ? "bg-green-100 text-green-700"
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
