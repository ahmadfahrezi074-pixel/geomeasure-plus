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
        "Asistensi teknis kolektif tingkat desa untuk memetakan batas bidang tanah dari nol secara menyeluruh guna menyiapkan dokumen pra-pendaftaran tanah massal bebas sengketa.",

      persyaratan: [

        "Fotokopi KTP dan Kartu Keluarga (KK) pemohon sebanyak 2 rangkap",

        "Fotokopi dokumen alas hak tanah seperti Sporadik Desa, Surat Hibah, Surat Jual Beli, Girik, atau dokumen kepemilikan lain yang sah",

        "Lembar Surat Pernyataan Persetujuan Batas Sempadan yang telah ditandatangani oleh para pemilik tanah berbatasan langsung",

        "Pemasangan patok batas sementara atau permanen pada titik sudut bidang tanah sebelum jadwal survey dilakukan",

        "Khusus kategori GeoDesa Bersubsidi wajib melampirkan Surat Keterangan Tidak Mampu (SKTM) asli dari Kepala Desa atau bukti aktif DTKS Kementerian Sosial seperti KKS/KIP demi mencegah salah sasaran kuota bantuan",

        "Kewajiban membersihkan jalur batas lahan dari semak belukar agar pengambilan data GNSS lebih optimal",

        "Bukti pelunasan SPPT PBB-P2 tahun berjalan untuk kategori reguler/mandiri",

      ],

      spesifikasi: [
        "GNSS Geodetic",
        "Drone RTK Mapping",
        "Shapefile TM-3°",
        "Gambar Ukur Indikatif",
        "WebGIS Desa",
      ],

      output:
        "Berkas Fisik Siap Loket, SHP TM-3°, Peta Bidang, Arsip Digital",

      calculatorType: "geoDesa",
    },

    {
      icon: <Map size={42} />,

      title: "GeoTrace",

      subtitle:
        "Kunci Koordinat Presisi, Amankan Aset dari Risiko Melayang",

      color: "from-green-500 to-emerald-700",

      kategori:
        "Pemilik Sertifikat Lama, Instansi Pemerintah, Umum",

      desc:
        "Pelacakan posisi fisik dan pengukuran ulang berbasis GNSS Geodetic terhadap Surat Ukur (SU) atau Gambar Situasi (GS) lama yang belum terplotting digital.",

      persyaratan: [

        "Fotokopi KTP pemilik sertifikat atau Surat Kuasa resmi apabila pengurusan diwakilkan",

        "Fotokopi Sertifikat Hak Atas Tanah beserta dokumen Surat Ukur (SU) atau Gambar Situasi (GS) analog lama",

        "Bukti lunas Pajak Bumi dan Bangunan (SPPT PBB-P2) tahun berjalan",

        "Surat Pernyataan Penguasaan Fisik Tanah secara terus menerus dan bebas sengketa",

        "Dokumentasi lokasi bidang tanah terkini untuk membantu proses rekonstruksi posisi bidang",

        "Ketersediaan akses lokasi bagi tim survey GNSS dan verifikasi lapangan",

      ],

      spesifikasi: [
        "Tracking Bidang",
        "Digitalisasi Peta",
        "SIG Integration",
        "Overlay Spasial",
        "Validasi Koordinat",
      ],

      output:
        "Peta Rekonstruksi, Usulan Pemeliharaan Data Spasial, File GIS",

      calculatorType: "geoTrace",
    },

    {
      icon: <Building2 size={42} />,

      title: "GeoCorp",

      subtitle:
        "Solusi Akurasi Spasial 360° untuk Perlindungan Kawasan",

      color: "from-orange-500 to-red-700",

      kategori:
        "Korporasi Sawit, Swasta, BUMN, Developer Properti",

      desc:
        "Pemetaan udara area konsesi skala luas untuk audit blok tanaman, DEM/Kontur, site plan logistik, dan pemetaan perimeter luar pra-ekspos Kanwil BPN.",

      persyaratan: [

        "Akta Pendirian Perusahaan dan SK Kemenkumham terbaru",

        "Nomor Induk Berusaha (NIB) dan dokumen KKPR/Izin Lokasi",

        "Peta konsesi lama, HGU, atau data spasial eksisting perusahaan",

        "Surat penunjukan PIC atau tim pendamping lapangan internal perusahaan",

        "Dokumen batas konsesi awal atau koordinat perimeter area kerja",

        "Surat Perintah Kerja (SPK) atau dokumen kontrak kerja sama",

        "Kesiapan akses mobilisasi lapangan dan area landing drone/UAV",

      ],

      spesifikasi: [
        "Orthophoto HD",
        "DEM & Kontur",
        "Drone Mapping",
        "Audit Konsesi",
        "WebGIS Monitoring",
      ],

      output:
        "Orthophoto Mosaic, DEM, Peta Konsesi, Database GIS",

      calculatorType: "geoCorp",
    },

    {
      icon: <ShieldCheck size={42} />,

      title: "GeoGov",

      subtitle:
        "Transformasi Data Spasial untuk Menutup Kebocoran PAD",

      color: "from-violet-500 to-purple-700",

      kategori:
        "Pemerintah Kabupaten, Pemkot, Bapenda/Dispenda",

      desc:
        "Audit fiskal PBB-P2 berbasis overlay drone udara dengan data pajak lama untuk mendeteksi objek anomali bangunan dan optimalisasi NJOP berbasis spasial.",

      persyaratan: [

        "Surat Permohonan Resmi atau Surat Tugas dari Pemerintah Daerah/Bapenda",

        "Dokumen SPK Pengadaan Jasa atau kontrak kerja sama resmi",

        "Database DHKP atau data objek pajak digital format .csv/.xls",

        "Dokumen Non-Disclosure Agreement (NDA) kerahasiaan data SISMIOP",

        "Peta administrasi wilayah desa/kelurahan dan data blok pajak eksisting",

        "Penunjukan operator atau admin pendamping dari instansi pemerintah",

        "Kesiapan akses data server, integrasi WebGIS, dan validasi lapangan",

      ],

      spesifikasi: [
        "Overlay Drone Pajak",
        "Audit NOP",
        "ZNT Digital",
        "GeoJSON Pajak",
        "Dashboard WebGIS",
      ],

      output:
        "Peta Blok Pajak Digital, DHKP Koreksi, Rekomendasi NJOP",

      calculatorType: "geoGov",
    },

  ];

  const calculatePrice = (type, value, kategori) => {

    const val = Number(value) || 0;

    switch (type) {

      case "geoDesa":

        if (kategori === "subsidi") {

          if (val <= 2) return 250000;

          return 250000 + ((val - 2) * 30000);

        }

        if (kategori === "reguler") {

          if (val <= 2) return 550000;

          return 550000 + ((val - 2) * 50000);

        }

        return 0;

      case "geoTrace":

        return 385000 + (val * 15000);

      case "geoCorp":

        return 1500000 + (val * 200000);

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

          Platform layanan pengukuran dan pemetaan berbasis teknologi
          geospasial modern untuk masyarakat, pemerintah daerah,
          dan sektor korporasi.

        </p>

      </div>

      {/* SERVICES */}
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {layanan.map((item, index) => (

            <div
              key={index}
              className={`

              bg-white/5
              border
              border-white/10
              rounded-[40px]
              overflow-hidden
              backdrop-blur-2xl
              shadow-2xl
              transition-all
              duration-700
              hover:border-cyan-400/30
              hover:shadow-cyan-500/10
              hover:-translate-y-2

              ${openIndex === index
                  ? "md:col-span-2"
                  : ""
                }

              `}
            >

              {/* HEADER */}
              <div className={`bg-gradient-to-r ${item.color} p-8`}>

                <div className="w-20 h-20 rounded-3xl bg-white/10 border border-white/10 flex items-center justify-center mb-8">

                  {item.icon}

                </div>

                <h1 className="text-4xl font-black mb-4">

                  {item.title}

                </h1>

                <p className="text-white/90 text-lg leading-relaxed mb-6">

                  {item.subtitle}

                </p>

              </div>

              {/* CONTENT */}
              <div className="p-8">

                <p className="text-slate-300 text-lg leading-relaxed mb-10">

                  {item.desc}

                </p>

                <button
                  onClick={() =>
                    setOpenIndex(
                      openIndex === index ? null : index
                    )
                  }
                  className={`

                  w-full
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
                  className={`

                  overflow-hidden
                  transition-all
                  duration-700
                  ease-in-out

                  ${openIndex === index
                      ? "max-h-[5000px] opacity-100 mt-10"
                      : "max-h-0 opacity-0"
                    }

                  `}
                >

                  <div className="grid lg:grid-cols-2 gap-10">

                    {/* LEFT */}
                    <div>

                      {/* PERSYARATAN */}
                      <div className="mb-10">

                        <h2 className="text-cyan-400 text-2xl font-bold mb-5">

                          Persyaratan

                        </h2>

                        <div className="space-y-4">

                          {item.persyaratan.map((syarat, i) => (

                            <div
                              key={i}
                              className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-slate-300 leading-relaxed"
                            >

                              • {syarat}

                            </div>

                          ))}

                        </div>

                      </div>

                      {/* SPESIFIKASI */}
                      <div>

                        <h2 className="text-cyan-400 text-2xl font-bold mb-5">

                          Spesifikasi Teknis

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

                    </div>

                    {/* RIGHT */}
                    <div>

                      {/* OUTPUT */}
                      <div className="mb-10">

                        <h2 className="text-cyan-400 text-2xl font-bold mb-5">

                          Output Produk Digital

                        </h2>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-slate-300 leading-relaxed">

                          {item.output}

                        </div>

                      </div>

                      {/* SIMULASI */}
                      <div>

                        <h2 className="text-cyan-400 text-2xl font-bold mb-5">

                          Simulasi Biaya

                        </h2>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                          {/* GEODESA OPTION */}
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

                          {/* INPUT */}
                          <input
                            type="number"
                            placeholder={
                              item.calculatorType === "geoGov"
                                ? "Masukkan jumlah NOP"
                                : "Masukkan luas lahan (Ha)"
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

                          {/* RESULT */}
                          <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-2xl p-6">

                            <p className="text-slate-300 mb-2">

                              Estimasi Total Biaya

                            </p>

                            <h1 className="text-4xl font-black text-cyan-400 leading-tight">

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

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}