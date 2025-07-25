import React, { useState } from "react";
import { useNavigate } from "react-router";
import http from "../lib/http";
import toast from "react-hot-toast";

export default function CitizenFormPage() {
  const navigate = useNavigate();
  const [citizen, setCitizen] = useState({
    nationalId: "111111111111",
    fullName: "John Doe",
    gender: "L",
    dateOfBirth: "2000-12-12",
    placeOfBirth: "Jakarta",
    religion: "Other",
    maritalStatus: "Other",
    bloodType: "O",
    occupation: "Programmer",
    nationality: "Indonesia",
  });

  const handleChange = (e) =>
    setCitizen({ ...citizen, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const AddressId = localStorage.getItem("AddressId");
    try {
      await http.post(
        "/citizens/add",
        { ...citizen, AddressId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      localStorage.removeItem("AddressId");

      toast.success("Citizen data saved successfully!");
      navigate("/dashboard");
    } catch (err) {
      console.log("ERROR POST CITIZEN", err);
      const messageError =
        err.response?.data?.message || "Failed to save citizen data";
      toast.dismiss();
      toast.error(messageError);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 py-8 px-2">
      <div className="bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Gambar kiri */}
        <div className="md:w-1/2 flex items-center justify-center bg-blue-50 p-6 md:p-12">
          <img
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
            alt="Ilustrasi Citizen"
            className="max-w-xs w-full h-auto rounded-3xl object-contain"
          />
        </div>
        {/* Form kanan */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full flex flex-col justify-center p-6 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700 text-center">
            Form Data Diri
          </h2>
          <div className="space-y-3">
            <input
              className="input w-full"
              name="nationalId"
              placeholder="NIK"
              value={citizen.nationalId}
              onChange={handleChange}
            />
            <input
              className="input w-full"
              name="fullName"
              placeholder="Nama Lengkap"
              value={citizen.fullName}
              onChange={handleChange}
            />
            <select
              className="input w-full"
              name="gender"
              value={citizen.gender}
              onChange={handleChange}
            >
              <option value="">Pilih Jenis Kelamin</option>
              <option value="Male">Laki-laki</option>
              <option value="Female">Perempuan</option>
              <option value="Other">Other</option>
            </select>
            <input
              className="input w-full"
              name="dateOfBirth"
              type="date"
              placeholder="Tanggal Lahir"
              value={citizen.dateOfBirth}
              onChange={handleChange}
            />
            <input
              className="input w-full"
              name="placeOfBirth"
              placeholder="Tempat Lahir"
              value={citizen.placeOfBirth}
              onChange={handleChange}
            />
            <select
              name="religion"
              id="religion"
              value={citizen.religion}
              onChange={handleChange}
              className="input w-full"
            >
              <option value="">Pilih Agama</option>
              <option value="Islam">Islam</option>
              <option value="Kristen">Kristen</option>
              <option value="Katolik">Katolik</option>
              <option value="Hindu">Hindu</option>
              <option value="Buddha">Buddha</option>
              <option value="Konghucu">Konghucu</option>
              <option value="Other">Other</option>
            </select>
            <select
              name="maritalStatus"
              id="maritalStatus"
              value={citizen.maritalStatus}
              onChange={handleChange}
              className="input w-full"
            >
              <option value="">Pilih Status Perkawinan</option>
              <option value="Single">Belum Menikah</option>
              <option value="Married">Menikah</option>
              <option value="Divorced">Bercerai</option>
              <option value="Widowed">Duda/Janda</option>
            </select>
            <select
              name="bloodType"
              id="bloodType"
              value={citizen.bloodType}
              onChange={handleChange}
              className="input w-full"
            >
              <option value="">Pilih Golongan Darah</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="AB">AB</option>
              <option value="O">O</option>
            </select>
            <input
              className="input w-full"
              name="occupation"
              placeholder="Pekerjaan"
              value={citizen.occupation}
              onChange={handleChange}
            />
            <input
              className="input w-full"
              name="nationality"
              placeholder="Kewarganegaraan"
              value={citizen.nationality}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold mt-6 px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Simpan Data Diri
          </button>

          <button
            type="button"
            className="mb-4 px-5 py-2 bg-gray-200 rounded-xl hover:bg-gray-300 font-semibold mt-2"
            onClick={() => navigate(-1)}
          >
            ← Kembali
          </button>
        </form>
      </div>
    </section>
  );
}
