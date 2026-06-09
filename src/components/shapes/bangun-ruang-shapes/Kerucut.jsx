import { useState } from "react";
import { formatNumber } from "../utils";
import ShapeLayout from "../ShapeLayout";
import ShapeInput from "../ShapeInput";

export default function Kerucut({ label, img }) {
  const [jariJari, setJariJari] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [garisPelukis, setGarisPelukis] = useState("");
  const [res, setRes] = useState([]);

  const calcVolume = () => {
    const r = parseFloat(jariJari);
    const t = parseFloat(tinggi);

    if (isNaN(r) || isNaN(t)) return setRes(["Input tidak valid"]);

    setRes([
      "Rumus: V = 1/3 πr²t",
      `Input: V = 1/3 x π x ${formatNumber(r)}² x ${formatNumber(t)}`,
      `Volume = ${formatNumber((1 / 3) * Math.PI * r ** 2 * t)}`,
    ]);

    setJariJari("");
    setTinggi("");
    setGarisPelukis("");
  };

  const calcLuasPermukaan = () => {
    const r = parseFloat(jariJari);
    const t = parseFloat(tinggi);
    const sInput = parseFloat(garisPelukis);

    if (isNaN(r) || isNaN(t)) return setRes(["Input tidak valid"]);

    const s = isNaN(sInput) ? Math.sqrt(r ** 2 + t ** 2) : sInput;

    setRes([
      "Rumus: L = πr(r + s)",
      `Input: L = π x ${formatNumber(r)} x (${formatNumber(r)} + ${formatNumber(s)})`,
      `Luas Permukaan = ${formatNumber(Math.PI * r * (r + s))}`,
    ]);

    setJariJari("");
    setTinggi("");
    setGarisPelukis("");
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
      <ShapeInput
        value={garisPelukis}
        onChange={setGarisPelukis}
        placeholder="Masukkan garis pelukis (opsional)"
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
