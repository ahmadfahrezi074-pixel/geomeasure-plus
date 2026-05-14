export default function Upload() {

  return (

    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24 px-8 relative overflow-hidden">

      {/* EFFECT */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-10">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">

          <h1 className="text-7xl font-bold text-white mb-8">
            GeoSpatial Data Center
          </h1>

          <p className="text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed">

            Sistem pusat pencarian data geospasial modern
            untuk mendukung pengukuran,
            pemetaan,
            monitoring wilayah,
            dan visualisasi data spasial berbasis GIS.

          </p>

        </div>

        {/* SEARCH BOX */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl mb-20">

          <h2 className="text-4xl font-bold text-cyan-300 mb-10 text-center">

            Search Spatial Data

          </h2>

          <div className="flex flex-col md:flex-row gap-6">

            <input
              type="text"
              placeholder="Cari data wilayah, koordinat, survey, atau GIS..."
              className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-8 py-5 text-white text-lg outline-none"
            />

            <button className="bg-gradient-to-r from-cyan-500 to-green-500 px-10 py-5 rounded-2xl text-white text-lg font-bold hover:scale-105 transition">

              Search

            </button>

          </div>

        </div>

        {/* FILTER */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl text-center">

            <h2 className="text-4xl font-bold text-cyan-300 mb-4">
              GIS
            </h2>

            <p className="text-slate-300">
              Spatial Mapping
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl text-center">

            <h2 className="text-4xl font-bold text-green-300 mb-4">
              GPS
            </h2>

            <p className="text-slate-300">
              Coordinate System
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl text-center">

            <h2 className="text-4xl font-bold text-cyan-300 mb-4">
              UAV
            </h2>

            <p className="text-slate-300">
              Drone Mapping
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl text-center">

            <h2 className="text-4xl font-bold text-green-300 mb-4">
              RTK
            </h2>

            <p className="text-slate-300">
              Survey Technology
            </p>

          </div>

        </div>

        {/* DATA RESULT */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-14 shadow-2xl mb-24">

          <h2 className="text-5xl font-bold text-white mb-12 text-center">

            Search Results

          </h2>

          <div className="space-y-8">

            {/* DATA 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">

              <h3 className="text-3xl font-bold text-cyan-300 mb-4">

                Kecamatan Sekayu

              </h3>

              <p className="text-slate-300 leading-relaxed text-lg">

                Data wilayah Kecamatan Sekayu,
                Sumatera Selatan,
                meliputi batas administrasi,
                jaringan jalan,
                koordinat wilayah,
                dan visualisasi spasial digital modern.

              </p>

            </div>

            {/* DATA 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">

              <h3 className="text-3xl font-bold text-green-300 mb-4">

                Drone Mapping Survey

              </h3>

              <p className="text-slate-300 leading-relaxed text-lg">

                Data hasil pemetaan udara menggunakan drone
                untuk monitoring kawasan,
                analisis topografi,
                dan visualisasi data spasial modern.

              </p>

            </div>

            {/* DATA 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">

              <h3 className="text-3xl font-bold text-cyan-300 mb-4">

                RTK GPS Coordinate

              </h3>

              <p className="text-slate-300 leading-relaxed text-lg">

                Sistem koordinat realtime berbasis RTK GPS
                dengan akurasi tinggi
                untuk kebutuhan survey geospasial modern.

              </p>

            </div>

          </div>

        </div>

        {/* FOOTER */}
        <div className="bg-gradient-to-r from-cyan-500 to-green-500 rounded-3xl p-16 text-center shadow-2xl">

          <h2 className="text-6xl font-bold text-white mb-8">

            Smart Spatial Database

          </h2>

          <p className="text-2xl text-white/90 leading-relaxed max-w-5xl mx-auto">

            GeoMeasure+ menghadirkan pusat database geospasial modern
            untuk mendukung transformasi digital
            dalam bidang survey,
            pemetaan,
            dan monitoring spasial Indonesia.

          </p>

        </div>

      </div>

    </section>

  )

}