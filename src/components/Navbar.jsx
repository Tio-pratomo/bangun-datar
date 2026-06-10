import { useTheme } from "../context/ThemeContext";

export default function Navbar({ currentPage, setPage }) {
  const { darkMode, setDarkMode } = useTheme();

  const pages = [
    { id: "bangun-datar", label: "Bangun Datar" },
    { id: "bangun-ruang", label: "Bangun Ruang" },
    { id: "konversi-satuan", label: "Konversi Satuan" },
  ];

  const getNavBtnClass = (id) => {
    return currentPage === id ? "active" : "";
  };

  const drawerIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );

  return (
    <div className="drawer sticky top-0 z-50 w-full md:block">
      <input id="mobile-nav-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="navbar relative overflow-visible px-3 md:px-6 lg:px-17.5 bg-base-100/80 text-base-content backdrop-blur-md shadow-sm">
          <div className="navbar-start">
            <label
              htmlFor="mobile-nav-drawer"
              className="btn btn-ghost drawer-button md:hidden"
              aria-label="Buka menu"
            >
              {drawerIcon}
            </label>
            <button
              onClick={() => setPage("bangun-datar")}
              className="btn btn-ghost text-xl normal-case"
            >
              Calc
            </button>
          </div>

          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1 gap-1">
              {pages.map((p) => (
                <li key={p.id} className={currentPage === p.id ? "active" : ""}>
                  <button onClick={() => setPage(p.id)}>{p.label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-end">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="btn btn-sm md:btn-md btn-outline"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </div>

      <div className="drawer-side md:hidden">
        <label
          htmlFor="mobile-nav-drawer"
          aria-label="Tutup menu"
          className="drawer-overlay"
        ></label>
        <ul
          aria-label="Mobile navigation"
          className="menu menu-lg min-h-full w-72 bg-base-100 p-4 text-base-content shadow-xl"
        >
          <li className="menu-title text-base-content/60">Menu</li>
          {pages.map((p) => (
            <li key={p.id}>
              <label
                htmlFor="mobile-nav-drawer"
                onClick={() => setPage(p.id)}
                className={getNavBtnClass(p.id)}
              >
                {p.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
