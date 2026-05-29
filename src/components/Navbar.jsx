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
    <div className="sticky top-0 z-50 max-w-full mx-auto">
      <div className="navbar relative overflow-visible bg-base-100/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm">
        <div className="navbar-start">
          <div className="relative md:hidden">
            <button
              tabIndex={0}
              className="btn btn-ghost transition-transform duration-200 active:scale-95"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-nav-menu"
            >
              {isOpen ? "✕" : "☰"}
            </button>
            <div
              id="mobile-nav-menu"
              className={`absolute left-0 top-full mt-3 w-56 origin-top-left overflow-hidden rounded-box bg-base-100 dark:bg-gray-800 shadow-lg ring-1 ring-black/5 transition-all duration-300 ease-out md:hidden ${
                isOpen
                  ? "pointer-events-auto max-h-96 opacity-100 translate-y-0 scale-100"
                  : "pointer-events-none max-h-0 opacity-0 -translate-y-2 scale-95"
              }`}
            >
              <ul className="menu menu-sm p-2">
                {pages.map((p) => (
                  <li key={p.id}>
                    <button
                      onClick={() => {
                        setPage(p.id);
                        setIsOpen(false);
                      }}
                      className={currentPage === p.id ? "active" : ""}
                    >
                      {p.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button
            onClick={() => {
              setPage("bangun-datar");
              setIsOpen(false);
            }}
            className="btn btn-ghost text-xl normal-case dark:text-white"
          >
            Kalkulator
          </button>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            {pages.map((p) => (
              <li key={p.id}>
                <button
                  onClick={() => setPage(p.id)}
                  className={currentPage === p.id ? "active" : ""}
                >
                  {p.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="btn btn-sm md:btn-md btn-outline dark:text-white"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </div>
  );
}
