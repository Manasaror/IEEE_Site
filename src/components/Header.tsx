import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { User, ChevronDown, Menu, X, ExternalLink, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface DropdownItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

interface NavItem {
  name: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export default function Header() {
  const location = useLocation();

  const [adminOpen, setAdminOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const adminRef = useRef<HTMLDivElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);

  const navLinks: NavItem[] = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      dropdown: [
        {
          name: 'About IEEE GBPIET',
          href: '/about',
          isExternal: false,
        },
        {
          name: 'About IEEE',
          href: 'https://www.ieee.org',
          isExternal: true,
        },
        {
          name: 'IEEE UP Section',
          href: 'https://ieeeup.org',
          isExternal: true,
        },
      ],
    },
    {
      name: 'Activities',
      dropdown: [
        {
          name: 'Events',
          href: '/activities/events',
          isExternal: false,
        },
        {
          name: 'Robotics',
          href: '/activities/robotics',
          isExternal: false,
        },
      ],
    },
    {
      name: 'Teams',
      href: '/teams',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
    {
      name: 'Certificate',
      href: '/certificate',
    },
  ];

  /* Ensure client-side portal mounting */
  useEffect(() => {
    setIsMounted(true);
  }, []);

  /* Helper to test active routes */
  const isRouteActive = (href?: string) => {
    if (!href) return false;
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const isDropdownActive = (items?: DropdownItem[]) => {
    if (!items) return false;
    return items.some((item) => !item.isExternal && isRouteActive(item.href));
  };

  /* Auto-open active dropdown category on mobile if current route matches */
  useEffect(() => {
    if (mobileMenuOpen) {
      navLinks.forEach((link) => {
        if (link.dropdown && isDropdownActive(link.dropdown)) {
          setMobileDropdownOpen(link.name);
        }
      });
    }
  }, [mobileMenuOpen]);

  /* =========================
     CLOSE EVERYTHING ON ROUTE CHANGE
     ========================= */
  useEffect(() => {
    setAdminOpen(false);
    setMobileMenuOpen(false);
    setDesktopDropdownOpen(null);
    setMobileDropdownOpen(null);
  }, [location.pathname]);

  /* =========================
     LOCK BODY SCROLL WHEN MOBILE MENU OPEN
     ========================= */
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  /* =========================
     CLICK OUTSIDE + ESCAPE KEY
     ========================= */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (adminRef.current && !adminRef.current.contains(target)) {
        setAdminOpen(false);
      }

      if (desktopNavRef.current && !desktopNavRef.current.contains(target)) {
        setDesktopDropdownOpen(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setAdminOpen(false);
        setDesktopDropdownOpen(null);
        setMobileMenuOpen(false);
        setMobileDropdownOpen(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  /* =========================
     CLOSE MOBILE MENU
     ========================= */
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/95 backdrop-blur-md">
        {/* =====================================================
            TOP NAVBAR CONTAINER
            ===================================================== */}
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6">
          {/* =====================================================
              LOGO & BRANDING
              ===================================================== */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex shrink-0 items-center gap-2 sm:gap-3 group focus:outline-none"
          >
            <img
              src="/images/IeeeLogo.webp"
              alt="IEEE Logo"
              className="h-9 w-9 object-contain sm:h-12 sm:w-12 transition-transform duration-200 group-hover:scale-105"
            />

            <div className="text-lg font-bold tracking-tight sm:text-2xl">
              <span className="text-[#00629b] transition-colors group-hover:text-[#007bbd]">
                IEEE
              </span>
              <span className="ml-1 text-white">GBPIET</span>
            </div>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION (Visible on lg and up)
              ===================================================== */}
          <nav
            ref={desktopNavRef}
            className="hidden items-center gap-6 lg:flex lg:gap-8"
            aria-label="Desktop Navigation"
          >
            {navLinks.map((link) => {
              const dropdownItems = link.dropdown;
              const isDropdownOpen = desktopDropdownOpen === link.name;
              const isCurrentActive = dropdownItems
                ? isDropdownActive(dropdownItems)
                : isRouteActive(link.href);

              return (
                <div
                  key={link.name}
                  className="group relative"
                  onMouseEnter={() => {
                    if (dropdownItems) {
                      setDesktopDropdownOpen(link.name);
                    }
                  }}
                  onMouseLeave={() => {
                    if (dropdownItems) {
                      setDesktopDropdownOpen(null);
                    }
                  }}
                >
                  {/* Normal Link */}
                  {!dropdownItems && link.href && (
                    <Link
                      to={link.href}
                      className={`relative text-base font-medium transition-colors duration-200 lg:text-lg ${
                        isCurrentActive ? 'text-white' : 'text-white/75 hover:text-white'
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute -bottom-2 left-0 h-0.5 bg-[#00629b] transition-all duration-300 ${
                          isCurrentActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {dropdownItems && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setDesktopDropdownOpen((prev) => (prev === link.name ? null : link.name))
                        }
                        aria-expanded={isDropdownOpen}
                        className={`flex items-center gap-1.5 text-base font-medium transition-colors duration-200 lg:text-lg ${
                          isCurrentActive || isDropdownOpen
                            ? 'text-white'
                            : 'text-white/75 hover:text-white'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            isDropdownOpen ? 'rotate-180 text-[#00629b]' : ''
                          }`}
                        />
                      </button>

                      <div
                        className={`absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 rounded-xl border border-white/10 bg-[#080b0f] p-2 shadow-2xl transition-all duration-200 ${
                          isDropdownOpen
                            ? 'visible translate-y-0 opacity-100'
                            : 'invisible translate-y-2 opacity-0'
                        }`}
                      >
                        {dropdownItems.map((subItem) => {
                          if (subItem.isExternal) {
                            return (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setDesktopDropdownOpen(null)}
                                className="flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                              >
                                <span>{subItem.name}</span>
                                <ExternalLink size={14} className="text-[#00629b]" />
                              </a>
                            );
                          }

                          const isSubActive = isRouteActive(subItem.href);

                          return (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => setDesktopDropdownOpen(null)}
                              className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                                isSubActive
                                  ? 'bg-[#00629b]/15 text-[#00629b] font-semibold'
                                  : 'text-white/70 hover:bg-white/10 hover:text-white'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </nav>

          {/* =====================================================
              RIGHT CONTROLS: Desktop Login & Mobile Hamburger
              ===================================================== */}
          <div className="flex items-center gap-2">
            {/* Desktop Login Dropdown */}
            <div ref={adminRef} className="relative hidden lg:block">
              <button
                type="button"
                onClick={() => setAdminOpen((prev) => !prev)}
                aria-expanded={adminOpen}
                aria-label="Open user menu"
                className="flex items-center gap-1.5 rounded-full p-2 text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                <User size={22} strokeWidth={1.8} />
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${adminOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {adminOpen && (
                <div className="absolute right-0 top-14 z-50 w-48 rounded-xl border border-white/10 bg-[#080b0f] p-2 shadow-2xl">
                  <Link
                    to="/login"
                    onClick={() => setAdminOpen(false)}
                    className="flex w-full items-center gap-3 rounded-lg px-3.5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <User size={18} className="text-[#00629b]" />
                    <span>Login</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Hamburger Button (Mobile & Tablet) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className="flex items-center justify-center rounded-lg p-2 text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white lg:hidden focus:outline-none focus:ring-2 focus:ring-[#00629b]"
            >
              {mobileMenuOpen ? (
                <X size={27} strokeWidth={2} />
              ) : (
                <Menu size={27} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE & TABLET SLIDE-OVER DRAWER
          Rendered via Portal into document.body to prevent
          backdrop-filter stacking context containment traps.
          ===================================================== */}
      {isMounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
              mobileMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
            }`}
            aria-hidden={!mobileMenuOpen}
          >
            {/* Backdrop overlay */}
            <div
              className={`fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
                mobileMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Slide-over Drawer (From Right) */}
            <div
              className={`fixed inset-y-0 right-0 flex w-full max-w-sm sm:max-w-md flex-col border-l border-white/10 bg-[#080b0f] shadow-2xl transition-transform duration-300 ease-in-out ${
                mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              {/* Drawer Header with Branding & Close Button */}
              <div className="flex h-16 sm:h-20 shrink-0 items-center justify-between border-b border-white/10 px-5 sm:px-6">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-2.5 focus:outline-none"
                >
                  <img
                    src="/images/IeeeLogo.webp"
                    alt="IEEE Logo"
                    className="h-8 w-8 object-contain sm:h-9 sm:w-9"
                  />
                  <div className="text-base font-bold tracking-tight sm:text-lg">
                    <span className="text-[#00629b]">IEEE</span>
                    <span className="ml-1 text-white">GBPIET</span>
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                  className="flex items-center justify-center rounded-lg p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white focus:outline-none"
                >
                  <X size={24} strokeWidth={2} />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <nav
                className="flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6 space-y-1"
                aria-label="Mobile Navigation"
              >
                {navLinks.map((link) => {
                  const dropdownItems = link.dropdown;
                  const isOpen = mobileDropdownOpen === link.name;
                  const isCurrentActive = dropdownItems
                    ? isDropdownActive(dropdownItems)
                    : isRouteActive(link.href);

                  /* Normal Link without dropdown */
                  if (!dropdownItems && link.href) {
                    return (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={closeMobileMenu}
                        className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-all ${
                          isCurrentActive
                            ? 'bg-[#00629b]/20 text-[#00a3ff] font-semibold'
                            : 'text-white/80 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronRight
                          size={18}
                          className={`transition-colors ${
                            isCurrentActive ? 'text-[#00a3ff]' : 'text-white/30'
                          }`}
                        />
                      </Link>
                    );
                  }

                  if (!dropdownItems) return null;

                  /* Dropdown Accordion Item */
                  return (
                    <div key={link.name} className="rounded-xl overflow-hidden transition-colors">
                      <button
                        type="button"
                        onClick={() =>
                          setMobileDropdownOpen((prev) => (prev === link.name ? null : link.name))
                        }
                        aria-expanded={isOpen}
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-base font-medium transition-all ${
                          isCurrentActive
                            ? 'text-[#00a3ff]'
                            : 'text-white/80 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span className={isCurrentActive ? 'font-semibold' : ''}>{link.name}</span>
                        <ChevronDown
                          size={18}
                          className={`text-white/40 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#00629b]' : ''
                          }`}
                        />
                      </button>

                      {/* Expandable Accordion Body */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="ml-3 my-1 space-y-1 border-l-2 border-white/10 pl-3">
                          {dropdownItems.map((subItem) => {
                            if (subItem.isExternal) {
                              return (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={closeMobileMenu}
                                  className="flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                                >
                                  <span>{subItem.name}</span>
                                  <ExternalLink size={14} className="text-[#00629b]" />
                                </a>
                              );
                            }

                            const isSubActive = isRouteActive(subItem.href);

                            return (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                onClick={closeMobileMenu}
                                className={`block rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                                  isSubActive
                                    ? 'bg-[#00629b]/20 text-[#00a3ff] font-semibold'
                                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </nav>

              {/* Drawer Footer with Login CTA */}
              <div className="shrink-0 border-t border-white/10 p-5 sm:p-6 bg-[#080b0f]/80">
                <Link
                  to="/login"
                  onClick={closeMobileMenu}
                  className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#00629b] px-5 py-3 text-base font-semibold text-white shadow-lg shadow-[#00629b]/25 transition-all hover:bg-[#007bbd] active:scale-[0.98]"
                >
                  <User size={18} />
                  <span>Login to Portal</span>
                </Link>

                <p className="mt-3 text-center text-xs text-white/40">
                  IEEE Student Branch • GBPIET
                </p>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
