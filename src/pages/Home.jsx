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
      <section className="py-28 px-6 md:px-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>

            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Tentang GeoMeasure+
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              GeoMeasure+ merupakan startup geospasial modern yang bergerak
              dalam bidang pengukuran dan pemetaan berbasis teknologi digital.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Kami menggunakan teknologi GNSS, Drone/UAV, dan Sistem Informasi
              Geografis (SIG) untuk menghasilkan data spasial yang akurat,
              transparan, dan profesional.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed">
              GeoMeasure+ hadir untuk membantu masyarakat, pemerintah desa,
              perusahaan, dan sektor swasta dalam pengukuran tanah serta
              pemetaan wilayah secara modern.
            </p>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1974&auto=format&fit=crop"
              alt="survey"
              className="rounded-[40px] shadow-2xl object-cover h-[500px] w-full"
            />

          </div>

        </div>

      </section>

{/* PENJELASAN */}
<section className="py-24 px-6 md:px-20 bg-slate-900">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* KIRI */}
    <div>

      <p className="text-cyan-400 font-semibold mb-4 tracking-[4px] uppercase">
        GeoMeasure+ Indonesia
      </p>

      <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8">
        Solusi Pengukuran &
        <br />
        Pemetaan Modern
      </h1>

      <p className="text-slate-300 text-lg leading-relaxed mb-6">
        GeoMeasure+ merupakan startup geospasial modern yang menyediakan
        layanan pengukuran tanah, pemetaan drone, dan sistem informasi
        geografis berbasis teknologi digital.
      </p>

      <p className="text-slate-400 text-lg leading-relaxed mb-6">
        Kami membantu masyarakat, pemerintah desa, dan sektor swasta
        memperoleh data spasial yang akurat, transparan, dan terpercaya
        menggunakan teknologi GNSS, UAV Drone, dan GIS modern.
      </p>

      <p className="text-slate-400 text-lg leading-relaxed">
        Dengan konsep teknologi geospasial masa depan, GeoMeasure+
        menghadirkan sistem pengukuran yang lebih cepat, efisien,
        profesional, dan mudah diakses oleh semua kalangan masyarakat.
      </p>

    </div>

    {/* KANAN */}
    <div className="relative">

      <img
        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=1600&auto=format&fit=crop"
        alt="GeoMeasure"
        className="rounded-[40px] shadow-2xl w-full h-[500px] object-cover"
      />

      {/* CARD FLOATING */}
      <div className="absolute -bottom-8 -left-8 bg-black/70 backdrop-blur-xl border border-white/10 p-8 rounded-[30px] shadow-2xl">

        <h1 className="text-5xl font-black text-cyan-400 mb-2">
          100+
        </h1>

        <p className="text-slate-300">
          Survey & Pemetaan
          <br />
          Telah Dilakukan
        </p>

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