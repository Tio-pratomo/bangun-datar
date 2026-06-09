import { useState } from "react";
import { formatNumber } from "../utils";
import ShapeLayout from "../ShapeLayout";
import ShapeInput from "../ShapeInput";

export default function Balok({ label, img }) {
  const [panjang, setPanjang] = useState("");
  const [lebar, setLebar] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [res, setRes] = useState([]);

  const calcVolume = () => {
    const p = parseFloat(panjang);
    const l = parseFloat(lebar);
    const t = parseFloat(tinggi);

    if (isNaN(p) || isNaN(l) || isNaN(t)) return setRes(["Input tidak valid"]);

    setRes([
      "Rumus: V = p x l x t",
      `Input: V = ${formatNumber(p)} x ${formatNumber(l)} x ${formatNumber(t)}`,
      `Volume = ${formatNumber(p * l * t)}`,
    ]);

    setPanjang("");
    setLebar("");
    setTinggi("");
  };

  const calcLuasPermukaan = () => {
    const p = parseFloat(panjang);
    const l = parseFloat(lebar);
    const t = parseFloat(tinggi);

    if (isNaN(p) || isNaN(l) || isNaN(t)) return setRes(["Input tidak valid"]);

    setRes([
      "Rumus: L = 2(pl + pt + lt)",
      `Input: L = 2((${formatNumber(p)} x ${formatNumber(l)}) + (${formatNumber(p)} x ${formatNumber(t)}) + (${formatNumber(l)} x ${formatNumber(t)}))`,
      `Luas Permukaan = ${formatNumber(2 * (p * l + p * t + l * t))}`,
    ]);

    setPanjang("");
    setLebar("");
    setTinggi("");
  };

  return (
    <ShapeLayout label={label} img={img} res={res}>
      <ShapeInput
        value={panjang}
        onChange={setPanjang}
        placeholder="Masukkan panjang"
      />
      <ShapeInput
        value={lebar}
        onChange={setLebar}
        placeholder="Masukkan lebar"
      />
      <ShapeInput
        value={tinggi}
        onChange={setTinggi}
        placeholder="Masukkan tinggi"
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
