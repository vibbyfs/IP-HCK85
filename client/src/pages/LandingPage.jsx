import Navbar from "../components/Navbar";

export default function LandingPage() {
  return (
    <>
      <div>
        <section className="hero-gradient text-white pb-16 md:pb-24">
          <div className="container mx-auto px-4 pt-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Laporkan Masalah Lingkungan RT Lebih Mudah & Cepat
                </h1>
                <p className="text-lg mb-6">
                  RT Care membantu warga melaporkan masalah seperti kebersihan,
                  keamanan, dan fasilitas umum langsung ke pengurus RT secara
                  online.
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <a
                    href="#daftar"
                    className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 text-center"
                  >
                    Mulai Laporkan
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 text-center"
                  >
                    Lihat Demo
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ece2d77d-7b28-497e-8ca1-7ffa131b4e8c.png"
                  alt="Ilustrasi warga sedang menggunakan aplikasi mobile di smartphone untuk melaporkan masalah lingkungan sekitar RT"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="fitur" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Fitur Unggulan</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Platform kami dirancang khusus untuk memudahkan komunikasi
                antara warga dan pengurus RT
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="feature-card bg-gray-50 p-6 rounded-xl transition duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-bell text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Pelaporan Real-time
                </h3>
                <p className="text-gray-600">
                  Laporkan masalah langsung dari lokasi dengan lampiran foto dan
                  lokasi GPS. Status laporan dapat dimonitor secara real-time.
                </p>
              </div>
              <div className="feature-card bg-gray-50 p-6 rounded-xl transition duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-users text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Forum Diskusi RT</h3>
                <p className="text-gray-600">
                  Diskusikan masalah lingkungan bersama warga dan pengurus RT
                  dalam forum yang aman dan terorganisir.
                </p>
              </div>
              <div className="feature-card bg-gray-50 p-6 rounded-xl transition duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-chart-line text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Statistik Lingkungan
                </h3>
                <p className="text-gray-600">
                  Pantau statistik masalah yang sering terjadi di lingkungan
                  Anda dan solusi apa yang telah dilakukan.
                </p>
              </div>
              <div className="feature-card bg-gray-50 p-6 rounded-xl transition duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-envelope text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Notifikasi Otomatis
                </h3>
                <p className="text-gray-600">
                  Dapatkan pemberitahuan via aplikasi atau SMS saat laporan Anda
                  ditanggapi atau ada pengumuman penting.
                </p>
              </div>
              <div className="feature-card bg-gray-50 p-6 rounded-xl transition duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-map-marked-alt text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Peta Interaktif</h3>
                <p className="text-gray-600">
                  Lihat masalah yang dilaporkan di peta RT dan RW Anda untuk
                  mendapatkan gambaran visual daerah yang bermasalah.
                </p>
              </div>
              <div className="feature-card bg-gray-50 p-6 rounded-xl transition duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-tasks text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Manajemen Tugas</h3>
                <p className="text-gray-600">
                  Pengurus RT dapat membagi tugas penanganan masalah ke petugas
                  yang berbeda dan melacak progresnya.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="cara-kerja" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Bagaimana Cara Kerjanya?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hanya butuh 3 langkah sederhana untuk melaporkan masalah di
                lingkungan Anda
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Buat Laporan</h3>
                <p className="text-gray-600 mb-4">
                  Isi form laporan dengan detail masalah, tambahkan foto jika
                  diperlukan, dan kirimkan.
                </p>
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bc13c71b-006f-446a-bcd7-0ddcc0320ee2.png"
                  alt="Ilustrasi seseorang sedang mengisi form laporan di smartphone dengan ikon form dan pena"
                  className="rounded-md mx-auto"
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Verifikasi RT</h3>
                <p className="text-gray-600 mb-4">
                  Pengurus RT menerima notifikasi, memverifikasi laporan, dan
                  menentukan prioritas.
                </p>
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c411580a-d5ac-49fd-9473-22789811df16.png"
                  alt="Ilustrasi pengurus RT sedang meninjau laporan di komputer dengan ikon checklist dan approved"
                  className="rounded-md mx-auto"
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Tindak Lanjut</h3>
                <p className="text-gray-600 mb-4">
                  Petugas menangani masalah dan Anda mendapat notifikasi saat
                  selesai.
                </p>
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/728436da-f084-47f1-b783-ceac807c9819.png"
                  alt="Ilustrasi petugas kebersihan sedang membersihkan sampah dengan ikon sapu dan tempat sampah"
                  className="rounded-md mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
