import React from "react";

export default function ShapeInput({ value, onChange, placeholder }) {
  const handleInput = (e) => {
    const val = e.target.value;
    if (val === "" || /^\d*\.?\d*$/.test(val)) {
      onChange(val);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleInput}
      placeholder={placeholder}
      className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500"
    />
  );
}
