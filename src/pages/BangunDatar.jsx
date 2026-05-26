import { useState } from "react";
import Persegi from "../components/shapes/Persegi";
import PersegiPanjang from "../components/shapes/PersegiPanjang";
import Segitiga from "../components/shapes/Segitiga";
import Lingkaran from "../components/shapes/Lingkaran";
import Trapesium from "../components/shapes/Trapesium";
import JajarGenjang from "../components/shapes/JajarGenjang";
import BelahKetupat from "../components/shapes/BelahKetupat";
import LayangLayang from "../components/shapes/LayangLayang";

const shapes = [
  {
    id: "persegi",
    label: "Persegi",
    img: "/src/img/Persegi.png",
    component: Persegi,
  },
  {
    id: "persegi-panjang",
    label: "Persegi Panjang",
    img: "/src/img/Persegi_Panjang.png",
    component: PersegiPanjang,
  },
  {
    id: "segitiga",
    label: "Segitiga",
    img: "/src/img/Segitiga.png",
    component: Segitiga,
  },
  {
    id: "lingkaran",
    label: "Lingkaran",
    img: "/src/img/Lingkaran.png",
    component: Lingkaran,
  },
  {
    id: "trapesium",
    label: "Trapesium",
    img: "/src/img/Trapesium.png",
    component: Trapesium,
  },
  {
    id: "jajar-genjang",
    label: "Jajar Genjang",
    img: "/src/img/Jajar_Genjang.png",
    component: JajarGenjang,
  },
  {
    id: "belah-ketupat",
    label: "Belah Ketupat",
    img: "/src/img/Belah_Ketupat.png",
    component: BelahKetupat,
  },
  {
    id: "layang-layang",
    label: "Layang-layang",
    img: "/src/img/Layang-Layang.png",
    component: LayangLayang,
  },
];

export default function BangunDatar() {
  const [selected, setSelected] = useState(null);
  const activeShape = shapes.find((s) => s.id === selected);

  return (
    <div className="p-4 w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4">Bangun Datar</h2>
      <div className="flex flex-wrap gap-2 mb-6 ">
        {shapes.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelected(s.id)}
            className={`text-sm md:text-base px-3 py-1 md:px-4 md:py-2 rounded border transition-colors ${
              selected === s.id
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white dark:bg-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
      {activeShape && (
        <activeShape.component
          label={activeShape.label}
          img={activeShape.img}
        />
      )}
    </div>
  );
}
