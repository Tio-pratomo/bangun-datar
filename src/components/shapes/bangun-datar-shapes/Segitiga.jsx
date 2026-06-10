/**
 * Renders the Segitiga calculator card.
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

export default function Segitiga({ label, img }) {
  const [baseOrSideA, setBaseOrSideA] = useState("");
  const [heightOrSideB, setHeightOrSideB] = useState("");
  const [sideC, setSideC] = useState("");
  const [resultLines, setResultLines] = useState([]);

  /** Clears all calculator fields after a successful calculation. */
  const resetInputs = () => {
    setBaseOrSideA("");
    setHeightOrSideB("");
    setSideC("");
  };

  /** Parses required fields, validates them, then renders area formula and result lines. */
  const calculateArea = () => {
    const sideAValue = parseFloat(baseOrSideA);
    const heightValue = parseFloat(heightOrSideB);
    if (isNaN(sideAValue) || isNaN(heightValue)) return setResultLines(["Input tidak valid"]);
    setResultLines([`Rumus: 1/2 x a x t`, `Input: 0.5 x ${sideAValue} x ${heightValue}`, `Luas = ${0.5 * sideAValue * heightValue}`]);
    resetInputs();
  };

  /** Parses required fields, validates them, then renders perimeter formula and result lines. */
  const calculatePerimeter = () => {
    const sideAValue = parseFloat(baseOrSideA);
    const sideBValue = parseFloat(heightOrSideB);
    const sideCValue = parseFloat(sideC);
    if (isNaN(sideAValue) || isNaN(sideBValue) || isNaN(sideCValue)) return setResultLines(["Input tidak valid"]);
    setResultLines([`Rumus: a + b + c`, `Input: ${sideAValue} + ${sideBValue} + ${sideCValue}`, `Keliling = ${sideAValue + sideBValue + sideCValue}`]);
    resetInputs();
  };

  return (
    <ShapeLayout label={label} img={img} res={resultLines}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ShapeInput value={baseOrSideA} onChange={setBaseOrSideA} placeholder="Alas" />
      <ShapeInput value={heightOrSideB} onChange={setHeightOrSideB} placeholder="Tinggi/Sisi b" />
      <ShapeInput value={sideC} onChange={setSideC} placeholder="Sisi c" />
      </div>
      <div className="flex gap-4">
        <button onClick={calculateArea} className="bg-blue-600 text-white px-4 py-2 rounded">Hitung Luas</button>
        <button onClick={calculatePerimeter} className="bg-green-600 text-white px-4 py-2 rounded">Hitung Keliling</button>
      </div>
    </ShapeLayout>
  );
}
