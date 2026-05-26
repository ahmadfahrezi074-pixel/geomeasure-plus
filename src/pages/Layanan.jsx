import { useState } from "react";

import {
  ChevronDown,
  ChevronUp,
  Landmark,
  Map,
  Building2,
  ShieldCheck,
} from "lucide-react";

export default function Layanan() {

  const [openIndex, setOpenIndex] = useState(null);

  const [inputValue, setInputValue] = useState({});

  const [geoDesaType, setGeoDesaType] = useState({});

  const layanan = [

    {
      icon: <Landmark size={36} />,

      title: "GeoDesa",

      subtitle:
        "Pemetaan dan pengukuran tanah berbasis GNSS untuk masyarakat desa.",

      color: "from-cyan-500 to-blue-700",

      kategori:
        "MBR & Reguler",

      desc:
        "Layanan pemetaan kolektif desa dan pengukuran bidang tanah dengan sistem digital modern untuk mendukung administrasi pertanahan dan pembangunan wilayah.",

      persyaratan: [
        "KTP & KK",
        "Dokumen alas hak",
        "Surat batas sempadan",
        "Patok batas lahan",
        "SKTM / DTKS khusus subsidi",
        "SPPT PBB untuk reguler",
      ],

      spesifikasi: [
        "GNSS Geodetic",
        "Drone RTK",
        "TM-3° Mapping",
        "WebGIS Desa",
      ],

      output:
        "Peta digital, shapefile, gambar ukur, dan arsip spasial.",

      calculatorType: "geoDesa",
    },

    {
      icon: <Map size={36} />,

      title: "GeoTrace",

      subtitle:
        "Rekonstruksi posisi bidang tanah dan peta lama.",

      color: "from-green-500 to-emerald-700",

      kategori:
        "Umum & Sertifikat Lama",

      desc:
        "Pelacakan dan rekonstruksi koordinat bidang tanah menggunakan GNSS dan overlay data spasial modern.",

      persyaratan: [
        "KTP pemilik",
        "Sertifikat / SU / GS",
        "SPPT PBB",
        "Surat penguasaan fisik",
        "Dokumentasi lokasi",
      ],

      spesifikasi: [
        "Tracking Koordinat",
        "Overlay Peta",
        "Digitalisasi",
        "Validasi Batas",
      ],

      output:
        "Peta rekonstruksi digital dan visualisasi batas bidang.",

      calculatorType: "geoTrace",
    },

    {
      icon: <Building2 size={36} />,

      title: "GeoCorp",

      subtitle:
        "Pemetaan udara dan survey kawasan skala luas.",

      color: "from-orange-500 to-red-700",

      kategori:
        "Perusahaan & Developer",

      desc:
        "Survey kawasan dan pemetaan drone modern untuk kebutuhan industri, developer, dan perusahaan.",

      persyaratan: [
        "Akta perusahaan",
        "NIB & KKPR",
        "Peta kawasan",
        "PIC lapangan",
        "SPK kerja sama",
      ],

      spesifikasi: [
        "Orthophoto HD",
        "DEM & Kontur",
        "Drone Mapping",
        "Dashboard GIS",
      ],

      output:
        "Orthophoto, DEM, peta kawasan, dan database GIS.",

      calculatorType: "geoCorp",
    },

    {
      icon: <ShieldCheck size={36} />,

      title: "GeoGov",

      subtitle:
        "Visualisasi pajak dan informasi tanah digital.",

      color: "from-violet-500 to-purple-700",

      kategori:
        "Pemerintah & Publik",

      desc:
        "Layanan visualisasi objek pajak dan integrasi data spasial berbasis WebGIS modern.",

      persyaratan: [
        "Surat permohonan",
        "Data objek pajak",
        "Peta administrasi",
        "Operator pendamping",
      ],

      spesifikasi: [
        "Dashboard Pajak",
        "WebGIS",
        "Data Spasial",
        "Monitoring Digital",
      ],

      output:
        "Dashboard visualisasi pajak dan integrasi WebGIS.",

      calculatorType: "geoGov",
    },

  ];

  const calculatePrice = (type, value, kategori) => {

    const val = Number(value) || 0;

    switch (type) {

      case "geoDesa":

        if (kategori === "subsidi") {

          if (val <= 2000) return 250000;

          return (
            250000 +
            Math.ceil((val - 2000) / 1000) * 30000
          );

        }

        if (kategori === "reguler") {

          if (val <= 2000) return 550000;

          return (
            550000 +
            Math.ceil((val - 2000) / 1000) * 50000
          );

        }

        return 0;

      case "geoTrace":

        return 385000 + Math.ceil(val / 1000) * 15000;

      case "geoCorp":

        return 1500000 + Math.ceil(val / 1000) * 200000;

      case "geoGov":

        return (val * 15000) + 5000000;

      default:

        return 0;

    }

  };

  return (

    <div className="min-h-screen bg-slate-950 text-white px-4 md:px-10 py-28 overflow-hidden">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-16">

        <p className="text-cyan-400 uppercase tracking-[4px] font-semibold mb-4">

          GeoMeasure+ Services

        </p>

        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">

          Layanan
          <br />

          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

            GeoMeasure+

          </span>

        </h1>

        <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">

          Solusi pengukuran, pemetaan, dan layanan geospasial
          digital modern untuk masyarakat, perusahaan, dan pemerintah.

        </p>

      </div>

      {/* SERVICES */}
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {layanan.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[34px] overflow-hidden backdrop-blur-2xl shadow-2xl transition-all duration-500 hover:border-cyan-400/30 hover:-translate-y-1 hover:shadow-cyan-500/10 h-fit"
            >

              {/* TOP */}
              <div className={`bg-gradient-to-r ${item.color} p-6`}>

                <div className="flex flex-col gap-5">

                  <div className="flex items-center gap-5">

                    <div className="w-20 h-20 rounded-3xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">

                      {item.icon}

                    </div>

                    <div>

                      <h1 className="text-3xl md:text-4xl font-black mb-2">

                        {item.title}

                      </h1>

                      <p className="text-white/90 text-sm md:text-base leading-relaxed mb-3 max-w-2xl">

                        {item.subtitle}

                      </p>

                      <div className="bg-black/20 border border-white/10 rounded-2xl px-4 py-3 inline-block">

                        <p className="text-xs uppercase tracking-[2px] text-white/60 mb-1">

                          Target

                        </p>

                        <p className="font-semibold text-sm">

                          {item.kategori}

                        </p>

                      </div>

                    </div>

                  </div>

                  <button
                    onClick={() =>
                      setOpenIndex(
                        openIndex === index ? null : index
                      )
                    }
                    className={`

                    px-6
                    py-4
                    rounded-2xl
                    font-bold
                    text-sm
                    transition-all
                    duration-300
                    flex
                    items-center
                    justify-center
                    gap-3
                    shrink-0

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
                      ? <ChevronUp size={18} />
                      : <ChevronDown size={18} />
                    }

                  </button>

                </div>

              </div>

              {/* DETAIL */}
              <div
                className={`

                overflow-hidden
                transition-all
                duration-700
                ease-in-out

                ${openIndex === index
                    ? "max-h-[4000px] opacity-100"
                    : "max-h-0 opacity-0"
                  }

                `}
              >

                <div className="p-6">

                  <div className="mb-6">

                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">

                      {item.desc}

                    </p>

                  </div>

                  <div className="grid lg:grid-cols-3 gap-5 items-start">

                    {/* PERSYARATAN */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-5">

                      <h2 className="text-cyan-400 text-lg font-bold mb-4">

                        Persyaratan

                      </h2>

                      <div className="space-y-3">

                        {item.persyaratan.map((syarat, i) => (

                          <div
                            key={i}
                            className="bg-slate-900/40 border border-white/5 rounded-xl px-3 py-3 text-slate-300 text-xs leading-relaxed"
                          >

                            • {syarat}

                          </div>

                        ))}

                      </div>

                    </div>

                    {/* SPESIFIKASI */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-5">

                      <h2 className="text-cyan-400 text-lg font-bold mb-4">

                        Spesifikasi

                      </h2>

                      <div className="space-y-3">

                        {item.spesifikasi.map((spec, i) => (

                          <div
                            key={i}
                            className="bg-slate-900/40 border border-white/5 rounded-xl px-3 py-3 text-slate-300 text-xs"
                          >

                            • {spec}

                          </div>

                        ))}

                      </div>

                      <div className="mt-5">

                        <h2 className="text-cyan-400 text-lg font-bold mb-3">

                          Output

                        </h2>

                        <div className="bg-slate-900/40 border border-white/5 rounded-xl px-3 py-3 text-slate-300 text-xs leading-relaxed">

                          {item.output}

                        </div>

                      </div>

                    </div>

                    {/* SIMULASI */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-5">

                      <h2 className="text-cyan-400 text-lg font-bold mb-4">

                        Simulasi

                      </h2>

                      {item.calculatorType === "geoDesa" && (

                        <select
                          value={geoDesaType[index] || ""}
                          onChange={(e) =>
                            setGeoDesaType({
                              ...geoDesaType,
                              [index]: e.target.value,
                            })
                          }
                          className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none mb-4"
                        >

                          <option value="">
                            Pilih Kategori
                          </option>

                          <option value="subsidi">
                            Bersubsidi
                          </option>

                          <option value="reguler">
                            Reguler
                          </option>

                        </select>

                      )}

                      <input
                        type="number"
                        placeholder={
                          item.calculatorType === "geoGov"
                            ? "Jumlah NOP"
                            : "Luas Lahan (m²)"
                        }
                        value={inputValue[index] || ""}
                        onChange={(e) =>
                          setInputValue({
                            ...inputValue,
                            [index]: e.target.value,
                          })
                        }
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none mb-4"
                      />

                      <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-2xl p-4">

                        <p className="text-slate-300 text-xs mb-2">

                          Estimasi Biaya

                        </p>

                        <h1 className="text-2xl font-black text-cyan-400">

                          {Number(inputValue[index]) > 0
                            ? `Rp ${calculatePrice(
                                item.calculatorType,
                                inputValue[index],
                                geoDesaType[index]
                              ).toLocaleString("id-ID")}`
                            : "Estimasi: Rp 0"}

                        </h1>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}