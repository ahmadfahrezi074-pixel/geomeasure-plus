import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Map,
  Building2,
  Landmark,
} from "lucide-react";

export default function Layanan() {

  const [openIndex, setOpenIndex] = useState(null);

  const layanan = [

    {
      icon: <Landmark size={42} />,
      title: "Pra-Sertifikasi Massal",
      subtitle: "Program Satu Desa Satu Peta",
      color: "from-cyan-500 to-blue-700",

      harga: "Mulai Rp250.000",

      desc:
        "Program pengukuran tanah kolektif untuk masyarakat desa dan wilayah pelosok menggunakan GNSS Geodetic serta Drone RTK.",

      spesifikasi: [
        "Pengukuran GNSS Geodetic",
        "Pemetaan Drone RTK",
        "Pembuatan Peta Bidang",
        "Surat Ukur Indikatif",
        "Database WebGIS Desa",
      ],

      target:
        "Masyarakat Berpenghasilan Rendah, Desa Pelosok, Program Sosial",

      output:
        "Shapefile (.shp), PDF Peta Bidang, Data Koordinat, Arsip Digital",

      hargaDetail: [
        "0 - 2 Ha : Rp250.000",
        ">2 Ha : Tambahan Rp30.000 / Ha",
        "Biaya Jarak Pelosok : GRATIS (Subsidi)",
      ],
    },

    {
      icon: <Map size={42} />,
      title: "Rekonstruksi Data Spasial",
      subtitle: "Pemutakhiran Surat Ukur Lama",
      color: "from-green-500 to-emerald-700",

      harga: "Mulai Rp385.000",

      desc:
        "Pelacakan ulang dan digitalisasi bidang tanah lama yang belum memiliki koordinat spasial modern.",

      spesifikasi: [
        "Tracking Bidang Lama",
        "Validasi Spasial",
        "Digitalisasi Peta Analog",
        "Integrasi SIG",
        "Rekonstruksi Surat Ukur",
      ],

      target:
        "Pemilik Tanah Lama, Pemerintah Desa, Rekonstruksi Arsip BPN",

      output:
        "Peta Rekonstruksi, File GIS, Koreksi Bidang, Arsip Digital",

      hargaDetail: [
        "2 Ha pertama : Rp250.000",
        "Kelebihan 4,5 Ha : Rp135.000",
        "Total Simulasi : Rp385.000",
      ],
    },

    {
      icon: <Building2 size={42} />,
      title: "Audit Komersial HGU",
      subtitle: "Pemetaan Korporasi & Konsesi",

      color: "from-orange-500 to-red-700",

      harga: "Mulai Rp44.500.000",

      desc:
        "Layanan pemetaan skala besar untuk perusahaan perkebunan, konsesi HGU, dan audit spasial korporasi.",

      spesifikasi: [
        "Drone Mapping",
        "Orthophoto",
        "DEM & Kontur",
        "Audit Konsesi",
        "Monitoring Perkebunan",
      ],

      target:
        "Perusahaan Sawit, Developer, BUMN, Konsesi HGU",

      output:
        "Orthophoto HD, DEM, Kontur, Peta Konsesi, Data GIS",

      hargaDetail: [
        "Biaya Admin : Rp1.500.000",
        "Jasa Teknis : Rp150.000 - Rp300.000 / Ha",
        "Tambahan Zonasi : Rp3.000.000",
      ],
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
        </h1>

        <p className="text-slate-400 text-lg max-w-4xl mx-auto leading-relaxed">
          Solusi pengukuran dan pemetaan modern berbasis teknologi geospasial
          untuk masyarakat, pemerintah, dan korporasi.
        </p>

      </div>

      {/* CARD */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {layanan.map((item, index) => (

          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-[35px] overflow-hidden backdrop-blur-xl shadow-2xl hover:scale-[1.02] transition duration-500"
          >

            {/* TOP */}
            <div className={`bg-gradient-to-r ${item.color} p-8`}>

              <div className="mb-6">
                {item.icon}
              </div>

              <h1 className="text-3xl font-black mb-3">
                {item.title}
              </h1>

              <p className="text-white/80 mb-6">
                {item.subtitle}
              </p>

              <div className="text-4xl font-black">
                {item.harga}
              </div>

            </div>

            {/* CONTENT */}
            <div className="p-8">

              <p className="text-slate-300 leading-relaxed mb-8">
                {item.desc}
              </p>

              {/* BUTTON */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full bg-cyan-500 hover:bg-cyan-400 transition duration-300 py-4 rounded-2xl font-bold flex items-center justify-center gap-3"
              >

                Lihat Detail

                {openIndex === index ? (
                  <ChevronUp />
                ) : (
                  <ChevronDown />
                )}

              </button>

              {/* DETAIL */}
              {openIndex === index && (

                <div className="mt-8 space-y-8 animate-fadeIn">

                  {/* SPESIFIKASI */}
                  <div>

                    <h2 className="text-cyan-400 font-bold mb-4 text-xl">
                      Spesifikasi
                    </h2>

                    <ul className="space-y-3 text-slate-300">

                      {item.spesifikasi.map((spec, i) => (
                        <li key={i}>
                          • {spec}
                        </li>
                      ))}

                    </ul>

                  </div>

                  {/* TARGET */}
                  <div>

                    <h2 className="text-cyan-400 font-bold mb-4 text-xl">
                      Target Pengguna
                    </h2>

                    <p className="text-slate-300">
                      {item.target}
                    </p>

                  </div>

                  {/* OUTPUT */}
                  <div>

                    <h2 className="text-cyan-400 font-bold mb-4 text-xl">
                      Output Digital
                    </h2>

                    <p className="text-slate-300">
                      {item.output}
                    </p>

                  </div>

                  {/* HARGA */}
                  <div>

                    <h2 className="text-cyan-400 font-bold mb-4 text-xl">
                      Detail Harga
                    </h2>

                    <ul className="space-y-3 text-slate-300">

                      {item.hargaDetail.map((harga, i) => (
                        <li key={i}>
                          • {harga}
                        </li>
                      ))}

                    </ul>

                  </div>

                </div>

              )}

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
            Sebagian keuntungan proyek komersial digunakan untuk membantu
            masyarakat pelosok memperoleh layanan pengukuran tanah secara
            bersubsidi.
          </p>

          <p className="text-lg leading-relaxed text-white/80">
            GeoMeasure+ menerapkan sistem subsidi silang berbasis teknologi
            geospasial modern untuk meningkatkan akses legalitas spasial
            masyarakat Indonesia.
          </p>

        </div>

      </section>

    </div>

  );

}