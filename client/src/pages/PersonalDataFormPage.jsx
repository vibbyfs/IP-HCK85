import React, { useState } from "react";
import { useNavigate } from "react-router";
import AddressForm from "../components/AddressForm";

export default function PersonalDataFormPage() {
  const [step, setStep] = useState(1);
  const [citizen, setCitizen] = useState({
    NationalId: "1321343212345678",
    fullName: "John Doe",
    gender: "L",
    dateOfBirth: "2000-01-01",
    placeOfBirth: "Jakarta",
    religion: "Islam",
    maritalStatus: "Belum Menikah",
    bloodType: "O",
    occupation: "Software Engineer",
    nationality: "Indonesia",
  });
  const [address, setAddress] = useState({
    provinceName: "DKI Jakarta",
    regencyName: "Jakarta Pusat",
    districtName: "Gambir",
    villageName: "Kebon Kelapa",
    rt: "01",
    rw: "05",
    street: "Jln. Merdeka No. 1",
    postalCode: "17000",
  });

  const [loading, setLoading] = useState(false);
  const [notif, setNotif] = useState("");
  const navigate = useNavigate();

  const handleChangeCitizen = (e) =>
    setCitizen({ ...citizen, [e.target.name]: e.target.value });

  // Step 1: Validasi & Next
  const handleNext = (e) => {
    e.preventDefault();
    if (
      !citizen.NationalId ||
      !citizen.fullName ||
      !citizen.gender ||
      !citizen.dateOfBirth ||
      !citizen.placeOfBirth
    ) {
      setNotif("Lengkapi semua field data diri yang wajib.");
      return;
    }
    setStep(2);
    setNotif("");
  };

  // Step 2: Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setNotif("");
    setLoading(true);
    if (
      !address.provinceName ||
      !address.regencyName ||
      !address.districtName ||
      !address.villageName ||
      !address.rt ||
      !address.rw ||
      !address.street
    ) {
      setNotif("Lengkapi semua field alamat yang wajib.");
      setLoading(false);
      return;
    }
    try {
      // Submit citizen & address sekaligus (asumsi backend mendukung)
      await createCitizen({ ...citizen, ...address });
      setNotif("Data berhasil disimpan! Akun Anda menunggu approval admin RT.");
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      setNotif("Gagal simpan data. Pastikan semua data benar.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-2">
      <form
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl"
        onSubmit={step === 1 ? handleNext : handleSubmit}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
          {step === 1 ? "Lengkapi Data Diri Kamu" : "Lengkapi Alamat Kamu"}
        </h2>
        {notif && (
          <div className="mb-4 bg-yellow-100 text-yellow-800 px-4 py-2 rounded">
            {notif}
          </div>
        )}

        {step === 1 && (
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-semibold">NIK *</label>
              <input
                name="NationalId"
                value={citizen.NationalId}
                onChange={handleChangeCitizen}
                className="input"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Nama Lengkap *</label>
              <input
                name="fullName"
                value={citizen.fullName}
                onChange={handleChangeCitizen}
                className="input"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">
                Jenis Kelamin *
              </label>
              <select
                name="gender"
                value={citizen.gender}
                onChange={handleChangeCitizen}
                className="input"
              >
                <option value="">Pilih</option>
                <option value="L">Laki-laki</option>
                <option value="P">Perempuan</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-semibold">Tempat Lahir *</label>
              <input
                name="placeOfBirth"
                value={citizen.placeOfBirth}
                onChange={handleChangeCitizen}
                className="input"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">
                Tanggal Lahir *
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={citizen.dateOfBirth}
                onChange={handleChangeCitizen}
                className="input"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Agama</label>
              <input
                name="religion"
                value={citizen.religion}
                onChange={handleChangeCitizen}
                className="input"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">
                Status Perkawinan
              </label>
              <input
                name="maritalStatus"
                value={citizen.maritalStatus}
                onChange={handleChangeCitizen}
                className="input"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Golongan Darah</label>
              <input
                name="bloodType"
                value={citizen.bloodType}
                onChange={handleChangeCitizen}
                className="input"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Pekerjaan</label>
              <input
                name="occupation"
                value={citizen.occupation}
                onChange={handleChangeCitizen}
                className="input"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">
                Kewarganegaraan
              </label>
              <input
                name="nationality"
                value={citizen.nationality}
                onChange={handleChangeCitizen}
                className="input"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <AddressForm address={address} setAddress={setAddress} />
        )}

        <div className="mt-8 flex gap-4 justify-between">
          {step === 2 && (
            <button
              type="button"
              className="px-8 py-2 rounded-xl font-bold bg-gray-300 hover:bg-gray-400"
              onClick={() => setStep(1)}
              disabled={loading}
            >
              Sebelumnya
            </button>
          )}
          <button
            type="submit"
            className="px-8 py-2 rounded-xl font-bold bg-blue-700 text-white hover:bg-blue-800 transition disabled:opacity-70"
            disabled={loading}
          >
            {loading
              ? "Menyimpan..."
              : step === 1
              ? "Lanjut ke Alamat"
              : "Simpan Data Diri"}
          </button>
        </div>
      </form>
    </div>
  );
}
