/**
 * Renders the Lingkaran calculator card.
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

export default function Lingkaran({ label, img }) {
  const [radius, setRadius] = useState("");
  const [resultLines, setResultLines] = useState([]);

  /** Clears all calculator fields after a successful calculation. */
  const resetInputs = () => setRadius("");

  /** Parses required fields, validates them, then renders area formula and result lines. */
  const calculateArea = () => {
    const radiusValue = parseFloat(radius);
    if (isNaN(radiusValue)) return setResultLines(["Input tidak valid"]);
    setResultLines([`Rumus: 3,14 x r x r`, `Input: 3,14 x ${radiusValue} x ${radiusValue}`, `Luas = ${3.14 * radiusValue * radiusValue}`]);
    resetInputs();
  };

  /** Parses required fields, validates them, then renders perimeter formula and result lines. */
  const calculatePerimeter = () => {
    const radiusValue = parseFloat(radius);
    if (isNaN(radiusValue)) return setResultLines(["Input tidak valid"]);
    setResultLines([`Rumus: 2 x 3,14 x r`, `Input: 2 x 3,14 x ${radiusValue}`, `Keliling = ${2 * 3.14 * radiusValue}`]);
    resetInputs();
  };

  return (
    <ShapeLayout label={label} img={img} res={resultLines}>
      <ShapeInput value={radius} onChange={setRadius} placeholder="Jari-jari" />
      <div className="flex gap-4">
        <button onClick={calculateArea} className="bg-blue-600 text-white px-4 py-2 rounded">Hitung Luas</button>
        <button onClick={calculatePerimeter} className="bg-green-600 text-white px-4 py-2 rounded">Hitung Keliling</button>
      </div>
    </ShapeLayout>
  );
}
