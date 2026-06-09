import { useState } from "react";
import ShapeLayout from "../ShapeLayout";
import ShapeInput from "../ShapeInput";

export default function Lingkaran({ label, img }) {
  const [val, setVal] = useState("");
  const [res, setRes] = useState([]);

  const calcLuas = () => {
    const r = parseFloat(val);
    if (isNaN(r)) return setRes(["Input tidak valid"]);
    setRes([`Rumus: 3,14 x r x r`, `Input: 3,14 x ${r} x ${r}`, `Luas = ${3.14 * r * r}`]);
    setVal("");
  };

  const calcKeliling = () => {
    const r = parseFloat(val);
    if (isNaN(r)) return setRes(["Input tidak valid"]);
    setRes([`Rumus: 2 x 3,14 x r`, `Input: 2 x 3,14 x ${r}`, `Keliling = ${2 * 3.14 * r}`]);
    setVal("");
  };

  return (
    <ShapeLayout label={label} img={img} res={res}>
      <ShapeInput value={val} onChange={setVal} placeholder="Jari-jari" />
      <div className="flex gap-4">
        <button onClick={calcLuas} className="bg-blue-600 text-white px-4 py-2 rounded">Hitung Luas</button>
        <button onClick={calcKeliling} className="bg-green-600 text-white px-4 py-2 rounded">Hitung Keliling</button>
      </div>
    </ShapeLayout>
  );
}
