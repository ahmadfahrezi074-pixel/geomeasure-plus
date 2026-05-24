import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import GISMap from "./pages/GISMap";
import Layanan from "./pages/Layanan";
import Upload from "./pages/Upload";

export default function App() {
  return (
    <BrowserRouter>

      {/* NAVBAR */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl">

        <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[30px] px-6 md:px-10 py-4 shadow-2xl">

          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-4"
            >

              <img
                src="/logo.png"
                alt="GeoMeasure+"
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />

              <div>

                <h1 className="text-white text-xl md:text-2xl font-bold tracking-wide">
                  GeoMeasure+
                </h1>

                <p className="text-slate-300 text-xs md:text-sm">
                  Smart Geospatial Solution
                </p>

              </div>

            </Link>

            {/* MENU DESKTOP */}
            <div className="hidden md:flex items-center gap-8 text-white font-semibold">

              <Link
                to="/"
                className="hover:text-cyan-300 transition duration-300"
              >
                Home
              </Link>

              <Link
                to="/gis"
                className="hover:text-cyan-300 transition duration-300"
              >
                GIS Map
              </Link>

              <Link
                to="/layanan"
                className="hover:text-cyan-300 transition duration-300"
              >
                Layanan
              </Link>

              <Link
                to="/upload"
                className="hover:text-cyan-300 transition duration-300"
              >
                Search
              </Link>

            </div>

          </div>

        </div>

      </nav>

      {/* ROUTES */}
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/gis"
          element={<GISMap />}
        />

        <Route
          path="/layanan"
          element={<Layanan />}
        />

        <Route
          path="/upload"
          element={<Upload />}
        />

      </Routes>

    </BrowserRouter>
  );
}