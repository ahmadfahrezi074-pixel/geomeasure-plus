{/* CARD */}
<div className="max-w-7xl mx-auto columns-1 lg:columns-3 gap-10 space-y-10">

  {layanan.map((item, index) => (

    <div
      key={index}
      className="relative mb-10 break-inside-avoid bg-white/5 border border-white/10 rounded-[40px] overflow-hidden backdrop-blur-2xl shadow-2xl transition-all duration-700 ease-in-out hover:scale-[1.02] hover:border-cyan-400/30 hover:shadow-cyan-500/10"
    >

      {/* GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 pointer-events-none"></div>

      {/* HEADER */}
      <div className={`relative bg-gradient-to-r ${item.color} p-8`}>

        {/* ICON */}
        <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-xl flex items-center justify-center mb-8 shadow-xl border border-white/10">

          {item.icon}

        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-black leading-tight mb-4">

          {item.title}

        </h1>

        {/* SUBTITLE */}
        <p className="text-white/80 text-lg mb-8 leading-relaxed">

          {item.subtitle}

        </p>

        {/* PRICE */}
        <div className="inline-block bg-black/20 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl">

          <p className="text-sm uppercase tracking-[3px] text-white/70 mb-2">
            Harga Mulai
          </p>

          <h1 className="text-4xl font-black">
            {item.harga}
          </h1>

        </div>

      </div>

      {/* CONTENT */}
      <div className="relative p-8">

        {/* DESCRIPTION */}
        <p className="text-slate-300 leading-relaxed text-lg mb-10">

          {item.desc}

        </p>

        {/* BUTTON */}
        <button
          onClick={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
          className={`w-full py-5 rounded-2xl font-bold text-lg transition-all duration-500 flex items-center justify-center gap-3 shadow-xl

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
          className={`overflow-hidden transition-all duration-700 ease-in-out

          ${openIndex === index
              ? "max-h-[2500px] opacity-100 mt-10"
              : "max-h-0 opacity-0"
            }
          `}
        >

          {/* SPESIFIKASI */}
          <div className="mb-10">

            <h2 className="text-cyan-400 font-bold text-2xl mb-5">
              Spesifikasi Layanan
            </h2>

            <div className="grid gap-4">

              {item.spesifikasi.map((spec, i) => (

                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-slate-300 hover:bg-white/10 transition"
                >

                  • {spec}

                </div>

              ))}

            </div>

          </div>

          {/* TARGET */}
          <div className="mb-10">

            <h2 className="text-cyan-400 font-bold text-2xl mb-5">
              Target Pengguna
            </h2>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-slate-300 leading-relaxed">

              {item.target}

            </div>

          </div>

          {/* OUTPUT */}
          <div className="mb-10">

            <h2 className="text-cyan-400 font-bold text-2xl mb-5">
              Output Digital
            </h2>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-slate-300 leading-relaxed">

              {item.output}

            </div>

          </div>

          {/* DETAIL HARGA */}
          <div>

            <h2 className="text-cyan-400 font-bold text-2xl mb-5">
              Detail Harga
            </h2>

            <div className="grid gap-4">

              {item.hargaDetail.map((harga, i) => (

                <div
                  key={i}
                  className="bg-cyan-500/10 border border-cyan-400/20 rounded-2xl px-5 py-4 text-slate-200 hover:bg-cyan-500/20 transition"
                >

                  • {harga}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>

  ))}

</div>