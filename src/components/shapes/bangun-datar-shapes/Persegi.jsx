import { useState } from "react";
import ShapeLayout from "../ShapeLayout";
import ShapeInput from "../ShapeInput";

export default function Persegi({ label, img }) {
  const [val, setVal] = useState("");
  const [res, setRes] = useState([]);

  const calcLuas = () => {
    const v = parseFloat(val);
    if (isNaN(v)) return setRes(["Input tidak valid"]);
    setRes([`Rumus: s x s`, `Input: ${v} x ${v}`, `Luas = ${v * v}`]);
    setVal("");
  };

  const calcKeliling = () => {
    const v = parseFloat(val);
    if (isNaN(v)) return setRes(["Input tidak valid"]);
    setRes([`Rumus: 4 x s`, `Input: 4 x ${v}`, `Keliling = ${4 * v}`]);
    setVal("");
  };

  return (
    <ShapeLayout label={label} img={img} res={res}>
      <ShapeInput value={val} onChange={setVal} placeholder="Sisi" />
      <div className="flex gap-4">
        <button onClick={calcLuas} className="bg-blue-600 text-white px-4 py-2 rounded">Hitung Luas</button>
        <button onClick={calcKeliling} className="bg-green-600 text-white px-4 py-2 rounded">Hitung Keliling</button>
      </div>
    </ShapeLayout>
  );
}
