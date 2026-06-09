import { useState } from "react";
import ShapeLayout from "../ShapeLayout";
import ShapeInput from "../ShapeInput";

export default function PersegiPanjang({ label, img }) {
  const [v1, setV1] = useState("");
  const [v2, setV2] = useState("");
  const [res, setRes] = useState([]);

  const calcLuas = () => {
    const p = parseFloat(v1);
    const l = parseFloat(v2);
    if (isNaN(p) || isNaN(l)) return setRes(["Input tidak valid"]);
    setRes([`Rumus: p x l`, `Input: ${p} x ${l}`, `Luas = ${p * l}`]);
    setV1(""); setV2("");
  };

  const calcKeliling = () => {
    const p = parseFloat(v1);
    const l = parseFloat(v2);
    if (isNaN(p) || isNaN(l)) return setRes(["Input tidak valid"]);
    setRes([`Rumus: 2 x (p + l)`, `Input: 2 x (${p} + ${l})`, `Keliling = ${2 * (p + l)}`]);
    setV1(""); setV2("");
  };

  return (
    <ShapeLayout label={label} img={img} res={res}>
      <ShapeInput value={v1} onChange={setV1} placeholder="Panjang" />
      <ShapeInput value={v2} onChange={setV2} placeholder="Lebar" />
      <div className="flex gap-4">
        <button onClick={calcLuas} className="bg-blue-600 text-white px-4 py-2 rounded">Hitung Luas</button>
        <button onClick={calcKeliling} className="bg-green-600 text-white px-4 py-2 rounded">Hitung Keliling</button>
      </div>
    </ShapeLayout>
  );
}
