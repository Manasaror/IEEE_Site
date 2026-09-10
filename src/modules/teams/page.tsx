import { teamMembers } from '@/data/teams/members';
import { MemberCard } from './components/MemberCard';

export function TeamsPage() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* ── Hero banner ── */}
      <section
        id="teams-hero"
        className="relative flex items-center justify-center text-center px-8 py-22 bg-gradient-to-br from-[#006699] to-[#004d73] overflow-hidden"
      >
        <div className="max-w-[640px] relative z-10">
          <span className="inline-block text-xs font-bold tracking-[0.14em] uppercase text-white/80 border border-white/30 rounded-full px-4 py-1.5 mb-5">
            IEEE GBPIET
          </span>
          <h1 className="m-0 text-5xl max-sm:text-3xl font-extrabold tracking-tight leading-tight text-white">
            Meet Our Team
          </h1>
          <p className="mt-4 text-lg text-white/65 leading-relaxed max-w-[520px] mx-auto">
            The passionate minds driving innovation, knowledge, and community across disciplines.
          </p>
        </div>
      </section>

      {/* ── Zigzag member grid ── */}
      <section
        id="teams-grid"
        className="relative max-w-[900px] mx-auto px-8 py-16 max-sm:px-4 max-sm:py-10"
      >
        {/* Vertical connector line (hidden on mobile) */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 pointer-events-none max-md:hidden"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, #006699 8%, #3399cc 50%, #006699 92%, transparent 100%)',
            opacity: 0.25,
          }}
          aria-hidden="true"
        />

        <div className="flex flex-col gap-12 max-sm:gap-8 relative z-10 max-md:items-center">
          {teamMembers.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
