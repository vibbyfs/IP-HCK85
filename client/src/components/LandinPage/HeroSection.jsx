import reportImage from "../../assets/image/report.png";

export default function HeroSection() {
  return (
    <>
      <section className="hero-gradient text-white pb-16 md:pb-24">
        <div className="container mx-auto px-4 pt-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Laporkan Masalah Lingkungan RT Lebih Mudah & Cepat
              </h1>
              <p className="text-lg mb-6">
                rt care membantu warga melaporkan masalah seperti kebersihan,
                keamanan, dan fasilitas umum langsung ke pengurus RT secara
                online.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <a
                  href="#daftar"
                  className="bg-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 text-center"
                  style={{ color: "#354EAD" }}
                >
                  Mulai Laporkan
                </a>
                <a
                  href="#demo"
                  className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white text-center"
                  style={{ "&:hover": { color: "#354EAD" } }}
                  onMouseEnter={(e) => (e.target.style.color = "#354EAD")}
                  onMouseLeave={(e) => (e.target.style.color = "white")}
                >
                  Lihat Demo
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <img
                src={reportImage}
                alt="Ilustrasi warga sedang menggunakan aplikasi mobile di smartphone untuk melaporkan masalah lingkungan sekitar RT"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
