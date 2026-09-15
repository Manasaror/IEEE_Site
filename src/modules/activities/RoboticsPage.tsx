import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Cpu } from 'lucide-react';

import { ActivityCard } from './components/ActivityCard';
import { roboticsActivities } from '@/data/activities/robotics';

export default function RoboticsPage() {
  // Filter to ensure we only show Workshops if there are other categories in the future
  const workshops = roboticsActivities.filter(
    (activity) => activity.category === 'Workshops'
  );
  const workshopsScrollerRef = useRef<HTMLDivElement>(null);

  const scrollWorkshops = (direction: 'left' | 'right') => {
    workshopsScrollerRef.current?.scrollBy({
      left: direction === 'right' ? 414 : -414,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-black px-4 py-24 sm:px-8 sm:py-32">
      
      {/* =========================
          BACKGROUND EFFECTS
          ========================= */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-20 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#00629b]/15 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />
        <div className="absolute top-1/2 -left-40 h-[250px] w-[250px] -translate-y-1/2 rounded-full bg-[#00629b]/10 blur-[80px] sm:h-[350px] sm:w-[350px]" />
        
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
          PAGE CONTENT 
          ========================= */}
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-16">
        
        {/* 1. HEADER */}
        <div className="w-full max-w-4xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3 text-[#008dcc]">
            <Cpu className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em]">
              IEEE Robotics
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Build beyond the <span className="text-[#008dcc]">ordinary</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            Explore hands-on robotics workshops where code, circuits, and curious minds come together.
          </p>
          <div className="mx-auto mt-8 flex max-w-xs items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#00629b]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#008dcc] shadow-[0_0_12px_#008dcc]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#00629b]" />
          </div>
        </div>

        {/* 2. WORKSHOPS SCROLL SECTION (All 3 Together) */}
        <div className="flex w-full flex-col items-center justify-center">
           <div className="mb-8 flex w-full max-w-[800px] items-center gap-4">
             <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#00629b]" />
             <span className="text-sm font-semibold uppercase tracking-widest text-[#008dcc]">
               Our Workshops
             </span>
             <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#00629b]" />
           </div>

          {workshops.length > 0 ? (
            <div className="w-full">
              {/* Scrollable Container */}
              <div
                ref={workshopsScrollerRef}
                className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-visible px-4 pb-8 pt-4 sm:px-8 [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: 'none' /* Hides scrollbar in Firefox */ }}
              >
                {workshops.map((workshop) => (
                  <div
                    key={workshop.id}
                    className="w-[min(390px,calc(100vw-2rem))] snap-center shrink-0"
                  >
                    <ActivityCard activity={workshop} />
                  </div>
                ))}
              </div>

              {workshops.length > 1 && (
                <div className="mt-2 flex items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => scrollWorkshops('left')}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-[#008dcc] hover:text-[#008dcc]"
                    aria-label="Scroll to previous workshops"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <span className="text-xs text-white/30">Next</span>

                  <button
                    type="button"
                    onClick={() => scrollWorkshops('right')}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-[#008dcc] hover:text-[#008dcc]"
                    aria-label="Scroll to next workshops"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
              
              {/* Mobile Scroll Hint */}
              <div className="mt-2 text-center text-xs text-white/30 sm:hidden">
                ← Swipe to explore →
              </div>
            </div>
          ) : (
            <div className="flex h-[350px] w-full max-w-[390px] items-center justify-center rounded-[28px] border border-white/10 bg-[#080b0f]">
               <p className="text-white/40">No workshops available right now.</p>
            </div>
          )}
        </div>

        {/* 3. BOTTOM LINK BANNER */}
        <a
          href="https://prasthanam-gbpiet.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex w-full max-w-4xl flex-col items-center justify-between gap-4 overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#080b0f] to-[#00629b]/20 p-6 shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-[#008dcc]/50 hover:shadow-[0_10px_40px_rgba(0,141,204,0.3)] sm:flex-row sm:rounded-[32px] sm:p-8"
        >
          <div className="absolute inset-0 bg-[#008dcc]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          <div className="relative z-10 text-center sm:text-left">
            <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl">
              Visit the Official Robotics Website
            </h2>
            <p className="text-sm text-white/60 sm:text-base">
              Explore all our projects, team members, and comprehensive resources.
            </p>
          </div>
          
          <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#00629b] text-white transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#008dcc]">
            <ExternalLink className="h-6 w-6" />
          </div>
        </a>

      </div>
    </section>
  );
}