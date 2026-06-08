import { useState } from "react";
import { formatNumber } from "./utils";
import ShapeLayout from "./ShapeLayout";
import ShapeInput from "./ShapeInput";

export default function PrismaSegienam({ label, img }) {
  const [luasAlas, setLuasAlas] = useState("");
  const [kelilingAlas, setKelilingAlas] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [res, setRes] = useState([]);

  const calcVolume = () => {
    const la = parseFloat(luasAlas);
    const t = parseFloat(tinggi);
    if (isNaN(la) || isNaN(t) || la <= 0 || t <= 0)
      return setRes(["Input tidak valid"]);
    setRes([
      "Rumus: V = Luas Alas x Tinggi",
      `Input: V = ${formatNumber(la)} x ${formatNumber(t)}`,
      `Volume = ${formatNumber(la * t)}`,
    ]);
    setLuasAlas("");
    setKelilingAlas("");
    setTinggi("");
  };

  const calcLuasPermukaan = () => {
    const la = parseFloat(luasAlas);
    const ka = parseFloat(kelilingAlas);
    const t = parseFloat(tinggi);
    if (isNaN(la) || isNaN(ka) || isNaN(t) || la <= 0 || ka <= 0 || t <= 0)
      return setRes(["Input tidak valid"]);
    setRes([
      "Rumus: L = 2 x Luas Alas + Keliling Alas x Tinggi",
      `Input: L = 2 x ${formatNumber(la)} + ${formatNumber(ka)} x ${formatNumber(t)}`,
      `Luas Permukaan = ${formatNumber(2 * la + ka * t)}`,
    ]);
    setLuasAlas("");
    setKelilingAlas("");
    setTinggi("");
  };

  return (
    <ShapeLayout label={label} img={img} res={res}>
      <ShapeInput
        value={luasAlas}
        onChange={setLuasAlas}
        placeholder="Masukkan luas alas"
      />
      <ShapeInput
        value={kelilingAlas}
        onChange={setKelilingAlas}
        placeholder="Masukkan keliling alas"
      />
      <ShapeInput
        value={tinggi}
        onChange={setTinggi}
        placeholder="Masukkan tinggi prisma"
      />
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={calcVolume}
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          Hitung Volume
        </button>
        <button
          onClick={calcLuasPermukaan}
          className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
        >
          Hitung Luas Permukaan
        </button>
      </div>
    </ShapeLayout>
  );
}
