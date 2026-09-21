"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const backgroundImages = [
    "/Home/HomeBanner1.jpg",
    "/Home/HomeBanner2.jpg",
    "/Home/HomeBanner3.jpg",
    "/Home/HomeBanner4.png",
    "/Home/HomeBanner5.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Automatic background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Background Image Slideshow */}
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${image}')`,
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Blue Gradient Overlay */}

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-6">

        {/* Main Heading */}
        <div className="flex items-center justify-center gap-3 sm:gap-5">

          {/* IEEE Logo - Desktop Only */}
          <img
            src="/images/IeeeLogo.webp"
            width={1920}
            height={1080}
            alt="IEEE Logo"
            className="hidden h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20 md:block md:h-24 md:w-24"
          />

          <h1 className="animate-[fadeUp_1s_ease-out] text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-8xl">
            <span className="text-[#00629b] drop-shadow-[0_4px_15px_rgba(0,98,155,0.4)]">
              IEEE
            </span>

            <span className="text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
              {" "}X GBPIET
            </span>
          </h1>

        </div>

        {/* Subtitle */}
        <p className="mx-auto mt-5 max-w-2xl animate-[fadeUp_1.2s_ease-out] text-base leading-relaxed text-white/85 sm:text-xl md:text-2xl">
          Empowering students through technology, innovation,
          leadership and professional excellence.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex animate-[fadeUp_1.4s_ease-out] flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row">

          <a
            href="/contact"
            className="group relative w-full overflow-hidden rounded-full bg-yellow-400 px-8 py-4 font-semibold text-gray-900 shadow-[0_10px_35px_rgba(250,204,21,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_45px_rgba(250,204,21,0.5)] sm:w-auto"
          >
            <span className="relative z-10">
              Join Us
            </span>

            <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-0" />
          </a>

          <a
            href="/about"
            className="group w-full rounded-full border border-white/40 bg-[#00629b]/90 px-8 py-4 font-semibold text-white shadow-[0_10px_35px_rgba(0,98,155,0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#00629b] hover:shadow-[0_15px_45px_rgba(0,98,155,0.55)] sm:w-auto"
          >
            About Us
          </a>

        </div>

        {/* Bottom Text */}
        <div className="mt-10 animate-[fadeUp_1.6s_ease-out] sm:mt-14">
          <p className="text-xs tracking-widest text-white/60 sm:text-base">
            INNOVATE  • CONNECT • LEAD
          </p>
        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/40 to-transparent" />

    </section>
  );
}