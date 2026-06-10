/**
 * Renders the Persegi calculator card.
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

export default function Persegi({ label, img }) {
  const [sideLength, setSideLength] = useState("");
  const [resultLines, setResultLines] = useState([]);

  /** Clears all calculator fields after a successful calculation. */
  const resetInputs = () => setSideLength("");

  /** Parses required fields, validates them, then renders area formula and result lines. */
  const calculateArea = () => {
    const sideLengthValue = parseFloat(sideLength);
    if (isNaN(sideLengthValue)) return setResultLines(["Input tidak valid"]);
    setResultLines([`Rumus: s x s`, `Input: ${sideLengthValue} x ${sideLengthValue}`, `Luas = ${sideLengthValue * sideLengthValue}`]);
    resetInputs();
  };

  /** Parses required fields, validates them, then renders perimeter formula and result lines. */
  const calculatePerimeter = () => {
    const sideLengthValue = parseFloat(sideLength);
    if (isNaN(sideLengthValue)) return setResultLines(["Input tidak valid"]);
    setResultLines([`Rumus: 4 x s`, `Input: 4 x ${sideLengthValue}`, `Keliling = ${4 * sideLengthValue}`]);
    resetInputs();
  };

  return (
    <ShapeLayout label={label} img={img} res={resultLines}>
      <ShapeInput value={sideLength} onChange={setSideLength} placeholder="Sisi" />
      <div className="flex gap-4">
        <button onClick={calculateArea} className="bg-blue-600 text-white px-4 py-2 rounded">Hitung Luas</button>
        <button onClick={calculatePerimeter} className="bg-green-600 text-white px-4 py-2 rounded">Hitung Keliling</button>
      </div>
    </ShapeLayout>
  );
}
