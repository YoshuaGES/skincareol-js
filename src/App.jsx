import { useState } from "react";
import { Barang } from "../barang";
import Card from "./komponen/Card";
import Form from "./komponen/Form";
import Trolley from "./komponen/Trolley";

function App() {
  const datadiri = {
    id: null,
    nama: "",
    deskripsi: "",
    ImageURL: "",
  };

  const [barang, setBarang] = useState(Barang);
  const [data, setData] = useState(datadiri);
  const { id, nama, deskripsi, ImageURL } = data;
  const [addMenu, setAddMenu] = useState(false);

  function form() {
    setAddMenu(!addMenu);
  }

  function handleOnChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (id) {
      const updatedBarang = barang.map((product) =>
        product.id === id ? data : product
      );
      setBarang(updatedBarang);
    } else {
      setBarang([...barang, { ...data, id: barang.length + 1 }]);
    }
    setData(datadiri);
  }

  function handleDelete(d) {
    const dataDelete = barang.filter((item) => item.id != d);
    setBarang(dataDelete);
  }
  function handleEdite(barangID) {
    const barangToEdit = barang.find((barang) => barang.id === barangID);
    setData(barangToEdit);
    setAddMenu(true);
  }
  function Purchase() {
    alert("Pembelian sedang diproses");
  }

  return (
    <div className="Halaman Awal">
      <div className="Shoppping flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 mt-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
          />
        </svg>
        <h1 className="mt-6 text-[25px] font-bold text-center pt-4 pb-4">
          SkinCare OL
        </h1>
      </div>
      <div className="garismenudantrolley px-8 flex justify-between">
        <button className="Trolley flex shadow rounded-lg px-2 py-2">
          <text className="Text Trolley font-semibold">Cart</text>
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
        <button
          onClick={form}
          className="Tambah Form flex justify-between shadow rounded-lg px-2 py-2"
        >
          <text className="Menu font-semibold px-2">Tambah Form</text>
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
      {addMenu && (
        <Form
          nama={nama}
          deskripsi={deskripsi}
          link={ImageURL}
          OnChange={handleOnChange}
          OnSubmit={handleSubmit}
        />
      )}
      <div className="Card grid grid-cols-4 gap-4 m-8 pt-4">
        {barang.map((barang) => (
          <Card
            id={barang.id}
            key={barang.id}
            gambar={barang.ImageURL}
            nama={barang.nama}
            deskripsi={barang.deskripsi}
            onClickDelete={() => handleDelete(barang.id)}
            onEdite={() => handleEdite(barang.id)}
          />
        ))}
      </div>
      <div className="Trolley">
        <Trolley
          id={barang.id}
          key={barang.id}
          gambar={barang.ImageURL}
          nama={barang.nama}
          deskripsi={barang.deskripsi}
        />
      </div>
    </div>
  );
}

export default App;
