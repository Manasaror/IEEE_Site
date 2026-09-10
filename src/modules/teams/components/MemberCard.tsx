import type { TeamMember } from '@/data/teams/members';

/* Inline SVG social icons — avoids extra dependencies */
const icons = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <article
      id={`member-${index}`}
      className={`
        group relative flex items-center gap-8 px-9 py-8
        max-w-[620px] w-full
        rounded-2xl bg-white border-2 border-[#e0e8ef]
        shadow-[0_2px_8px_rgba(0,40,80,0.05)]
        overflow-hidden
        transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:border-[#006699]
        hover:shadow-[0_12px_40px_rgba(0,102,153,0.18)]
        hover:-translate-y-1.5
        hover:scale-[1.02]
        ${isEven ? 'self-start' : 'self-end'}
        max-md:self-center max-md:max-w-[520px]
        max-sm:flex-col max-sm:text-center max-sm:items-center
        max-sm:px-6 max-sm:py-7 max-sm:max-w-full max-sm:gap-5
      `}
    >
      {/* ── Top accent bar — slides in on hover ── */}
      <div
        className="
          absolute top-0 left-0 right-0 h-[3px]
          bg-gradient-to-r from-[#006699] to-[#3399cc]
          origin-left scale-x-0
          transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:scale-x-100
        "
        aria-hidden="true"
      />

      {/* ── Avatar ── */}
      <div className="relative shrink-0 w-24 h-24 max-sm:w-22 max-sm:h-22 grid place-items-center" aria-hidden="true">
        <span
          className="
            text-2xl max-sm:text-xl font-extrabold tracking-wide text-white
            bg-gradient-to-br from-[#006699] to-[#004d73]
            w-[88px] h-[88px] max-sm:w-[76px] max-sm:h-[76px]
            rounded-full grid place-items-center z-[1]
            shadow-[0_4px_16px_rgba(0,102,153,0.25)]
            transition-transform duration-300
            group-hover:scale-110
          "
        >
          {getInitials(member.name)}
        </span>
      </div>

      {/* ── Info ── */}
      <div className="flex flex-col gap-1 min-w-0">
        <h3 className="m-0 text-xl max-sm:text-lg font-bold text-[#0b1d2e] leading-snug">
          {member.name}
        </h3>

        <span
          className="
            text-[0.8rem] font-bold tracking-widest uppercase
            text-[#006699] bg-[#006699]/8
            px-3 py-1 rounded-full w-fit mt-1.5
            max-sm:mx-auto
            transition-colors duration-300
            group-hover:bg-[#006699] group-hover:text-white
          "
        >
          {member.role}
        </span>

        <p className="m-0 mt-2 text-[0.95rem] max-sm:text-sm text-[#4a6274] leading-relaxed">
          {member.department}
        </p>

        <span className="text-sm max-sm:text-xs font-semibold text-[#8a9baa] tracking-wide mt-0.5">
          {member.year}
        </span>

        {/* Social links */}
        <nav
          className="flex gap-2.5 mt-3 max-sm:justify-center"
          aria-label={`${member.name}'s social links`}
        >
          {(Object.keys(member.socials) as (keyof typeof member.socials)[]).map((key) => {
            const url = member.socials[key];
            if (!url) return null;
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className="
                  grid place-items-center w-10 h-10 max-sm:w-9 max-sm:h-9 rounded-xl
                  text-[#8a9baa] bg-[#f2f6f9] border border-[#e0e8ef]
                  no-underline
                  transition-all duration-200
                  hover:text-white hover:bg-[#006699] hover:border-[#006699]
                  hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,102,153,0.25)]
                "
              >
                {icons[key]}
              </a>
            );
          })}
        </nav>
      </div>
    </article>
  );
}
