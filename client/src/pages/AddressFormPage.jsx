import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
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


      const AddressId = response.data.AddressId

      localStorage.setItem("AddressId", AddressId);
      navigate("/citizens/form");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-8 rounded-xl"
    >
      <h2 className="text-2xl mb-4 font-bold">Form Alamat</h2>
      <input
        className="input mb-2"
        placeholder="Provinsi"
        value={address.provinceName}
        onChange={(e) =>
          setAddress((a) => ({ ...a, provinceName: e.target.value }))
        }
      />
      <input
        className="input mb-2"
        placeholder="Kabupaten/Kota"
        value={address.regencyName}
        onChange={(e) =>
          setAddress((a) => ({ ...a, regencyName: e.target.value }))
        }
      />
      <input
        className="input mb-2"
        placeholder="Kecamatan"
        value={address.districtName}
        onChange={(e) =>
          setAddress((a) => ({ ...a, districtName: e.target.value }))
        }
      />
      <input
        className="input mb-2"
        placeholder="Kelurahan/Desa"
        value={address.villageName}
        onChange={(e) =>
          setAddress((a) => ({ ...a, villageName: e.target.value }))
        }
      />
      <input
        className="input mb-2"
        placeholder="RT"
        value={address.rt}
        onChange={(e) => setAddress((a) => ({ ...a, rt: e.target.value }))}
      />
      <input
        className="input mb-2"
        placeholder="RW"
        value={address.rw}
        onChange={(e) => setAddress((a) => ({ ...a, rw: e.target.value }))}
      />
      <input
        className="input mb-2"
        placeholder="Jalan/Alamat Lengkap"
        value={address.street}
        onChange={(e) => setAddress((a) => ({ ...a, street: e.target.value }))}
      />
      <input
        className="input mb-4"
        placeholder="Kode Pos"
        value={address.postalCode}
        onChange={(e) =>
          setAddress((a) => ({ ...a, postalCode: e.target.value }))
        }
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Simpan & Lanjut
      </button>
    </form>
  );
}
