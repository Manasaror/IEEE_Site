// TeamHero.tsx
export function TeamHero() {
  return (
    <section
      id="teams-hero"
      className="relative flex items-center justify-center text-center w-full pt-32 pb-12 bg-transparent"
    >
      <div className="relative z-10 max-w-[640px] px-8">
        <h1 className="m-0 text-5xl max-sm:text-3xl font-extrabold tracking-tight leading-tight drop-shadow-md">
          {/* Blue Solid Text */}
          <span className="text-[#006699]">Meet</span> {/* Transparent Outline/Hollow Text */}
          <span
            className="text-transparent border-text select-none"
            style={{
              WebkitTextStroke: '1.5px white',
            }}
          >
            Our Team
          </span>
        </h1>
        <p className="mt-4 text-lg text-slate-100 leading-relaxed max-w-[520px] mx-auto font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          The passionate minds driving innovation, knowledge, and community across disciplines.
        </p>
      </div>
    </section>
  );
}
