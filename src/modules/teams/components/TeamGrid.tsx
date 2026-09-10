import type { TeamMember } from '@/data/teams/members';
import { MemberCard } from './MemberCard';

type TeamGridProps = {
  title: string;
  members: TeamMember[];
};

export function TeamGrid({ title, members }: TeamGridProps) {
  if (members.length === 0) {
    return null;
  }

  return (
    <section
      id={`teams-${title.toLowerCase().replace(/\s+/g, '-')}`}
      className="relative max-w-[900px] mx-auto px-8 py-12 max-sm:px-4 max-sm:py-8"
    >
      {/* Section heading */}
      <h2 className="flex justify-center mb-10 max-sm:mb-6">
        <span
          className="
            inline-block px-8 py-3 max-sm:px-5 max-sm:py-2.5
            bg-[#006699] rounded-xl
            text-2xl max-sm:text-lg font-extrabold tracking-wide uppercase text-white
            shadow-[0_4px_20px_rgba(0,102,153,0.4)]
            cursor-default select-none
            transition-all duration-300
            hover:scale-110 hover:shadow-[0_8px_30px_rgba(0,102,153,0.5)]
          "
        >
          {title}
        </span>
      </h2>

      {/* Vertical connector line (hidden on mobile) */}
      <div
        className="absolute left-1/2 top-24 bottom-0 w-0.5 -translate-x-1/2 pointer-events-none max-md:hidden"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, #006699 8%, #3399cc 50%, #006699 92%, transparent 100%)',
          opacity: 0.25,
        }}
        aria-hidden="true"
      />

      <div className="flex flex-col gap-12 max-sm:gap-8 relative z-10 max-md:items-center">
        {members.map((member, i) => (
          <MemberCard key={member.name} member={member} index={i} />
        ))}
      </div>
    </section>
  );
}
