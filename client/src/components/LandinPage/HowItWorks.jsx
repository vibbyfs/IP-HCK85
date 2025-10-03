export default function HowItWorks() {
  return (
    <>
      <section id="how-it-works" className="py-16 bg-gray-50">
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
              <div
                className="w-16 h-16 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                style={{ backgroundColor: "#354EAD" }}
              >
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
              <div
                className="w-16 h-16 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                style={{ backgroundColor: "#354EAD" }}
              >
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
              <div
                className="w-16 h-16 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                style={{ backgroundColor: "#354EAD" }}
              >
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
    </>
  );
}
