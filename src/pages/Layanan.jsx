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
      icon: <Landmark size={38} />,

      title: "GeoDesa",

      subtitle:
        "Pemetaan kolektif desa dan pengukuran bidang tanah berbasis geospasial modern.",

      color: "from-cyan-500 to-blue-700",

      kategori:
        "Masyarakat Bersubsidi & Reguler",

      desc:
        "GeoDesa membantu masyarakat dalam pengukuran dan pemetaan bidang tanah secara digital menggunakan GNSS Geodetic, drone mapping, dan WebGIS desa agar administrasi pertanahan menjadi lebih tertata, modern, dan mudah diakses.",

      persyaratan: [

        "Fotokopi KTP & KK pemohon",

        "Dokumen alas hak tanah (Sporadik / Hibah / Surat Jual Beli)",

        "Surat persetujuan batas sempadan tetangga",

        "Patok batas lahan telah dipasang",

        "SKTM / DTKS / KKS / KIP khusus kategori subsidi",

        "SPPT PBB tahun berjalan untuk reguler",

      ],

      spesifikasi: [

        "Pengukuran GNSS Geodetic presisi tinggi",

        "Pemetaan drone RTK resolusi tinggi",

        "Peta bidang digital TM-3°",

        "Integrasi WebGIS Desa",

      ],

      output:
        "Peta digital, shapefile (.shp), gambar ukur indikatif, dan arsip data spasial.",

      calculatorType: "geoDesa",
    },

    {
      icon: <Map size={38} />,

      title: "GeoTrace",

      subtitle:
        "Rekonstruksi bidang tanah dan pelacakan koordinat secara digital.",

      color: "from-green-500 to-emerald-700",

      kategori:
        "Pemilik Sertifikat Lama & Umum",

      desc:
        "GeoTrace digunakan untuk membantu menemukan kembali posisi bidang tanah lama berdasarkan surat ukur, gambar situasi, maupun data analog menggunakan teknologi GNSS dan GIS modern.",

      persyaratan: [

        "Fotokopi KTP pemilik tanah",

        "Fotokopi sertifikat / surat ukur lama",

        "SPPT PBB tahun berjalan",

        "Surat penguasaan fisik tanah",

        "Akses lokasi untuk survey lapangan",

      ],

      spesifikasi: [

        "Tracking koordinat bidang",

        "Rekonstruksi peta analog",

        "Overlay data spasial",

        "Validasi koordinat GNSS",

      ],

      output:
        "Peta rekonstruksi digital, visualisasi batas bidang, dan file GIS koordinat.",

      calculatorType: "geoTrace",
    },

    {
      icon: <Building2 size={38} />,

      title: "GeoCorp",

      subtitle:
        "Pemetaan kawasan perusahaan dan industri berbasis drone dan GIS.",

      color: "from-orange-500 to-red-700",

      kategori:
        "Perusahaan, Developer & Swasta",

      desc:
        "GeoCorp menyediakan layanan pemetaan udara dan survey kawasan skala besar untuk kebutuhan perusahaan, perkebunan, developer, dan industri dengan sistem digital modern.",

      persyaratan: [

        "Akta perusahaan & NIB",

        "Dokumen izin lokasi / KKPR",

        "Peta kawasan atau area kerja",

        "PIC pendamping lapangan",

        "Dokumen kerja sama / SPK",

      ],

      spesifikasi: [

        "Orthophoto resolusi tinggi",

        "Drone mapping kawasan",

        "DEM & kontur digital",

        "Dashboard monitoring WebGIS",

      ],

      output:
        "Orthophoto HD, DEM, peta kawasan digital, dan database GIS perusahaan.",

      calculatorType: "geoCorp",
    },

    {
      icon: <ShieldCheck size={38} />,

      title: "GeoGov",

      subtitle:
        "Visualisasi pajak tanah dan integrasi data spasial digital.",

      color: "from-violet-500 to-purple-700",

      kategori:
        "Pemerintah Daerah & Masyarakat",

      desc:
        "GeoGov membantu visualisasi objek pajak, informasi nilai tanah, serta integrasi data spasial berbasis WebGIS untuk mempermudah pengecekan informasi pertanahan secara modern dan interaktif.",

      persyaratan: [

        "Surat permohonan resmi",

        "Database objek pajak (.csv/.xls)",

        "Peta administrasi wilayah",

        "Dokumen kerja sama digital",

        "Operator pendamping sistem",

      ],

      spesifikasi: [

        "Visualisasi objek pajak digital",

        "Dashboard WebGIS interaktif",

        "Monitoring data spasial",

        "Integrasi data pajak digital",

      ],

      output:
        "Dashboard WebGIS, visualisasi pajak digital, dan laporan spasial interaktif.",

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

        return val * 15000 + 5000000;

      default:

        return 0;

    }

  };

  return (

    <div className="min-h-screen bg-slate-950 text-white px-5 md:px-10 py-28 overflow-hidden">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-20">

        <p className="text-cyan-400 uppercase tracking-[5px] font-semibold mb-4">

          GeoMeasure+ Services

        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">

          Katalog Layanan
          <br />

          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

            GeoMeasure+

          </span>

        </h1>

        <p className="text-slate-400 text-lg max-w-4xl mx-auto leading-relaxed">

          Solusi pengukuran, pemetaan, dan layanan geospasial digital modern
          untuk masyarakat, perusahaan, dan pemerintah daerah.

        </p>

      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid xl:grid-cols-2 gap-8">

        {layanan.map((item, index) => (

          <div
            key={index}
            className="
              bg-white/[0.04]
              border
              border-white/10
              rounded-[36px]
              overflow-hidden
              backdrop-blur-2xl
              transition-all
              duration-500
              hover:border-cyan-400/30
              hover:shadow-cyan-500/10
            "
          >

            {/* TOP */}
            <div className={`bg-gradient-to-r ${item.color} p-7`}>

              <div className="flex items-start justify-between gap-5">

                <div className="flex gap-5">

                  <div className="w-20 h-20 rounded-3xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">

                    {item.icon}

                  </div>

                  <div>

                    <h1 className="text-3xl font-black mb-3">

                      {item.title}

                    </h1>

                    <p className="text-white/90 text-sm leading-relaxed mb-4 max-w-xl">

                      {item.subtitle}

                    </p>

                    <div className="bg-black/20 border border-white/10 rounded-2xl px-4 py-3 inline-block">

                      <p className="text-xs uppercase tracking-[3px] text-white/70 mb-1">

                        Target Layanan

                      </p>

                      <p className="text-sm font-semibold">

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
                    px-5
                    py-4
                    rounded-2xl
                    font-bold
                    transition-all
                    duration-300
                    flex
                    items-center
                    gap-2
                    shrink-0

                    ${
                      openIndex === index
                        ? "bg-red-500 hover:bg-red-400"
                        : "bg-cyan-500 hover:bg-cyan-400"
                    }
                  `}
                >

                  {openIndex === index
                    ? "Tutup"
                    : "Detail"}

                  {openIndex === index
                    ? <ChevronUp size={18} />
                    : <ChevronDown size={18} />
                  }

                </button>

              </div>

            </div>

            {/* DETAIL */}
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openIndex === index
                  ? "max-h-[2500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >

              <div className="p-6 md:p-7">

                {/* DESKRIPSI */}
                <div className="mb-6">

                  <p className="text-slate-300 leading-relaxed text-sm md:text-[15px]">

                    {item.desc}

                  </p>

                </div>

                {/* LANDSCAPE CONTENT */}
                <div className="grid xl:grid-cols-[1.1fr_1fr] gap-5 items-start">

                  {/* LEFT */}
                  <div className="space-y-5">

                    {/* PERSYARATAN */}
                    <div className="bg-white/[0.04] border border-white/10 rounded-[28px] p-5">

                      <h2 className="text-cyan-400 text-xl font-bold mb-5">

                        Persyaratan Administrasi

                      </h2>

                      <div className="grid sm:grid-cols-2 gap-3">

                        {item.persyaratan.map((syarat, i) => (

                          <div
                            key={i}
                            className="
                              bg-slate-900/60
                              border border-white/5
                              rounded-2xl
                              p-4
                              min-h-[95px]
                              flex
                              items-start
                            "
                          >

                            <p className="text-slate-300 text-sm leading-relaxed">

                              • {syarat}

                            </p>

                          </div>

                        ))}

                      </div>

                    </div>

                    {/* OUTPUT */}
                    <div className="bg-white/[0.04] border border-white/10 rounded-[28px] p-5">

                      <h2 className="text-cyan-400 text-xl font-bold mb-4">

                        Output Digital

                      </h2>

                      <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-5">

                        <p className="text-slate-300 text-sm leading-relaxed">

                          {item.output}

                        </p>

                      </div>

                    </div>

                  </div>

                  {/* RIGHT */}
                  <div className="space-y-5">

                    {/* SPESIFIKASI */}
                    <div className="bg-white/[0.04] border border-white/10 rounded-[28px] p-5">

                      <h2 className="text-cyan-400 text-xl font-bold mb-5">

                        Spesifikasi Teknis

                      </h2>

                      <div className="grid sm:grid-cols-2 gap-3">

                        {item.spesifikasi.map((spec, i) => (

                          <div
                            key={i}
                            className="
                              bg-slate-900/60
                              border border-white/5
                              rounded-2xl
                              p-4
                              min-h-[90px]
                              flex
                              items-center
                            "
                          >

                            <p className="text-slate-300 text-sm leading-relaxed">

                              • {spec}

                            </p>

                          </div>

                        ))}

                      </div>

                    </div>

                    {/* SIMULASI */}
                    <div className="bg-white/[0.04] border border-white/10 rounded-[28px] p-5">

                      <h2 className="text-cyan-400 text-xl font-bold mb-5">

                        Simulasi Biaya

                      </h2>

                      <div className="grid md:grid-cols-2 gap-4">

                        {/* INPUT */}
                        <div>

                          {item.calculatorType === "geoDesa" && (

                            <select
                              value={geoDesaType[index] || ""}
                              onChange={(e) =>
                                setGeoDesaType({
                                  ...geoDesaType,
                                  [index]: e.target.value,
                                })
                              }
                              className="
                                w-full
                                bg-slate-900
                                border
                                border-white/10
                                rounded-2xl
                                px-5
                                py-4
                                text-white
                                outline-none
                                mb-4
                              "
                            >

                              <option value="">
                                Pilih Kategori
                              </option>

                              <option value="subsidi">
                                GeoDesa Bersubsidi
                              </option>

                              <option value="reguler">
                                GeoDesa Reguler
                              </option>

                            </select>

                          )}

                          <input
                            type="number"
                            placeholder={
                              item.calculatorType === "geoGov"
                                ? "Jumlah objek pajak"
                                : "Luas lahan (m²)"
                            }
                            value={inputValue[index] || ""}
                            onChange={(e) =>
                              setInputValue({
                                ...inputValue,
                                [index]: e.target.value,
                              })
                            }
                            className="
                              w-full
                              bg-slate-900
                              border
                              border-white/10
                              rounded-2xl
                              px-5
                              py-4
                              text-white
                              outline-none
                            "
                          />

                        </div>

                        {/* RESULT */}
                        <div
                          className="
                            rounded-[28px]
                            bg-gradient-to-br
                            from-cyan-500/20
                            to-blue-500/10
                            border
                            border-cyan-400/20
                            p-6
                            flex
                            flex-col
                            justify-center
                          "
                        >

                          <p className="text-slate-300 text-sm mb-2">

                            Estimasi Biaya

                          </p>

                          <h1 className="text-3xl font-black text-cyan-400 leading-tight">

                            {Number(inputValue[index]) > 0
                              ? `Rp ${calculatePrice(
                                  item.calculatorType,
                                  inputValue[index],
                                  geoDesaType[index]
                                ).toLocaleString("id-ID")}`
                              : "Estimasi: Rp 0"}

                          </h1>

                          <div className="mt-4 space-y-2">

                            {item.calculatorType === "geoDesa" && (
                              <>
                                <p className="text-slate-300 text-xs">

                                  • Bersubsidi: Rp250.000 / 2.000 m²

                                </p>

                                <p className="text-slate-300 text-xs">

                                  • Reguler: Rp550.000 / 2.000 m²

                                </p>
                              </>
                            )}

                            {item.calculatorType === "geoTrace" && (
                              <p className="text-slate-300 text-xs">

                                • Rekonstruksi & tracking bidang tanah

                              </p>
                            )}

                            {item.calculatorType === "geoCorp" && (
                              <p className="text-slate-300 text-xs">

                                • Perhitungan berdasarkan luas kawasan

                              </p>
                            )}

                            {item.calculatorType === "geoGov" && (
                              <p className="text-slate-300 text-xs">

                                • Berdasarkan jumlah objek pajak/NOP

                              </p>
                            )}

                          </div>

                        </div>

                      </div>

                    </div>

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