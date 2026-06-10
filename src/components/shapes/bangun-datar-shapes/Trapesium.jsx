/**
 * Renders the Trapesium calculator card.
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

export default function Trapesium({ label, img }) {
  const [sideA, setSideA] = useState("");
  const [sideB, setSideB] = useState("");
  const [sideC, setSideC] = useState("");
  const [sideD, setSideD] = useState("");
  const [height, setHeight] = useState("");
  const [resultLines, setResultLines] = useState([]);

  /** Clears fields related to area calculation after a successful calculation. */
  const resetAreaInputs = () => {
    setSideA("");
    setSideB("");
    setHeight("");
  };

  /** Clears fields related to perimeter calculation after a successful calculation. */
  const resetPerimeterInputs = () => {
    setSideA("");
    setSideB("");
    setSideC("");
    setSideD("");
  };
  /** Parses required fields, validates them, then renders area formula and result lines. */
  const calculateArea = () => {
    const sideAValue = parseFloat(sideA);
    const sideBValue = parseFloat(sideB);
    const heightValue = parseFloat(height);
    if (isNaN(sideAValue) || isNaN(sideBValue) || isNaN(heightValue)) return setResultLines(["Input tidak valid"]);
    setResultLines([`Rumus: 1/2 x (a + b) x t`, `Input: 0.5 x (${sideAValue} + ${sideBValue}) x ${heightValue}`, `Luas = ${0.5 * (sideAValue + sideBValue) * heightValue}`]);
    resetAreaInputs();
  };
  /** Parses required fields, validates them, then renders perimeter formula and result lines. */
  const calculatePerimeter = () => {
    const sideAValue = parseFloat(sideA);
    const sideBValue = parseFloat(sideB);
    const sideCValue = parseFloat(sideC);
    const sideDValue = parseFloat(sideD);
    if (isNaN(sideAValue) || isNaN(sideBValue) || isNaN(sideCValue) || isNaN(sideDValue)) return setResultLines(["Input tidak valid"]);
    setResultLines([`Rumus: a + b + c + d`, `Input: ${sideAValue} + ${sideBValue} + ${sideCValue} + ${sideDValue}`, `Keliling = ${sideAValue + sideBValue + sideCValue + sideDValue}`]);
    resetPerimeterInputs();
  };


  return (
    <ShapeLayout label={label} img={img} res={resultLines}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ShapeInput value={sideA} onChange={setSideA} placeholder="Sisi a" />
      <ShapeInput value={sideB} onChange={setSideB} placeholder="Sisi b" />
      <ShapeInput value={height} onChange={setHeight} placeholder="Tinggi" />
      <ShapeInput value={sideC} onChange={setSideC} placeholder="Sisi c" />
      <ShapeInput value={sideD} onChange={setSideD} placeholder="Sisi d" />
      </div>
      <div className="flex gap-4">
        <button onClick={calculateArea} className="bg-blue-600 text-white px-4 py-2 rounded">Hitung Luas</button>
        <button onClick={calculatePerimeter} className="bg-green-600 text-white px-4 py-2 rounded">Hitung Keliling</button>
      </div>
    </ShapeLayout>
  );
}
