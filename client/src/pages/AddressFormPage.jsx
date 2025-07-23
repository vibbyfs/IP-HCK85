import React, { useState } from "react";
import { useNavigate } from "react-router";
import http from "../lib/http";

export default function AddressFormPage() {
  const [address, setAddress] = useState({
    provinceName: "DKI Jakarta",
    regencyName: "Jakarta Selatan",
    districtName: "kebayoran Lama",
    villageName: "Tanah kusir",
    rt: "01",
    rw: "02",
    street: "Jln. Tanah Kusir3",
    postalCode: "17142",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await http.post("/addresses/add", address, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const AddressId = response.data.AddressId || response.data.id;
      localStorage.setItem("AddressId", AddressId);
      navigate("/citizens/form");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 py-8 px-2">
      <div className="bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Gambar (kiri) */}
        <div className="md:w-1/2 flex items-center justify-center bg-blue-50 p-6 md:p-12">
          <img
            src="https://img.freepik.com/free-vector/destination-search-concept-illustration_114360-3999.jpg"
            alt="Form Alamat"
            className="max-w-xs w-full h-auto rounded-3xl object-contain"
          />
        </div>
        {/* Form (kanan) */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full flex flex-col justify-center p-6 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700 text-center">
            Form Alamat
          </h2>
          <div className="space-y-3">
            <input
              className="input w-full"
              placeholder="Provinsi"
              value={address.provinceName}
              onChange={(e) =>
                setAddress((a) => ({ ...a, provinceName: e.target.value }))
              }
            />
            <input
              className="input w-full"
              placeholder="Kabupaten/Kota"
              value={address.regencyName}
              onChange={(e) =>
                setAddress((a) => ({ ...a, regencyName: e.target.value }))
              }
            />
            <input
              className="input w-full"
              placeholder="Kecamatan"
              value={address.districtName}
              onChange={(e) =>
                setAddress((a) => ({ ...a, districtName: e.target.value }))
              }
            />
            <input
              className="input w-full"
              placeholder="Kelurahan/Desa"
              value={address.villageName}
              onChange={(e) =>
                setAddress((a) => ({ ...a, villageName: e.target.value }))
              }
            />
            <div className="flex gap-3">
              <input
                className="input w-1/2"
                placeholder="RT"
                value={address.rt}
                onChange={(e) => setAddress((a) => ({ ...a, rt: e.target.value }))}
              />
              <input
                className="input w-1/2"
                placeholder="RW"
                value={address.rw}
                onChange={(e) => setAddress((a) => ({ ...a, rw: e.target.value }))}
              />
            </div>
            <input
              className="input w-full"
              placeholder="Jalan/Alamat Lengkap"
              value={address.street}
              onChange={(e) =>
                setAddress((a) => ({ ...a, street: e.target.value }))
              }
            />
            <input
              className="input w-full"
              placeholder="Kode Pos"
              value={address.postalCode}
              onChange={(e) =>
                setAddress((a) => ({ ...a, postalCode: e.target.value }))
              }
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold mt-6 px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Simpan & Lanjut
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
