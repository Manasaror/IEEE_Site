import { heroContent } from '@/data/about/content';

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-black">
      {/* -- Deep radial background glow -- */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00629b]/20 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#00629b]/10 blur-[100px]" />
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-slate-800/30 blur-[100px]" />
      </div>

      {/* -- Subtle grid overlay -- */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,98,155,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,98,155,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* -- Bottom fade -- */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />

      {/* -- Content -- */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 py-24 text-center sm:px-8">
        {/* Badge */}
        <div className="mb-6 inline-flex animate-[fadeUp_0.6s_ease-out] items-center gap-2 rounded-full border border-[#00629b]/30 bg-[#00629b]/10 px-4 py-1.5 backdrop-blur-sm">
          {/* Pulse dot */}
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00629b] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00629b]" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00629b]">
            {heroContent.badge}
          </span>
        </div>

        {/* Main heading */}
        <h1 className="animate-[fadeUp_0.8s_ease-out] text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="block">{heroContent.heading}</span>
          <span className="block text-[#00629b] drop-shadow-[0_0_35px_rgba(0,98,155,0.4)]">
            {heroContent.headingAccent}
          </span>
        </h1>

        {/* Decorative divider */}
        <div className="mx-auto mt-8 flex w-fit items-center gap-3">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00629b]" />
          <div className="h-1.5 w-1.5 rotate-45 bg-[#00629b]" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00629b]" />
        </div>

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-2xl animate-[fadeUp_1s_ease-out] text-base leading-relaxed text-white/55 sm:text-lg sm:leading-8 md:text-xl">
          {heroContent.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex animate-[fadeUp_1.2s_ease-out] flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={heroContent.cta.href}
            className="group relative overflow-hidden rounded-full bg-[#00629b] px-8 py-3.5 text-sm font-bold text-white shadow-[0_10px_40px_rgba(0,98,155,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(0,98,155,0.5)]"
          >
            <span className="relative z-10">{heroContent.cta.label}</span>
            <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />
          </a>

          <a
            href={heroContent.ctaSecondary.href}
            className="rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00629b]/40 hover:bg-white/10 hover:text-white"
          >
            {heroContent.ctaSecondary.label}
          </a>
        </div>

        {/* Bottom tagline */}
        <p className="mt-14 animate-[fadeUp_1.4s_ease-out] text-xs tracking-[0.35em] text-white/30 uppercase">
          Innovate &bull; Connect &bull; Lead &bull; Engineer
        </p>
      </div>
    </section>
  );
}
