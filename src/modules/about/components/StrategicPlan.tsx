import { strategicPlan } from '@/data/about/content';

function PlanCard({
  tag,
  heading,
  body,
  isMission,
}: {
  tag: string;
  heading: string;
  body: string;
  isMission: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 sm:rounded-3xl sm:p-10 lg:p-12 ${
        isMission
          ? 'border-[#00629b]/20 bg-[#00629b]/5 hover:border-[#00629b]/40 hover:bg-[#00629b]/10 hover:shadow-[0_25px_70px_rgba(0,98,155,0.15)]'
          : 'border-white/[0.08] bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_25px_70px_rgba(255,255,255,0.04)]'
      }`}
    >
      {/* Corner accent */}
      <div
        className={`pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-bl-full ${
          isMission ? 'bg-[#00629b]/10' : 'bg-white/[0.03]'
        } transition-all duration-500 group-hover:h-40 group-hover:w-40`}
      />

      {/* Tag */}
      <span
        className={`inline-block rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] ${
          isMission
            ? 'border-[#00629b]/30 bg-[#00629b]/10 text-[#00629b]'
            : 'border-white/15 bg-white/5 text-white/50'
        }`}
      >
        {tag}
      </span>

      {/* Heading */}
      <h3 className="mt-5 text-2xl font-black leading-tight tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
        {heading}
      </h3>

      {/* Divider */}
      <div
        className={`mt-5 h-px w-full ${
          isMission
            ? 'bg-gradient-to-r from-[#00629b]/40 to-transparent'
            : 'bg-gradient-to-r from-white/10 to-transparent'
        }`}
      />

      {/* Body */}
      <p className="mt-6 text-base leading-8 text-white/55 sm:text-lg sm:leading-9">{body}</p>

      {/* Bottom glow */}
      <div
        className={`pointer-events-none absolute -bottom-12 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
          isMission ? 'bg-[#00629b]/25' : 'bg-white/10'
        }`}
      />
    </div>
  );
}

export default function StrategicPlan() {
  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#00629b]/[0.07] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="mb-12 sm:mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#00629b]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#00629b]">
              Strategic Direction
            </span>
          </div>
          <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Mission &amp;{' '}
            <span className="text-[#00629b] drop-shadow-[0_0_25px_rgba(0,98,155,0.3)]">Vision</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/40 sm:text-lg">
            The guiding principles that drive everything we do at IEEE GBPIET.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          <PlanCard
            tag={strategicPlan.mission.tag}
            heading={strategicPlan.mission.heading}
            body={strategicPlan.mission.body}
            isMission={true}
          />
          <PlanCard
            tag={strategicPlan.vision.tag}
            heading={strategicPlan.vision.heading}
            body={strategicPlan.vision.body}
            isMission={false}
          />
        </div>
      </div>
    </section>
  );
}
