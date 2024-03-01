import React from "react";

const Form = ({ nama, deskripsi, link, OnChange, OnSubmit }) => {
  return (
    <div className="flex justify-center pt-4">
      <form onSubmit={OnSubmit}>
        <div className="gap-2 Form grid w-96">
          <input
            className="font-extralight border-2 rounded-lg"
            type="text"
            placeholder=" Nama"
            value={nama}
            onChange={OnChange}
            name="nama"
            id=""
          />
          <input
            className="font-extralight border-2 rounded-lg"
            type="text"
            placeholder=" Deskripsi"
            value={deskripsi}
            onChange={OnChange}
            name="deskripsi"
            id=""
          />
          <input
            className="font-extralight border-2 rounded-lg"
            type="url"
            placeholder=" Link Gambar"
            value={link}
            onChange={OnChange}
            name="ImageURL"
            id=""
          />
          <input
            onClick
            className="py-1 bg-orange-400 font-semibold border-orange-300 rounded-full flex gap-4 justify-center"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
