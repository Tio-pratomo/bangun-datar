import { useState } from "react";
import ShapeLayout from "./ShapeLayout";
import ShapeInput from "./ShapeInput";

export default function Trapesium({ label, img }) {
  const [v1, setV1] = useState("");
  const [v2, setV2] = useState("");
  const [v3, setV3] = useState("");
  const [res, setRes] = useState([]);

  const calcLuas = () => {
    const a = parseFloat(v1);
    const b = parseFloat(v2);
    const t = parseFloat(v3);
    if (isNaN(a) || isNaN(b) || isNaN(t)) return setRes(["Input tidak valid"]);
    setRes([`Rumus: 1/2 x (a + b) x t`, `Input: 0.5 x (${a} + ${b}) x ${t}`, `Luas = ${0.5 * (a + b) * t}`]);
    setV1(""); setV2(""); setV3("");
  };

  const calcKeliling = () => {
    setRes(["Fitur keliling trapesium belum tersedia"]);
  };

  return (
    <ShapeLayout label={label} img={img} res={res}>
      <ShapeInput value={v1} onChange={setV1} placeholder="Sisi a" />
      <ShapeInput value={v2} onChange={setV2} placeholder="Sisi b" />
      <ShapeInput value={v3} onChange={setV3} placeholder="Tinggi" />
      <div className="flex gap-4">
        <button onClick={calcLuas} className="bg-blue-600 text-white px-4 py-2 rounded">Hitung Luas</button>
        <button onClick={calcKeliling} className="bg-green-600 text-white px-4 py-2 rounded">Hitung Keliling</button>
      </div>
    </ShapeLayout>
  );
}
