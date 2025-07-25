import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import http from "../lib/http";
import toast from "react-hot-toast";

export default function AddressFormPage() {
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    provinceId: "",
    provinceName: "",
    regencyId: "",
    regencyName: "",
    districtId: "",
    districtName: "",
    villageId: "",
    villageName: "",
    rt: "",
    rw: "",
    street: "",
    postalCode: "",
  });

  const [regions, setRegions] = useState({
    provinces: [],
    regencies: [],
    districts: [],
    villages: [],
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await http.post("/addresses/add", address, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      const AddressId = response.data.AddressId || response.data.id;
      localStorage.setItem("AddressId", AddressId);
      toast.success("Address added successfully!");
      navigate("/citizens/form");
    } catch (err) {
      console.log("ERROR ADD ADDRESS", err);
      const messageError =
        err.response?.data?.message ||
        "Something went wrong while adding address";
      toast.dismiss();
      toast.error(messageError);
    }
  }

  async function fetchProvinces() {
    try {
      const res = await fetch(
        "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
      );
      const data = await res.json();

      setRegions((prev) => ({ ...prev, provinces: data }));
    } catch (err) {
      console.log("ERROR FETCH DATA PROVINCE", err);
      const messageError =
        err.response?.data?.message || "Failed to fetch provinces";
      toast.dismiss();
      toast.error(messageError);
    }
  }

  async function fetchRegencies(provinceId) {
    try {
      const res = await fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`
      );
      const data = await res.json();

      setRegions((prev) => ({ ...prev, regencies: data }));
    } catch (err) {
      console.log("ERROR FETCH DATA REGENCIES", err);
      const messageError =
        err.response?.data?.message || "Failed to fetch regencies";
      toast.dismiss();
      toast.error(messageError);
    }
  }

  async function fetchDistricts(regencyId) {
    try {
      const res = await fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${regencyId}.json`
      );
      const data = await res.json();

      setRegions((prev) => ({ ...prev, districts: data }));
    } catch (err) {
      console.log("ERROR FETCH DATA DSITRICTS", err);
      const messageError =
        err.response?.data?.message || "Failed to fetch districts";
      toast.dismiss();
      toast.error(messageError);
    }
  }

  async function fetchVillages(districtId) {
    try {
      const res = await fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${districtId}.json`
      );
      const data = await res.json();

      setRegions((prev) => ({ ...prev, villages: data }));
    } catch (err) {
      console.log("ERROR FETCH DATA VILLAGES", err);
      const messageError =
        err.response?.data?.message || "Failed to fetch villages";
      toast.dismiss();
      toast.error(messageError);
    }
  }

  useEffect(() => {
    fetchProvinces();
  }, []);

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
            {/* Provinsi */}
            <select
              className="input w-full"
              value={address.provinceId}
              onChange={(e) => {
                const selectedProvince = regions.provinces.find(
                  (p) => p.id === e.target.value
                );
                setAddress((a) => ({
                  ...a,
                  provinceId: e.target.value,
                  provinceName: selectedProvince ? selectedProvince.name : "",
                  regencyId: "",
                  regencyName: "",
                  districtId: "",
                  districtName: "",
                  villageId: "",
                  villageName: "",
                }));
                setRegions((prev) => ({
                  ...prev,
                  regencies: [],
                  districts: [],
                  villages: [],
                }));
                if (e.target.value) {
                  fetchRegencies(e.target.value);
                }
              }}
            >
              <option value="">Pilih Provinsi</option>
              {regions.provinces.map((province) => (
                <option key={province.id} value={province.id}>
                  {province.name}
                </option>
              ))}
            </select>

            {/* Kabupaten/Kota */}
            <select
              className="input w-full"
              value={address.regencyId}
              onChange={(e) => {
                const selectedRegency = regions.regencies.find(
                  (r) => r.id === e.target.value
                );
                setAddress((a) => ({
                  ...a,
                  regencyId: e.target.value,
                  regencyName: selectedRegency ? selectedRegency.name : "",
                  districtId: "",
                  districtName: "",
                  villageId: "",
                  villageName: "",
                }));
                setRegions((prev) => ({
                  ...prev,
                  districts: [],
                  villages: [],
                }));
                if (e.target.value) {
                  fetchDistricts(e.target.value);
                }
              }}
              disabled={!address.provinceId}
            >
              <option value="">Pilih Kabupaten/Kota</option>
              {regions.regencies.map((regency) => (
                <option key={regency.id} value={regency.id}>
                  {regency.name}
                </option>
              ))}
            </select>

            {/* Kecamatan */}
            <select
              className="input w-full"
              value={address.districtId}
              onChange={(e) => {
                const selectedDistrict = regions.districts.find(
                  (d) => d.id === e.target.value
                );
                setAddress((a) => ({
                  ...a,
                  districtId: e.target.value,
                  districtName: selectedDistrict ? selectedDistrict.name : "",
                  villageId: "",
                  villageName: "",
                }));
                setRegions((prev) => ({
                  ...prev,
                  villages: [],
                }));
                if (e.target.value) {
                  fetchVillages(e.target.value);
                }
              }}
              disabled={!address.regencyId}
            >
              <option value="">Pilih Kecamatan</option>
              {regions.districts.map((district) => (
                <option key={district.id} value={district.id}>
                  {district.name}
                </option>
              ))}
            </select>

            {/* Kelurahan/Desa */}
            <select
              className="input w-full"
              value={address.villageId}
              onChange={(e) => {
                const selectedVillage = regions.villages.find(
                  (v) => v.id === e.target.value
                );
                setAddress((a) => ({
                  ...a,
                  villageId: e.target.value,
                  villageName: selectedVillage ? selectedVillage.name : "",
                }));
              }}
              disabled={!address.districtId}
            >
              <option value="">Pilih Kelurahan/Desa</option>
              {regions.villages.map((village) => (
                <option key={village.id} value={village.id}>
                  {village.name}
                </option>
              ))}
            </select>

            <div className="flex gap-3">
              <input
                className="input w-1/2"
                placeholder="RT"
                value={address.rt}
                onChange={(e) =>
                  setAddress((a) => ({ ...a, rt: e.target.value }))
                }
              />
              <input
                className="input w-1/2"
                placeholder="RW"
                value={address.rw}
                onChange={(e) =>
                  setAddress((a) => ({ ...a, rw: e.target.value }))
                }
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
