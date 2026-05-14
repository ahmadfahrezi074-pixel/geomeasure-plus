export default function Dashboard() {

  return (
    
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-cyan-100 via-white to-blue-100 py-24 px-6">

  {/* EFFECT GRID */}
  <div className="absolute inset-0 opacity-10">

    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:80px_80px]"></div>

  </div>

  {/* BULATAN EFFECT */}
  {/* BULATAN EFFECT */}

<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-300/30 rounded-full blur-3xl"></div>

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl"></div>

<div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-green-300/20 rounded-full blur-3xl"></div>
{/* BACKGROUND EFFECT */}

<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-24">

          <h1 className="text-7xl font-bold text-blue-900 mb-8">
            About GeoMeasure+
          </h1>

          <p className="text-2xl text-slate-600 leading-relaxed max-w-5xl mx-auto">

            GeoMeasure+ merupakan platform digital modern
            yang bergerak di bidang pengukuran,
            pemetaan,
            visualisasi data geospasial,
            dan pengelolaan informasi spasial berbasis teknologi GIS.

          </p>

        </div>

        {/* APA ITU */}
        <div className="bg-white rounded-3xl shadow-2xl p-16 mb-24">

          <h2 className="text-5xl font-bold text-blue-900 mb-8">
            What is GeoMeasure+ ?
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed mb-6">

            GeoMeasure+ adalah sebuah platform geospasial digital
            yang dirancang untuk membantu proses pengukuran,
            pemetaan,
            monitoring wilayah,
            serta pengolahan data spasial secara modern dan realtime.

          </p>

          <p className="text-xl text-slate-600 leading-relaxed">

            Platform ini mengintegrasikan teknologi Geographic Information System (GIS),
            Global Navigation Satellite System (GNSS),
            drone mapping,
            dan visualisasi data spasial
            untuk menghasilkan informasi geospasial yang akurat,
            efisien,
            dan mudah diakses.

          </p>

        </div>

        {/* VISI MISI */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">

          {/* VISI */}
          <div className="bg-white p-14 rounded-3xl shadow-2xl">

            <h2 className="text-5xl font-bold text-blue-900 mb-8">
              Vision
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed">

              Menjadi platform digital geospasial modern
              yang mampu mendukung transformasi teknologi pengukuran
              dan pemetaan di Indonesia secara profesional,
              inovatif,
              dan berkelanjutan.

            </p>

          </div>

          {/* MISI */}
          <div className="bg-white p-14 rounded-3xl shadow-2xl">

            <h2 className="text-5xl font-bold text-green-700 mb-8">
              Mission
            </h2>

            <ul className="space-y-5 text-xl text-slate-600 leading-relaxed">

              <li>
                • Mengembangkan sistem pengukuran digital modern.
              </li>

              <li>
                • Menyediakan visualisasi data geospasial interaktif.
              </li>

              <li>
                • Mendukung pengelolaan data spasial realtime.
              </li>

              <li>
                • Mengintegrasikan teknologi GIS dan survey digital.
              </li>

              <li>
                • Membantu analisis spasial secara efektif dan efisien.
              </li>

            </ul>

          </div>

        </div>

        {/* PROGRAM */}
        <div className="mb-24">

          <h2 className="text-6xl font-bold text-blue-900 text-center mb-14">
            GeoMeasure+ Programs
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* SATU PETA */}
            <div className="bg-white p-12 rounded-3xl shadow-2xl">

              <h3 className="text-4xl font-bold text-blue-900 mb-6">
                One Map Policy
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed">

                GeoMeasure+ mendukung program Kebijakan Satu Peta
                melalui integrasi data geospasial
                untuk menghasilkan informasi wilayah
                yang akurat,
                sinkron,
                dan terstandarisasi.

              </p>

            </div>

            {/* DESA */}
            <div className="bg-white p-12 rounded-3xl shadow-2xl">

              <h3 className="text-4xl font-bold text-green-700 mb-6">
                Desa Satu Peta
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed">

                Program Desa Satu Peta membantu digitalisasi wilayah desa
                melalui pemetaan partisipatif,
                visualisasi batas wilayah,
                serta pengelolaan data spasial desa berbasis GIS.

              </p>

            </div>

            {/* SMART CITY */}
            <div className="bg-white p-12 rounded-3xl shadow-2xl">

              <h3 className="text-4xl font-bold text-blue-900 mb-6">
                Smart City GIS
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed">

                Sistem Smart City berbasis GIS digunakan
                untuk monitoring kota,
                analisis infrastruktur,
                dan pengelolaan tata ruang
                secara realtime dan modern.

              </p>

            </div>

            {/* DRONE */}
            <div className="bg-white p-12 rounded-3xl shadow-2xl">

              <h3 className="text-4xl font-bold text-green-700 mb-6">
                Drone Mapping
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed">

                Teknologi drone mapping digunakan
                untuk pemetaan udara,
                monitoring wilayah,
                analisis topografi,
                dan pengumpulan data spasial
                dengan tingkat akurasi tinggi.

              </p>

            </div>

          </div>

        </div>

        {/* TEKNOLOGI */}
        <div className="bg-white rounded-3xl shadow-2xl p-16 mb-24">

          <h2 className="text-6xl font-bold text-blue-900 mb-12 text-center">
            Technology & Equipment
          </h2>

          <div className="grid md:grid-cols-2 gap-14">

            {/* SOFTWARE */}
            <div>

              <h3 className="text-4xl font-bold text-green-700 mb-8">
                GIS Software
              </h3>

              <ul className="space-y-5 text-xl text-slate-600">

                <li>• ArcGIS Pro</li>

                <li>• QGIS</li>

                <li>• Google Earth Engine</li>

                <li>• AutoCAD Map</li>

                <li>• Global Mapper</li>

                <li>• WebGIS Technology</li>

              </ul>

            </div>

            {/* PERALATAN */}
            <div>

              <h3 className="text-4xl font-bold text-green-700 mb-8">
                Survey Equipment
              </h3>

              <ul className="space-y-5 text-xl text-slate-600">

                <li>• GNSS Geodetic GPS</li>

                <li>• Total Station</li>

                <li>• Drone UAV Mapping</li>

                <li>• RTK GPS System</li>

                <li>• Digital Level</li>

                <li>• Photogrammetry System</li>

              </ul>

            </div>

          </div>

        </div>

        {/* PENUTUP */}
        <div className="bg-blue-900 text-white p-16 rounded-3xl shadow-2xl text-center">

          <h2 className="text-6xl font-bold mb-8">
            Smart Geospatial Solution
          </h2>

          <p className="text-2xl text-slate-200 leading-relaxed max-w-5xl mx-auto">

            GeoMeasure+ hadir sebagai solusi digital modern
            dalam bidang pengukuran,
            pemetaan,
            visualisasi geospasial,
            dan pengelolaan data spasial
            untuk mendukung transformasi teknologi geospasial Indonesia.

          </p>

        </div>

      </div>

    </section>

  )

}