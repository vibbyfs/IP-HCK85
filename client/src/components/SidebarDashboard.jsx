import { Link, useNavigate } from "react-router";

export default function SidebarDashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("UserId");
    return navigate("/");
  }

  return (
    <div>
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
      <nav className="space-y-1">
        <Link
          to="/dashboard"
          className="block py-2 px-4 hover:bg-gray-100 rounded-lg"
        >
          Laporan Warga
        </Link>
        <Link
          to="/reports-form"
          className="block py-2 px-4 hover:bg-gray-100 rounded-lg"
        >
          Buat Laporan
        </Link>

        <Link
          to="/payment"
          className="block py-2 px-4 hover:bg-gray-100 rounded-lg"
        >
          Pembayaran
        </Link>
        <Link
          to="/my-profile"
          className="block py-2 px-4 hover:bg-gray-100 rounded-lg"
        >
          My Profile
        </Link>
        <button
          onClick={handleLogout}
          className="block py-2 px-4 hover:bg-gray-100 rounded-lg text-red-500"
        >
          Keluar
        </button>
      </nav>
    </div>
  );
}
