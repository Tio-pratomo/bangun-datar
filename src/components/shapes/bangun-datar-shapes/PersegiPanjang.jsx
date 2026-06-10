/**
 * Renders the PersegiPanjang calculator card.
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

export default function PersegiPanjang({ label, img }) {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [resultLines, setResultLines] = useState([]);

  /** Clears all calculator fields after a successful calculation. */
  const resetInputs = () => {
    setLength("");
    setWidth("");
  };

  /** Parses required fields, validates them, then renders area formula and result lines. */
  const calculateArea = () => {
    const lengthValue = parseFloat(length);
    const widthValue = parseFloat(width);
    if (isNaN(lengthValue) || isNaN(widthValue)) return setResultLines(["Input tidak valid"]);
    setResultLines([`Rumus: p x l`, `Input: ${lengthValue} x ${widthValue}`, `Luas = ${lengthValue * widthValue}`]);
    resetInputs();
  };

  /** Parses required fields, validates them, then renders perimeter formula and result lines. */
  const calculatePerimeter = () => {
    const lengthValue = parseFloat(length);
    const widthValue = parseFloat(width);
    if (isNaN(lengthValue) || isNaN(widthValue)) return setResultLines(["Input tidak valid"]);
    setResultLines([`Rumus: 2 x (p + l)`, `Input: 2 x (${lengthValue} + ${widthValue})`, `Keliling = ${2 * (lengthValue + widthValue)}`]);
    resetInputs();
  };

  return (
    <ShapeLayout label={label} img={img} res={resultLines}>
      <ShapeInput value={length} onChange={setLength} placeholder="Panjang" />
      <ShapeInput value={width} onChange={setWidth} placeholder="Lebar" />
      <div className="flex gap-4">
        <button onClick={calculateArea} className="bg-blue-600 text-white px-4 py-2 rounded">Hitung Luas</button>
        <button onClick={calculatePerimeter} className="bg-green-600 text-white px-4 py-2 rounded">Hitung Keliling</button>
      </div>
    </ShapeLayout>
  );
}
