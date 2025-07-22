import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import http from "../lib/http";

export default function CitizenFormPage() {
  const [nationalId, setNationalId] = useState("111111111111");
  const [fullName, setFullName] = useState("John Doe");
  const [gender, setGender] = useState("L");
  const [dateOfBirth, setDateOfBirth] = useState("2000-12-12");
  const [placeOfBirth, setPlaceOfBirth] = useState("Jakarta");
  const [religion, setReligion] = useState("Other");
  const [maritalStatus, setMaritalStatus] = useState("Other");
  const [bloodType, setBloodType] = useState("O");
  const [occupation, setOccupation] = useState("Programmer");
  const [nationality, setNationality] = useState("Indonesia");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const AddressId = localStorage.getItem("AddressId");
    
    try {
      await http.post(
        "/citizens/add",
        {
          nationalId,
          fullName,
          gender,
          dateOfBirth,
          placeOfBirth,
          religion,
          maritalStatus,
          bloodType,
          occupation,
          nationality,
          AddressId: AddressId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      localStorage.removeItem("AddressId");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-8 rounded-xl"
    >
      <h2 className="text-2xl mb-4 font-bold">Form Data Diri</h2>
      <input
        className="input mb-2"
        name="NationalId"
        placeholder="NIK"
        value={nationalId}
        onChange={(e) => setNationalId(e.target.value)}
      />
      <input
        className="input mb-2"
        name="fullName"
        placeholder="Nama Lengkap"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <select
        className="input mb-2"
        name="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">Pilih Jenis Kelamin</option>
        <option value="L">Laki-laki</option>
        <option value="P">Perempuan</option>
      </select>
      <input
        className="input mb-2"
        name="dateOfBirth"
        type="date"
        placeholder="Tanggal Lahir"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <input
        className="input mb-2"
        name="placeOfBirth"
        placeholder="Tempat Lahir"
        value={placeOfBirth}
        onChange={(e) => setPlaceOfBirth(e.target.value)}
      />
      <input
        className="input mb-2"
        name="religion"
        placeholder="Agama"
        value={religion}
        onChange={(e) => setReligion(e.target.value)}
      />
      <input
        className="input mb-2"
        name="maritalStatus"
        placeholder="Status Perkawinan"
        value={maritalStatus}
        onChange={(e) => setMaritalStatus(e.target.value)}
      />
      <input
        className="input mb-2"
        name="bloodType"
        placeholder="Golongan Darah"
        value={bloodType}
        onChange={(e) => setBloodType(e.target.value)}
      />
      <input
        className="input mb-2"
        name="occupation"
        placeholder="Pekerjaan"
        value={occupation}
        onChange={(e) => setOccupation(e.target.value)}
      />
      <input
        className="input mb-4"
        name="nationality"
        placeholder="Kewarganegaraan"
        value={nationality}
        onChange={(e) => setNationality(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Simpan Data Diri
      </button>
    </form>
  );
}
