import { useState } from "react";
import { formatNumber } from "./utils";
import ShapeLayout from "./ShapeLayout";
import ShapeInput from "./ShapeInput";

export default function Tabung({ label, img }) {
  const [jariJari, setJariJari] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [res, setRes] = useState([]);

  const calcVolume = () => {
    const r = parseFloat(jariJari);
    const t = parseFloat(tinggi);

    if (isNaN(r) || isNaN(t)) return setRes(["Input tidak valid"]);

    setRes([
      "Rumus: V = πr²t",
      `Input: V = π x ${formatNumber(r)}² x ${formatNumber(t)}`,
      `Volume = ${formatNumber(Math.PI * r ** 2 * t)}`,
    ]);

    setJariJari("");
    setTinggi("");
  };

  const calcLuasPermukaan = () => {
    const r = parseFloat(jariJari);
    const t = parseFloat(tinggi);

    if (isNaN(r) || isNaN(t)) return setRes(["Input tidak valid"]);

    setRes([
      "Rumus: L = 2πr(r + t)",
      `Input: L = 2 x π x ${formatNumber(r)} x (${formatNumber(r)} + ${formatNumber(t)})`,
      `Luas Permukaan = ${formatNumber(2 * Math.PI * r * (r + t))}`,
    ]);

    setJariJari("");
    setTinggi("");
  };

  return (
    <ShapeLayout label={label} img={img} res={res}>
      <ShapeInput
        value={jariJari}
        onChange={setJariJari}
        placeholder="Masukkan jari-jari"
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
