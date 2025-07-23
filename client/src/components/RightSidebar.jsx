import React from "react";

export default function RightSidebar({ mobile }) {
  // Data dummy acara (biar gampang nambah event)
  const events = [
    {
      title: "Acara: Bakti Sosial",
      date: "Minggu, 3 Agustus 2025",
      time: "08:00 - 12:00 WIB",
      place: "Balai RW 08, Gandaria Utara",
      desc: "Donasi pakaian, pemeriksaan kesehatan gratis, dan pembagian sembako",
      btn: "Daftar Sebagai Relawan",
    },
    {
      title: "Acara: Kerja Bakti Bersih Lingkungan RT 05",
      date: "Sabtu, 26 Juli 2025",
      time: "07:30 - 11:00 WIB",
      place: "Sepanjang Jalan Mawar RT 05",
      desc: "Membersihkan selokan, memilah sampah, dan menanam pohon",
      btn: "Bergabung dalam Kerja Bakti",
    },
  ];

  // Newsletter Card (bisa juga di-array kalau mau banyak newsletter)
  const newsletter = (
    <div className="p-4 bg-gray-100 rounded-lg min-w-[85vw] md:min-w-0 mb-0">
      <h3 className="font-bold mb-2 text-lg">Newsletter RT</h3>
      <p className="text-gray-600 text-sm mb-2">
        Dapatkan update terbaru dari lingkungan RT langsung ke email!
      </p>
      <input
        type="email"
        placeholder="Email anda..."
        className="w-full px-3 py-2 mb-2 border rounded-lg"
      />
      <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
        Langganan
      </button>
    </div>
  );

  if (mobile) {
    return (
      <aside className="block w-full bg-transparent mb-4">
        {/* Filter & Search */}
        <div className="mb-6 bg-white rounded-xl shadow-lg p-4">
          <h3 className="font-bold top-0 mb-3 text-lg">Cari & Filter</h3>
          <input
            type="text"
            className="w-full px-3 py-2 mb-2 border rounded-lg"
            placeholder="Cari laporan..."
          />
          <select className="w-full px-3 py-2 mb-2 border rounded-lg">
            <option>Semua Kategori</option>
            <option>Kebersihan</option>
            <option>Keamanan</option>
            <option>Fasilitas Umum</option>
          </select>
          <select className="w-full px-3 py-2 border rounded-lg">
            <option>Urutkan Terbaru</option>
            <option>Urutkan Terlama</option>
            <option>Status: Selesai</option>
            <option>Status: Proses</option>
          </select>
        </div>

        {/* Carousel Acara & Newsletter (hanya di mobile) */}
        <div className="flex flex-row gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-200 pb-2 -mx-2 px-2">
          {/* Event Cards */}
          {events.map((e, idx) => (
            <div
              key={idx}
              className="p-4 bg-gray-100 rounded-lg min-w-[85vw] max-w-[90vw] shadow"
            >
              <h2 className="text-md font-semibold mb-2">{e.title}</h2>
              <ul className="text-sm space-y-1 text-gray-700 mb-2">
                <li>
                  <strong>Tanggal:</strong> {e.date}
                </li>
                <li>
                  <strong>Waktu:</strong> {e.time}
                </li>
                <li>
                  <strong>Lokasi:</strong> {e.place}
                </li>
                <li>
                  <strong>Kegiatan:</strong> {e.desc}
                </li>
              </ul>
              <button className="mt-2 py-2 w-full text-sm bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition">
                {e.btn}
              </button>
            </div>
          ))}

          {/* Newsletter Card */}
          {newsletter}
        </div>
      </aside>
    );
  }

  // Desktop
  return (
    <aside className="hidden md:block fixed top-32 right-0 h-[calc(100vh-10rem)] w-2/6 border-l p-6 z-20 overflow-y-auto bg-white">
      {/* Filter & Search */}
      <div className="mb-6">
        <h3 className="font-bold top-0 mb-3 text-lg">Cari & Filter</h3>
        <input
          type="text"
          className="w-full px-3 py-2 mb-2 border rounded-lg"
          placeholder="Cari laporan..."
        />
        <select className="w-full px-3 py-2 mb-2 border rounded-lg">
          <option>Semua Kategori</option>
          <option>Kebersihan</option>
          <option>Keamanan</option>
          <option>Fasilitas Umum</option>
        </select>
        <select className="w-full px-3 py-2 border rounded-lg">
          <option>Urutkan Terbaru</option>
          <option>Urutkan Terlama</option>
          <option>Status: Selesai</option>
          <option>Status: Proses</option>
        </select>
      </div>

      {/* Event Cards */}
      {events.map((e, idx) => (
        <div key={idx} className="p-4 bg-gray-100 rounded-lg mb-4">
          <h2 className="text-md font-semibold mb-2">{e.title}</h2>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>
              <strong>Tanggal:</strong> {e.date}
            </li>
            <li>
              <strong>Waktu:</strong> {e.time}
            </li>
            <li>
              <strong>Lokasi:</strong> {e.place}
            </li>
            <li>
              <strong>Kegiatan:</strong> {e.desc}
            </li>
          </ul>
          <button className="mt-5 py-2 w-full text-sm bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition">
            {e.btn}
          </button>
        </div>
      ))}

      {/* Newsletter Card */}
      <div className="mb-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-bold mb-2 text-lg">Newsletter RT</h3>
        <p className="text-gray-600 text-sm mb-2">
          Dapatkan update terbaru dari lingkungan RT langsung ke email!
        </p>
        <input
          type="email"
          placeholder="Email anda..."
          className="w-full px-3 py-2 mb-2 border rounded-lg"
        />
        <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          Langganan
        </button>
      </div>
    </aside>
  );
}
