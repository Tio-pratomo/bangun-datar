import { useState } from "react";
import Kubus from "../components/shapes/Kubus";
import Balok from "../components/shapes/Balok";
import Tabung from "../components/shapes/Tabung";
import Kerucut from "../components/shapes/Kerucut";
import Bola from "../components/shapes/Bola";
import LimasSegitiga from "../components/shapes/LimasSegitiga";
import LimasSegiempat from "../components/shapes/LimasSegiempat";
import LimasSegilima from "../components/shapes/LimasSegilima";
import LimasSegienam from "../components/shapes/LimasSegienam";
import PrismaSegitiga from "../components/shapes/PrismaSegitiga";
import PrismaSegiempat from "../components/shapes/PrismaSegiempat";
import PrismaSegilima from "../components/shapes/PrismaSegilima";
import PrismaSegienam from "../components/shapes/PrismaSegienam";
import ShapeLayout from "../components/shapes/ShapeLayout";
import kubusImg from "../img/Kubus.webp";
import introBangunRuangImg from "../img/limas-segilima.webp";
import balokImg from "../img/Balok.webp";
import tabungImg from "../img/Tabung.webp";
import kerucutImg from "../img/Kerucut.webp";
import bolaImg from "../img/Bola.webp";
import limasSegitigaImg from "../img/limas_segitiga.webp";
import limasSegiempatImg from "../img/limas_segiempat.webp";
import limasSegilimaImg from "../img/limas_segilima.webp";
import limasSegienamImg from "../img/limas_segienam.webp";
import prismaSegitigaImg from "../img/prima_segitiga.webp";
import prismaSegiempatImg from "../img/Balok.webp";
import prismaSegilimaImg from "../img/prisma_segilima.webp";
import prismaSegienamImg from "../img/prisma_segienam.webp";

const shapes = [
  { id: "kubus", label: "Kubus", img: kubusImg, component: Kubus },
  { id: "balok", label: "Balok", img: balokImg, component: Balok },
  { id: "tabung", label: "Tabung", img: tabungImg, component: Tabung },
  { id: "kerucut", label: "Kerucut", img: kerucutImg, component: Kerucut },
  { id: "bola", label: "Bola", img: bolaImg, component: Bola },
  {
    id: "limas-segitiga",
    label: "Limas Segitiga",
    img: limasSegitigaImg,
    component: LimasSegitiga,
  },
  {
    id: "limas-segiempat",
    label: "Limas Segiempat",
    img: limasSegiempatImg,
    component: LimasSegiempat,
  },
  {
    id: "limas-segilima",
    label: "Limas Segilima",
    img: limasSegilimaImg,
    component: LimasSegilima,
  },
  {
    id: "limas-segienam",
    label: "Limas Segienam",
    img: limasSegienamImg,
    component: LimasSegienam,
  },
  {
    id: "prisma-segitiga",
    label: "Prisma Segitiga",
    img: prismaSegitigaImg,
    component: PrismaSegitiga,
  },
  {
    id: "prisma-segiempat",
    label: "Prisma Segiempat",
    img: prismaSegiempatImg,
    component: PrismaSegiempat,
  },
  {
    id: "prisma-segilima",
    label: "Prisma Segilima",
    img: prismaSegilimaImg,
    component: PrismaSegilima,
  },
  {
    id: "prisma-segienam",
    label: "Prisma Segienam",
    img: prismaSegienamImg,
    component: PrismaSegienam,
  },
];

export default function BangunRuang() {
  const [selected, setSelected] = useState(null);
  const activeShape = shapes.find((s) => s.id === selected);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Bangun Ruang
      </h2>
      <div className="grid grid-cols-3 gap-3 mb-6">
        {shapes.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelected(s.id)}
            className={`w-full px-2 py-2 text-sm sm:text-base rounded border transition-colors ${
              selected === s.id
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white dark:bg-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {activeShape ? (
        <activeShape.component
          label={activeShape.label}
          img={activeShape.img}
        />
      ) : (
        <ShapeLayout label="Bangun Ruang" img={introBangunRuangImg} res={[]}>
          <p>
            Pilih salah satu bangun ruang di atas untuk memulai perhitungan.
          </p>
        </ShapeLayout>
      )}
    </div>
  );
}
