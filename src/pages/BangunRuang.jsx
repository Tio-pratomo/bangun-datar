import { useState } from "react";
import ShapeLayout from "../components/shapes/ShapeLayout";
import ShapeInput from "../components/shapes/ShapeInput";
import kubusImg from "../img/kubus.svg";
import balokImg from "../img/balok.svg";
import tabungImg from "../img/tabung.svg";
import kerucutImg from "../img/kerucut.svg";
import bolaImg from "../img/bola.svg";

const formatNumber = (n) => Number(n.toFixed(6));

const shapes = [
  { id: "kubus", label: "Kubus" },
  { id: "balok", label: "Balok" },
  { id: "tabung", label: "Tabung" },
  { id: "kerucut", label: "Kerucut" },
  { id: "bola", label: "Bola" },
  { id: "limas-segitiga", label: "Limas Segitiga" },
  { id: "limas-segiempat", label: "Limas Segiempat" },
  { id: "limas-segilima", label: "Limas Segilima" },
  { id: "limas-segienam", label: "Limas Segienam" },
  { id: "prisma-segitiga", label: "Prisma Segitiga" },
  { id: "prisma-segiempat", label: "Prisma Segiempat" },
  { id: "prisma-segilima", label: "Prisma Segilima" },
  { id: "prisma-segienam", label: "Prisma Segienam" },
];

function KubusCalculator() {
  const [sisi, setSisi] = useState("");
  const [res, setRes] = useState([]);

  const calcVolume = () => {
    const s = parseFloat(sisi);
    if (isNaN(s)) return setRes(["Input tidak valid"]);
    setRes([
      "Rumus: V = s³",
      `Input: V = ${formatNumber(s)}³`,
      `Volume = ${formatNumber(s ** 3)}`,
    ]);
    setSisi("");
  };

  const calcLuasPermukaan = () => {
    const s = parseFloat(sisi);
    if (isNaN(s)) return setRes(["Input tidak valid"]);
    setRes([
      "Rumus: L = 6 x s²",
      `Input: L = 6 x ${formatNumber(s)}²`,
      `Luas Permukaan = ${formatNumber(6 * s ** 2)}`,
    ]);
    setSisi("");
  };

  return (
    <ShapeLayout label="Kubus" img={kubusImg} res={res}>
      <ShapeInput value={sisi} onChange={setSisi} placeholder="Masukkan sisi" />
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

function BalokCalculator() {
  const [panjang, setPanjang] = useState("");
  const [lebar, setLebar] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [res, setRes] = useState([]);

  const calcVolume = () => {
    const p = parseFloat(panjang);
    const l = parseFloat(lebar);
    const t = parseFloat(tinggi);

    if (isNaN(p) || isNaN(l) || isNaN(t)) return setRes(["Input tidak valid"]);

    setRes([
      "Rumus: V = p x l x t",
      `Input: V = ${formatNumber(p)} x ${formatNumber(l)} x ${formatNumber(t)}`,
      `Volume = ${formatNumber(p * l * t)}`,
    ]);

    setPanjang("");
    setLebar("");
    setTinggi("");
  };

  const calcLuasPermukaan = () => {
    const p = parseFloat(panjang);
    const l = parseFloat(lebar);
    const t = parseFloat(tinggi);

    if (isNaN(p) || isNaN(l) || isNaN(t)) return setRes(["Input tidak valid"]);

    setRes([
      "Rumus: L = 2(pl + pt + lt)",
      `Input: L = 2((${formatNumber(p)} x ${formatNumber(l)}) + (${formatNumber(p)} x ${formatNumber(t)}) + (${formatNumber(l)} x ${formatNumber(t)}))`,
      `Luas Permukaan = ${formatNumber(2 * (p * l + p * t + l * t))}`,
    ]);

    setPanjang("");
    setLebar("");
    setTinggi("");
  };

  return (
    <ShapeLayout label="Balok" img={balokImg} res={res}>
      <ShapeInput
        value={panjang}
        onChange={setPanjang}
        placeholder="Masukkan panjang"
      />
      <ShapeInput
        value={lebar}
        onChange={setLebar}
        placeholder="Masukkan lebar"
      />
      <ShapeInput
        value={tinggi}
        onChange={setTinggi}
        placeholder="Masukkan tinggi"
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

function TabungCalculator() {
  const [jariJari, setJariJari] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [res, setRes] = useState([]);

  const calcVolume = () => {
    const r = parseFloat(jariJari);
    const t = parseFloat(tinggi);

    if (isNaN(r) || isNaN(t)) return setRes(["Input tidak valid"]);

    setRes([
      "Rumus: V = πr²t",
      `Input: V = π x ${formatNumber(r)}² x ${formatNumber(t)}`,
      `Volume = ${formatNumber(Math.PI * r ** 2 * t)}`,
    ]);

    setJariJari("");
    setTinggi("");
  };

  const calcLuasPermukaan = () => {
    const r = parseFloat(jariJari);
    const t = parseFloat(tinggi);

    if (isNaN(r) || isNaN(t)) return setRes(["Input tidak valid"]);

    setRes([
      "Rumus: L = 2πr(r + t)",
      `Input: L = 2 x π x ${formatNumber(r)} x (${formatNumber(r)} + ${formatNumber(t)})`,
      `Luas Permukaan = ${formatNumber(2 * Math.PI * r * (r + t))}`,
    ]);

    setJariJari("");
    setTinggi("");
  };

  return (
    <ShapeLayout label="Tabung" img={tabungImg} res={res}>
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

function KerucutCalculator() {
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
    <ShapeLayout label="Kerucut" img={kerucutImg} res={res}>
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

function BolaCalculator() {
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
    <ShapeLayout label="Bola" img={bolaImg} res={res}>
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

export default function BangunRuang() {
  const [selected, setSelected] = useState(null);
  const activeShape = shapes.find((s) => s.id === selected);

  const renderCalculator = () => {
    if (!selected) return null;
    if (selected === "kubus") return <KubusCalculator />;
    if (selected === "balok") return <BalokCalculator />;
    if (selected === "tabung") return <TabungCalculator />;
    if (selected === "kerucut") return <KerucutCalculator />;
    if (selected === "bola") return <BolaCalculator />;

    return (
      <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
        <p className="text-lg text-gray-900 dark:text-gray-100">
          Kalkulator {activeShape?.label} (akan datang)
        </p>
      </div>
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Bangun Ruang</h2>
      <div className="flex flex-wrap gap-4 mb-6">
        {shapes.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelected(s.id)}
            className={`px-4 py-2 rounded border transition-colors ${
              selected === s.id
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white dark:bg-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {renderCalculator()}
    </div>
  );
}
