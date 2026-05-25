export default function Layanan() {

  const layanan = [

    {
      title: "Pra-Sertifikasi Massal",
      subtitle: "Satu Desa Satu Peta",
      color: "from-cyan-500 to-blue-600",
      desc: "Program pengukuran dan pemetaan kolektif tingkat desa untuk membantu masyarakat memperoleh data spasial dan legalitas bidang tanah secara modern menggunakan GNSS Geodetic dan Drone RTK.",
      target: "Masyarakat Berpenghasilan Rendah & Desa Pelosok",
      output: "Shapefile (.shp), Gambar Ukur Indikatif, Berkas Pra-Sertifikasi",
    },

    {
      title: "Rekonstruksi Data Spasial",
      subtitle: "Pemutakhiran Surat Ukur Lama",
      color: "from-green-500 to-emerald-700",
      desc: "Pelacakan ulang posisi bidang tanah lama yang belum terplotting digital menggunakan pengukuran GNSS Geodetic dan analisis spasial modern.",
      target: "Masyarakat Umum & Instansi Pemerintah",
      output: "Peta Rekonstruksi, Koreksi Spasial, Berkas Pemeliharaan Data",
    },

    {
      title: "Audit Komersial HGU",
      subtitle: "Pemetaan Korporasi & Perkebunan",
      color: "from-orange-500 to-red-600",
      desc: "Pemetaan udara skala besar untuk kebutuhan audit konsesi, site plan, topografi, dan analisis wilayah menggunakan UAV Drone Mapping.",
      target: "Perusahaan Swasta, HGU, Developer & BUMN",
      output: "Orthophoto, DEM, Kontur, Peta Konsesi",
    },

  ];

  return (

    <div className="min-h-screen bg-slate-950 text-white px-6 md:px-20 py-32">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-24">

        <p className="text-cyan-400 tracking-[5px] uppercase font-semibold mb-4">
          GeoMeasure+ Services
        </p>

        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
          Katalog Layanan
          <br />
          GeoMeasure+
        </h1>

        <p className="text-slate-400 text-lg max-w-4xl mx-auto leading-relaxed">
          GeoMeasure+ menyediakan layanan pengukuran dan pemetaan berbasis
          teknologi geospasial modern untuk masyarakat, pemerintah desa,
          korporasi, dan sektor swasta.
        </p>

      </div>

      {/* CARD */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {layanan.map((item, index) => (

          <div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] overflow-hidden shadow-2xl hover:scale-[1.02] transition duration-500"
          >

            {/* TOP */}
            <div className={`bg-gradient-to-r ${item.color} p-8`}>

              <p className="text-sm uppercase tracking-[3px] text-white/80 mb-3">
                GeoMeasure+
              </p>

              <h1 className="text-3xl font-black mb-3">
                {item.title}
              </h1>

              <p className="text-white/90">
                {item.subtitle}
              </p>

            </div>

            {/* CONTENT */}
            <div className="p-8">

              <p className="text-slate-300 leading-relaxed mb-8">
                {item.desc}
              </p>

              {/* TARGET */}
              <div className="mb-6">

                <h2 className="text-cyan-400 font-bold mb-2">
                  Target Pengguna
                </h2>

                <p className="text-slate-400">
                  {item.target}
                </p>

              </div>

              {/* OUTPUT */}
              <div>

                <h2 className="text-cyan-400 font-bold mb-2">
                  Output Digital
                </h2>

                <p className="text-slate-400">
                  {item.output}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* SOCIAL IMPACT */}
      <section className="mt-32">

        <div className="max-w-6xl mx-auto bg-gradient-to-r from-cyan-600 to-blue-800 rounded-[40px] p-10 md:p-16 shadow-2xl">

          <h1 className="text-4xl md:text-5xl font-black mb-8">
            Social Mapping Fund
          </h1>

          <p className="text-lg leading-relaxed text-white/90 mb-6">
            GeoMeasure+ menerapkan konsep Techno-Social Enterprise, di mana
            sebagian keuntungan dari proyek komersial digunakan untuk
            membantu masyarakat berpenghasilan rendah memperoleh layanan
            pengukuran dan pemetaan secara bersubsidi.
          </p>

          <p className="text-lg leading-relaxed text-white/80">
            Sistem subsidi silang ini memungkinkan masyarakat pelosok tetap
            mendapatkan akses terhadap legalitas spasial modern tanpa
            terbebani biaya logistik dan pengukuran yang tinggi.
          </p>

        </div>

      </section>

    </div>

  );

}