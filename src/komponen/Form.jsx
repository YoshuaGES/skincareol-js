import React from "react";

const Form = ({ nama, deskripsi, link, OnChange, OnSubmit }) => {
  return (
    <div className="flex justify-center">
      <form onSubmit={OnSubmit}>
        <div className="gap-2 Form grid w-96">
          <input
            className="font-extralight border-2"
            type="text"
            placeholder="Nama"
            value={nama}
            onChange={OnChange}
            name="nama"
          />
          <input
            className="font-extralight border-2"
            type="text"
            placeholder="Deskripsi"
            value={deskripsi}
            onChange={OnChange}
            name="deskripsi"
          />
          <input
            className="font-extralight border-2"
            type="url"
            placeholder="Link Gambar"
            value={link}
            onChange={OnChange}
            name="ImageURL"
          />
          <input
            onClick
            className="font-semibold border-2 flex gap-3 justify-center"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
