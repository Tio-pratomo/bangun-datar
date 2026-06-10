/**
 * Renders the Bola calculator card.
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

export default function Bola({ label, img }) {
  const [radius, setRadius] = useState("");
  const [resultLines, setResultLines] = useState([]);

  /** Parses required fields, validates them, then renders volume formula and result lines. */
  const calculateVolume = () => {
    const radiusValue = parseFloat(radius);

    if (isNaN(radiusValue)) return setResultLines(["Input tidak valid"]);
    setResultLines([
      "Rumus: V = 4/3 πr³",
      `Input: V = 4/3 x π x ${formatNumber(radiusValue)}³`,
      `Volume = ${formatNumber((4 / 3) * Math.PI * radiusValue ** 3)}`,
    ]);

    setRadius("");
  };

  /** Parses required fields, validates them, then renders surface-area formula and result lines. */
  const calculateSurfaceArea = () => {
    const radiusValue = parseFloat(radius);
    if (isNaN(radiusValue)) return setResultLines(["Input tidak valid"]);
    setResultLines([
      "Rumus: L = 4πr²",
      `Input: L = 4 x π x ${formatNumber(radiusValue)}²`,
      `Luas Permukaan = ${formatNumber(4 * Math.PI * radiusValue ** 2)}`,
    ]);
    setRadius("");
  };

  return (
    <ShapeLayout label={label} img={img} res={resultLines}>
      <ShapeInput
        value={radius}
        onChange={setRadius}
        placeholder="Masukkan jari-jari"
      />
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
