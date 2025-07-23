<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SIGAP RT - Sistem Laporan Warga</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .hero-gradient {
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        }
        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        input:focus, textarea:focus {
            border-color: #3b82f6 !important;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3) !important;
        }
    </style>
</head>
<body class="font-sans bg-gray-50 text-gray-800">
    <!-- Header/Navbar -->
    <header class="sticky top-0 z-50 bg-white shadow-md">
        <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
            <div class="flex items-center space-x-2">
                <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f76e34ea-179e-4f85-ad37-00d730edd548.png" alt="Logo SIGAP RT berbentuk rumah dengan ikon orang di dalamnya, warna biru" class="rounded-lg">
                <span class="text-xl font-bold text-blue-600">SIGAP RT</span>
            </div>
            <div class="hidden md:flex space-x-6">
                <a href="#fitur" class="hover:text-blue-600 transition">Fitur</a>
                <a href="#cara-kerja" class="hover:text-blue-600 transition">Cara Kerja</a>
                <a href="#testimoni" class="hover:text-blue-600 transition">Testimoni</a>
                <a href="#kontak" class="hover:text-blue-600 transition">Kontak</a>
            </div>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition md:hidden">
                <i class="fas fa-bars"></i>
            </button>
            <div class="hidden md:block">
                <a href="#daftar" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Daftar Sekarang</a>
            </div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero-gradient text-white pb-16 md:pb-24">
        <div class="container mx-auto px-4 pt-12">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-8 md:mb-0">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">Laporkan Masalah Lingkungan RT Lebih Mudah & Cepat</h1>
                    <p class="text-lg mb-6">SIGAP RT membantu warga melaporkan masalah seperti kebersihan, keamanan, dan fasilitas umum langsung ke pengurus RT secara online.</p>
                    <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                        <a href="#daftar" class="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 text-center">Mulai Laporkan</a>
                        <a href="#demo" class="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 text-center">Lihat Demo</a>
                    </div>
                </div>
                <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ece2d77d-7b28-497e-8ca1-7ffa131b4e8c.png" alt="Ilustrasi warga sedang menggunakan aplikasi mobile di smartphone untuk melaporkan masalah lingkungan sekitar RT" class="rounded-lg shadow-xl">
                </div>
            </div>
        </div>
    </section>

    <!-- Fitur Unggulan -->
    <section id="fitur" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold mb-4">Fitur Unggulan</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Platform kami dirancang khusus untuk memudahkan komunikasi antara warga dan pengurus RT</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Fitur 1 -->
                <div class="feature-card bg-gray-50 p-6 rounded-xl transition duration-300">
                    <div class="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-bell text-blue-600 text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Pelaporan Real-time</h3>
                    <p class="text-gray-600">Laporkan masalah langsung dari lokasi dengan lampiran foto dan lokasi GPS. Status laporan dapat dimonitor secara real-time.</p>
                </div>
                
                <!-- Fitur 2 -->
                <div class="feature-card bg-gray-50 p-6 rounded-xl transition duration-300">
                    <div class="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-users text-blue-600 text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Forum Diskusi RT</h3>
                    <p class="text-gray-600">Diskusikan masalah lingkungan bersama warga dan pengurus RT dalam forum yang aman dan terorganisir.</p>
                </div>
                
                <!-- Fitur 3 -->
                <div class="feature-card bg-gray-50 p-6 rounded-xl transition duration-300">
                    <div class="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-chart-line text-blue-600 text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Statistik Lingkungan</h3>
                    <p class="text-gray-600">Pantau statistik masalah yang sering terjadi di lingkungan Anda dan solusi apa yang telah dilakukan.</p>
                </div>
                
                <!-- Fitur 4 -->
                <div class="feature-card bg-gray-50 p-6 rounded-xl transition duration-300">
                    <div class="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-envelope text-blue-600 text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Notifikasi Otomatis</h3>
                    <p class="text-gray-600">Dapatkan pemberitahuan via aplikasi atau SMS saat laporan Anda ditanggapi atau ada pengumuman penting.</p>
                </div>
                
                <!-- Fitur 5 -->
                <div class="feature-card bg-gray-50 p-6 rounded-xl transition duration-300">
                    <div class="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-map-marked-alt text-blue-600 text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Peta Interaktif</h3>
                    <p class="text-gray-600">Lihat masalah yang dilaporkan di peta RT dan RW Anda untuk mendapatkan gambaran visual daerah yang bermasalah.</p>
                </div>
                
                <!-- Fitur 6 -->
                <div class="feature-card bg-gray-50 p-6 rounded-xl transition duration-300">
                    <div class="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <i class="fas fa-tasks text-blue-600 text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Manajemen Tugas</h3>
                    <p class="text-gray-600">Pengurus RT dapat membagi tugas penanganan masalah ke petugas yang berbeda dan melacak progresnya.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Cara Kerja -->
    <section id="cara-kerja" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold mb-4">Bagaimana Cara Kerjanya?</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Hanya butuh 3 langkah sederhana untuk melaporkan masalah di lingkungan Anda</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Langkah 1 -->
                <div class="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                    <h3 class="text-xl font-semibold mb-3">Buat Laporan</h3>
                    <p class="text-gray-600 mb-4">Isi form laporan dengan detail masalah, tambahkan foto jika diperlukan, dan kirimkan.</p>
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bc13c71b-006f-446a-bcd7-0ddcc0320ee2.png" alt="Ilustrasi seseorang sedang mengisi form laporan di smartphone dengan ikon form dan pena" class="rounded-md mx-auto">
                </div>
                
                <!-- Langkah 2 -->
                <div class="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                    <h3 class="text-xl font-semibold mb-3">Verifikasi RT</h3>
                    <p class="text-gray-600 mb-4">Pengurus RT menerima notifikasi, memverifikasi laporan, dan menentukan prioritas.</p>
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c411580a-d5ac-49fd-9473-22789811df16.png" alt="Ilustrasi pengurus RT sedang meninjau laporan di komputer dengan ikon checklist dan approved" class="rounded-md mx-auto">
                </div>
                
                <!-- Langkah 3 -->
                <div class="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                    <h3 class="text-xl font-semibold mb-3">Tindak Lanjut</h3>
                    <p class="text-gray-600 mb-4">Petugas menangani masalah dan Anda mendapat notifikasi saat selesai.</p>
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/728436da-f084-47f1-b783-ceac807c9819.png" alt="Ilustrasi petugas kebersihan sedang membersihkan sampah dengan ikon sapu dan tempat sampah" class="rounded-md mx-auto">
                </div>
            </div>
        </div>
    </section>

    <!-- Testimoni -->
    <section id="testimoni" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold mb-4">Apa Kata Warga?</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Pengalaman nyata warga yang menggunakan SIGAP RT</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Testi 1 -->
                <div class="bg-gray-50 p-6 rounded-xl">
                    <div class="flex items-start mb-4">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d15c9cd9-ee4f-45a4-8e62-9857faddffb9.png" alt="Foto profil Ibu Siti, wanita paruh baya dengan rambut pendek tersenyum" class="rounded-full mr-4">
                        <div>
                            <h4 class="font-semibold">Ibu Siti</h4>
                            <p class="text-gray-600 text-sm">Warga RT 05</p>
                        </div>
                    </div>
                    <p class="text-gray-700">"Dulu kalau ada sampah menumpuk depan rumah harus telpon Pak RT, sekarang tinggal foto dan kirim lewat aplikasi. Besoknya sudah dibersihkan!"</p>
                    <div class="flex mt-3 text-yellow-400">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                
                <!-- Testi 2 -->
                <div class="bg-gray-50 p-6 rounded-xl">
                    <div class="flex items-start mb-4">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/de1c4c88-1ffc-4c1f-b404-7b1874647728.png" alt="Foto profil Pak Budi, pria setengah baya berkacamata dengan ekspresi serius" class="rounded-full mr-4">
                        <div>
                            <h4 class="font-semibold">Pak Budi</h4>
                            <p class="text-gray-600 text-sm">Ketua RT 08</p>
                        </div>
                    </div>
                    <p class="text-gray-700">"Dengan SIGAP RT, pekerjaan kami jauh lebih terorganisir. Bisa prioritisasi laporan yang penting dan bisa bagi tugas ke pengurus lain."</p>
                    <div class="flex mt-3 text-yellow-400">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                </div>
                
                <!-- Testi 3 -->
                <div class="bg-gray-50 p-6 rounded-xl">
                    <div class="flex items-start mb-4">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ba0d9cce-35be-4b89-b10d-2c4c66e116ea.png" alt="Foto profil Andi, pria muda dengan rambut ikal memakai kemeja kotak-kotak" class="rounded-full mr-4">
                        <div>
                            <h4 class="font-semibold">Andi</h4>
                            <p class="text-gray-600 text-sm">Warga RT 12</p>
                        </div>
                    </div>
                    <p class="text-gray-700">"Aplikasinya simpel tapi lengkap. Suka bisa lihat status laporan tetangga juga jadi tahu kalau ada masalah yang sama di sekitar sini."</p>
                    <div class="flex mt-3 text-yellow-400">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Daftar -->
    <section id="daftar" class="py-16 hero-gradient text-white">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Siapkan RT Anda Lebih Baik!</h2>
                <p class="text-xl mb-8">Daftarkan RT Anda sekarang dan rasakan kemudahan berkomunikasi antar warga dan pengurus RT</p>
                <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="register.html" class="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 text-lg">Daftar Sekarang</a>
                    <a href="#" class="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 text-lg">Hubungi Kami</a>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold mb-4">Pertanyaan Umum</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Temukan jawaban untuk pertanyaan yang sering diajukan</p>
            </div>
            <div class="max-w-3xl mx-auto">
                <!-- FAQ 1 -->
                <div class="mb-4 border-b pb-4">
                    <button class="faq-toggle flex justify-between items-center w-full text-left font-semibold text-lg">
                        <span>Apakah aplikasi ini berbayar?</span>
                        <i class="fas fa-chevron-down transition-transform"></i>
                    </button>
                    <div class="faq-content mt-2 text-gray-700 hidden">
                        Tidak, SIGAP RT sepenuhnya gratis untuk digunakan oleh warga dan pengurus RT/RW. Kami berkomitmen untuk memudahkan komunikasi di tingkat komunitas terkecil tanpa biaya.
                    </div>
                </div>
                
                <!-- FAQ 2 -->
                <div class="mb-4 border-b pb-4">
                    <button class="faq-toggle flex justify-between items-center w-full text-left font-semibold text-lg">
                        <span>Bagaimana kalau ada warga yang tidak punya smartphone?</span>
                        <i class="fas fa-chevron-down transition-transform"></i>
                    </button>
                    <div class="faq-content mt-2 text-gray-700 hidden">
                        Tetap bisa dilayani! Kami memiliki sistem alternatif dimana keluarga/warga bisa melaporkan melalui anggota keluarga yang memiliki smartphone, atau melalui pos pelayanan RT yang biasa tersedia di musholla/balai warga.
                    </div>
                </div>
                
                <!-- FAQ 3 -->
                <div class="mb-4 border-b pb-4">
                    <button class="faq-toggle flex justify-between items-center w-full text-left font-semibold text-lg">
                        <span>Apakah data warga akan aman?</span>
                        <i class="fas fa-chevron-down transition-transform"></i>
                    </button>
                    <div class="faq-content mt-2 text-gray-700 hidden">
                        Keamanan data adalah prioritas kami. Semua data pribadi dienkripsi dan hanya pengurus RT terverifikasi yang bisa mengakses data warga di lingkungannya masing-masing.
                    </div>
                </div>
                
                <!-- FAQ 4 -->
                <div class="mb-4 border-b pb-4">
                    <button class="faq-toggle flex justify-between items-center w-full text-left font-semibold text-lg">
                        <span>Bagaimana cara mendaftarkan RT saya?</span>
                        <i class="fas fa-chevron-down transition-transform"></i>
                    </button>
                    <div class="faq-content mt-2 text-gray-700 hidden">
                        Ketua atau Sekretaris RT bisa mendaftar melalui website dengan mengisi formulir pendaftaran RT. Proses verifikasi membutuhkan waktu maksimal 1x24 jam di hari kerja.
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Kontak -->
    <section id="kontak" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2 mb-8 md:mb-0">
                    <h2 class="text-3xl font-bold mb-6">Hubungi Kami</h2>
                    <p class="text-gray-600 mb-6">Punya pertanyaan lebih lanjut tentang SIGAP RT? Tim kami siap membantu Anda.</p>
                    <div class="space-y-4">
                        <div class="flex items-start">
                            <i class="fas fa-envelope text-blue-600 text-xl mt-1 mr-4"></i>
                            <div>
                                <h4 class="font-semibold">Email</h4>
                                <p class="text-gray-600">info@sigaprt.id</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i class="fas fa-phone-alt text-blue-600 text-xl mt-1 mr-4"></i>
                            <div>
                                <h4 class="font-semibold">Telepon</h4>
                                <p class="text-gray-600">(021) 1234-5678</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i class="fas fa-map-marker-alt text-blue-600 text-xl mt-1 mr-4"></i>
                            <div>
                                <h4 class="font-semibold">Alamat</h4>
                                <p class="text-gray-600">Jl. Kesehatan No. 10, Jakarta Selatan 12345</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2 md:pl-12">
                    <form class="bg-white p-6 rounded-lg shadow-sm">
                        <div class="mb-4">
                            <label for="name" class="block text-gray-700 mb-2">Nama Lengkap</label>
                            <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none">
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-gray-700 mb-2">Email</label>
                            <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none">
                        </div>
                        <div class="mb-4">
                            <label for="subject" class="block text-gray-700 mb-2">Subjek</label>
                            <input type="text" id="subject" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none">
                        </div>
                        <div class="mb-6">
                            <label for="message" class="block text-gray-700 mb-2">Pesan</label>
                            <textarea id="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">Kirim Pesan</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Begin Add Register Form Section -->
    <section class="py-16 min-h-screen flex items-center justify-center bg-gray-50">
        <div class="container mx-auto px-4 max-w-md">
            <div class="bg-white p-8 rounded-xl shadow-lg">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-800">Daftar Akun Baru</h2>
                    <p class="text-gray-600 mt-2">Isi data diri Anda untuk mulai menggunakan SIGAP RT</p>
                </div>
                
                <form class="space-y-5">
                    <!-- Nama Lengkap -->
                    <div>
                        <label for="fullname" class="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                        <input type="text" id="fullname" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    </div>

                    <!-- Nomor KK -->
                    <div>
                        <label for="kk" class="block text-sm font-medium text-gray-700 mb-1">Nomor Kartu Keluarga</label>
                        <input type="text" id="kk" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    </div>

                    <!-- RT/RW -->
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label for="rt" class="block text-sm font-medium text-gray-700 mb-1">Nomor RT</label>
                            <input type="text" id="rt" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        </div>
                        <div>
                            <label for="rw" class="block text-sm font-medium text-gray-700 mb-1">Nomor RW</label>
                            <input type="text" id="rw" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        </div>
                    </div>

                    <!-- Email -->
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Alamat Email</label>
                        <input type="email" id="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    </div>

                    <!-- Password -->
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type="password" id="password" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <p class="mt-1 text-xs text-gray-500">Minimal 8 karakter</p>
                    </div>

                    <!-- Konfirmasi Password -->
                    <div>
                        <label for="confirm-password" class="block text-sm font-medium text-gray-700 mb-1">Konfirmasi Password</label>
                        <input type="password" id="confirm-password" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    </div>

                    <!-- Checkbox -->
                    <div class="flex items-start">
                        <input type="checkbox" id="terms" required class="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                        <label for="terms" class="ml-2 block text-sm text-gray-700">
                            Saya menyetujui <a href="#" class="text-blue-600 hover:text-blue-500">Syarat & Ketentuan</a> dan <a href="#" class="text-blue-600 hover:text-blue-500">Kebijakan Privasi</a>
                        </label>
                    </div>

                    <!-- Submit Button -->
                    <button type="submit" class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg">
                        Buat Akun
                    </button>
                </form>

                <div class="mt-6 text-center">
                    <p class="text-gray-600">
                        Sudah punya akun? 
                        <a href="#" class="text-blue-600 hover:text-blue-500 font-medium">Masuk disini</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!-- End Add Register Form Section -->

    <!-- Dashboard Section -->
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row">
                <!-- Sidebar Navigation -->
                <div class="md:w-1/4 mb-8 md:mb-0 md:pr-4">
                    <div class="bg-white p-6 rounded-lg shadow-sm">
                        <div class="flex items-center mb-6">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/118c3b88-1ca9-4e6a-8443-f8abc0abb499.png" alt="Profil Warga" class="rounded-full w-12 h-12 mr-3">
                            <div>
                                <h3 class="font-semibold">Nama Warga</h3>
                                <p class="text-sm text-gray-600">RT 05 / RW 08</p>
                            </div>
                        </div>
                        <nav class="space-y-2">
                            <a href="#" class="block py-2 px-4 bg-blue-100 text-blue-600 rounded-lg font-medium">Dashboard</a>
                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 rounded-lg">Buat Laporan</a>
                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 rounded-lg">Laporan Saya</a>
                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 rounded-lg">Forum RT</a>
                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 rounded-lg">Pengaturan</a>
                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 rounded-lg text-red-500">Keluar</a>
                        </nav>
                    </div>
                </div>
                
                <!-- Main Content -->
                <div class="md:w-3/4 md:pl-4">
                    <div class="bg-white p-6 rounded-lg shadow-sm">
                        <h2 class="text-2xl font-bold mb-6">Dashboard Warga</h2>
                        
                        <!-- Statistik Cepat -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h3 class="font-semibold text-blue-600 mb-1">Laporan Dibuat</h3>
                                <p class="text-2xl font-bold">12</p>
                            </div>
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h3 class="font-semibold text-green-600 mb-1">Laporan Selesai</h3>
                                <p class="text-2xl font-bold">8</p>
                            </div>
                            <div class="bg-yellow-50 p-4 rounded-lg">
                                <h3 class="font-semibold text-yellow-600 mb-1">Dalam Proses</h3>
                                <p class="text-2xl font-bold">4</p>
                            </div>
                        </div>
                        
                        <!-- Laporan Terbaru -->
                        <div class="mb-8">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-xl font-semibold">Laporan Terbaru</h3>
                                <a href="#" class="text-blue-600 hover:text-blue-700">Lihat Semua</a>
                            </div>
                            <div class="space-y-4">
                                <div class="border-b pb-4">
                                    <div class="flex justify-between mb-2">
                                        <h4 class="font-medium">Sampah Menumpuk</h4>
                                        <span class="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Selesai</span>
                                    </div>
                                    <p class="text-gray-600 text-sm mb-2">Dilaporkan: 12 Januari 2023</p>
                                    <p class="text-gray-700">Sampah menumpuk di depan rumah No. 10, sudah dibersihkan oleh petugas kebersihan RT</p>
                                </div>
                                <div class="border-b pb-4">
                                    <div class="flex justify-between mb-2">
                                        <h4 class="font-medium">Lampu Jalan Mati</h4>
                                        <span class="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Proses</span>
                                    </div>
                                    <p class="text-gray-600 text-sm mb-2">Dilaporkan: 15 Januari 2023</p>
                                    <p class="text-gray-700">Lampu jalan di depan gang kedua mati sejak kemarin malam</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Buat Laporan Cepat -->
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Buat Laporan Baru</h3>
                            <form>
                                <div class="mb-4">
                                    <label class="block text-gray-700 mb-2">Jenis Laporan</label>
                                    <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue年">
                                        <option>Pilih jenis laporan</option>
                                        <option>Kebersihan</option>
                                        <option>Keamanan</option>
                                        <option>Fasilitas Umum</option>
                                        <option>Lainnya</option>
                                    </select>
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 mb-2">Deskripsi</label>
                                    <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="3"></textarea>
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 mb-2">Lampirkan Foto</label>
                                    <input type="file" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none">
                                </div>
                                <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Kirim Laporan</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between">
                <div class="mb-6 md:mb-0">
                    <div class="flex items-center mb-4">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/23bc7206-1658-49e2-ba54-de2240ee84de.png" alt="Logo SIGAP RT versi gelap dengan warna putih" class="rounded-lg">
                        <span class="text-xl font-bold ml-2">SIGAP RT</span>
                    </div>
                    <p class="text-gray-400 max-w-xs">Membangun komunikasi yang lebih baik antara warga dan pengurus RT demi lingkungan yang lebih tertib dan nyaman.</p>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        <h4 class="font-semibold text-lg mb-4">Navigasi</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-400 hover:text-white transition">Beranda</a></li>
                            <li><a href="#fitur" class="text-gray-400 hover:text-white transition">Fitur</a></li>
                            <li><a href="#cara-kerja" class="text-gray-400 hover:text-white transition">Cara Kerja</a></li>
                            <li><a href="#testimoni" class="text-gray-400 hover:text-white transition">Testimoni</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold text-lg mb-4">Perusahaan</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-400 hover:text-white transition">Tentang Kami</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition">Karir</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition">Blog</a></li>
                            <li><a href="#kontak" class="text-gray-400 hover:text-white transition">Kontak</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold text-lg mb-4">Legal</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-400 hover:text-white transition">Kebijakan Privasi</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition">Syarat & Ketentuan</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-400 mb-4 md:mb-0">© 2023 SIGAP RT. All rights reserved.</p>
                <div class="flex space-x-6">
                    <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-facebook-f text-xl"></i></a>
                    <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-twitter text-xl"></i></a>
                    <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-instagram text-xl"></i></a>
                    <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-youtube text-xl"></i></a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Mobile Sidebar Toggle -->
    <script>
        // Dashboard mobile menu toggle
        const dashboardMenuButton = document.querySelector('.dashboard-menu-button');
        const dashboardSidebar = document.querySelector('.dashboard-sidebar');
        
        dashboardMenuButton.addEventListener('click', () => {
            dashboardSidebar.classList.toggle('hidden');
        });

        // Toggle mobile menu
        const mobileMenuButton = document.querySelector('nav button');
        const navLinks = document.querySelector('nav .hidden.md\\:flex');
        
        mobileMenuButton.addEventListener('click', () => {
            navLinks.classList.toggle('hidden');
        });
        
        // FAQ toggle
        const faqToggles = document.querySelectorAll('.faq-toggle');
        faqToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const content = toggle.nextElementSibling;
                const icon = toggle.querySelector('i');
                
                content.classList.toggle('hidden');
                icon.classList.toggle('rotate-180');
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (!navLinks.classList.contains('hidden')) {
                        navLinks.classList.add('hidden');
                    }
                }
            });
        });
    </script>
</body>
</html>

