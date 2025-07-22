import React from "react";

export default function AddressForm({ address, setAddress }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="block mb-1 font-semibold">Provinsi *</label>
        <input
          className="input"
          name="provinceName"
          value={address.provinceName}
          onChange={(e) =>
            setAddress((a) => ({ ...a, provinceName: e.target.value }))
          }
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Kabupaten/Kota *</label>
        <input
          className="input"
          name="regencyName"
          value={address.regencyName}
          onChange={(e) =>
            setAddress((a) => ({ ...a, regencyName: e.target.value }))
          }
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Kecamatan *</label>
        <input
          className="input"
          name="districtName"
          value={address.districtName}
          onChange={(e) =>
            setAddress((a) => ({ ...a, districtName: e.target.value }))
          }
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Kelurahan/Desa *</label>
        <input
          className="input"
          name="villageName"
          value={address.villageName}
          onChange={(e) =>
            setAddress((a) => ({ ...a, villageName: e.target.value }))
          }
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">RT *</label>
        <input
          className="input"
          name="rt"
          value={address.rt}
          onChange={(e) => setAddress((a) => ({ ...a, rt: e.target.value }))}
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">RW *</label>
        <input
          className="input"
          name="rw"
          value={address.rw}
          onChange={(e) => setAddress((a) => ({ ...a, rw: e.target.value }))}
          required
        />
      </div>
      <div className="md:col-span-2">
        <label className="block mb-1 font-semibold">
          Jalan/Alamat Lengkap *
        </label>
        <input
          className="input"
          name="street"
          value={address.street}
          onChange={(e) =>
            setAddress((a) => ({ ...a, street: e.target.value }))
          }
          required
        />
      </div>
      <div className="md:col-span-2">
        <label className="block mb-1 font-semibold">Kode Pos</label>
        <input
          className="input"
          name="postalCode"
          value={address.postalCode}
          onChange={(e) =>
            setAddress((a) => ({ ...a, postalCode: e.target.value }))
          }
        />
      </div>
    </div>
  );
}
