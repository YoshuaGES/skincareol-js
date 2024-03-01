import React, { useState } from "react";

// const [nilai, setNilai] = useState(0);

// const [trolley, setTrolley] = useState([]);

function jumlah() {
  SetNilai(nilai + 1);
}

function kurang() {
  setNilai(nilai - 1);
}

const Trolley = () => {
  return (
    <div className="Cart m-8">
      <h1 className="Cart font-bold text-xl m-4">Cart</h1>
      <img
        className="gambar1 rounded-t-lg m-4"
        src="https://media.istockphoto.com/id/1550128319/photo/woman-applying-essential-oil.webp?b=1&s=170667a&w=0&k=20&c=RLsgbZQZjoF84-7j6yuYJXdMu7Ry0-0vUN5kYrx_Sus="
      />
      <div className="m-4">
        <p className="text-[15px] font font-semibold">Nama</p>
      </div>
      <div className="text-[12px] font-normal m-4">
        <p className="text-[12px] font-normal">Deskripsi 1</p>
      </div>
      <div className="flex m-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
      {/* <div className="tambahkurang1">
        <p onClick={jumlah}>{nilai >= 10 ? "" : "+"}</p>
        <p onClick={kurang}>{nilai <= 0 ? "" : "-"}</p>
      </div> */}
      <div className="MinusPlus2 Cart2 m-4">
        <img
          className="gambar2"
          src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D"
        ></img>
        <p className="pt-2 text-[15px] font-semibold">Nama</p>
        <div className="Deskripsi2">
          <p className="Deskripsi2 text-[12px] pt-2">Deskripsi 2</p>
        </div>
        <div className="MinusPlus2 flex mt-4 mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        <div className="pb-2 pt-2">
          <img
            className="gambar3"
            src="https://images.unsplash.com/photo-1500534623283-312aade485b7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D"
          ></img>
          <p className="pt-2 text-[15px] font font-semibold">Nama</p>
        </div>
        <div className="text-[12px] font-normal pb-2">
          <p className="text-[12px] font-normal">Deskripsi 3</p>
        </div>
        <div className="flex m1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        <div className="pb-2 pt-2">
          <img
            className="gambar3"
            src="https://images.unsplash.com/photo-1627213742863-46b836499634?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8MHwwfHx8MA%3D%3D"
          ></img>
          <p className="pt-2 text-[15px] font font-semibold">Nama</p>
        </div>
        <div className="text-[12px] font-normal pb-2">
          <p className="text-[12px] font-normal">Deskripsi 4</p>
        </div>
        <div className="flex m1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Trolley;
