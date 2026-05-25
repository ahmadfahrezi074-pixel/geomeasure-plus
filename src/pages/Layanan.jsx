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

  const [luasTanah, setLuasTanah] = useState({});

  const layanan = [

    {
      icon: <Landmark size={42} />,

      title: "Pra-Sertifikasi Massal",

      subtitle: "Program Satu Desa Satu Peta",

      color: "from-cyan-500 to-blue-700",

      hargaAwal: 250000,

      desc:
        "Layanan pengukuran dan pemetaan kolektif berbasis GNSS Geodetic dan Drone RTK untuk membantu masyarakat memperoleh legalitas bidang tanah secara lebih cepat, akurat, transparan, dan terjangkau.",

      persyaratan: [
        "Fotokopi KTP",
        "Surat Kepemilikan Tanah",
        "Titik Lokasi Tanah",
        "Batas Bidang Tanah Jelas",
      ],

      spesifikasi: [
        "Pengukuran GNSS Geodetic",
        "Drone Mapping RTK",
        "Peta Bidang Tanah",
        "Database GIS",
        "Validasi Lapangan",
      ],

      target:
        "Masyarakat Desa dan Program Sosial Pertanahan",

      output:
        "PDF Peta, SHP, Data Koordinat, Arsip Digital",

      simulasi:
        "Rp250.000 untuk 2 Ha pertama + Rp30.000/Ha berikutnya",
    },

    {
      icon: <Map size={42} />,

      title: "Rekonstruksi Data Spasial",

      subtitle: "Pemutakhiran Surat Ukur Lama",

      color: "from-green-500 to-emerald-700",

      hargaAwal: 385000,

      desc:
        "Layanan digitalisasi dan rekonstruksi data spasial lama menggunakan SIG agar data pertanahan menjadi lebih modern dan presisi.",

      persyaratan: [
        "Surat Ukur Lama",
        "Fotokopi KTP",
        "Data Lokasi Bidang",
        "Dokumen Pendukung",
      ],

      spesifikasi: [
        "Tracking Bidang",
        "Digitalisasi Peta",
        "Integrasi SIG",
        "Overlay Spasial",
        "Koreksi Posisi",
      ],

      target:
        "Pemilik Tanah Lama dan Rekonstruksi Arsip",

      output:
        "Peta Rekonstruksi, File GIS, Validasi Koordinat",

      simulasi:
        "2 Ha pertama Rp250.000 + kelebihan 4,5 Ha Rp135.000",
    },

    {
      icon: <Building2 size={42} />,

      title: "Audit Komersial HGU",

      subtitle: "Pemetaan Korporasi & Konsesi",

      color: "from-orange-500 to-red-700",

      hargaAwal: 44500000,

      desc:
        "Layanan pemetaan skala besar menggunakan Drone Mapping dan Orthophoto HD untuk audit konsesi dan proyek korporasi.",

      persyaratan: [
        "Legalitas Perusahaan",
        "Data Lokasi HGU",
        "Koordinat Awal",
        "Dokumen Perizinan",
      ],

      spesifikasi: [
        "Drone Mapping",
        "Orthophoto HD",
        "DEM & Kontur",
        "Analisis Topografi",
        "Audit Konsesi",
      ],

      target:
        "Perusahaan Sawit, Developer, BUMN",

      output:
        "Orthophoto HD, DEM, Kontur, Data GIS",

      simulasi:
        "Rp150.000 - Rp300.000 / Ha + biaya administrasi",
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
                  Rp {item.hargaAwal.toLocaleString("id-ID")}
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
                    ? "max-h-[4000px] opacity-100 mt-10"
                    : "max-h-0 opacity-0"
                  }
                `}
              >

                {/* PERSYARATAN */}
                <div className="mb-10">

                  <h2 className="text-cyan-400 text-2xl font-bold mb-5">
                    Persyaratan
                  </h2>

                  <div className="space-y-4">

                    {item.persyaratan.map((syarat, i) => (

                      <div
                        key={i}
                        className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-slate-300"
                      >

                        • {syarat}

                      </div>

                    ))}

                  </div>

                </div>

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

                {/* SIMULASI HARGA */}
                <div className="mb-10">

                  <h2 className="text-cyan-400 text-2xl font-bold mb-5">
                    Simulasi Harga
                  </h2>

                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                    <input
                      type="number"
                      placeholder="Masukkan luas tanah (Ha)"
                      value={luasTanah[index] || ""}
                      onChange={(e) =>
                        setLuasTanah({
                          ...luasTanah,
                          [index]: e.target.value,
                        })
                      }
                      className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none mb-6"
                    />

                    <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-2xl p-5">

                      <p className="text-slate-300 mb-2">
                        Estimasi Harga
                      </p>

                      <h1 className="text-4xl font-black text-cyan-400">

                        Rp{" "}

                        {(
                          item.hargaAwal *
                          (Number(luasTanah[index]) || 1)
                        ).toLocaleString("id-ID")}

                      </h1>

                    </div>

                    <p className="text-slate-500 text-sm mt-4">
                      {item.simulasi}
                    </p>

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