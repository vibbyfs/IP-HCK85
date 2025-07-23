import React, { useState } from "react";
import SidebarDashboard from "../components/SideBarDashboard";

const dummyProfile = {
  NationalId: "3201234567891234",
  fullName: "Siti Aminah",
  gender: "Perempuan",
  dateOfBirth: "2001-08-17",
  placeOfBirth: "Bandung",
  religion: "Islam",
  maritalStatus: "Belum Menikah",
  bloodType: "A",
  occupation: "Mahasiswa",
  nationality: "Indonesia",
  address: {
    provinceName: "Jawa Barat",
    regencyName: "Bandung",
    districtName: "Cicendo",
    villageName: "Sukaraja",
    rt: "01",
    rw: "04",
    street: "Jl. Sukajadi No. 77",
    postalCode: "40162",
  },
};

export default function MyProfilePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const profile = dummyProfile;

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
            <div className="bg-white rounded-xl shadow p-3 md:p-4 mt-1 flex justify-center items-center">
              Data diri dan alamat lengkap Anda
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="md:ml-72 md:pl-4 max-w-4xl mx-auto px-2 md:px-0 pt-28 md:pt-36">
        <div className="bg-white rounded-xl shadow p-4 md:p-8 max-w-2xl mx-auto">
          {/* Foto dummy */}
          <div className="flex flex-col items-center mb-6">
            <img
              src="https://ui-avatars.com/api/?name=Siti+Aminah"
              className="w-24 h-24 rounded-full mb-3 shadow"
              alt="Profile"
            />
            <div className="text-xl font-semibold">{profile.fullName}</div>
            <div className="text-sm text-gray-500">{profile.occupation}</div>
          </div>
          {/* Data Pribadi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-6">
            <ProfileRow label="NIK" value={profile.NationalId} />
            <ProfileRow label="Jenis Kelamin" value={profile.gender} />
            <ProfileRow label="Tempat Lahir" value={profile.placeOfBirth} />
            <ProfileRow
              label="Tanggal Lahir"
              value={
                profile.dateOfBirth
                  ? new Date(profile.dateOfBirth).toLocaleDateString("id-ID")
                  : ""
              }
            />
            <ProfileRow label="Agama" value={profile.religion} />
            <ProfileRow
              label="Status Perkawinan"
              value={profile.maritalStatus}
            />
            <ProfileRow label="Golongan Darah" value={profile.bloodType} />
            <ProfileRow label="Kewarganegaraan" value={profile.nationality} />
          </div>
          {/* Alamat */}
          <div className="mb-2 font-semibold text-gray-700">Alamat Lengkap</div>
          <div className="mb-4 text-gray-700 text-sm">
            {profile.address.street}, RT {profile.address.rt}/RW{" "}
            {profile.address.rw},<br />
            Kel. {profile.address.villageName}, Kec.{" "}
            {profile.address.districtName},<br />
            {profile.address.regencyName}, {profile.address.provinceName} -{" "}
            {profile.address.postalCode}
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-xl font-bold hover:bg-blue-700">
            Edit Profil
          </button>
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

// Komponen baris profil
function ProfileRow({ label, value }) {
  return (
    <div className="flex flex-col mb-2">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-base font-medium">{value || "-"}</div>
    </div>
  );
}
