import { X } from 'lucide-react';
import type { Activity } from '@/data/activities/items';

interface ActivityDetailCardProps {
  activity: Activity;
  onClose: () => void;
}

export function ActivityDetailCard({
  activity,
  onClose,
}: ActivityDetailCardProps) {
  return (
    <article
      className="
        relative
        mx-auto
        w-full
        max-w-5xl
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-[#080b0f]
        shadow-[0_30px_100px_rgba(0,0,0,0.7)]
      "
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close activity details"
        className="
          absolute
          right-5
          top-5
          z-20
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-black/50
          text-white/60
          backdrop-blur-md
          transition-all
          duration-300
          hover:border-[#008dcc]
          hover:bg-[#00629b]
          hover:text-white
        "
      >
        <X size={20} />
      </button>

      {/* Hero Image */}
      <div className="relative h-[280px] sm:h-[420px]">
        <img
          src={activity.image}
          alt={activity.title}
          className="h-full w-full object-cover"
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#080b0f]
            via-[#080b0f]/30
            to-transparent
          "
        />

        {/* Category */}
        <div
          className="
            absolute
            bottom-6
            left-6
            rounded-full
            border
            border-white/20
            bg-black/50
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-white
            backdrop-blur-md
            sm:left-10
          "
        >
          {activity.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-10 lg:p-12">

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-sm">

          <span className="text-[#008dcc]">
            {activity.date}
          </span>

          <span className="text-white/20">
            •
          </span>

          <span className="text-white/40">
            {activity.branch}
          </span>

        </div>

        {/* Title */}
        <h1
          className="
            mt-4
            max-w-4xl
            text-3xl
            font-bold
            leading-tight
            tracking-tight
            text-white
            sm:text-5xl
          "
        >
          {activity.title}
        </h1>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Description */}
        <div className="max-w-3xl">

          <p
            className="
              mb-4
              text-xs
              font-bold
              uppercase
              tracking-[0.25em]
              text-[#008dcc]
            "
          >
            About the Activity
          </p>

          <p
            className="
              text-base
              leading-8
              text-white/60
              sm:text-lg
            "
          >
            {activity.longDescription}
          </p>

        </div>

        {/* Activity information */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.025]
              p-5
            "
          >
            <p className="text-xs uppercase tracking-wider text-white/30">
              Category
            </p>

            <p className="mt-2 font-semibold text-white">
              {activity.category}
            </p>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.025]
              p-5
            "
          >
            <p className="text-xs uppercase tracking-wider text-white/30">
              Student Branch
            </p>

            <p className="mt-2 font-semibold text-white">
              {activity.branch}
            </p>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.025]
              p-5
            "
          >
            <p className="text-xs uppercase tracking-wider text-white/30">
              Date
            </p>

            <p className="mt-2 font-semibold text-white">
              {activity.date}
            </p>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.025]
              p-5
            "
          >
            <p className="text-xs uppercase tracking-wider text-white/30">
              IEEE GBPIET
            </p>

            <p className="mt-2 font-semibold text-white">
              Student Activity
            </p>
          </div>

        </div>

      </div>
    </article>
  );
}