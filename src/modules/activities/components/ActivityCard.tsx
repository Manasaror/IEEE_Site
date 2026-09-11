import type { Activity } from '@/data/activities/items';

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <article className="group relative w-[calc(100vw-40px)] max-w-[390px] overflow-hidden rounded-[24px] border border-white/10 bg-[#080b0f] shadow-[0_25px_80px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-[#008dcc]/60 hover:shadow-[0_25px_80px_rgba(0,98,155,0.2)] sm:w-[390px] sm:rounded-[28px]">
      <div className="relative h-[230px] overflow-hidden sm:h-[270px]">
        <img
          src={activity.image}
          alt={activity.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#080b0f] via-black/10 to-transparent" />

        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md sm:left-5 sm:top-5 sm:px-4 sm:py-2">
          {activity.category}
        </div>
      </div>

      <div className="p-5 sm:p-7">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#008dcc] sm:mb-3 sm:tracking-[0.2em]">
          {activity.date}
        </p>

        <h2 className="mb-3 text-xl font-bold leading-tight text-white sm:mb-4 sm:text-2xl">
          {activity.title}
        </h2>

        <p className="min-h-0 text-sm leading-6 text-white/50 sm:min-h-[72px]">
          {activity.description}
        </p>

        <div className="mt-5 flex items-center gap-3 sm:mt-7">
          <div className="h-px flex-1 bg-white/10 transition-all duration-500 group-hover:bg-[#00629b]" />

          <span className="text-xl text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#008dcc]">
            →
          </span>
        </div>
      </div>
    </article>
  );
}
