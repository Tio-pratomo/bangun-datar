import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import BangunDatar from "./pages/BangunDatar";
import BangunRuang from "./pages/BangunRuang";
import KonversiSatuan from "./pages/KonversiSatuan";

export default function App() {
  const [page, setPage] = useState("bangun-datar");

  const renderPage = () => {
    switch (page) {
      case "bangun-datar":
        return <BangunDatar />;
      case "bangun-ruang":
        return <BangunRuang />;
      case "konversi-satuan":
        return <KonversiSatuan />;
      default:
        return <BangunDatar />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        <Navbar currentPage={page} setPage={setPage} />
        <main className="container mx-auto px-6 py-6">{renderPage()}</main>
      </div>
    </ThemeProvider>
  );
}
