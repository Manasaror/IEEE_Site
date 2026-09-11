import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { ActivityCard } from './components/ActivityCard';
import { ActivityDetailCard } from './components/ActivityDetailedCard';
import { activities } from '@/data/activities/items';

const branches = [
  'CSE',
  'CSE-AIML',
  'Biotechnology',
  'Electrical',
  'Electronics',
];

const categories = ['All', 'Workshops', 'Projects'];

export default function EventsPage() {
  const [selectedBranch, setSelectedBranch] = useState('CSE');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState(0);

  // Selected activity for detailed view
  const [selectedActivity, setSelectedActivity] = useState<
    (typeof activities)[number] | null
  >(null);

  const cardDeckRef = useRef<HTMLDivElement>(null);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  /*
   * FILTER ACTIVITIES
   */
  const filteredActivities = useMemo(() => {
    return activities.filter((activity) => {
      const branchMatch = activity.branch === selectedBranch;

      const categoryMatch =
        selectedCategory === 'All' ||
        activity.category === selectedCategory;

      return branchMatch && categoryMatch;
    });
  }, [selectedBranch, selectedCategory]);

  /*
   * RESET ACTIVE CARD WHEN FILTER CHANGES
   */
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedBranch, selectedCategory]);

  /*
   * CLOSE DETAIL VIEW WHEN FILTER CHANGES
   */
  useEffect(() => {
    setSelectedActivity(null);
  }, [selectedBranch, selectedCategory]);

  /*
   * DESKTOP:
   * Mouse wheel changes cards while cursor is over deck.
   */
  useEffect(() => {
    const deck = cardDeckRef.current;

    if (!deck) {
      return;
    }

    let scrolling = false;

    const handleWheel = (event: WheelEvent) => {
      if (filteredActivities.length < 2) {
        return;
      }

      event.preventDefault();

      if (scrolling) {
        return;
      }

      scrolling = true;

      if (event.deltaY > 0) {
        setActiveIndex((prev) =>
          prev === filteredActivities.length - 1 ? 0 : prev + 1,
        );
      } else if (event.deltaY < 0) {
        setActiveIndex((prev) =>
          prev === 0 ? filteredActivities.length - 1 : prev - 1,
        );
      }

      setTimeout(() => {
        scrolling = false;
      }, 650);
    };

    deck.addEventListener('wheel', handleWheel, {
      passive: false,
    });

    return () => {
      deck.removeEventListener('wheel', handleWheel);
    };
  }, [filteredActivities.length]);

  /*
   * MOBILE:
   * Swipe left  -> next card
   * Swipe right -> previous card
   */
  const handleTouchStart = (
    event: React.TouchEvent<HTMLDivElement>,
  ) => {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (
    event: React.TouchEvent<HTMLDivElement>,
  ) => {
    if (
      touchStartX.current === null ||
      touchStartY.current === null ||
      filteredActivities.length < 2
    ) {
      return;
    }

    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;

    const distanceX = touchStartX.current - touchEndX;
    const distanceY = touchStartY.current - touchEndY;

    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(distanceX) < 50) {
      return;
    }

    if (Math.abs(distanceX) < Math.abs(distanceY)) {
      return;
    }

    if (distanceX > 0) {
      nextCard();
    } else {
      previousCard();
    }
  };

  /*
   * NEXT CARD
   */
  const nextCard = () => {
    if (filteredActivities.length < 2) {
      return;
    }

    setActiveIndex((prev) =>
      prev === filteredActivities.length - 1 ? 0 : prev + 1,
    );
  };

  /*
   * PREVIOUS CARD
   */
  const previousCard = () => {
    if (filteredActivities.length < 2) {
      return;
    }

    setActiveIndex((prev) =>
      prev === 0 ? filteredActivities.length - 1 : prev - 1,
    );
  };

  /*
   * BRANCH CHANGE
   */
  const handleBranchChange = (branch: string) => {
    setSelectedBranch(branch);
    setActiveIndex(0);
  };

  /*
   * CATEGORY CHANGE
   */
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setActiveIndex(0);
  };

  /*
   * OPEN DETAIL
   */
  const handleActivityClick = (
    activity: (typeof activities)[number],
  ) => {
    setSelectedActivity(activity);
  };

  /*
   * CLOSE DETAIL
   */
  const handleCloseDetail = () => {
    setSelectedActivity(null);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-4 pb-24 pt-28 sm:px-8 sm:pb-28 sm:pt-32">

      {/* =========================
          BACKGROUND
          ========================= */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-20 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#00629b]/10 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

        <div className="absolute -left-40 top-1/2 h-[250px] w-[250px] rounded-full bg-[#00629b]/5 blur-[80px] sm:h-[350px] sm:w-[350px] sm:blur-[100px]" />

        <div className="absolute -right-40 bottom-20 h-[250px] w-[250px] rounded-full bg-[#00629b]/5 blur-[80px] sm:h-[350px] sm:w-[350px] sm:blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* =========================
          MAIN CONTENT
          ========================= */}
      <div className="relative mx-auto max-w-7xl">

        {/* =========================
            HEADING
            ========================= */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">

          <p className="mb-3 text-xs font-bold tracking-[0.3em] text-[#008dcc] sm:mb-4 sm:text-sm sm:tracking-[0.4em]">
            IEEE GBPIET
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Explore Our

            <span className="block bg-gradient-to-r from-[#00629b] via-[#008dcc] to-white bg-clip-text text-transparent">
              Activities
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/50 sm:mt-6 sm:text-lg sm:leading-7">
            Discover workshops, competitions and projects happening
            across our student branches.
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center gap-3 sm:mt-8">

            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#00629b] sm:w-16" />

            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#008dcc]" />

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#00629b] sm:w-16" />

          </div>
        </div>

        {/* =========================
            BRANCH FILTER
            ========================= */}
        <div className="mb-5 flex justify-center sm:mb-6">

          <div
            className="flex max-w-full gap-1.5 overflow-x-auto rounded-2xl border border-white/10 bg-[#080b0f]/80 p-2 shadow-2xl backdrop-blur-xl"
            style={{
              scrollbarWidth: 'none',
              touchAction: 'pan-x',
            }}
          >

            {branches.map((branch) => (
              <button
                key={branch}
                type="button"
                onClick={() => handleBranchChange(branch)}
                className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-300 sm:px-5 sm:py-3 sm:text-sm ${
                  selectedBranch === branch
                    ? 'bg-[#00629b] text-white shadow-[0_0_30px_rgba(0,98,155,0.35)]'
                    : 'text-white/50 hover:bg-white/5 hover:text-white'
                }`}
              >
                {branch}
              </button>
            ))}

          </div>
        </div>

        {/* =========================
            CATEGORY FILTER
            ========================= */}
        <div className="mb-8 flex justify-center sm:mb-12">

          <div
            className="flex max-w-full gap-6 overflow-x-auto border-b border-white/10 px-3 sm:gap-7 sm:px-4"
            style={{
              scrollbarWidth: 'none',
              touchAction: 'pan-x',
            }}
          >

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={`relative whitespace-nowrap pb-3 text-xs font-medium transition-colors duration-300 sm:pb-4 sm:text-sm ${
                  selectedCategory === category
                    ? 'text-[#008dcc]'
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {category}

                {selectedCategory === category && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#008dcc] shadow-[0_0_12px_#008dcc]" />
                )}
              </button>
            ))}

          </div>
        </div>

        {/* =========================
            ACTIVITY CARDS
            ========================= */}
        {filteredActivities.length > 0 ? (
          <div
            ref={cardDeckRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative mx-auto h-[820px] max-w-6xl touch-pan-y sm:h-[680px]"
          >

            <div
              className="relative mx-auto h-[620px] w-full sm:h-[560px]"
              style={{
                perspective: '1400px',
              }}
            >

              {filteredActivities.map((activity, index) => {
                const total = filteredActivities.length;

                let position = index - activeIndex;

                if (position > total / 2) {
                  position -= total;
                }

                if (position < -total / 2) {
                  position += total;
                }

                const isActive = position === 0;
                const distance = Math.abs(position);

                return (
                  <div
                    key={activity.title}
                    className="absolute left-1/2 top-1/2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      transform: `
                        translate(-50%, -50%)
                        translateY(20px)
                        translateX(${position * 145}px)
                        translateZ(${isActive ? 120 : -distance * 100}px)
                        rotateY(${position * -12}deg)
                        scale(${isActive ? 1 : 0.84})
                      `,
                      zIndex: isActive ? 100 : 50 - distance,
                      opacity:
                        distance > 2
                          ? 0
                          : isActive
                            ? 1
                            : 0.45,
                      filter: isActive
                        ? 'none'
                        : 'brightness(0.5) blur(0.5px)',
                    }}
                  >

                    <div
                      onClick={() => handleActivityClick(activity)}
                      className={
                        isActive
                          ? 'cursor-pointer'
                          : 'pointer-events-none'
                      }
                    >
                      <ActivityCard
                       activity={activity}
                        onClick={() => handleActivityClick(activity)}
                        />
                    </div>

                  </div>
                );
              })}

            </div>

            {/* =========================
                MOBILE SWIPE HINT
                ========================= */}
            <div className="absolute bottom-[55px] left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white/25 sm:hidden">
              ← Swipe to explore →
            </div>

            {/* =========================
                CONTROLS
                ========================= */}
            {filteredActivities.length > 1 && (
              <div className="absolute left-1/2 top-[625px] flex -translate-x-1/2 items-center gap-3 sm:top-[570px] sm:gap-6">

                {/* Previous */}
                <button
                  type="button"
                  onClick={previousCard}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition-all duration-300 hover:border-[#008dcc] hover:bg-[#00629b]/20 hover:text-[#008dcc] sm:h-14 sm:w-14"
                  aria-label="Previous activity"
                >
                  <ChevronLeft
                    size={20}
                    className="transition-transform duration-300 group-hover:-translate-x-1 sm:h-6 sm:w-6"
                  />
                </button>

                {/* Dots */}
                <div className="flex max-w-[130px] items-center gap-1.5 overflow-hidden sm:max-w-none sm:gap-2">

                  {filteredActivities.map((activity, index) => (
                    <button
                      key={activity.title}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-500 sm:h-2 ${
                        index === activeIndex
                          ? 'w-6 bg-[#008dcc] shadow-[0_0_12px_#008dcc] sm:w-8'
                          : 'w-1.5 bg-white/20 hover:bg-white/40 sm:w-2'
                      }`}
                      aria-label={`Show ${activity.title}`}
                    />
                  ))}

                </div>

                {/* Next */}
                <button
                  type="button"
                  onClick={nextCard}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition-all duration-300 hover:border-[#008dcc] hover:bg-[#00629b]/20 hover:text-[#008dcc] sm:h-14 sm:w-14"
                  aria-label="Next activity"
                >
                  <ChevronRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1 sm:h-6 sm:w-6"
                  />
                </button>

              </div>
            )}

          </div>
        ) : (

          /* =========================
             NO ACTIVITIES
             ========================= */
          <div className="flex min-h-[400px] items-center justify-center">

            <div className="rounded-3xl border border-white/10 bg-[#080b0f] px-8 py-12 text-center shadow-2xl sm:px-12 sm:py-14">

              <div className="mx-auto mb-6 h-3 w-3 animate-pulse rounded-full bg-[#008dcc] shadow-[0_0_20px_#008dcc]" />

              <h2 className="text-2xl font-semibold text-white">
                No activities yet
              </h2>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
                Activities for {selectedBranch} will appear here soon.
              </p>

            </div>

          </div>
        )}
      </div>

      {/* =========================
          DETAILED ACTIVITY OVERLAY
          ========================= */}
      {selectedActivity && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            overflow-y-auto
            bg-black/80
            px-4
            py-8
            backdrop-blur-md
            sm:px-8
            sm:py-12
          "
        >
          <ActivityDetailCard
            activity={selectedActivity}
            onClose={handleCloseDetail}
          />
        </div>
      )}

    </section>
  );
}