import React from "react";

const Form = () => {
  return (
    <div className="flex justify-center">
      <form>
        <div className="gap-2 Form grid w-96">
          <input
            className="font-extralight border-2"
            type="text"
            placeholder="Nama"
          />
          <input
            className="font-extralight border-2"
            type="text"
            placeholder="Deskripsi"
          />
          <input
            className="font-extralight border-2"
            type="url"
            placeholder="Link Gambar"
          />
          <button
            onClick
            className="font-semibold border-2 flex gap-3 justify-center"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
