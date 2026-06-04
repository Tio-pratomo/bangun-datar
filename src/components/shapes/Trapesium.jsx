import { useState } from "react";
import ShapeLayout from "./ShapeLayout";
import ShapeInput from "./ShapeInput";

export default function Trapesium({ label, img }) {
  const [sideA, setSideA] = useState("");
  const [sideB, setSideB] = useState("");
  const [sideC, setSideC] = useState("");
  const [sideD, setSideD] = useState("");
  const [height, setHeight] = useState("");
  const [res, setRes] = useState([]);

  const calcLuas = () => {
    const a = parseFloat(sideA);
    const b = parseFloat(sideB);
    const t = parseFloat(height);
    if (isNaN(a) || isNaN(b) || isNaN(t)) return setRes(["Input tidak valid"]);
    setRes([`Rumus: 1/2 x (a + b) x t`, `Input: 0.5 x (${a} + ${b}) x ${t}`, `Luas = ${0.5 * (a + b) * t}`]);
    setSideA(""); setSideB(""); setHeight("");
  };
  const calcKeliling = () => {
    const a = parseFloat(sideA);
    const b = parseFloat(sideB);
    const c = parseFloat(sideC);
    const d = parseFloat(sideD);
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) return setRes(["Input tidak valid"]);
    setRes([`Rumus: a + b + c + d`, `Input: ${a} + ${b} + ${c} + ${d}`, `Keliling = ${a + b + c + d}`]);
    setSideA(""); setSideB(""); setSideC(""); setSideD("");
  };


  return (
    <ShapeLayout label={label} img={img} res={res}>
      <ShapeInput value={sideA} onChange={setSideA} placeholder="Sisi a" />
      <ShapeInput value={sideB} onChange={setSideB} placeholder="Sisi b" />
      <ShapeInput value={height} onChange={setHeight} placeholder="Tinggi" />
      <ShapeInput value={sideC} onChange={setSideC} placeholder="Sisi c" />
      <ShapeInput value={sideD} onChange={setSideD} placeholder="Sisi d" />
      <div className="flex gap-4">
        <button onClick={calcLuas} className="bg-blue-600 text-white px-4 py-2 rounded">Hitung Luas</button>
        <button onClick={calcKeliling} className="bg-green-600 text-white px-4 py-2 rounded">Hitung Keliling</button>
      </div>
    </ShapeLayout>
  );
}
