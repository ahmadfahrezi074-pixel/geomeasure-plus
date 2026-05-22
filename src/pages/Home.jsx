import { Link } from 'react-router-dom'

export default function Home() {

  return (

    <>

      {/* HERO SECTION */}
      <section
        className="min-h-screen bg-cover bg-center relative flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1628158145409-9e222b56cc0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VydmV5b3J8ZW58MHx8MHx8fDA%3D')",
        }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="max-w-3xl">

            <h1 className="text-7xl font-bold text-white leading-tight mb-8">
              GeoMeasure+
            </h1>

            <p className="text-2xl text-slate-200 leading-relaxed mb-10">

              Platform digital pengukuran, pemetaan,
              dan visualisasi geospasial modern.

            </p>

            <div className="flex gap-4 flex-wrap">

              <a
                href="https://wa.me/6281269858897"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
              >
                Konsultasi Gratis
              </a>

              <Link
                to="/gis"
                className="border border-white text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition"
              >
                Explore GIS
              </Link>

            </div>

          </div>

        </div>

      </section>
{/* GALLERY SURVEYOR */}
<section className="bg-white py-24 px-6">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">

      <h2 className="text-6xl font-bold text-blue-900 mb-6">
        Survey Activities
      </h2>

      <p className="text-xl text-slate-600 max-w-3xl mx-auto">

        Dokumentasi kegiatan pengukuran,
        pemetaan,
        survey lapangan,
        dan teknologi geospasial modern di Indonesia.

      </p>

    </div>

    <div className="grid md:grid-cols-4 gap-8">

      {/* FOTO 1 */}
      <img
        src="https://stpn.ac.id/frontend/assets/images/gallery1.jpg"
        alt="survey"
        className="rounded-3xl shadow-2xl h-[250px] w-full object-cover hover:scale-105 transition duration-300"
      />

      {/* FOTO 2 */}
      <img
        src="survey 7.png"
        alt="survey"
        className="rounded-3xl shadow-2xl h-[250px] w-full object-cover hover:scale-105 transition duration-300"
      />

      {/* FOTO 3 */}
      <img
        src="survey 8.png"
        alt="survey"
        className="rounded-3xl shadow-2xl h-[250px] w-full object-cover hover:scale-105 transition duration-300"
      />

      {/* FOTO 4 */}
      <img
        src="survey 2.png"
        alt="survey"
        className="rounded-3xl shadow-2xl h-[250px] w-full object-cover hover:scale-105 transition duration-300"
      />

      {/* FOTO 5 */}
      <img
        src="survey 3.png"
        alt="survey"
        className="rounded-3xl shadow-2xl h-[250px] w-full object-cover hover:scale-105 transition duration-300"
      />

      {/* FOTO 6 */}
      <img
        src="survey 4.png"
        alt="survey"
        className="rounded-3xl shadow-2xl h-[250px] w-full object-cover hover:scale-105 transition duration-300"
      />

      {/* FOTO 7 */}
      <img
        src="survey 5.png"
        alt="survey"
        className="rounded-3xl shadow-2xl h-[250px] w-full object-cover hover:scale-105 transition duration-300"
      />

      {/* FOTO 8 */}
      <img
        src="survey 6.png"
        alt="survey"
        className="rounded-3xl shadow-2xl h-[250px] w-full object-cover hover:scale-105 transition duration-300"
      />
      {/* FOTO 9 */}
<img
  src="survey 9.png"
  alt="survey"
  className="rounded-3xl shadow-2xl h-[250px] w-full object-cover hover:scale-105 transition duration-300"
/>

{/* FOTO 10 */}
<img
  src="survey 10.png"
  alt="survey"
  className="rounded-3xl shadow-2xl h-[250px] w-full object-cover hover:scale-105 transition duration-300"
/>

{/* FOTO 11 */}
<img
  src="survey 11.png"
  alt="survey"
  className="rounded-3xl shadow-2xl h-[250px] w-full object-cover hover:scale-105 transition duration-300"
/>

{/* FOTO 12 */}
<img
  src="survey 12.png"
  alt="survey"
  className="rounded-3xl shadow-2xl h-[250px] w-full object-cover hover:scale-105 transition duration-300"
/>

{/* FOTO 13 */}
<img
  src="survey 13.png"
  alt="survey"
  className="rounded-3xl shadow-2xl h-[250px] w-full object-cover hover:scale-105 transition duration-300"
/>

{/* FOTO 14 */}
<img
  src="survey 14.png"
  alt="survey"
  className="rounded-3xl shadow-2xl h-[250px] w-full object-cover hover:scale-105 transition duration-300"
/> 

{/* FOTO 15 */}
<img
  src="survey 15.png"
  alt="survey"
  className="rounded-3xl shadow-2xl h-[250px] w-full object-cover hover:scale-105 transition duration-300"
/>

{/* FOTO 16 */}
<img
  src="survey 16.png"
  alt="survey"
  className="rounded-3xl shadow-2xl h-[250px] w-full object-cover hover:scale-105 transition duration-300"
/>
    </div>

  </div>

</section>
      {/* CONTACT */}
      <section className="bg-white py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold text-blue-900 mb-8">
            Contact Us
          </h2>

          <p className="text-xl text-slate-600 mb-12">

            Hubungi GeoMeasure+ untuk konsultasi
            pengukuran dan pemetaan digital.

          </p>

          <div className="bg-slate-100 p-12 rounded-3xl shadow-2xl">

            <p className="text-2xl mb-4">
              📍 Banyuasin sumatera selatan, Indonesia
            </p>

            <p className="text-2xl mb-4">
              📞 0812-6985-8897
            </p>

            <p className="text-2xl">
              ✉️ geomeasureplus@gmail.com
            </p>

          </div>

        </div>

      </section>

    </>

  )

}