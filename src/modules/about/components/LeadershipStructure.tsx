import { leadershipData, type LeaderItem } from '@/data/about/content';

function LeaderCard({ leader, index }: { leader: LeaderItem; index: number }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-2 sm:rounded-3xl ${
        leader.isPrimary
          ? 'border-[#00629b]/30 bg-[#00629b]/5 hover:border-[#00629b]/50 hover:shadow-[0_20px_60px_rgba(0,98,155,0.18)]'
          : 'border-white/[0.07] bg-white/[0.02] hover:border-white/15 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]'
      }`}
      style={{ animation: `fadeUp 0.6s ease-out ${index * 0.08}s both` }}
    >
      {/* Subtle top accent line */}
      <div
        className={`h-0.5 w-full ${
          leader.isPrimary
            ? 'bg-gradient-to-r from-transparent via-[#00629b] to-transparent'
            : 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
        }`}
      />

      <div className="p-6 sm:p-8">
        {/* Avatar */}
        <div className="mb-5 flex items-center gap-4">
          <div
            className={`relative flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-black transition-all duration-500 group-hover:scale-110 sm:h-16 sm:w-16 sm:text-xl ${
              leader.isPrimary
                ? 'bg-[#00629b] text-white shadow-[0_8px_25px_rgba(0,98,155,0.4)]'
                : 'bg-white/[0.08] text-white/60'
            }`}
          >
            {leader.initials}
            {/* Glow ring on primary */}
            {leader.isPrimary && (
              <span className="absolute inset-0 rounded-2xl ring-2 ring-[#00629b]/30 ring-offset-2 ring-offset-transparent" />
            )}
          </div>

          {/* Primary badge */}
          {leader.isPrimary && (
            <span className="rounded-full border border-[#00629b]/30 bg-[#00629b]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#00629b]">
              Faculty
            </span>
          )}
        </div>

        {/* Role */}
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            leader.isPrimary ? 'text-[#00629b]' : 'text-white/35'
          }`}
        >
          {leader.department}
        </p>

        {/* Name */}
        <h3 className="mt-1.5 text-xl font-bold text-white sm:text-2xl">{leader.name}</h3>

        {/* Role subtitle */}
        <p className="mt-1 text-sm text-white/45">{leader.role}</p>

        {/* Divider */}
        <div
          className={`mt-5 h-px ${
            leader.isPrimary
              ? 'bg-gradient-to-r from-[#00629b]/30 to-transparent'
              : 'bg-gradient-to-r from-white/8 to-transparent'
          }`}
        />

        {/* Bottom connector dot */}
        <div className="mt-4 flex items-center gap-2">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              leader.isPrimary ? 'bg-[#00629b]' : 'bg-white/20'
            }`}
          />
          <span className="text-[11px] text-white/30">IEEE GBPIET Student Branch</span>
        </div>
      </div>

      {/* Hover bottom glow */}
      <div
        className={`pointer-events-none absolute -bottom-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
          leader.isPrimary ? 'bg-[#00629b]/30' : 'bg-white/10'
        }`}
      />
    </article>
  );
}

export default function LeadershipStructure() {
  const counselor = leadershipData.find((l) => l.isPrimary);
  const committee = leadershipData.filter((l) => !l.isPrimary);

  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-[#00629b]/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/3 h-80 w-80 rounded-full bg-slate-700/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="mb-12 sm:mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#00629b]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#00629b]">
              Leadership
            </span>
          </div>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Our{' '}
            <span className="text-[#00629b] drop-shadow-[0_0_25px_rgba(0,98,155,0.3)]">
              Leadership
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
            The dedicated team guiding IEEE GBPIET Student Branch towards excellence and impact.
          </p>
        </div>

        {/* Branch Counselor � full width spotlight */}
        {counselor && (
          <div className="mb-6">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/30">
              Branch Counselor
            </p>
            <div className="max-w-sm">
              <LeaderCard leader={counselor} index={0} />
            </div>
          </div>
        )}

        {/* Executive Committee */}
        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/30">
            Executive Committee
          </p>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {committee.map((leader, index) => (
              <LeaderCard key={leader.role} leader={leader} index={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
