import { useState } from "react";
import ShapeLayout from "../ShapeLayout";
import ShapeInput from "../ShapeInput";

export default function JajarGenjang({ label, img }) {
  const [v1, setV1] = useState("");
  const [v2, setV2] = useState("");
  const [v3, setV3] = useState("");
  const [res, setRes] = useState([]);

  const calcLuas = () => {
    const alas = parseFloat(v1);
    const tinggi = parseFloat(v3);
    if (isNaN(alas) || isNaN(tinggi)) return setRes(["Input tidak valid"]);
    setRes([`Rumus: alas x tinggi`, `Input: ${alas} x ${tinggi}`, `Luas = ${alas * tinggi}`]);
    setV1(""); setV2(""); setV3("");
  };

  const calcKeliling = () => {
    const alas = parseFloat(v1);
    const miring = parseFloat(v2);
    if (isNaN(alas) || isNaN(miring)) return setRes(["Input tidak valid"]);
    setRes([`Rumus: 2 x (alas + sisi miring)`, `Input: 2 x (${alas} + ${miring})`, `Keliling = ${2 * (alas + miring)}`]);
    setV1(""); setV2(""); setV3("");
  };

  return (
    <ShapeLayout label={label} img={img} res={res}>
      <ShapeInput value={v1} onChange={setV1} placeholder="Alas" />
      <ShapeInput value={v2} onChange={setV2} placeholder="Sisi Miring" />
      <ShapeInput value={v3} onChange={setV3} placeholder="Tinggi" />
      <div className="flex gap-4">
        <button onClick={calcLuas} className="bg-blue-600 text-white px-4 py-2 rounded">Hitung Luas</button>
        <button onClick={calcKeliling} className="bg-green-600 text-white px-4 py-2 rounded">Hitung Keliling</button>
      </div>
    </ShapeLayout>
  );
}
