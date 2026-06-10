/**
 * Renders the JajarGenjang calculator card.
 *
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
import ShapeLayout from "../ShapeLayout";
import ShapeInput from "../ShapeInput";

export default function JajarGenjang({ label, img }) {
  const [baseLength, setBaseLength] = useState("");
  const [slantedSide, setSlantedSide] = useState("");
  const [height, setHeight] = useState("");
  const [resultLines, setResultLines] = useState([]);

  /** Clears all calculator fields after a successful calculation. */
  const resetInputs = () => {
    setBaseLength("");
    setSlantedSide("");
    setHeight("");
  };

  /** Parses required fields, validates them, then renders area formula and result lines. */
  const calculateArea = () => {
    const baseValue = parseFloat(baseLength);
    const heightValue = parseFloat(height);
    if (isNaN(baseValue) || isNaN(heightValue)) return setResultLines(["Input tidak valid"]);
    setResultLines([`Rumus: alas x tinggi`, `Input: ${baseValue} x ${heightValue}`, `Luas = ${baseValue * heightValue}`]);
    resetInputs();
  };

  /** Parses required fields, validates them, then renders perimeter formula and result lines. */
  const calculatePerimeter = () => {
    const baseValue = parseFloat(baseLength);
    const slantedSideValue = parseFloat(slantedSide);
    if (isNaN(baseValue) || isNaN(slantedSideValue)) return setResultLines(["Input tidak valid"]);
    setResultLines([`Rumus: 2 x (alas + sisi miring)`, `Input: 2 x (${baseValue} + ${slantedSideValue})`, `Keliling = ${2 * (baseValue + slantedSideValue)}`]);
    resetInputs();
  };

  return (
    <ShapeLayout label={label} img={img} res={resultLines}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ShapeInput value={baseLength} onChange={setBaseLength} placeholder="Alas" />
      <ShapeInput value={slantedSide} onChange={setSlantedSide} placeholder="Sisi Miring" />
      <ShapeInput value={height} onChange={setHeight} placeholder="Tinggi" />
      </div>
      <div className="flex gap-4">
        <button onClick={calculateArea} className="bg-blue-600 text-white px-4 py-2 rounded">Hitung Luas</button>
        <button onClick={calculatePerimeter} className="bg-green-600 text-white px-4 py-2 rounded">Hitung Keliling</button>
      </div>
    </ShapeLayout>
  );
}
