export default function GISMap() {

  return (

    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24 px-6 relative overflow-hidden">

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
            GeoMeasure GIS Map
          </h1>

          <p className="text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed">

            Sistem WebGIS modern untuk visualisasi data geospasial,
            monitoring wilayah,
            pemetaan digital,
            dan analisis spasial realtime berbasis teknologi GIS.

          </p>

        </div>

        {/* MAP */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden mb-20">

          <iframe
           src="https://www.openstreetmap.org/export/embed.html?bbox=103.8000%2C-2.9500%2C104.0000%2C-2.7000&layer=mapnik&marker=-2.8050%2C103.8500"
            className="w-full h-[600px]"
            loading="lazy"
          ></iframe>

        </div>

        {/* FITUR */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">

          {/* FITUR 1 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl">

            <h2 className="text-4xl font-bold text-cyan-300 mb-6">
              Realtime Monitoring
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">

              Monitoring lokasi survey,
              tracking wilayah,
              dan pengelolaan data spasial secara realtime
              menggunakan teknologi GIS modern.

            </p>

          </div>

          {/* FITUR 2 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl">

            <h2 className="text-4xl font-bold text-green-300 mb-6">
              Digital Mapping
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">

              Visualisasi peta digital interaktif
              untuk kebutuhan survey,
              tata ruang,
              pemetaan wilayah,
              dan analisis spasial modern.

            </p>

          </div>

          {/* FITUR 3 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl">

            <h2 className="text-4xl font-bold text-cyan-300 mb-6">
              Spatial Analysis
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">

              Analisis data geospasial berbasis GIS
              untuk mendukung pengambilan keputusan,
              monitoring kawasan,
              dan evaluasi wilayah.

            </p>

          </div>

        </div>

        {/* STATISTIK */}
        <div className="grid md:grid-cols-4 gap-8 mb-24">

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl text-center shadow-2xl">

            <h2 className="text-5xl font-bold text-cyan-300 mb-4">
              120+
            </h2>

            <p className="text-slate-300 text-lg">
              Survey Project
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl text-center shadow-2xl">

            <h2 className="text-5xl font-bold text-green-300 mb-4">
              98%
            </h2>

            <p className="text-slate-300 text-lg">
              Data Accuracy
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl text-center shadow-2xl">

            <h2 className="text-5xl font-bold text-cyan-300 mb-4">
              GIS
            </h2>

            <p className="text-slate-300 text-lg">
              Smart Mapping
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl text-center shadow-2xl">

            <h2 className="text-5xl font-bold text-green-300 mb-4">
              24/7
            </h2>

            <p className="text-slate-300 text-lg">
              Monitoring
            </p>

          </div>

        </div>

        {/* PENUTUP */}
        <div className="bg-gradient-to-r from-cyan-500 to-green-500 p-16 rounded-3xl text-center shadow-2xl">

          <h2 className="text-6xl font-bold text-white mb-8">
            Smart GIS Technology
          </h2>

          <p className="text-2xl text-white/90 leading-relaxed max-w-5xl mx-auto">

            GeoMeasure+ menghadirkan sistem WebGIS modern
            untuk mendukung transformasi digital
            dalam bidang pengukuran,
            pemetaan,
            dan visualisasi data geospasial Indonesia.

          </p>

        </div>

      </div>

    </section>

  )

}