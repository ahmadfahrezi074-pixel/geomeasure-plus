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
        "Layanan pengukuran dan pemetaan kolektif berbasis teknologi GNSS Geodetic dan Drone RTK untuk membantu masyarakat desa memperoleh legalitas bidang tanah secara lebih cepat, akurat, transparan, dan terjangkau.",

      spesifikasi: [
        "Pengukuran GNSS Geodetic",
        "Pemetaan Drone RTK",
        "Peta Bidang Tanah",
        "Database WebGIS Desa",
        "Validasi Data Lapangan",
      ],

      target:
        "Masyarakat Desa, Program Sosial Pertanahan, Pemerintah Desa",

      output:
        "Shapefile (.shp), PDF Peta, Data Koordinat, Database GIS",

      hargaDetail: [
        "0 - 2 Ha : Rp250.000",
        "Tambahan >2 Ha : Rp30.000 / Ha",
        "Survey Pelosok : GRATIS",
      ],
    },

    {
      icon: <Map size={42} />,

      title: "Rekonstruksi Data Spasial",

      subtitle: "Pemutakhiran Surat Ukur Lama",

      color: "from-green-500 to-emerald-700",

      harga: "Mulai Rp385.000",

      desc:
        "Layanan digitalisasi dan rekonstruksi data spasial lama menggunakan analisis SIG dan tracking bidang tanah agar data pertanahan menjadi lebih presisi dan modern.",

      spesifikasi: [
        "Tracking Bidang Lama",
        "Digitalisasi Peta Analog",
        "Integrasi SIG",
        "Koreksi Posisi Bidang",
        "Analisis Overlay Spasial",
      ],

      target:
        "Pemilik Tanah Lama, Pemerintah Desa, Rekonstruksi Arsip BPN",

      output:
        "Peta Rekonstruksi, File GIS, Validasi Koordinat, Arsip Digital",

      hargaDetail: [
        "2 Ha pertama : Rp250.000",
        "Kelebihan 4,5 Ha : Rp135.000",
        "Digitalisasi Arsip : Include",
      ],
    },

    {
      icon: <Building2 size={42} />,

      title: "Audit Komersial HGU",

      subtitle: "Pemetaan Korporasi & Konsesi",

      color: "from-orange-500 to-red-700",

      harga: "Mulai Rp44.500.000",

      desc:
        "Layanan pemetaan skala besar menggunakan Drone Mapping, Orthophoto HD, DEM, dan analisis topografi digital untuk kebutuhan audit konsesi dan proyek korporasi.",

      spesifikasi: [
        "Drone Mapping",
        "Orthophoto HD",
        "DEM & Kontur",
        "Audit Konsesi",
        "Analisis Topografi",
      ],

      target:
        "Perusahaan Sawit, Developer, BUMN, Konsesi HGU",

      output:
        "Orthophoto HD, DEM, Kontur, Peta Konsesi, Data GIS",

      hargaDetail: [
        "Biaya Admin : Rp1.500.000",
        "Jasa Teknis : Rp150.000 - Rp300.000 / Ha",
        "Output GIS Premium : Include",
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

      {/* KATALOG */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-start gap-10">

        {layanan.map((item, index) => (

          <div
            key={index}
            className="w-full lg:w-[31%] bg-white/5 border border-white/10 rounded-[40px] overflow-hidden backdrop-blur-2xl shadow-2xl hover:border-cyan-400/30 hover:shadow-cyan-500/10 transition-all duration-500"
            style={{
              alignSelf: "flex-start",
            }}
          >

            {/* HEADER CARD */}
            <div className={`bg-gradient-to-r ${item.color} p-8`}>

              <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-8 border border-white/10">

                {item.icon}

              </div>

              <h1 className="text-3xl font-black mb-4">
                {item.title}
              </h1>

              <p className="text-white/80 text-lg mb-8">
                {item.subtitle}
              </p>

              <div className="inline-block bg-black/20 px-6 py-4 rounded-2xl border border-white/10">

                <p className="text-sm uppercase tracking-[3px] text-white/70 mb-2">
                  Harga Mulai
                </p>

                <h1 className="text-4xl font-black">
                  {item.harga}
                </h1>

              </div>

            </div>

            {/* CONTENT */}
            <div className="p-8">

              <p className="text-slate-300 leading-relaxed text-lg mb-10">
                {item.desc}
              </p>

              {/* BUTTON */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className={`w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3

                ${openIndex === index
                    ? "bg-red-500 hover:bg-red-400"
                    : "bg-cyan-500 hover:bg-cyan-400"
                  }
                `}
              >

                {openIndex === index
                  ? "Tutup Detail"
                  : "Lihat Detail"}

                {openIndex === index
                  ? <ChevronUp />
                  : <ChevronDown />
                }

              </button>

              {/* DETAIL */}
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out

                ${openIndex === index
                    ? "max-h-[2500px] opacity-100 mt-10"
                    : "max-h-0 opacity-0"
                  }
                `}
              >

                {/* SPESIFIKASI */}
                <div className="mb-10">

                  <h2 className="text-cyan-400 text-2xl font-bold mb-5">
                    Spesifikasi
                  </h2>

                  <div className="space-y-4">

                    {item.spesifikasi.map((spec, i) => (

                      <div
                        key={i}
                        className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-slate-300"
                      >

                        • {spec}

                      </div>

                    ))}

                  </div>

                </div>

                {/* TARGET */}
                <div className="mb-10">

                  <h2 className="text-cyan-400 text-2xl font-bold mb-5">
                    Target Pengguna
                  </h2>

                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-slate-300">

                    {item.target}

                  </div>

                </div>

                {/* OUTPUT */}
                <div className="mb-10">

                  <h2 className="text-cyan-400 text-2xl font-bold mb-5">
                    Output Digital
                  </h2>

                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-slate-300">

                    {item.output}

                  </div>

                </div>

                {/* HARGA */}
                <div>

                  <h2 className="text-cyan-400 text-2xl font-bold mb-5">
                    Detail Harga
                  </h2>

                  <div className="space-y-4">

                    {item.hargaDetail.map((harga, i) => (

                      <div
                        key={i}
                        className="bg-cyan-500/10 border border-cyan-400/20 rounded-2xl px-5 py-4 text-slate-200"
                      >

                        • {harga}

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}