import { useState } from "react";
import { formatNumber } from "./utils";
import ShapeLayout from "./ShapeLayout";
import ShapeInput from "./ShapeInput";

export default function LimasSegilima({ label, img }) {
  const [luasAlas, setLuasAlas] = useState("");
  const [kelilingAlas, setKelilingAlas] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [tinggiSisiTegak, setTinggiSisiTegak] = useState("");
  const [res, setRes] = useState([]);

  const calcVolume = () => {
    const la = parseFloat(luasAlas);
    const t = parseFloat(tinggi);
    if (isNaN(la) || isNaN(t) || la <= 0 || t <= 0)
      return setRes(["Input tidak valid"]);
    setRes([
      "Rumus: V = 1/3 x Luas Alas x Tinggi",
      `Input: V = 1/3 x ${formatNumber(la)} x ${formatNumber(t)}`,
      `Volume = ${formatNumber((1 / 3) * la * t)}`,
    ]);
    setLuasAlas("");
    setKelilingAlas("");
    setTinggi("");
    setTinggiSisiTegak("");
  };

  const calcLuasPermukaan = () => {
    const la = parseFloat(luasAlas);
    const ka = parseFloat(kelilingAlas);
    const tst = parseFloat(tinggiSisiTegak);
    if (isNaN(la) || isNaN(ka) || isNaN(tst) || la <= 0 || ka <= 0 || tst <= 0)
      return setRes(["Input tidak valid"]);
    setRes([
      "Rumus: L = Luas Alas + 1/2 x Keliling Alas x Tinggi Sisi Tegak",
      `Input: L = ${formatNumber(la)} + 1/2 x ${formatNumber(ka)} x ${formatNumber(tst)}`,
      `Luas Permukaan = ${formatNumber(la + 0.5 * ka * tst)}`,
    ]);
    setLuasAlas("");
    setKelilingAlas("");
    setTinggi("");
    setTinggiSisiTegak("");
  };

  return (
    <ShapeLayout label={label} img={img} res={res}>
      <ShapeInput
        value={luasAlas}
        onChange={setLuasAlas}
        placeholder="Masukkan luas alas"
      />
      <ShapeInput
        value={kelilingAlas}
        onChange={setKelilingAlas}
        placeholder="Masukkan keliling alas"
      />
      <ShapeInput
        value={tinggi}
        onChange={setTinggi}
        placeholder="Masukkan tinggi limas"
      />
      <ShapeInput
        value={tinggiSisiTegak}
        onChange={setTinggiSisiTegak}
        placeholder="Masukkan tinggi sisi tegak"
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
