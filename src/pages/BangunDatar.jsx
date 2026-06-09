import { useState } from "react";
import Persegi from "../components/shapes/bangun-datar-shapes/Persegi";
import PersegiPanjang from "../components/shapes/bangun-datar-shapes/PersegiPanjang";
import Segitiga from "../components/shapes/bangun-datar-shapes/Segitiga";
import Lingkaran from "../components/shapes/bangun-datar-shapes/Lingkaran";
import Trapesium from "../components/shapes/bangun-datar-shapes/Trapesium";
import JajarGenjang from "../components/shapes/bangun-datar-shapes/JajarGenjang";
import BelahKetupat from "../components/shapes/bangun-datar-shapes/BelahKetupat";
import LayangLayang from "../components/shapes/bangun-datar-shapes/LayangLayang";
import persegiImg from "../img/Persegi.webp";
import persegiPanjangImg from "../img/Persegi_Panjang.webp";
import segitigaImg from "../img/Segitiga.webp";
import lingkaranImg from "../img/Lingkaran@2x.webp";
import trapesiumImg from "../img/Trapesium.webp";
import jajarGenjangImg from "../img/Jajar_Genjang.webp";
import belahKetupatImg from "../img/Belah_Ketupat.webp";
import layangLayangImg from "../img/Layang-Layang.webp";

const shapes = [
  {
    id: "persegi",
    label: "Persegi",
    img: persegiImg,
    component: Persegi,
  },
  {
    id: "persegi-panjang",
    label: "Persegi Panjang",
    img: persegiPanjangImg,
    component: PersegiPanjang,
  },
  {
    id: "segitiga",
    label: "Segitiga",
    img: segitigaImg,
    component: Segitiga,
  },
  {
    id: "lingkaran",
    label: "Lingkaran",
    img: lingkaranImg,
    component: Lingkaran,
  },
  {
    id: "trapesium",
    label: "Trapesium",
    img: trapesiumImg,
    component: Trapesium,
  },
  {
    id: "jajar-genjang",
    label: "Jajar Genjang",
    img: jajarGenjangImg,
    component: JajarGenjang,
  },
  {
    id: "belah-ketupat",
    label: "Belah Ketupat",
    img: belahKetupatImg,
    component: BelahKetupat,
  },
  {
    id: "layang-layang",
    label: "Layang-layang",
    img: layangLayangImg,
    component: LayangLayang,
  },
];

export default function BangunDatar() {
  const [selected, setSelected] = useState(null);
  const activeShape = shapes.find((s) => s.id === selected);

  return (
    <div className="p-4 w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Bangun Datar
      </h2>
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
