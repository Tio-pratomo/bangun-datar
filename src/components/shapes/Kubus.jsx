import { useState } from "react";
import { formatNumber } from "./utils";
import ShapeLayout from "./ShapeLayout";
import ShapeInput from "./ShapeInput";

export default function Kubus({ label, img }) {
  const [sisi, setSisi] = useState("");
  const [res, setRes] = useState([]);

  const calcVolume = () => {
    const s = parseFloat(sisi);
    if (isNaN(s)) return setRes(["Input tidak valid"]);
    setRes([
      "Rumus: V = s³",
      `Input: V = ${formatNumber(s)}³`,
      `Volume = ${formatNumber(s ** 3)}`,
    ]);
    setSisi("");
  };

  const calcLuasPermukaan = () => {
    const s = parseFloat(sisi);
    if (isNaN(s)) return setRes(["Input tidak valid"]);
    setRes([
      "Rumus: L = 6 x s²",
      `Input: L = 6 x ${formatNumber(s)}²`,
      `Luas Permukaan = ${formatNumber(6 * s ** 2)}`,
    ]);
    setSisi("");
  };

  return (
    <ShapeLayout label={label} img={img} res={res}>
      <ShapeInput value={sisi} onChange={setSisi} placeholder="Masukkan sisi" />
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
