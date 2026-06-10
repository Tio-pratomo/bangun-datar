import { useState } from "react";
import CategoryModal from "../components/CategoryModal";
import Kubus from "../components/shapes/bangun-ruang-shapes/Kubus";
import Balok from "../components/shapes/bangun-ruang-shapes/Balok";
import Tabung from "../components/shapes/bangun-ruang-shapes/Tabung";
import Kerucut from "../components/shapes/bangun-ruang-shapes/Kerucut";
import Bola from "../components/shapes/bangun-ruang-shapes/Bola";
import LimasSegitiga from "../components/shapes/bangun-ruang-shapes/LimasSegitiga";
import LimasSegiempat from "../components/shapes/bangun-ruang-shapes/LimasSegiempat";
import LimasSegilima from "../components/shapes/bangun-ruang-shapes/LimasSegilima";
import LimasSegienam from "../components/shapes/bangun-ruang-shapes/LimasSegienam";
import PrismaSegitiga from "../components/shapes/bangun-ruang-shapes/PrismaSegitiga";
import PrismaSegiempat from "../components/shapes/bangun-ruang-shapes/PrismaSegiempat";
import PrismaSegilima from "../components/shapes/bangun-ruang-shapes/PrismaSegilima";
import PrismaSegienam from "../components/shapes/bangun-ruang-shapes/PrismaSegienam";
import kubusImg from "../img/Kubus.webp";
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

const limasOptions = [
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
];

const prismaOptions = [
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

const shapes = [
  { id: "kubus", label: "Kubus", img: kubusImg, component: Kubus },
  { id: "balok", label: "Balok", img: balokImg, component: Balok },
  { id: "tabung", label: "Tabung", img: tabungImg, component: Tabung },
  { id: "kerucut", label: "Kerucut", img: kerucutImg, component: Kerucut },
  { id: "bola", label: "Bola", img: bolaImg, component: Bola },
  {
    id: "limas",
    label: "Limas",
    img: limasSegitigaImg,
    isCategory: true,
    options: limasOptions,
  },
  {
    id: "prisma",
    label: "Prisma",
    img: prismaSegitigaImg,
    isCategory: true,
    options: prismaOptions,
  },
];

export default function BangunRuang() {
  const [selected, setSelected] = useState(null);
  const [modalData, setModalData] = useState({
    isOpen: false,
    title: "",
    options: [],
  });

  const allShapes = [...shapes, ...limasOptions, ...prismaOptions];
  const activeShape = allShapes.find((s) => s.id === selected);

  const handleShapeClick = (shape) => {
    if (shape.isCategory) {
      setModalData({
        isOpen: true,
        title: `Pilih Kategori ${shape.label}`,
        options: shape.options,
      });
    } else {
      setSelected(shape.id);
    }
  };

  return (
    <div className="p-6">
      {!activeShape && (
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Kalkulator Bangun Ruang
        </h2>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
        {shapes.map((shape) => (
          <button
            key={shape.id}
            onClick={() => handleShapeClick(shape)}
            className={`px-3 py-2 rounded border transition-all text-sm font-medium ${
              selected?.startsWith(shape.id)
                ? "bg-blue-600 text-white border-blue-600 shadow-md"
                : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:border-blue-400"
            }`}
          >
            {shape.label}
          </button>
        ))}
      </div>

      {activeShape ? (
        <activeShape.component
          label={activeShape.label}
          img={activeShape.img}
        />
      ) : null}

      <CategoryModal
        isOpen={modalData.isOpen}
        title={modalData.title}
        options={modalData.options}
        onClose={() => setModalData({ ...modalData, isOpen: false })}
        onSelect={(opt) => setSelected(opt.id)}
      />
    </div>
  );
}
