import React from "react";

export default function ShapeLayout({ label, img, res, children }) {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded shadow flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 rounded p-4">
        <img src={img} alt={label} className="max-h-48 object-contain mb-4" />
        <div className="font-mono text-sm dark:text-white space-y-1">
          {res.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <h3 className="text-xl font-bold mb-4">Kalkulator {label}</h3>
        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
}
