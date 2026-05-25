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
        "Akselerasi Keadilan Ruang Melalui Pemetaan Kolektif Inklusif",

      color: "from-cyan-500 to-blue-700",

      kategori:
        "Masyarakat Berpenghasilan Rendah (MBR) & Masyarakat Reguler",

      desc:
        "Layanan pengukuran dan pemetaan tanah berbasis teknologi geospasial modern untuk membantu masyarakat dalam memperoleh data bidang tanah yang akurat, tertata, dan siap digunakan untuk kebutuhan administrasi maupun pengembangan wilayah desa.",

      persyaratan: [

        "Fotokopi KTP dan Kartu Keluarga (KK) pemohon sebanyak 2 rangkap",

        "Fotokopi dokumen alas hak tanah seperti Sporadik Desa, Surat Hibah, Surat Jual Beli, Girik, atau dokumen kepemilikan lain yang sah",

        "Lembar Surat Pernyataan Persetujuan Batas Sempadan yang telah ditandatangani oleh para pemilik tanah berbatasan langsung",

        "Pemasangan patok batas sementara atau permanen pada titik sudut bidang tanah sebelum jadwal survey dilakukan",

        "Khusus kategori GeoDesa Bersubsidi wajib melampirkan Surat Keterangan Tidak Mampu (SKTM) asli dari Kepala Desa atau bukti aktif DTKS Kementerian Sosial seperti KKS/KIP",

        "Kewajiban membersihkan jalur batas lahan dari semak belukar agar proses pengambilan data GNSS lebih optimal",

        "Bukti pelunasan SPPT PBB-P2 tahun berjalan untuk kategori reguler/mandiri",

      ],

      spesifikasi: [
        "Pengukuran GNSS Geodetic",
        "Drone RTK Mapping",
        "Peta Digital TM-3°",
        "Gambar Ukur Indikatif",
        "Integrasi WebGIS Desa",
      ],

      output:
        "Berkas fisik siap administrasi, file peta digital, shapefile TM-3°, dan arsip data spasial digital.",

      calculatorType: "geoDesa",
    },

    {
      icon: <Map size={42} />,

      title: "GeoTrace",

      subtitle:
        "Kunci Koordinat Presisi untuk Rekonstruksi Bidang Tanah",

      color: "from-green-500 to-emerald-700",

      kategori:
        "Pemilik Sertifikat Lama, Instansi, dan Umum",

      desc:
        "Layanan pelacakan posisi bidang tanah dan rekonstruksi peta lama menggunakan teknologi GNSS dan Sistem Informasi Geografis untuk membantu pemilik tanah mengetahui kembali posisi bidang secara akurat.",

      persyaratan: [

        "Fotokopi KTP pemilik sertifikat atau Surat Kuasa resmi apabila pengurusan diwakilkan",

        "Fotokopi Sertifikat Hak Atas Tanah beserta Surat Ukur (SU) atau Gambar Situasi (GS) lama",

        "Bukti lunas Pajak Bumi dan Bangunan (SPPT PBB-P2) tahun berjalan",

        "Surat Pernyataan Penguasaan Fisik Tanah bebas sengketa",

        "Dokumentasi lokasi bidang tanah terkini",

        "Ketersediaan akses lokasi untuk proses survey dan validasi lapangan",

      ],

      spesifikasi: [
        "Rekonstruksi Peta Lama",
        "Tracking Bidang Tanah",
        "Digitalisasi Peta Analog",
        "Overlay Data Spasial",
        "Validasi Koordinat",
      ],

      output:
        "Peta rekonstruksi digital, file GIS, visualisasi batas bidang, dan dokumen hasil tracking koordinat.",

      calculatorType: "geoTrace",
    },

    {
      icon: <Building2 size={42} />,

      title: "GeoCorp",

      subtitle:
        "Solusi Pemetaan Presisi untuk Kawasan dan Perusahaan",

      color: "from-orange-500 to-red-700",

      kategori:
        "Perusahaan, Developer, Swasta, dan BUMN",

      desc:
        "Layanan pemetaan udara dan survey kawasan skala luas untuk kebutuhan perusahaan, perkebunan, developer, dan industri berbasis teknologi drone serta sistem pemetaan digital modern.",

      persyaratan: [

        "Akta Pendirian Perusahaan dan SK Kemenkumham terbaru",

        "Nomor Induk Berusaha (NIB) dan dokumen KKPR/Izin Lokasi",

        "Peta konsesi lama atau data spasial area kerja",

        "Surat penunjukan PIC atau pendamping lapangan internal",

        "Dokumen batas kawasan atau koordinat perimeter awal",

        "Surat Perintah Kerja (SPK) atau dokumen kerja sama",

        "Kesiapan akses mobilisasi lapangan dan area operasional drone",

      ],

      spesifikasi: [
        "Orthophoto HD",
        "Drone Mapping",
        "DEM & Kontur",
        "Audit Kawasan",
        "Dashboard Monitoring WebGIS",
      ],

      output:
        "Orthophoto resolusi tinggi, model elevasi digital, peta kawasan, dan database GIS perusahaan.",

      calculatorType: "geoCorp",
    },

    {
      icon: <ShieldCheck size={42} />,

      title: "GeoGov",

      subtitle:
        "Visualisasi Pajak dan Informasi Tanah Berbasis Spasial",

      color: "from-violet-500 to-purple-700",

      kategori:
        "Pemerintah Daerah dan Masyarakat",

      desc:
        "Layanan visualisasi dan integrasi data spasial untuk membantu pengecekan informasi pajak bumi dan bangunan, visualisasi objek pajak, serta informasi nilai tanah berbasis sistem digital geospasial.",

      persyaratan: [

        "Surat Permohonan Resmi atau Surat Tugas dari instansi terkait",

        "Dokumen kerja sama atau SPK layanan digital",

        "Database objek pajak format .csv/.xls apabila tersedia",

        "Dokumen persetujuan penggunaan data digital",

        "Peta administrasi wilayah atau data spasial pendukung",

        "Operator atau admin pendamping dari pihak pengguna layanan",

        "Kesiapan akses sistem dan validasi data lapangan",

      ],

      spesifikasi: [
        "Visualisasi Pajak Digital",
        "Pemetaan Objek Pajak",
        "Dashboard WebGIS",
        "Integrasi Data Spasial",
        "Monitoring Data Digital",
      ],

      output:
        "Dashboard visualisasi pajak, peta digital objek tanah, integrasi WebGIS, dan laporan spasial digital.",

      calculatorType: "geoGov",
    },

  ];

  const calculatePrice = (type, value, kategori) => {

    const val = Number(value) || 0;

    switch (type) {

      case "geoDesa":

        if (kategori === "subsidi") {

          if (val <= 2000) return 250000;

          return 250000 + (Math.ceil((val - 2000) / 1000) * 30000);

        }

        if (kategori === "reguler") {

          if (val <= 2000) return 550000;

          return 550000 + (Math.ceil((val - 2000) / 1000) * 50000);

        }

        return 0;

      case "geoTrace":

        return 385000 + (Math.ceil(val / 1000) * 15000);

      case "geoCorp":

        return 1500000 + (Math.ceil(val / 1000) * 200000);

      case "geoGov":

        return (val * 15000) + 5000000;

      default:

        return 0;

    }

  };

  return (

    <div className="min-h-screen bg-slate-950 text-white px-6 md:px-20 py-32 overflow-hidden">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-24">

        <p className="text-cyan-400 uppercase tracking-[6px] font-semibold mb-5">

          GeoMeasure+ Ecosystem

        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">

          Katalog Layanan
          <br />

          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

            GeoMeasure+

          </span>

        </h1>

        <p className="text-slate-400 text-lg max-w-4xl mx-auto leading-relaxed">

          Solusi pengukuran, pemetaan, dan layanan geospasial digital
          modern untuk masyarakat, perusahaan, dan pemerintah daerah.

        </p>

      </div>

      {/* SERVICES */}
      <div className="max-w-7xl mx-auto">

        <div className="space-y-10">

          {layanan.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[40px] overflow-hidden backdrop-blur-2xl shadow-2xl transition-all duration-700 hover:border-cyan-400/30 hover:shadow-cyan-500/10"
            >

              {/* TOP */}
              <div className={`bg-gradient-to-r ${item.color} p-8`}>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                  <div className="flex items-start gap-6">

                    <div className="w-24 h-24 rounded-3xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">

                      {item.icon}

                    </div>

                    <div>

                      <h1 className="text-4xl md:text-5xl font-black mb-4">

                        {item.title}

                      </h1>

                      <p className="text-white/90 text-lg leading-relaxed mb-4 max-w-3xl">

                        {item.subtitle}

                      </p>

                      <div className="bg-black/20 border border-white/10 rounded-2xl px-5 py-4 inline-block">

                        <p className="text-sm uppercase tracking-[3px] text-white/70 mb-2">

                          Target Layanan

                        </p>

                        <p className="text-lg font-semibold">

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

                    px-8
                    py-5
                    rounded-2xl
                    font-bold
                    text-lg
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

                  <div className="mb-10">

                    <p className="text-slate-300 text-lg leading-relaxed">

                      {item.desc}

                    </p>

                  </div>

                  <div className="grid xl:grid-cols-3 gap-8 items-start">

                    {/* PERSYARATAN */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                      <h2 className="text-cyan-400 text-2xl font-bold mb-6">

                        Persyaratan

                      </h2>

                      <div className="space-y-4">

                        {item.persyaratan.map((syarat, i) => (

                          <div
                            key={i}
                            className="bg-slate-900/50 border border-white/5 rounded-2xl px-4 py-4 text-slate-300 text-sm leading-relaxed"
                          >

                            • {syarat}

                          </div>

                        ))}

                      </div>

                    </div>

                    {/* SPESIFIKASI */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                      <h2 className="text-cyan-400 text-2xl font-bold mb-6">

                        Spesifikasi Teknis

                      </h2>

                      <div className="space-y-4">

                        {item.spesifikasi.map((spec, i) => (

                          <div
                            key={i}
                            className="bg-slate-900/50 border border-white/5 rounded-2xl px-4 py-4 text-slate-300 text-sm"
                          >

                            • {spec}

                          </div>

                        ))}

                      </div>

                      <div className="mt-8">

                        <h2 className="text-cyan-400 text-2xl font-bold mb-5">

                          Output Digital

                        </h2>

                        <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-5 text-slate-300 text-sm leading-relaxed">

                          {item.output}

                        </div>

                      </div>

                    </div>

                    {/* SIMULASI */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                      <h2 className="text-cyan-400 text-2xl font-bold mb-6">

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
                          className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none mb-6"
                        >

                          <option value="">
                            Pilih Kategori GeoDesa
                          </option>

                          <option value="subsidi">
                            Masyarakat Bersubsidi / Berpenghasilan Rendah
                          </option>

                          <option value="reguler">
                            Masyarakat Reguler / Umum
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
                        className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none mb-6"
                      />

                      <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-2xl p-6">

                        <p className="text-slate-300 mb-2">

                          Estimasi Total Biaya

                        </p>

                        <h1 className="text-3xl font-black text-cyan-400 leading-tight break-words">

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