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
      icon: <Landmark size={40} />,

      title: "GeoDesa",

      subtitle:
        "Layanan pengukuran dan pemetaan desa berbasis teknologi geospasial modern.",

      color: "from-cyan-500 to-blue-700",

      kategori:
        "Masyarakat Bersubsidi & Reguler",

      desc:
        "GeoDesa membantu masyarakat dalam pengukuran bidang tanah, pembuatan peta desa, dan dokumentasi spasial digital dengan sistem modern berbasis GNSS, drone mapping, dan WebGIS.",

      persyaratan: [

        "Fotokopi KTP & KK pemohon",

        "Dokumen alas hak tanah seperti Sporadik, Hibah, atau Surat Jual Beli",

        "Surat persetujuan batas sempadan tetangga",

        "Patok batas bidang tanah telah dipasang",

        "Kategori subsidi wajib melampirkan SKTM / DTKS / KKS / KIP",

        "SPPT PBB tahun berjalan untuk kategori reguler",

      ],

      spesifikasi: [

        "Pengukuran GNSS Geodetic presisi tinggi",

        "Pemetaan drone RTK resolusi tinggi",

        "Pembuatan peta bidang digital TM-3°",

        "Integrasi data WebGIS Desa",

      ],

      output:
        "Peta digital, shapefile (.shp), gambar ukur indikatif, dan arsip spasial digital.",

      calculatorType: "geoDesa",
    },

    {
      icon: <Map size={40} />,

      title: "GeoTrace",

      subtitle:
        "Rekonstruksi dan pelacakan posisi bidang tanah lama secara digital.",

      color: "from-green-500 to-emerald-700",

      kategori:
        "Pemilik Sertifikat Lama & Umum",

      desc:
        "GeoTrace digunakan untuk melacak kembali posisi bidang tanah berdasarkan surat ukur atau gambar situasi lama menggunakan teknologi GNSS dan Sistem Informasi Geografis.",

      persyaratan: [

        "Fotokopi KTP pemilik tanah",

        "Fotokopi Sertifikat / Surat Ukur / Gambar Situasi lama",

        "SPPT PBB tahun berjalan",

        "Surat penguasaan fisik tanah",

        "Akses lokasi untuk survey lapangan",

      ],

      spesifikasi: [

        "Tracking koordinat bidang tanah",

        "Rekonstruksi peta analog",

        "Overlay data spasial digital",

        "Validasi koordinat GNSS",

      ],

      output:
        "Peta rekonstruksi digital, file GIS, visualisasi batas bidang, dan dokumen hasil tracking koordinat.",

      calculatorType: "geoTrace",
    },

    {
      icon: <Building2 size={40} />,

      title: "GeoCorp",

      subtitle:
        "Pemetaan kawasan perusahaan dan industri berbasis drone dan GIS.",

      color: "from-orange-500 to-red-700",

      kategori:
        "Perusahaan, Developer, dan Swasta",

      desc:
        "GeoCorp menyediakan layanan pemetaan kawasan skala besar untuk kebutuhan perusahaan, perkebunan, industri, dan pengembangan kawasan dengan sistem pemetaan udara modern.",

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
      icon: <ShieldCheck size={40} />,

      title: "GeoGov",

      subtitle:
        "Visualisasi pajak tanah dan informasi spasial berbasis digital.",

      color: "from-violet-500 to-purple-700",

      kategori:
        "Pemerintah Daerah & Masyarakat",

      desc:
        "GeoGov membantu visualisasi objek pajak, informasi nilai tanah, dan integrasi data spasial digital untuk mempermudah pengecekan informasi pertanahan secara modern.",

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

    <div className="min-h-screen bg-slate-950 text-white px-5 md:px-10 py-28">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-20">

        <p className="text-cyan-400 uppercase tracking-[4px] font-semibold mb-4">

          GeoMeasure+ Services

        </p>

        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">

          Katalog Layanan
          <br />

          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

            GeoMeasure+

          </span>

        </h1>

        <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">

          Solusi pengukuran, pemetaan, dan layanan geospasial digital modern
          untuk masyarakat, perusahaan, dan pemerintah daerah.

        </p>

      </div>

      {/* SERVICES GRID */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">

        {layanan.map((item, index) => (

          <div
            key={index}
            className="
              bg-white/[0.04]
              border
              border-white/10
              rounded-[36px]
              overflow-hidden
              backdrop-blur-xl
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

                  <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center border border-white/10 shrink-0">

                    {item.icon}

                  </div>

                  <div>

                    <h1 className="text-3xl font-black mb-3">

                      {item.title}

                    </h1>

                    <p className="text-white/90 text-sm leading-relaxed mb-4">

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
                  ? "max-h-[3000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >

              <div className="p-6">

                {/* DESKRIPSI */}
                <div className="mb-7">

                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">

                    {item.desc}

                  </p>

                </div>

                {/* CONTENT */}
                <div className="grid md:grid-cols-3 gap-5">

                  {/* PERSYARATAN */}
                  <div className="bg-white/[0.04] border border-white/10 rounded-[28px] p-5">

                    <h2 className="text-cyan-400 text-xl font-bold mb-5">

                      Persyaratan

                    </h2>

                    <div className="space-y-3">

                      {item.persyaratan.map((syarat, i) => (

                        <div
                          key={i}
                          className="bg-slate-900/60 border border-white/5 rounded-2xl p-4"
                        >

                          <p className="text-slate-300 text-sm leading-relaxed">

                            • {syarat}

                          </p>

                        </div>

                      ))}

                    </div>

                  </div>

                  {/* SPESIFIKASI */}
                  <div className="bg-white/[0.04] border border-white/10 rounded-[28px] p-5">

                    <h2 className="text-cyan-400 text-xl font-bold mb-5">

                      Spesifikasi

                    </h2>

                    <div className="space-y-3 mb-5">

                      {item.spesifikasi.map((spec, i) => (

                        <div
                          key={i}
                          className="bg-slate-900/60 border border-white/5 rounded-2xl p-4"
                        >

                          <p className="text-slate-300 text-sm leading-relaxed">

                            • {spec}

                          </p>

                        </div>

                      ))}

                    </div>

                    <h2 className="text-cyan-400 text-xl font-bold mb-4">

                      Output

                    </h2>

                    <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-5">

                      <p className="text-slate-300 text-sm leading-relaxed">

                        {item.output}

                      </p>

                    </div>

                  </div>

                  {/* SIMULASI */}
                  <div className="bg-white/[0.04] border border-white/10 rounded-[28px] p-5">

                    <h2 className="text-cyan-400 text-xl font-bold mb-5">

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
                        className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none mb-4"
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
                      className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none mb-5"
                    />

                    <div className="rounded-[28px] bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-400/20 p-6">

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