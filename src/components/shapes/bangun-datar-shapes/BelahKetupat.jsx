import { useState } from "react";
import ShapeLayout from "../ShapeLayout";
import ShapeInput from "../ShapeInput";

export default function BelahKetupat({ label, img }) {
  const [v1, setV1] = useState("");
  const [v2, setV2] = useState("");
  const [v3, setV3] = useState("");
  const [res, setRes] = useState([]);

  const calcLuas = () => {
    const d1 = parseFloat(v1);
    const d2 = parseFloat(v2);
    if (isNaN(d1) || isNaN(d2)) return setRes(["Input tidak valid"]);
    setRes([`Rumus: 1/2 x d1 x d2`, `Input: 0.5 x ${d1} x ${d2}`, `Luas = ${0.5 * d1 * d2}`]);
    setV1(""); setV2(""); setV3("");
  };

  const calcKeliling = () => {
    const s = parseFloat(v3);
    if (isNaN(s)) return setRes(["Input tidak valid"]);
    setRes([`Rumus: 4 x s`, `Input: 4 x ${s}`, `Keliling = ${4 * s}`]);
    setV1(""); setV2(""); setV3("");
  };

  return (
    <ShapeLayout label={label} img={img} res={res}>
      <ShapeInput value={v1} onChange={setV1} placeholder="Diagonal 1" />
      <ShapeInput value={v2} onChange={setV2} placeholder="Diagonal 2" />
      <ShapeInput value={v3} onChange={setV3} placeholder="Sisi" />
      <div className="flex gap-4">
        <button onClick={calcLuas} className="bg-blue-600 text-white px-4 py-2 rounded">Hitung Luas</button>
        <button onClick={calcKeliling} className="bg-green-600 text-white px-4 py-2 rounded">Hitung Keliling</button>
      </div>
    </ShapeLayout>
  );
}
