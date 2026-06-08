import { useState } from "react";
import { formatNumber } from "./utils";
import ShapeLayout from "./ShapeLayout";
import ShapeInput from "./ShapeInput";

export default function Bola({ label, img }) {
  const [jariJari, setJariJari] = useState("");
  const [res, setRes] = useState([]);

  const calcVolume = () => {
    const r = parseFloat(jariJari);

    if (isNaN(r)) return setRes(["Input tidak valid"]);

    setRes([
      "Rumus: V = 4/3 πr³",
      `Input: V = 4/3 x π x ${formatNumber(r)}³`,
      `Volume = ${formatNumber((4 / 3) * Math.PI * r ** 3)}`,
    ]);

    setJariJari("");
  };

  const calcLuasPermukaan = () => {
    const r = parseFloat(jariJari);

    if (isNaN(r)) return setRes(["Input tidak valid"]);

    setRes([
      "Rumus: L = 4πr²",
      `Input: L = 4 x π x ${formatNumber(r)}²`,
      `Luas Permukaan = ${formatNumber(4 * Math.PI * r ** 2)}`,
    ]);

    setJariJari("");
  };

  return (
    <ShapeLayout label={label} img={img} res={res}>
      <ShapeInput
        value={jariJari}
        onChange={setJariJari}
        placeholder="Masukkan jari-jari"
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
