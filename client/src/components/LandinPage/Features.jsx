import discussionImage from "../../assets/image/discussion.png";
import statisticImage from "../../assets/image/statistic.png";
import notificationImage from "../../assets/image/notification.png";
import mapImage from "../../assets/image/map.png";
import projectPlanImage from "../../assets/image/project-plan.png";
import reportImage from "../../assets/image/report.png";

export default function Features() {
  return (
    <>
      <section id="fitur" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Fitur Unggulan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Platform kami dirancang khusus untuk memudahkan komunikasi antara
              warga dan pengurus RT
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card bg-gray-50 p-6 rounded-xl transition duration-300">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <img
                  src={reportImage}
                  alt="Ilustrasi pelaporan real-time dengan smartphone dan notifikasi"
                  className="rounded-md mx-auto w-full max-w-xs"
                />
                <i
                  className="fas fa-bell text-2xl"
                  style={{ color: "#354EAD" }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Pelaporan Real-time
              </h3>
              <p className="text-gray-600 mb-4">
                Laporkan masalah langsung dari lokasi dengan lampiran foto dan
                lokasi GPS. Status laporan dapat dimonitor secara real-time.
              </p>
            </div>
            <div className="feature-card bg-gray-50 p-6 rounded-xl transition duration-300">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <img
                  src={discussionImage}
                  alt="Ilustrasi forum diskusi online dengan grup people dan chat bubbles"
                  className="rounded-md mx-auto w-full max-w-xs"
                />
                <i
                  className="fas fa-users text-2xl"
                  style={{ color: "#354EAD" }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Forum Diskusi RT</h3>
              <p className="text-gray-600 mb-4">
                Diskusikan masalah lingkungan bersama warga dan pengurus RT
                dalam forum yang aman dan terorganisir.
              </p>
            </div>
            <div className="feature-card bg-gray-50 p-6 rounded-xl transition duration-300">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <img
                  src={statisticImage}
                  alt="Ilustrasi dashboard statistik dengan chart dan grafik data"
                  className="rounded-md mx-auto w-full max-w-xs"
                />
                <i
                  className="fas fa-chart-line text-2xl"
                  style={{ color: "#354EAD" }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Statistik Lingkungan
              </h3>
              <p className="text-gray-600 mb-4">
                Pantau statistik masalah yang sering terjadi di lingkungan Anda
                dan solusi apa yang telah dilakukan.
              </p>
            </div>
            <div className="feature-card bg-gray-50 p-6 rounded-xl transition duration-300">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <img
                  src={notificationImage}
                  alt="Ilustrasi notifikasi smartphone dengan bell icon dan pesan"
                  className="rounded-md mx-auto w-full max-w-xs"
                />
                <i
                  className="fas fa-envelope text-2xl"
                  style={{ color: "#354EAD" }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Notifikasi Otomatis
              </h3>
              <p className="text-gray-600 mb-4">
                Dapatkan pemberitahuan via aplikasi atau SMS saat laporan Anda
                ditanggapi atau ada pengumuman penting.
              </p>
            </div>
            <div className="feature-card bg-gray-50 p-6 rounded-xl transition duration-300">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <img
                  src={mapImage}
                  alt="Ilustrasi peta interaktif dengan pin lokasi dan marker"
                  className="rounded-md mx-auto w-full max-w-xs"
                />
                <i
                  className="fas fa-map-marked-alt text-2xl"
                  style={{ color: "#354EAD" }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Peta Interaktif</h3>
              <p className="text-gray-600 mb-4">
                Lihat masalah yang dilaporkan di peta RT dan RW Anda untuk
                mendapatkan gambaran visual daerah yang bermasalah.
              </p>
            </div>
            <div className="feature-card bg-gray-50 p-6 rounded-xl transition duration-300">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <img
                  src={projectPlanImage}
                  alt="Ilustrasi manajemen tugas dengan checklist dan timeline"
                  className="rounded-md mx-auto w-full max-w-xs"
                />
                <i
                  className="fas fa-tasks text-2xl"
                  style={{ color: "#354EAD" }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Manajemen Tugas</h3>
              <p className="text-gray-600 mb-4">
                Pengurus RT dapat membagi tugas penanganan masalah ke petugas
                yang berbeda dan melacak progresnya.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
