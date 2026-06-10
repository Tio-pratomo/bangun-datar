/**
 * Renders the Kerucut calculator card.
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

export default function Kerucut({ label, img }) {
  const [radius, setRadius] = useState("");
  const [height, setHeight] = useState("");
  const [slantHeight, setSlantHeight] = useState("");
  const [resultLines, setResultLines] = useState([]);

  /** Clears all input fields. */
  const resetInputs = () => {
    setRadius("");
    setHeight("");
    setSlantHeight("");
  };

  /** Parses required fields, validates them, then renders volume formula and result lines. */
  const calculateVolume = () => {
    const radiusValue = parseFloat(radius);
    const heightValue = parseFloat(height);
    if (isNaN(radiusValue) || isNaN(heightValue)) return setResultLines(["Input tidak valid"]);
    setResultLines([
      "Rumus: V = 1/3 πr²t",
      `Input: V = 1/3 x π x ${formatNumber(radiusValue)}² x ${formatNumber(heightValue)}`,
      `Volume = ${formatNumber((1 / 3) * Math.PI * radiusValue ** 2 * heightValue)}`,
    ]);
    resetInputs();
  };

  /** Parses required fields, validates them, then renders surface-area formula and result lines. */
  const calculateSurfaceArea = () => {
    const radiusValue = parseFloat(radius);
    const heightValue = parseFloat(height);
    const slantHeightInput = parseFloat(slantHeight);
    if (isNaN(radiusValue) || isNaN(heightValue)) return setResultLines(["Input tidak valid"]);
    const slantHeightValue = isNaN(slantHeightInput) ? Math.sqrt(radiusValue ** 2 + heightValue ** 2) : slantHeightInput;
    setResultLines([
      "Rumus: L = πr(r + s)",
      `Input: L = π x ${formatNumber(radiusValue)} x (${formatNumber(radiusValue)} + ${formatNumber(slantHeightValue)})`,
      `Luas Permukaan = ${formatNumber(Math.PI * radiusValue * (radiusValue + slantHeightValue))}`,
    ]);
    resetInputs();
  };

  return (
    <ShapeLayout label={label} img={img} res={resultLines}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ShapeInput
        value={radius}
        onChange={setRadius}
        placeholder="Masukkan jari-jari"
      />
      <ShapeInput
        value={height}
        onChange={setHeight}
        placeholder="Masukkan tinggi"
      />
      <ShapeInput
        value={slantHeight}
        onChange={setSlantHeight}
        placeholder="Masukkan garis pelukis (opsional)"
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
