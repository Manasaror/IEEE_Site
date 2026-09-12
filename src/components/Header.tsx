import { useEffect, useRef, useState } from 'react';
import { User, ChevronDown, Menu, X, ExternalLink } from 'lucide-react';
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

  // Admin / User dropdown state
  const [adminOpen, setAdminOpen] = useState(false);

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mobile accordion active dropdown
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  // Desktop active dropdown state for touch/click
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState<string | null>(null);

  // Ref for admin dropdown click-outside
  const adminRef = useRef<HTMLDivElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);

  // Close menus when route changes
  useEffect(() => {
    setAdminOpen(false);
    setMobileMenuOpen(false);
    setDesktopDropdownOpen(null);
    setMobileDropdownOpen(null);
  }, [location.pathname]);

  // Lock page scrolling while mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Click outside to close admin dropdown & desktop dropdowns, and handle Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      // Close admin dropdown if clicked outside
      if (adminRef.current && !adminRef.current.contains(target)) {
        setAdminOpen(false);
      }

      // Close desktop dropdown if clicked outside
      if (desktopNavRef.current && !desktopNavRef.current.contains(target)) {
        setDesktopDropdownOpen(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setAdminOpen(false);
        setDesktopDropdownOpen(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Navbar navigation items
  const navLinks: NavItem[] = [
    { name: 'Home', href: '/' },
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
        { name: 'Events', href: '/activities/events', isExternal: false },
        { name: 'Robotics', href: '/activities/robotics', isExternal: false },
      ],
    },
    { name: 'Teams', href: '/teams' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className="
        relative
        z-40
        w-full
        border-b
        border-white/10
        bg-black/95
        backdrop-blur-md
      "
    >
      {/* Navbar container */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6">

        {/* =========================
            LOGO / BRAND
            ========================= */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3"
          onClick={() => {
            setMobileMenuOpen(false);
            setAdminOpen(false);
            setDesktopDropdownOpen(null);
          }}
        >
          <img
            src="/images/IeeeLogo.webp"
            alt="IEEE Logo"
            className="h-9 w-9 object-contain sm:h-12 sm:w-12"
          />

          <div className="text-lg font-bold tracking-tight sm:text-2xl">
            <span className="text-[#00629b]">IEEE</span>
            <span className="ml-1 text-white">GBPIET</span>
          </div>
        </Link>

        {/* =========================
            DESKTOP NAVIGATION
            ========================= */}
        <nav
          ref={desktopNavRef}
          className="hidden items-center gap-6 lg:flex lg:gap-8"
        >
          {navLinks.map((link) => {
            const isDropdownActive = desktopDropdownOpen === link.name;

            return (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setDesktopDropdownOpen(link.name)}
                onMouseLeave={() => setDesktopDropdownOpen(null)}
              >
                {/* Normal navigation link */}
                {!link.dropdown && link.href && (
                  <Link
                    to={link.href}
                    className="
                      relative
                      text-base
                      font-medium
                      text-white/75
                      transition-colors
                      duration-200
                      hover:text-white
                      lg:text-lg
                    "
                  >
                    {link.name}

                    {/* Hover underline */}
                    <span
                      className="
                        absolute
                        -bottom-2
                        left-0
                        h-0.5
                        w-0
                        bg-[#00629b]
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </Link>
                )}

                {/* Dropdown navigation item (About & Activities) */}
                {link.dropdown && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setDesktopDropdownOpen((prev) =>
                          prev === link.name ? null : link.name
                        )
                      }
                      aria-expanded={isDropdownActive}
                      className="
                        flex
                        items-center
                        gap-1.5
                        text-base
                        font-medium
                        text-white/75
                        transition-colors
                        duration-200
                        hover:text-white
                        lg:text-lg
                      "
                    >
                      <span>{link.name}</span>

                      <ChevronDown
                        size={16}
                        className={`
                          transition-transform
                          duration-200
                          ${isDropdownActive ? 'rotate-180' : 'group-hover:rotate-180'}
                        `}
                      />
                    </button>

                    {/* Dropdown Menu Container */}
                    <div
                      className={`
                        absolute
                        left-1/2
                        top-full
                        mt-2
                        w-56
                        -translate-x-1/2
                        rounded-xl
                        border
                        border-white/10
                        bg-[#080b0f]
                        p-2
                        shadow-2xl
                        transition-all
                        duration-200
                        ${
                          isDropdownActive
                            ? 'visible translate-y-0 opacity-100'
                            : 'invisible translate-y-2 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'
                        }
                      `}
                    >
                      {link.dropdown.map((subItem) => {
                        if (subItem.isExternal) {
                          return (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setDesktopDropdownOpen(null)}
                              className="
                                flex
                                items-center
                                justify-between
                                rounded-lg
                                px-4
                                py-2.5
                                text-sm
                                font-medium
                                text-white/70
                                transition-colors
                                hover:bg-white/10
                                hover:text-white
                              "
                            >
                              <span>{subItem.name}</span>
                              <ExternalLink size={14} className="text-[#00629b]" />
                            </a>
                          );
                        }

                        return (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={() => setDesktopDropdownOpen(null)}
                            className="
                              block
                              rounded-lg
                              px-4
                              py-2.5
                              text-sm
                              font-medium
                              text-white/70
                              transition-colors
                              hover:bg-white/10
                              hover:text-white
                            "
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

        {/* =========================
            RIGHT SIDE ACTIONS
            ========================= */}
        <div className="flex items-center gap-2">

          {/* Desktop User / Admin Menu */}
          <div ref={adminRef} className="relative hidden lg:block">
            <button
              type="button"
              onClick={() => setAdminOpen((prev) => !prev)}
              aria-expanded={adminOpen}
              aria-label="Open admin menu"
              className="
                flex
                items-center
                gap-1.5
                rounded-full
                p-2
                text-white/80
                transition-all
                duration-200
                hover:bg-white/10
                hover:text-white
              "
            >
              <User size={22} strokeWidth={1.8} />

              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  adminOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Admin dropdown */}
            {adminOpen && (
              <div
                className="
                  absolute
                  right-0
                  top-14
                  w-48
                  rounded-xl
                  border
                  border-white/10
                  bg-[#080b0f]
                  p-2
                  shadow-2xl
                  z-50
                "
              >
                <Link
                  to="/login"
                  onClick={() => setAdminOpen(false)}
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-lg
                    px-3.5
                    py-2.5
                    text-sm
                    font-medium
                    text-white/80
                    transition-colors
                    hover:bg-white/10
                    hover:text-white
                  "
                >
                  <User size={18} className="text-[#00629b]" />
                  <span>Login</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile / Tablet Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className="
              flex
              items-center
              justify-center
              rounded-lg
              p-2
              text-white/80
              transition-all
              duration-200
              hover:bg-white/10
              hover:text-white
              lg:hidden
            "
          >
            {mobileMenuOpen ? (
              <X size={26} strokeWidth={2} />
            ) : (
              <Menu size={26} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* =========================
          MOBILE MENU DRAWER
          ========================= */}
      <div
        className={`
          fixed
          inset-x-0
          bottom-0
          top-16
          z-50
          overflow-y-auto
          lg:hidden
          sm:top-20
          ${
            mobileMenuOpen
              ? 'visible pointer-events-auto opacity-100'
              : 'invisible pointer-events-none opacity-0'
          }
        `}
      >
        {/* Semi-transparent Backdrop */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileMenuOpen(false)}
          className="
            absolute
            inset-0
            h-full
            w-full
            cursor-default
            bg-black/70
            backdrop-blur-sm
          "
        />

        {/* Menu drawer panel */}
        <div
          className={`
            relative
            min-h-full
            border-t
            border-white/10
            bg-[#080b0f]/95
            backdrop-blur-xl
            transition-transform
            duration-300
            ${
              mobileMenuOpen
                ? 'translate-y-0'
                : '-translate-y-4'
            }
          `}
        >
          <nav className="flex flex-col px-6 py-5">

            {/* Mobile links */}
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-white/10">

                {/* Normal link */}
                {!link.dropdown && link.href && (
                  <Link
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      py-4
                      text-lg
                      font-medium
                      text-white
                      transition-all
                      duration-200
                      hover:pl-2
                      hover:text-[#00629b]
                    "
                  >
                    <span>{link.name}</span>

                    <ChevronDown
                      size={16}
                      className="
                        -rotate-90
                        text-white/30
                        transition-colors
                        group-hover:text-[#00629b]
                      "
                    />
                  </Link>
                )}

                {/* Dropdown mobile section */}
                {link.dropdown && (
                  <div>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileDropdownOpen((prev) =>
                          prev === link.name ? null : link.name
                        )
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        py-4
                        text-lg
                        font-medium
                        text-white
                      "
                    >
                      <span>{link.name}</span>

                      <ChevronDown
                        size={18}
                        className={`
                          text-white/40
                          transition-transform
                          duration-200
                          ${
                            mobileDropdownOpen === link.name
                              ? 'rotate-180 text-[#00629b]'
                              : ''
                          }
                        `}
                      />
                    </button>

                    {/* Submenu items */}
                    <div
                      className={`
                        space-y-1
                        overflow-hidden
                        pl-4
                        transition-all
                        duration-300
                        ${
                          mobileDropdownOpen === link.name
                            ? 'max-h-60 pb-3 opacity-100'
                            : 'max-h-0 opacity-0'
                        }
                      `}
                    >
                      {link.dropdown.map((subItem) => {
                        if (subItem.isExternal) {
                          return (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setMobileMenuOpen(false)}
                              className="
                                flex
                                items-center
                                justify-between
                                py-2.5
                                pr-2
                                text-base
                                text-white/70
                                transition-colors
                                hover:text-[#00629b]
                              "
                            >
                              <span>{subItem.name}</span>
                              <ExternalLink size={14} className="text-[#00629b]" />
                            </a>
                          );
                        }

                        return (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="
                              block
                              py-2.5
                              text-base
                              text-white/70
                              transition-colors
                              hover:text-[#00629b]
                            "
                          >
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Login Button */}
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="
                mb-2
                mt-6
                flex
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-[#00629b]
                px-6
                py-3.5
                text-base
                font-semibold
                text-white
                shadow-lg
                shadow-[#00629b]/25
                transition-all
                duration-200
                hover:bg-[#007bbd]
                active:scale-[0.98]
              "
            >
              <User size={20} />
              <span>Login</span>
            </Link>

          </nav>
        </div>
      </div>
    </header>
  );
}