import { motion } from 'framer-motion';

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-4xl px-4 text-center"
    >
      {/* Subtitle */}
      <div className="mb-3 inline-block">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#C9C9C9] sm:text-base md:text-lg">
          IEEE GBPIET Student Branch
        </span>
      </div>

      {/* Main Title */}
      <h1 className="mb-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-[#F5F5F5] sm:text-5xl md:text-6xl lg:text-[64px]">
        Innovating Beyond Boundaries
      </h1>

      {/* Supporting Text */}
      <p className="mx-auto mb-8 max-w-2xl text-balance text-base font-normal leading-relaxed text-[#C9C9C9] sm:text-lg md:text-xl">
        Connecting Technology, Innovation and Future Engineers
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
        <a
          href="/projects"
          className="inline-flex items-center justify-center rounded-md bg-[#0077B6] px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#1689C9] sm:px-6 sm:py-3"
        >
          Explore Projects
        </a>

        <a
          href="https://www.ieee.org/membership/join/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-[#3A3A3A] bg-[#1F1F1F]/90 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-[#F5F5F5] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#303030] hover:text-white sm:px-6 sm:py-3"
        >
          Join IEEE
        </a>
      </div>
    </motion.div>
  );
}
