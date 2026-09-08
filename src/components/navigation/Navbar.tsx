import { useState, useEffect } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Cpu,
  Calendar,
  Sparkles,
  Layers,
  ExternalLink,
} from 'lucide-react';
import { primaryNav } from '../../data/navigation';

interface NavbarProps {
  currentPath?: string;
}

export default function Navbar({ currentPath = '/' }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activitiesOpen, setActivitiesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  };

  const getSubIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'projects':
        return <Cpu className="h-4 w-4 text-primary" />;
      case 'workshops':
        return <Layers className="text-accent-cyan h-4 w-4" />;
      case 'events':
        return <Calendar className="text-primary-light h-4 w-4" />;
      case 'outreach & wie':
        return <Sparkles className="h-4 w-4 text-amber-500" />;
      default:
        return <Layers className="h-4 w-4 text-primary" />;
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-slate-200/80 bg-white/95 py-3 shadow-sm backdrop-blur-md'
          : 'border-b border-slate-100 bg-white/80 py-4 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="IEEE GBPIET Student Branch Home"
          >
            <div className="to-primary-dark group-hover:shadow-glow-sm relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary shadow-sm transition-all duration-300">
              <img
                src="/logos/ieee-diamond.svg"
                alt="IEEE"
                className="h-6 w-6 object-contain drop-shadow-sm filter"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-primary sm:text-lg">
                  IEEE <span className="font-black text-primary">GBPIET</span>
                </span>
                <span className="hidden rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary sm:inline-flex">
                  STB64581
                </span>
              </div>
              <span className="text-[11px] font-medium tracking-normal text-slate-500">
                Student Branch • Pauri Garhwal
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex xl:gap-2">
            {primaryNav.map((item) => {
              const active = isActive(item.href);

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActivitiesOpen(true)}
                    onMouseLeave={() => setActivitiesOpen(false)}
                  >
                    <button
                      type="button"
                      className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        active || activitiesOpen
                          ? 'bg-primary/5 text-primary'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                      aria-expanded={activitiesOpen}
                      onClick={() => setActivitiesOpen(!activitiesOpen)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          activitiesOpen ? 'rotate-180 text-primary' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {activitiesOpen && (
                      <div className="animate-in fade-in slide-in-from-top-2 absolute left-0 top-full z-50 w-72 pt-2 duration-200">
                        <div className="rounded-xl border border-slate-100 bg-white p-2 shadow-xl ring-1 ring-black/5">
                          <div className="mb-1 border-b border-slate-100 px-3 py-2">
                            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                              Branch Initiatives
                            </span>
                          </div>
                          {item.children.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="group flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-slate-50"
                            >
                              <div className="mt-0.5 rounded-md bg-slate-100 p-1.5 transition-colors group-hover:bg-primary/10">
                                {getSubIcon(subItem.label)}
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-slate-800 transition-colors group-hover:text-primary">
                                  {subItem.label}
                                </div>
                                {subItem.description && (
                                  <p className="mt-0.5 line-clamp-1 text-xs text-slate-500">
                                    {subItem.description}
                                  </p>
                                )}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-primary/5 font-semibold text-primary'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary-dark hover:shadow-glow-sm group inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200"
            >
              <span>Join IEEE</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary/10 px-2.5 py-1.5 text-xs font-semibold text-primary"
            >
              Join
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="animate-in fade-in slide-in-from-top-4 space-y-3 border-b border-slate-200 bg-white/95 px-4 pb-6 pt-3 backdrop-blur-lg duration-200 lg:hidden">
          <div className="space-y-1">
            {primaryNav.map((item) => (
              <div key={item.label} className="border-b border-slate-50 pb-1 last:border-0">
                {item.children ? (
                  <div className="py-2">
                    <div className="px-3 py-1 font-mono text-xs font-bold uppercase text-slate-400">
                      {item.label}
                    </div>
                    <div className="mt-1 space-y-1 pl-2">
                      {item.children.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary"
                        >
                          {getSubIcon(sub.label)}
                          <span>{sub.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                      isActive(item.href)
                        ? 'bg-primary/10 font-bold text-primary'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary-dark flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              <span>Join IEEE Student Branch</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
