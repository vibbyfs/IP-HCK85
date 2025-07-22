export default function Dashboard() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar Navigation */}
          <div className="md:w-1/4 mb-8 md:mb-0 md:pr-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/118c3b88-1ca9-4e6a-8443-f8abc0abb499.png"
                  alt="Profil Warga"
                  className="rounded-full w-12 h-12 mr-3"
                />
                <div>
                  <h3 className="font-semibold">Nama Warga</h3>
                  <p className="text-sm text-gray-600">RT 05 / RW 08</p>
                </div>
              </div>
              <nav className="space-y-2">
                <a
                  href="#"
                  className="block py-2 px-4 bg-blue-100 text-blue-600 rounded-lg font-medium"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 rounded-lg"
                >
                  Buat Laporan
                </a>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 rounded-lg"
                >
                  Laporan Saya
                </a>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 rounded-lg"
                >
                  Forum RT
                </a>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 rounded-lg"
                >
                  Pengaturan
                </a>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 rounded-lg text-red-500"
                >
                  Keluar
                </a>
              </nav>
            </div>
          </div>
          {/* Main Content */}
          <div className="md:w-3/4 md:pl-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Dashboard Warga</h2>
              {/* Statistik Cepat */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-600 mb-1">
                    Laporan Dibuat
                  </h3>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-600 mb-1">
                    Laporan Selesai
                  </h3>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-600 mb-1">
                    Dalam Proses
                  </h3>
                  <p className="text-2xl font-bold">4</p>
                </div>
              </div>
              {/* Laporan Terbaru */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Laporan Terbaru</h3>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    Lihat Semua
                  </a>
                </div>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">Sampah Menumpuk</h4>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                        Selesai
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      Dilaporkan: 12 Januari 2023
                    </p>
                    <p className="text-gray-700">
                      Sampah menumpuk di depan rumah No. 10, sudah dibersihkan
                      oleh petugas kebersihan RT
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">Lampu Jalan Mati</h4>
                      <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                        Proses
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      Dilaporkan: 15 Januari 2023
                    </p>
                    <p className="text-gray-700">
                      Lampu jalan di depan gang kedua mati sejak kemarin malam
                    </p>
                  </div>
                </div>
              </div>
              {/* Buat Laporan Cepat */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Buat Laporan Baru
                </h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Jenis Laporan
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue年">
                      <option>Pilih jenis laporan</option>
                      <option>Kebersihan</option>
                      <option>Keamanan</option>
                      <option>Fasilitas Umum</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Deskripsi
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Lampirkan Foto
                    </label>
                    <input
                      type="file"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Kirim Laporan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
