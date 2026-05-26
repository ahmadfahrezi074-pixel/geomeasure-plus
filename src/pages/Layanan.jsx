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

        "Dokumen alas hak tanah seperti Sporadik, Surat Hibah, Girik, atau Surat Jual Beli",

        "Surat persetujuan batas sempadan dari pemilik tanah sekitar",

        "Patok batas lahan telah terpasang sebelum survey",

        "Khusus kategori subsidi wajib melampirkan SKTM atau bukti DTKS/KKS/KIP",

        "SPPT PBB tahun berjalan untuk kategori reguler",

      ],

      spesifikasi: [
        "GNSS Geodetic",
        "Drone RTK Mapping",
        "Shapefile TM-3°",
        "WebGIS Desa",
        "Peta Digital",
      ],

      output:
        "Peta bidang tanah, shapefile, gambar ukur, dan arsip data digital.",

      calculatorType: "geoDesa",
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
        "GeoTrace digunakan untuk membantu menemukan kembali posisi bidang tanah lama melalui rekonstruksi koordinat berbasis GNSS dan sistem informasi geografis.",

      persyaratan: [

        "Fotokopi KTP pemilik",

        "Sertifikat tanah, SU, atau GS lama",

        "SPPT PBB tahun berjalan",

        "Surat penguasaan fisik tanah",

        "Dokumentasi lokasi bidang tanah",

      ],

      spesifikasi: [
        "Tracking Koordinat",
        "Digitalisasi Peta",
        "Overlay GIS",
        "SIG Integration",
        "Validasi Posisi",
      ],

      output:
        "Peta rekonstruksi bidang tanah dan data koordinat digital.",

      calculatorType: "geoTrace",
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
        "GeoCorp menyediakan layanan pemetaan udara, monitoring kawasan, DEM, kontur, dan dashboard spasial digital untuk kebutuhan perusahaan maupun industri.",

      persyaratan: [

        "Akta perusahaan dan NIB",

        "Data kawasan atau peta konsesi",

        "Dokumen kerja sama/SPK",

        "PIC pendamping lapangan",

        "Akses area survey dan drone",

      ],

      spesifikasi: [
        "Orthophoto HD",
        "DEM & Kontur",
        "Drone Mapping",
        "Audit Kawasan",
        "Dashboard WebGIS",
      ],

      output:
        "Orthophoto HD, DEM, peta kawasan, dan database GIS perusahaan.",

      calculatorType: "geoCorp",
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
        "Layanan integrasi data spasial dan visualisasi objek pajak berbasis WebGIS untuk membantu pengecekan informasi tanah, estimasi tarif pajak, visualisasi bidang tanah, serta monitoring data spasial secara digital dan real-time.",

      persyaratan: [

        "Surat permohonan layanan",

        "Database objek pajak (.csv/.xls)",

        "Peta administrasi wilayah",

        "Dokumen kerja sama layanan",

        "Operator/admin pendamping",

      ],

      spesifikasi: [
        "Visualisasi Pajak",
        "Dashboard WebGIS",
        "Peta Interaktif",
        "Integrasi Data Spasial",
        "Monitoring Digital",
      ],

      output:
        "Dashboard pajak digital, visualisasi bidang tanah, dan data spasial interaktif.",

      calculatorType: "geoGov",
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

      {/* HEADER */}
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

      {/* GRID */}
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
            hover:border-cyan-400/30
            hover:-translate-y-2

            ${openIndex === index ? "md:col-span-2" : ""}

            `}
          >

            {/* HEADER */}
            <div className={`bg-gradient-to-r ${item.color} p-8`}>

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                <div className="flex items-start gap-5">

                  <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center shrink-0">
                    {item.icon}
                </div>

                  <div>

                    <h1 className="text-4xl font-black mb-3">
                      {item.title}
                   </h1>

                    <p className="text-white/90 text-lg leading-relaxed mb-4 max-w-2xl">
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
                    setOpenIndex(
                      openIndex === index ? null : index
                    )
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
                  duration-300

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
                  ? "max-h-[5000px] opacity-100"
                  : "max-h-0 opacity-0"
                }

              `}
            >

              <div className="p-8">

                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8">

                  <p className="text-slate-300 leading-relaxed text-lg">
                    {item.desc}
               </p>

                </div>

                {/* LANDSCAPE */}
                <div className="grid xl:grid-cols-3 gap-6">

                  {/* PERSYARATAN */}
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

                  {/* SPESIFIKASI */}
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                    <h2 className="text-cyan-400 text-2xl font-bold mb-5">
                      Spesifikasi
                    </h2>

                    <div className="space-y-3 mb-5">

                      {item.spesifikasi.map((spec, i) => (

                        <div
                          key={i}
                          className="bg-slate-900/60 rounded-2xl px-4 py-3 text-sm text-slate-300"
                        >

                          • {spec}

                        </div>

                      ))}

                    </div>

                    <div className="bg-slate-900/60 rounded-2xl p-4">

                      <h3 className="text-cyan-400 font-bold mb-3">
                        Output
                      </h3>

                      <p className="text-slate-300 text-sm leading-relaxed">
                        {item.output}
                      </p>

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