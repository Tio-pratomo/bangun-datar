/**
 * Renders the PrismaSegitiga calculator card.
 *
 * Computed 3D results are formatted with formatNumber before display.
 * The component keeps raw input text and result lines in local state, then
 * renders them through ShapeLayout. Numeric fields are entered through
 * ShapeInput so invalid characters are rejected before calculation.
 *
 * @param {Object} props
 * @param {string} props.label - Shape label rendered by ShapeLayout heading and image alt text.
 * @param {string} props.img - Shape image URL rendered by ShapeLayout.
 * @returns {JSX.Element} Calculator UI composed from ShapeLayout, ShapeInput, and action buttons.
 */
import { useState } from "react";
import { formatNumber } from "../utils";
import ShapeLayout from "../ShapeLayout";
import ShapeInput from "../ShapeInput";

export default function PrismaSegitiga({ label, img }) {
  const [baseArea, setBaseArea] = useState("");
  const [basePerimeter, setBasePerimeter] = useState("");
  const [height, setHeight] = useState("");
  const [resultLines, setResultLines] = useState([]);

  /** Clears all calculator fields after a successful calculation. */
  const resetPrismInputs = () => {
    setBaseArea("");
    setBasePerimeter("");
    setHeight("");
  };

  /** Parses required fields, validates them, then renders volume formula and result lines. */
  const calculateVolume = () => {
    const baseAreaValue = parseFloat(baseArea);
    const heightValue = parseFloat(height);
    if (isNaN(baseAreaValue) || isNaN(heightValue) || baseAreaValue <= 0 || heightValue <= 0)
      return setResultLines(["Input tidak valid"]);
    setResultLines([
      "Rumus: V = Luas Alas x Tinggi",
      `Input: V = ${formatNumber(baseAreaValue)} x ${formatNumber(heightValue)}`,
      `Volume = ${formatNumber(baseAreaValue * heightValue)}`,
    ]);
    resetPrismInputs();
  };

  /** Parses required fields, validates them, then renders surface-area formula and result lines. */
  const calculateSurfaceArea = () => {
    const baseAreaValue = parseFloat(baseArea);
    const basePerimeterValue = parseFloat(basePerimeter);
    const heightValue = parseFloat(height);
    if (isNaN(baseAreaValue) || isNaN(basePerimeterValue) || isNaN(heightValue) || baseAreaValue <= 0 || basePerimeterValue <= 0 || heightValue <= 0)
      return setResultLines(["Input tidak valid"]);
    setResultLines([
      "Rumus: L = 2 x Luas Alas + Keliling Alas x Tinggi",
      `Input: L = 2 x ${formatNumber(baseAreaValue)} + ${formatNumber(basePerimeterValue)} x ${formatNumber(heightValue)}`,
      `Luas Permukaan = ${formatNumber(2 * baseAreaValue + basePerimeterValue * heightValue)}`,
    ]);
    resetPrismInputs();
  };

  return (
    <ShapeLayout label={label} img={img} res={resultLines}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ShapeInput
        value={baseArea}
        onChange={setBaseArea}
        placeholder="Masukkan luas alas"
      />
      <ShapeInput
        value={basePerimeter}
        onChange={setBasePerimeter}
        placeholder="Masukkan keliling alas"
      />
      <ShapeInput
        value={height}
        onChange={setHeight}
        placeholder="Masukkan tinggi prisma"
      />
      </div>
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={calculateVolume}
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          Hitung Volume
        </button>
        <button
          onClick={calculateSurfaceArea}
          className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
        >
          Hitung Luas Permukaan
        </button>
      </div>
    </ShapeLayout>
  );
}
