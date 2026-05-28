import { useState } from "react";

const types = [
  { id: "panjang", label: "Panjang" },
  { id: "volume", label: "Volume" },
  { id: "berat", label: "Berat" },
];

const unitData = {
  panjang: {
    km: 1000,
    hm: 100,
    dam: 10,
    m: 1,
    dm: 0.1,
    cm: 0.01,
    mm: 0.001,
  },
  volume: {
    kl: 1000,
    hl: 100,
    dal: 10,
    l: 1,
    dl: 0.1,
    cl: 0.01,
    ml: 0.001,
  },
  berat: {
    ton: 1000,
    kwintal: 100,
    kg: 1,
    hg: 0.1,
    dag: 0.01,
    g: 0.001,
    dg: 0.0001,
    cg: 0.00001,
    mg: 0.000001,
  },
};

export default function KonversiSatuan() {
  const [selected, setSelected] = useState(null);
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");

  const handleTypeChange = (typeId) => {
    setSelected(typeId);
    const units = Object.keys(unitData[typeId]);
    setFromUnit(units[0]);
    setToUnit(units[1] || units[0]);
  };

  const convert = () => {
    const val = parseFloat(value);
    if (isNaN(val)) return "Input tidak valid";

    const fromFactor = unitData[selected][fromUnit];
    const toFactor = unitData[selected][toUnit];

    const result = (val * fromFactor) / toFactor;
    return result.toLocaleString("id-ID", { maximumFractionDigits: 6 });
  };

  const resultText = convert();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Konversi Satuan</h2>
      <div className="flex flex-wrap gap-4 mb-6">
        {types.map((t) => (
          <button
            key={t.id}
            onClick={() => handleTypeChange(t.id)}
            className={`px-4 py-2 rounded border transition-colors ${
              selected === t.id
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white dark:bg-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      {selected && (
        <div className="bg-white dark:bg-gray-700 p-6 rounded shadow space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium dark:text-gray-200">
              Nilai
            </label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="p-2 border rounded dark:bg-gray-800 dark:text-white dark:border-gray-600"
              placeholder="Masukkan angka..."
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium dark:text-gray-200">
                Dari
              </label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="p-2 border rounded dark:bg-gray-800 dark:text-white dark:border-gray-600"
              >
                {Object.keys(unitData[selected]).map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium dark:text-gray-200">
                Ke
              </label>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="p-2 border rounded dark:bg-gray-800 dark:text-white dark:border-gray-600"
              >
                {Object.keys(unitData[selected]).map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="pt-4 dark:border-gray-600">
            <p className="text-lg font-semibold dark:text-white">
              Hasil:{" "}
              <span className="text-blue-500">
                {resultText === "Input tidak valid" 
                  ? resultText 
                  : `${resultText} ${toUnit}`}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
