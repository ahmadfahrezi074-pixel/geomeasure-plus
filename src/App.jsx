import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import GISMap from "./pages/GISMap"
import Dashboard from "./pages/Dashboard"
import Upload from "./pages/Upload"
import Layanan from "./pages/Layanan";

export default function App() {

  return (

    <BrowserRouter>

      {/* NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-black/40 backdrop-blur-xl px-8 py-4 rounded-3xl shadow-2xl w-[90%] max-w-7xl border border-white/10">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <img
              src="/logo.png"
              alt="GeoMeasure+"
              className="w-10 h-10 md:w-16 md:h-16"
            />

            <div>

              <h1 className="text-white text-2xl font-bold">
                GeoMeasure+
              </h1>

              <p className="text-slate-300 text-sm">
                Smart Geospatial Solution
              </p>

            </div>

          </div>

          {/* MENU */}
          <div className="hidden md:flex gap-8 text-white font-semibold">

            <Link
              to="/"
              className="hover:text-cyan-300 transition"
            >
              Home
            </Link>

            <Link
              to="/gis"
              className="hover:text-cyan-300 transition"
            >
              GIS Map
            </Link>

            <Link
              to="/dashboard"
              className="hover:text-cyan-300 transition"
            >
              Dashboard
            </Link>

            <Link
              to="/upload"
              className="hover:text-cyan-300 transition"
            >
              Search
            </Link>

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
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/upload"
          element={<Upload />}
        />

<Route 
path="/layanan" element={<Layanan />} />
      </Routes>

    </BrowserRouter>

  )

}