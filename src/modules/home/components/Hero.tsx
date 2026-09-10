export default function HomePage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-[zoom_15s_ease-in-out_infinite_alternate]"
        style={{
          backgroundImage: "url('/images/BannerAbout.webp')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00629b]/20 via-transparent to-black/70" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        {/* Main Heading */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <img
            src="/images/IeeeLogo.webp"
            alt="IEEE Logo"
            className="h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain"
          />

          <h1 className="animate-[fadeUp_1s_ease-out] text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-[#00629b] drop-shadow-[0_4px_15px_rgba(0,98,155,0.4)]">IEEE</span>

            <span className="text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)]"> X GBPIET</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="mx-auto mt-4 sm:mt-5 max-w-xs sm:max-w-lg md:max-w-2xl animate-[fadeUp_1.2s_ease-out] text-base sm:text-xl md:text-2xl leading-relaxed text-white/85">
          Empowering students through technology, innovation, leadership and professional
          excellence.
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex animate-[fadeUp_1.4s_ease-out] flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
          {/* Join Us */}
          <a
            href="/contact"
            className="group relative overflow-hidden rounded-full bg-yellow-400 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-gray-900 shadow-[0_10px_35px_rgba(250,204,21,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_45px_rgba(250,204,21,0.5)]"
          >
            <span className="relative z-10">Join Us</span>

            <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-0" />
          </a>

          {/* About Us */}
          <a
            href="/about"
            className="group rounded-full border border-white/40 bg-[#00629b]/90 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-[0_10px_35px_rgba(0,98,155,0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#00629b] hover:shadow-[0_15px_45px_rgba(0,98,155,0.55)]"
          >
            About Us
          </a>
        </div>

        {/* Bottom Text */}
        <div className="mt-10 sm:mt-14 animate-[fadeUp_1.6s_ease-out]">
          <p className="text-xs sm:text-base tracking-widest text-white/60">
            INNOVATE • CONNECT • LEAD
          </p>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}
