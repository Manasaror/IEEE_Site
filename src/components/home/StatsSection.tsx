import { useState, useEffect, useRef } from 'react';
import { Users, Cpu, Calendar, Trophy } from 'lucide-react';

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

const statsData: StatItem[] = [
  {
    id: 'members',
    target: 500,
    suffix: '+',
    label: 'Branch Members & Alumni',
    sublabel: 'Engineers placed across leading tech orgs',
    icon: Users,
  },
  {
    id: 'projects',
    target: 20,
    suffix: '+',
    label: 'Hardware & AI Projects',
    sublabel: 'Robotics, IoT telemetry, TinyML & energy',
    icon: Cpu,
  },
  {
    id: 'events',
    target: 35,
    suffix: '+',
    label: 'Workshops & Hackathons',
    sublabel: 'Hands-on practical skill development',
    icon: Calendar,
  },
  {
    id: 'chapters',
    target: 4,
    suffix: '',
    label: 'Active Societies & Affinity Groups',
    sublabel: 'RAS, CS, WIE, and CAS/PES chapters',
    icon: Trophy,
  },
];

export default function StatsSection() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    members: 0,
    projects: 0,
    events: 0,
    chapters: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries && entries[0]?.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters
          statsData.forEach((stat) => {
            const duration = 1800; // ms
            const start = 0;
            const end = stat.target;
            const startTime = performance.now();

            const updateCounter = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease out quart
              const easeOut = 1 - Math.pow(1 - progress, 4);
              const currentVal = Math.floor(start + (end - start) * easeOut);

              setCounts((prev) => ({ ...prev, [stat.id]: currentVal }));

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                setCounts((prev) => ({ ...prev, [stat.id]: end }));
              }
            };

            requestAnimationFrame(updateCounter);
          });
        }
      },
      { threshold: 0.25 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="bg-navy-900 relative overflow-hidden border-y border-white/10 py-20"
    >
      {/* Background Technical Mesh */}
      <div className="bg-tech-grid-dark pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[300px] w-[700px] -translate-x-1/2 bg-primary/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
              <span>// BRANCH METRICS</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Impact by the Numbers
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400 sm:text-base">
            Continuously advancing engineering excellence, student leadership, and multidisciplinary
            hardware development at GBPIET.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.07]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-xl border border-primary/30 bg-primary/20 p-2.5 text-cyan-400 transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                    VERIFIED
                  </span>
                </div>

                {/* Animated Value */}
                <div className="mb-2 font-mono text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  <span>{counts[stat.id]}</span>
                  <span className="text-cyan-400">{stat.suffix}</span>
                </div>

                <div className="mb-1 text-base font-bold text-slate-200 transition-colors group-hover:text-white">
                  {stat.label}
                </div>

                <p className="text-xs leading-relaxed text-slate-400">{stat.sublabel}</p>

                {/* Corner Tech Notch */}
                <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 rounded-tr-lg border-r-2 border-t-2 border-cyan-400/30" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
