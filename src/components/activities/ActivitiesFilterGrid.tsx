import { useState, useMemo } from 'react';
import type { Activity, ActivityFilterCategory } from '@/types/activity';

interface ActivitiesFilterGridProps {
  activities: Activity[];
}

const CATEGORIES: { label: string; value: ActivityFilterCategory }[] = [
  { label: 'ALL', value: 'ALL' },
  { label: 'WORKSHOPS', value: 'WORKSHOPS' },
  { label: 'EVENTS', value: 'EVENTS' },
  { label: 'COMPETITIONS', value: 'COMPETITIONS' },
  { label: 'PROJECTS', value: 'PROJECTS' },
  { label: 'OUTREACH', value: 'OUTREACH' },
];

export default function ActivitiesFilterGrid({ activities }: ActivitiesFilterGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<ActivityFilterCategory>('ALL');

  // Filter activities based on selected category
  const filteredActivities = useMemo(() => {
    if (selectedCategory === 'ALL') {
      return activities;
    }
    return activities.filter((act) => act.category === selectedCategory);
  }, [activities, selectedCategory]);

  // Compute count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<ActivityFilterCategory, number> = {
      ALL: activities.length,
      WORKSHOPS: 0,
      EVENTS: 0,
      COMPETITIONS: 0,
      PROJECTS: 0,
      OUTREACH: 0,
    };
    activities.forEach((act) => {
      if (counts[act.category] !== undefined) {
        counts[act.category] += 1;
      }
    });
    return counts;
  }, [activities]);

  return (
    <div className="w-full">
      {/* ================================================== */}
      {/* Category Filter Navigation Buttons                 */}
      {/* ================================================== */}
      <div className="mb-10 sm:mb-12">
        <div
          role="tablist"
          aria-label="Activity Categories Filter"
          className="flex flex-wrap items-center gap-2 sm:gap-3"
        >
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.value;
            const count = categoryCounts[cat.value];

            return (
              <button
                key={cat.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat.value)}
                className={`inline-flex items-center gap-2 rounded-md px-3.5 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077B6] ${
                  isActive
                    ? 'border border-[#0077B6] bg-[#0077B6] text-white shadow-sm'
                    : 'border border-[#3A3A3A] bg-[#303030] text-[#C9C9C9] hover:border-[#0077B6] hover:bg-[#383838] hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded px-1.5 py-0.5 text-[10px] ${
                    isActive ? 'bg-black/25 text-white' : 'bg-[#252525] text-[#9CA3AF]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ================================================== */}
      {/* Responsive Activities Grid (3 cols / 2 cols / 1 col)*/}
      {/* ================================================== */}
      {filteredActivities.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {filteredActivities.map((act) => (
            <article
              key={act.id}
              id={act.id}
              className="group flex flex-col justify-between overflow-hidden rounded-lg border border-[#3A3A3A] bg-[#303030] transition-all duration-200 hover:-translate-y-1 hover:border-[#0077B6]"
            >
              {/* Image Container with Badges */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-[#3A3A3A] bg-[#1F1F1F]">
                <img
                  src={act.image}
                  alt={act.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/60 via-transparent to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute left-3 top-3 rounded border border-[#3A3A3A] bg-[#1F1F1F]/90 px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0077B6] backdrop-blur-sm">
                  {act.category}
                </div>

                {/* Date Badge */}
                <div className="absolute right-3 top-3 rounded border border-[#3A3A3A] bg-[#1F1F1F]/90 px-2.5 py-1 font-mono text-[10px] text-[#C9C9C9] backdrop-blur-sm">
                  {act.date}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="mb-2 flex items-center gap-1.5 font-mono text-[11px] text-[#9CA3AF]">
                    <svg
                      className="h-3.5 w-3.5 text-[#0077B6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="truncate">{act.location}</span>
                  </div>

                  <h3 className="mb-3 text-lg font-bold leading-snug text-[#F5F5F5] transition-colors group-hover:text-[#1689C9]">
                    {act.title}
                  </h3>

                  <p className="mb-4 text-xs leading-relaxed text-[#C9C9C9] sm:text-sm">
                    {act.shortDescription || act.description}
                  </p>
                </div>

                {/* Technical Tags */}
                {act.tags && act.tags.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-1.5 border-t border-[#3A3A3A] pt-4">
                    {act.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-[#3A3A3A] bg-[#252525] px-2 py-0.5 font-mono text-[10px] text-[#9CA3AF]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Card Action Link */}
                <div className="pt-2">
                  <a
                    href={act.ctaLink || `#${act.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#0077B6] transition-colors focus:outline-none focus-visible:underline group-hover:text-[#1689C9]"
                  >
                    <span>{act.ctaText || 'Learn More'}</span>
                    <svg
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* ================================================== */
        /* Empty State (Dark & Minimal)                       */
        /* ================================================== */
        <div className="mx-auto max-w-xl rounded-lg border border-[#3A3A3A] bg-[#303030] p-12 text-center sm:p-16">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#3A3A3A] bg-[#252525] text-[#9CA3AF]">
            <svg
              className="h-6 w-6 text-[#0077B6]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-bold text-[#F5F5F5]">No activities found</h3>
          <p className="mb-6 text-xs leading-relaxed text-[#C9C9C9] sm:text-sm">
            There are currently no activities listed under the{' '}
            <span className="font-mono text-[#0077B6]">{selectedCategory}</span> category filter.
          </p>
          <button
            type="button"
            onClick={() => setSelectedCategory('ALL')}
            className="inline-flex items-center gap-2 rounded-md bg-[#0077B6] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#1689C9]"
          >
            <span>Show All Activities</span>
          </button>
        </div>
      )}
    </div>
  );
}
