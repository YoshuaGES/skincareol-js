import { useState } from "react";
import { Barang } from "../barang";
import Card from "./komponen/Card";
import Form from "./komponen/Form";

function App() {
  const [addMenu, setAddMenu] = useState(false);

  const datadiri = {
    nama: "",
    deskripsi: "",
    ImageURL: "",
  };

  const [barang, setBarang] = useState(Barang);
  const [data, setData] = useState(datadiri);
  const { nama, deskripsi, ImageURL } = data;

  function form() {
    setAddMenu(!addMenu);
  }

  function handleOnChange(e) {
    setData({
      ...data,
      id: barang.length + 1,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setBarang([...barang, data]);
    setData(datadiri);
  }

  return (
    <div className="">
      <div className="Trolley flex justify-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 mt-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>

        <h1 className="mt-4 text-[25px] font-bold text-center pt-4 pb-2">
          SkinCare OL
        </h1>
      </div>

      <div className="garismenu m-4 flex justify-end">
        <button onClick={form} className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>
      {addMenu && <Form />}
      <div className="barang grid grid-cols-4 gap-5 m-12">
        {barang.map((barang) => (
          <Card
            key={barang.id}
            gambar={barang.ImageURL}
            nama={barang.nama}
            deskripsi={barang.deskripsi}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
