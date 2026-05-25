<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">

  {/* KOLOM 1 */}
  <div className="flex-1 space-y-10">

    {layanan
      .filter((_, i) => i % 3 === 0)
      .map((item, index) => {

        const realIndex = layanan.findIndex(x => x.title === item.title)

        return (

          <div
            key={realIndex}
            className="relative bg-white/5 border border-white/10 rounded-[40px] overflow-hidden backdrop-blur-2xl shadow-2xl transition-all duration-700 hover:border-cyan-400/30"
          >

            {/* HEADER */}
            <div className={`bg-gradient-to-r ${item.color} p-8`}>

              <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-8">
                {item.icon}
              </div>

              <h1 className="text-3xl font-black mb-4">
                {item.title}
              </h1>

              <p className="text-white/80 mb-8">
                {item.subtitle}
              </p>

              <div className="bg-black/20 inline-block px-6 py-4 rounded-2xl">
                <p className="text-sm text-white/70 mb-2">
                  Harga Mulai
                </p>

                <h1 className="text-4xl font-black">
                  {item.harga}
                </h1>
              </div>

            </div>

            {/* CONTENT */}
            <div className="p-8">

              <p className="text-slate-300 mb-10 leading-relaxed">
                {item.desc}
              </p>

              <button
                onClick={() =>
                  setOpenIndex(
                    openIndex === realIndex ? null : realIndex
                  )
                }
                className={`w-full py-5 rounded-2xl font-bold transition-all duration-300

                ${openIndex === realIndex
                    ? "bg-red-500"
                    : "bg-cyan-500"
                  }
                `}
              >

                {openIndex === realIndex
                  ? "Tutup Detail"
                  : "Lihat Detail"}

              </button>

              {/* DETAIL */}
              <div
                className={`overflow-hidden transition-all duration-700

                ${openIndex === realIndex
                    ? "max-h-[3000px] opacity-100 mt-10"
                    : "max-h-0 opacity-0"
                  }
                `}
              >

                <h2 className="text-cyan-400 text-2xl font-bold mb-5">
                  Spesifikasi
                </h2>

                <div className="space-y-4 mb-10">

                  {item.spesifikasi.map((spec, i) => (

                    <div
                      key={i}
                      className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4"
                    >

                      • {spec}

                    </div>

                  ))}

                </div>

                <h2 className="text-cyan-400 text-2xl font-bold mb-5">
                  Target Pengguna
                </h2>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-10">

                  {item.target}

                </div>

                <h2 className="text-cyan-400 text-2xl font-bold mb-5">
                  Output Digital
                </h2>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-10">

                  {item.output}

                </div>

                <h2 className="text-cyan-400 text-2xl font-bold mb-5">
                  Detail Harga
                </h2>

                <div className="space-y-4">

                  {item.hargaDetail.map((harga, i) => (

                    <div
                      key={i}
                      className="bg-cyan-500/10 border border-cyan-400/20 rounded-2xl px-5 py-4"
                    >

                      • {harga}

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        )

      })}

  </div>

  {/* KOLOM 2 */}
  <div className="flex-1 space-y-10">

    {layanan
      .filter((_, i) => i % 3 === 1)
      .map((item) => {

        const realIndex = layanan.findIndex(x => x.title === item.title)

        return renderCard(item, realIndex)

      })}

  </div>

  {/* KOLOM 3 */}
  <div className="flex-1 space-y-10">

    {layanan
      .filter((_, i) => i % 3 === 2)
      .map((item) => {

        const realIndex = layanan.findIndex(x => x.title === item.title)

        return renderCard(item, realIndex)

      })}

  </div>

</div>