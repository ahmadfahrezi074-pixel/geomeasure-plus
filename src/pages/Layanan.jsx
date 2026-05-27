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

  const [openSpec, setOpenSpec] = useState({});

  const [inputValue, setInputValue] = useState({});

  const [geoDesaType, setGeoDesaType] = useState({});

  const layanan = [

    {
      icon: <Landmark size={42} />,
      title: "GeoDesa",
      subtitle:
        "Pemetaan dan pengukuran tanah desa berbasis teknologi geospasial modern.",
      color: "from-cyan-500 to-blue-700",
      kategori:
        "Masyarakat Bersubsidi & Reguler",

      desc:
        "GeoDesa membantu masyarakat memperoleh data bidang tanah yang akurat, tertata, dan siap digunakan untuk administrasi pertanahan maupun pengembangan wilayah desa berbasis digital.",

      persyaratan: [
        "Fotokopi KTP dan KK pemohon",
        "Dokumen alas hak tanah",
        "Surat persetujuan batas sempadan",
        "Patok batas telah terpasang",
        "Blanko permohonan layanan GeoMeasure+ yang telah diisi lengkap dan ditandatangani pemohon",
        "SKTM/DTKS untuk kategori subsidi",
        "SPPT PBB untuk kategori reguler",
      ],

      spesifikasi: [
        "GNSS Geodetic",
        "Drone RTK Mapping",
        "Shapefile TM-3°",
        "WebGIS Desa",
        "Peta Digital",
      ],

      output:
        "Peta bidang tanah, shapefile, gambar ukur, dan arsip digital.",

      calculatorType: "geoDesa",

      workflow: [
        {
          icon: "📝",
          title: "Registrasi",
          desc: "Pengguna melakukan pendaftaran layanan dan upload dokumen persyaratan.",
        },
        {
          icon: "🛰️",
          title: "Survey",
          desc: "Tim melakukan pengukuran menggunakan GNSS dan drone mapping.",
        },
        {
          icon: "💻",
          title: "Pengolahan",
          desc: "Data diproses menggunakan GIS dan sistem WebGIS digital.",
        },
        {
          icon: "📦",
          title: "Output",
          desc: "Pengguna menerima peta digital dan data spasial siap pakai.",
        },
      ],
    },

    {
      icon: <Map size={42} />,
      title: "GeoTrace",
      subtitle:
        "Pelacakan dan rekonstruksi bidang tanah lama berbasis koordinat modern.",
      color: "from-green-500 to-emerald-700",
      kategori:
        "Pemilik Sertifikat Lama & Umum",

      desc:
        "GeoTrace membantu menemukan kembali posisi bidang tanah lama melalui rekonstruksi koordinat berbasis GNSS dan GIS.",

      persyaratan: [
        "Fotokopi KTP",
        "Sertifikat/SU/GS lama",
        "SPPT PBB",
        "Dokumen penguasaan tanah",
      ],

      spesifikasi: [
        "Tracking Koordinat",
        "Digitalisasi Peta",
        "Overlay GIS",
        "SIG Integration",
      ],

      output:
        "Peta rekonstruksi bidang tanah dan data koordinat digital.",

      calculatorType: "geoTrace",

      workflow: [
        {
          icon: "📄",
          title: "Validasi Arsip",
          desc: "Dokumen lama diverifikasi dan dipindai secara digital.",
        },
        {
          icon: "📍",
          title: "Tracking",
          desc: "Posisi bidang dilacak menggunakan GNSS modern.",
        },
        {
          icon: "🗺️",
          title: "Overlay GIS",
          desc: "Data analog diintegrasikan ke sistem GIS digital.",
        },
        {
          icon: "✅",
          title: "Hasil",
          desc: "Pengguna menerima peta rekonstruksi dan file digital.",
        },
      ],
    },

    {
      icon: <Building2 size={42} />,
      title: "GeoCorp",
      subtitle:
        "Pemetaan kawasan dan monitoring spasial perusahaan berbasis drone.",
      color: "from-orange-500 to-red-700",
      kategori:
        "Perusahaan, Developer, dan Swasta",

      desc:
        "GeoCorp menyediakan layanan pemetaan udara, DEM, kontur, monitoring kawasan, dan dashboard spasial perusahaan.",

      persyaratan: [
        "Akta perusahaan dan NIB",
        "Data kawasan/peta konsesi",
        "SPK atau kerja sama",
        "PIC lapangan",
      ],

      spesifikasi: [
        "Orthophoto HD",
        "DEM & Kontur",
        "Drone Mapping",
        "Dashboard WebGIS",
      ],

      output:
        "Orthophoto HD, DEM, kontur, dan database GIS perusahaan.",

      calculatorType: "geoCorp",

      workflow: [
        {
          icon: "🏢",
          title: "Perencanaan",
          desc: "Analisis area kerja dan kebutuhan pemetaan perusahaan.",
        },
        {
          icon: "🚁",
          title: "Akuisisi Data",
          desc: "Drone melakukan pemetaan udara kawasan.",
        },
        {
          icon: "📊",
          title: "Processing",
          desc: "Data diproses menjadi orthophoto dan DEM.",
        },
        {
          icon: "🌐",
          title: "Monitoring",
          desc: "Data ditampilkan pada dashboard WebGIS perusahaan.",
        },
      ],
    },

    {
      icon: <ShieldCheck size={42} />,
      title: "GeoGov",
      subtitle:
        "Visualisasi pajak dan informasi tanah berbasis data spasial.",
      color: "from-violet-500 to-purple-700",
      kategori:
        "Pemerintah Daerah & Publik",

      desc:
        "GeoGov menghadirkan visualisasi objek pajak dan informasi tanah berbasis WebGIS untuk monitoring dan pengecekan data spasial secara digital.",

      persyaratan: [
        "Surat permohonan layanan",
        "Database objek pajak",
        "Peta administrasi wilayah",
        "Operator/admin pendamping",
      ],

      spesifikasi: [
        "Visualisasi Pajak",
        "Dashboard WebGIS",
        "Peta Interaktif",
        "Monitoring Digital",
      ],

      output:
        "Dashboard pajak digital dan visualisasi bidang tanah interaktif.",

      calculatorType: "geoGov",

      workflow: [
        {
          icon: "📥",
          title: "Import Data",
          desc: "Database objek pajak dimasukkan ke sistem.",
        },
        {
          icon: "🛰️",
          title: "Validasi Spasial",
          desc: "Data diverifikasi dengan citra dan peta digital.",
        },
        {
          icon: "🌐",
          title: "Integrasi WebGIS",
          desc: "Data divisualisasikan pada dashboard interaktif.",
        },
        {
          icon: "📈",
          title: "Monitoring",
          desc: "Monitoring pajak dan tanah dilakukan secara real-time.",
        },
      ],
    },

  ];

  const calculatePrice = (type, value, kategori) => {

    const val = Number(value) || 0;

    switch (type) {

      case "geoDesa":

        if (kategori === "subsidi") {

          if (val <= 20000) return 250000;

          return 250000 + (((val - 20000) / 10000) * 30000);

        }

        if (kategori === "reguler") {

          if (val <= 20000) return 550000;

          return 550000 + (((val - 20000) / 10000) * 50000);

        }

        return 0;

      case "geoTrace":

        return 385000 + ((val / 10000) * 15000);

      case "geoCorp":

        return 1500000 + ((val / 10000) * 200000);

      case "geoGov":

        return (val * 15000) + 5000000;

      default:

        return 0;

    }

  };

  return (

  <div className="min-h-screen bg-slate-950 text-white px-6 md:px-14 py-28">

      <div className="max-w-7xl mx-auto text-center mb-20">

        <p className="text-cyan-400 uppercase tracking-[6px] font-semibold mb-4">
          GeoMeasure+ Ecosystem
        </p>

        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">

          Katalog Layanan
          <br />

          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            GeoMeasure+
          </span>

        </h1>

        <p className="text-slate-400 text-lg max-w-4xl mx-auto leading-relaxed">
          Platform layanan pengukuran, pemetaan, dan visualisasi data spasial modern.
        </p>

      </div>

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {layanan.map((item, index) => (

          <div
            key={index}
            className={`

            bg-white/5
            border
            border-white/10
            rounded-[35px]
            overflow-hidden
            backdrop-blur-2xl
            shadow-2xl
            transition-all
            duration-700

            ${openIndex === index ? "md:col-span-2" : ""}

            `}
          >

          <div className={`bg-gradient-to-r ${item.color} p-8`}>

              <div className="flex justify-between items-start gap-6 flex-wrap">

                <div className="flex gap-5">

                  <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>

                  <div>

                    <h1 className="text-4xl font-black mb-3">
                      {item.title}
                    </h1>

                    <p className="text-white/90 text-lg mb-4 max-w-2xl">
                      {item.subtitle}
                    </p>

                    <div className="bg-black/20 border border-white/10 rounded-2xl px-4 py-3 inline-block">

                      <p className="text-sm text-white/70 mb-1">
                        Target Pengguna
                      </p>

                      <p className="font-semibold">
                        {item.kategori}
                      </p>

                    </div>

                  </div>

                </div>

                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className={`

                  px-6
                  py-4
                  rounded-2xl
                  font-bold
                  flex
                  items-center
                  gap-3
                  transition-all

                  ${openIndex === index
                      ? "bg-red-500"
                      : "bg-cyan-500"
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

              </div>

            </div>

          <div
              className={`

              overflow-hidden
              transition-all
              duration-700

              ${openIndex === index
                  ? "max-h-[5000px] opacity-100"
                  : "max-h-0 opacity-0"}

              `}
            >

              <div className="p-8">

                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8">

                  <p className="text-slate-300 text-lg leading-relaxed">
                    {item.desc}
                  </p>

                </div>

                <div className="grid xl:grid-cols-3 gap-6">

                 <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                    <h2 className="text-cyan-400 text-2xl font-bold mb-5">
                      Persyaratan
                    </h2>

                    <div className="space-y-3">

                      {item.persyaratan.map((syarat, i) => (

                        <div
                          key={i}
                          className="bg-slate-900/60 rounded-2xl px-4 py-3 text-sm text-slate-300"
                        >

                          • {syarat}

                        </div>

                      ))}

                    </div>

                  </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                    <button
                      onClick={() =>
                        setOpenSpec({
                          ...openSpec,
                          [index]: !openSpec[index],
                        })
                      }
                      className="w-full flex items-center justify-between bg-cyan-500/10 border border-cyan-400/20 rounded-2xl px-5 py-4"
                    >

                      <div>

                        <h2 className="text-cyan-400 text-xl font-black text-left">
                          Spesifikasi Teknis
                        </h2>

                        <p className="text-slate-400 text-sm text-left mt-1">
                          Klik untuk melihat detail teknologi
                        </p>

                      </div>

                      {openSpec[index]
                        ? <ChevronUp className="text-cyan-400" />
                        : <ChevronDown className="text-cyan-400" />
                      }

                    </button>

                    <div
                      className={`

                      overflow-hidden
                      transition-all
                      duration-700

                      ${openSpec[index]
                          ? "max-h-[2000px] opacity-100 mt-5"
                          : "max-h-0 opacity-0"}

                      `}
                    >

                      <div className="space-y-4">

                        {item.spesifikasi.map((spec, i) => (

                          <div
                            key={i}
                            className="bg-slate-900/60 rounded-2xl p-4"
                          >

                            <h3 className="font-bold text-white mb-2">
                              {spec}
                            </h3>

                            <p className="text-slate-400 text-sm leading-relaxed">
                              Teknologi modern berbasis sistem geospasial digital
                              untuk mendukung proses pengukuran dan pemetaan.
                            </p>

                          </div>

                        ))}

                      </div>

                    </div>

                  </div>

                  {/* SIMULASI */}
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                    <h2 className="text-cyan-400 text-2xl font-bold mb-5">
                      Simulasi Biaya
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
                        className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none mb-5"
                      >

                        <option value="">
                          Pilih Kategori GeoDesa
                        </option>

                        <option value="subsidi">
                          Masyarakat Bersubsidi
                        </option>

                        <option value="reguler">
                          Masyarakat Reguler
                        </option>

                      </select>

                    )}

                    <input
                      type="number"
                      placeholder={
                        item.calculatorType === "geoGov"
                          ? "Masukkan jumlah NOP"
                          : "Masukkan luas lahan (m²)"
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

                    <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-3xl p-5">

                      <p className="text-slate-300 mb-2">
                        Estimasi Total Biaya
                      </p>

                      <h1 className="text-3xl md:text-4xl font-black text-cyan-400 break-words">

                        {Number(inputValue[index]) > 0
                          ? `Rp ${calculatePrice(
                              item.calculatorType,
                              inputValue[index],
                              geoDesaType[index]
                            ).toLocaleString("id-ID")}`
                          : "Estimasi: Rp 0"}

                      </h1>

                      {item.calculatorType === "geoGov" && (

                        <div className="mt-5 border-t border-cyan-400/10 pt-4">

                          <h3 className="text-sm font-bold text-cyan-300 mb-2">
                            Sumber Referensi Pajak
                          </h3>

                          <p className="text-slate-400 text-sm leading-relaxed">
                            Visualisasi dan estimasi data pajak pada layanan GeoGov
                            mengacu pada sistem informasi perpajakan daerah dan data
                            pertanahan digital yang berlaku di Indonesia.
                          </p>

                          <div className="mt-4 space-y-3">

                            <div className="bg-slate-900/60 rounded-2xl px-4 py-3 border border-white/5">

                              <p className="text-white font-semibold mb-1">
                                ATR/BPN
                              </p>

                              <p className="text-slate-400 text-sm">
                                Referensi data pertanahan dan bidang tanah digital.
                              </p>

                            </div>

                            <div className="bg-slate-900/60 rounded-2xl px-4 py-3 border border-white/5">

                              <p className="text-white font-semibold mb-1">
                                Direktorat Jenderal Pajak (DJP)
                              </p>

                              <p className="text-slate-400 text-sm">
                                Referensi informasi perpajakan dan objek pajak nasional.
                              </p>

                            </div>

                            <div className="bg-slate-900/60 rounded-2xl px-4 py-3 border border-white/5">

                              <p className="text-white font-semibold mb-1">
                                Pemerintah Daerah & PBB-P2
                              </p>

                              <p className="text-slate-400 text-sm">
                                Referensi NJOP, data PBB-P2, dan visualisasi pajak daerah.
                              </p>

                            </div>

                          </div>

                        </div>

                      )}

                    </div>

                  </div>

                </div>

              <div className="mt-10">

                  <h2 className="text-3xl font-black text-cyan-400 mb-8">
                    Skema Pelaksanaan
                  </h2>

                  <div className="grid lg:grid-cols-4 gap-5">

                    {item.workflow.map((step, i) => (

                      <div
                        key={i}
                        className="bg-white/5 border border-white/10 rounded-3xl p-6"
                      >

                        <div className="text-5xl mb-5">
                          {step.icon}
                        </div>

                        <h3 className="text-xl font-black text-white mb-3">
                          {step.title}
                        </h3>

                        <p className="text-slate-400 text-sm leading-relaxed">
                          {step.desc}
                        </p>

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