import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({ currentPage, setPage }) {
  const { darkMode, setDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { id: "bangun-datar", label: "Bangun Datar" },
    { id: "bangun-ruang", label: "Bangun Ruang" },
    { id: "konversi-satuan", label: "Konversi Satuan" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <nav className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center relative">
        <div className="font-bold text-xl dark:text-white">Kalkulator</div>
        
        <button
          className="md:hidden p-2 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <div className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-white dark:bg-gray-800 md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 gap-2 z-10`}>
          {pages.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setPage(p.id);
                setIsOpen(false);
              }}
              className={`px-4 py-2 rounded transition-colors ${
                currentPage === p.id
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {p.label}
            </button>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-600 dark:text-white"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>
    </div>
  );
}
