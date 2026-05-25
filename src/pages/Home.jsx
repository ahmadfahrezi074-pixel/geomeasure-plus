import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Home() {

  return (

    <div className="w-full overflow-hidden bg-slate-950 text-white">

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 md:px-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl">

          <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6">
            GeoMeasure+
          </h1>

          <p className="text-lg md:text-2xl text-slate-200 mb-10">
            Peta Akurat, Masa Depan Pasti
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-5">

            <a
  href="https://wa.me/6281269858897?text=Halo%20GeoMeasure%2B%2C%20saya%20ingin%20konsultasi%20pengukuran%20dan%20pemetaan."
  target="_blank"
  rel="noreferrer"
>
  <button className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-2xl text-lg font-semibold transition duration-300 shadow-2xl hover:scale-105">
    Konsultasi Sekarang
  </button>
</a>

  <Link to="/layanan">

  <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 px-8 py-4 rounded-2xl text-lg font-semibold transition duration-300 hover:scale-105">

    Lihat Layanan

  </button>

</Link>

          </div>

        </div>

      </section>

      {/* ABOUT */}
<section className="relative py-32 px-6 md:px-20 overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

  <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

    {/* IMAGE */}
    <div className="relative group">

      {/* GLOW */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-[45px] blur-2xl opacity-60 group-hover:opacity-100 transition duration-700"></div>

      <img
        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=2070&auto=format&fit=crop"
        alt="GeoMeasure"
        className="relative rounded-[40px] shadow-2xl object-cover h-[650px] w-full hover:scale-[1.02] transition duration-700"
      />

      {/* FLOATING CARD */}
      <div className="absolute bottom-8 left-8 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl px-6 py-5 shadow-2xl">

        <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-2">
          GeoSpatial Technology
        </p>

        <h1 className="text-2xl font-bold text-white leading-snug">
          Teknologi Modern <br />
          Untuk Data Presisi
        </h1>

      </div>

    </div>

    {/* CONTENT */}
    <div>

      <p className="text-cyan-400 uppercase tracking-[5px] font-semibold mb-5">
        Tentang GeoMeasure+
      </p>

      <h1 className="text-5xl md:text-7xl font-black leading-tight mb-10">

        Solusi Geospasial
        <br />

        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Modern & Profesional
        </span>

      </h1>

      <p className="text-slate-300 text-xl leading-relaxed mb-8">

        GeoMeasure+ hadir sebagai platform layanan pengukuran dan pemetaan
        berbasis teknologi geospasial modern yang menggabungkan presisi,
        efisiensi, dan visualisasi data digital dalam satu sistem terpadu.

      </p>

      <p className="text-slate-400 text-lg leading-relaxed mb-12">

        Menggunakan teknologi GNSS Geodetic, Drone Mapping, dan Sistem
        Informasi Geografis (SIG), GeoMeasure+ membantu masyarakat,
        pemerintah desa, serta sektor profesional memperoleh data spasial
        yang lebih akurat, transparan, dan mudah diakses secara digital.

      </p>

      {/* FEATURE GRID */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* CARD 1 */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:bg-white/10 transition duration-500">

          <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-5 text-cyan-400 text-2xl">

            🌍

          </div>

          <h1 className="text-2xl font-bold mb-3">
            Data Presisi
          </h1>

          <p className="text-slate-400 leading-relaxed">
            Pengukuran modern dengan tingkat akurasi tinggi menggunakan
            teknologi geospasial terkini.
          </p>

        </div>

        {/* CARD 2 */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:bg-white/10 transition duration-500">

          <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-5 text-blue-400 text-2xl">

            🚁

          </div>

          <h1 className="text-2xl font-bold mb-3">
            Drone Mapping
          </h1>

          <p className="text-slate-400 leading-relaxed">
            Pemetaan wilayah lebih cepat dan efisien menggunakan UAV Drone
            berbasis orthophoto dan topografi digital.
          </p>

        </div>

        {/* CARD 3 */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:bg-white/10 transition duration-500">

          <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-5 text-green-400 text-2xl">

            🛰️

          </div>

          <h1 className="text-2xl font-bold mb-3">
            GIS Integration
          </h1>

          <p className="text-slate-400 leading-relaxed">
            Seluruh data spasial terintegrasi dalam sistem digital berbasis
            GIS yang mudah diakses dan divisualisasikan.
          </p>

        </div>

        {/* CARD 4 */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:bg-white/10 transition duration-500">

          <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-5 text-orange-400 text-2xl">

            📍

          </div>

          <h1 className="text-2xl font-bold mb-3">
            Smart Survey
          </h1>

          <p className="text-slate-400 leading-relaxed">
            Sistem survey modern yang mendukung efisiensi lapangan dan
            pengolahan data digital secara profesional.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* GALLERY */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-slate-950 to-slate-900">

        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Dokumentasi Survey Lapangan
        </h1>

        <p className="text-center text-slate-400 text-lg mb-16">
          Aktivitas pengukuran, pemetaan drone, GNSS, dan survey geospasial.
        </p>

        {/* BARIS 1 */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="mb-8"
        >
          {[
            "survey 2.png",
            "survey 3.png",
            "survey 4.png",
            "survey 5.png",
            "survey 6.png",
            "survey 7.png",
            "survey 8.png",
            "survey 9.png",
          ].map((img, index) => (

            <SwiperSlide key={index}>

              <img
                src={img}
                alt="survey"
                onClick={() => window.open(img)}
                className="rounded-3xl h-[250px] w-full object-cover shadow-2xl hover:scale-105 hover:rotate-1 transition duration-500 cursor-pointer"
              />

            </SwiperSlide>

          ))}
        </Swiper>

        {/* BARIS 2 */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {[
            "survey 10.png",
            "survey 11.png",
            "survey 12.png",
            "survey 13.png",
            "survey 14.png",
            "survey 15.png",
            "survey 16.png",
          ].map((img, index) => (

            <SwiperSlide key={index}>

              <img
                src={img}
                alt="survey"
                onClick={() => window.open(img)}
                className="rounded-3xl h-[250px] w-full object-cover shadow-2xl hover:scale-105 hover:-rotate-1 transition duration-500 cursor-pointer"
              />

            </SwiperSlide>

          ))}
        </Swiper>

      </section>

      {/* CONTACT */}
      <section className="py-28 px-6 md:px-20">

        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Hubungi Kami
          </h1>

          <p className="text-slate-400 text-lg mb-4">
            Banyuasin sumatera selatan, Indonesia
          </p>

          <p className="text-slate-400 text-lg mb-4">
            geomeasureplus@gmail.com
          </p>

          <p className="text-slate-400 text-lg mb-10">
            WhatsApp: 081269858897
          </p>

          <a
            href="https://wa.me/6281269858897?text=Halo%20GeoMeasure%2B%2C%20saya%20ingin%20konsultasi%20pengukuran%20dan%20pemetaan."
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-green-500 hover:bg-green-400 px-10 py-4 rounded-2xl text-lg font-semibold transition duration-300 shadow-2xl hover:scale-105">
              Hubungi via WhatsApp
            </button>
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-slate-500">

        GeoMeasure+ — Pengukuran Akurat untuk Semua

      </footer>

    </div>

  )

}