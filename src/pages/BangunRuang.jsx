import { useState } from "react";
import ShapeLayout from "../components/shapes/ShapeLayout";
import ShapeInput from "../components/shapes/ShapeInput";
import kubusImg from "../img/kubus.svg";
import balokImg from "../img/balok.svg";
import tabungImg from "../img/tabung.svg";
import kerucutImg from "../img/kerucut.svg";
import bolaImg from "../img/bola.svg";
import limasImg from "../img/limas.svg";
import prismaImg from "../img/prisma.svg";
import prismaSegiempatImg from "../img/prisma-segiempat.svg";
import prismaSegilimaImg from "../img/prisma-segilima.svg";
import prismaSegienamImg from "../img/prisma-segienam.svg";

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

function LimasCalculator({ label }) {
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
    <ShapeLayout label={label} img={limasImg} res={res}>
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

function PrismaCalculator({ label }) {
  const [luasAlas, setLuasAlas] = useState("");
  const [kelilingAlas, setKelilingAlas] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [res, setRes] = useState([]);

  // Pilih gambar berdasarkan label prisma
  const getPrismaImage = () => {
    if (label.includes("Segiempat")) return prismaSegiempatImg;
    if (label.includes("Segilima")) return prismaSegilimaImg;
    if (label.includes("Segienam")) return prismaSegienamImg;
    return prismaImg; // default
  };

  const calcVolume = () => {
    const la = parseFloat(luasAlas);
    const t = parseFloat(tinggi);
    if (isNaN(la) || isNaN(t) || la <= 0 || t <= 0)
      return setRes(["Input tidak valid"]);
    setRes([
      "Rumus: V = Luas Alas x Tinggi",
      `Input: V = ${formatNumber(la)} x ${formatNumber(t)}`,
      `Volume = ${formatNumber(la * t)}`,
    ]);
    setLuasAlas("");
    setKelilingAlas("");
    setTinggi("");
  };

  const calcLuasPermukaan = () => {
    const la = parseFloat(luasAlas);
    const ka = parseFloat(kelilingAlas);
    const t = parseFloat(tinggi);
    if (isNaN(la) || isNaN(ka) || isNaN(t) || la <= 0 || ka <= 0 || t <= 0)
      return setRes(["Input tidak valid"]);
    setRes([
      "Rumus: L = 2 x Luas Alas + Keliling Alas x Tinggi",
      `Input: L = 2 x ${formatNumber(la)} + ${formatNumber(ka)} x ${formatNumber(t)}`,
      `Luas Permukaan = ${formatNumber(2 * la + ka * t)}`,
    ]);
    setLuasAlas("");
    setKelilingAlas("");
    setTinggi("");
  };

  return (
    <ShapeLayout label={label} img={getPrismaImage()} res={res}>
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
        placeholder="Masukkan tinggi prisma"
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
    if (selected?.startsWith("limas-"))
      return <LimasCalculator label={activeShape?.label} />;
    if (selected?.startsWith("prisma-"))
      return <PrismaCalculator label={activeShape?.label} />;
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
