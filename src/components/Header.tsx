import { useEffect, useState } from 'react';
import { User, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  // Admin dropdown state
  const [adminOpen, setAdminOpen] = useState(false);

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock page scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Navbar links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },

    {
      name: 'Activities',
      dropdown: [
        { name: 'Events', href: '/activities/events' },
        { name: 'Robotics', href: '/activities/robotics' },
      ],
    },

    { name: 'Teams', href: '/teams' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50
        w-full
        border-b
        border-white/10
        bg-black/90
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
        <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">

              {/* Normal navigation link */}
              {!link.dropdown && (
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

              {/* Activities dropdown */}
              {link.dropdown && (
                <>
                  <button
                    type="button"
                    className="
                      flex
                      items-center
                      gap-1
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

                    <ChevronDown
                      size={16}
                      className="
                        transition-transform
                        duration-200
                        group-hover:rotate-180
                      "
                    />
                  </button>

                  {/* Dropdown menu */}
                  <div
                    className="
                      invisible
                      absolute
                      left-1/2
                      top-full
                      mt-3
                      w-44
                      -translate-x-1/2
                      translate-y-2
                      rounded-xl
                      border
                      border-white/10
                      bg-[#080b0f]
                      p-2
                      opacity-0
                      shadow-xl
                      transition-all
                      duration-200
                      group-hover:visible
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    {/* Events */}
                    <Link
                      to="/activities/events"
                      className="
                        block
                        rounded-lg
                        px-4
                        py-3
                        text-sm
                        font-medium
                        text-white/70
                        transition-colors
                        hover:bg-white/10
                        hover:text-white
                      "
                    >
                      Events
                    </Link>

                    {/* Robotics */}
                    <Link
                      to="/activities/robotics"
                      className="
                        block
                        rounded-lg
                        px-4
                        py-3
                        text-sm
                        font-medium
                        text-white/70
                        transition-colors
                        hover:bg-white/10
                        hover:text-white
                      "
                    >
                      Robotics
                    </Link>
                  </div>
                </>
              )}
            </div>
          ))}
        </nav>

        {/* =========================
            RIGHT SIDE
            ========================= */}
        <div className="flex items-center gap-2">

          {/* Desktop Admin */}
          <div className="relative hidden lg:block">
            <button
              type="button"
              onClick={() => setAdminOpen((prev) => !prev)}
              aria-expanded={adminOpen}
              aria-label="Open admin menu"
              className="
                flex
                items-center
                gap-1
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
                  w-44
                  rounded-xl
                  border
                  border-white/10
                  bg-[#080b0f]
                  p-2
                  shadow-xl
                "
              >
                <button
                  type="button"
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-lg
                    px-3
                    py-2.5
                    text-sm
                    font-medium
                    text-white/70
                    transition-colors
                    hover:bg-white/10
                    hover:text-white
                  "
                >
                  <User size={18} />
                  <span>Login</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile / Tablet hamburger */}
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
          MOBILE MENU
          ========================= */}
      <div
        className={`
          fixed
          inset-x-0
          bottom-0
          top-16
          z-40
          lg:hidden
          sm:top-20
          ${
            mobileMenuOpen
              ? 'visible opacity-100'
              : 'invisible pointer-events-none opacity-0'
          }
        `}
      >

        {/* Backdrop */}
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
            bg-black/60
            backdrop-blur-sm
          "
        />

        {/* Menu panel */}
        <div
          className={`
            relative
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
          <nav className="flex flex-col px-6 py-4">

            {/* Mobile links */}
            {navLinks.map((link) => (
              <div key={link.name}>

                {/* Normal mobile link */}
                {!link.dropdown && (
                  <Link
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      border-b
                      border-white/10
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

                {/* Activities mobile section */}
                {link.dropdown && (
                  <>
                    <div
                      className="
                        border-b
                        border-white/10
                        py-4
                        text-lg
                        font-medium
                        text-white
                      "
                    >
                      {link.name}
                    </div>

                    <div className="border-b border-white/10 pl-4">

                      {/* Events */}
                      <Link
                        to="/activities/events"
                        onClick={() => setMobileMenuOpen(false)}
                        className="
                          block
                          py-3
                          text-base
                          text-white/70
                          transition-colors
                          hover:text-[#00629b]
                        "
                      >
                        Events
                      </Link>

                      {/* Robotics */}
                      <Link
                        to="/activities/robotics"
                        onClick={() => setMobileMenuOpen(false)}
                        className="
                          block
                          py-3
                          text-base
                          text-white/70
                          transition-colors
                          hover:text-[#00629b]
                        "
                      >
                        Robotics
                      </Link>

                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Mobile Login */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="
                mb-2
                mt-4
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
                transition-all
                duration-200
                hover:bg-[#007bbd]
                active:scale-[0.98]
              "
            >
              <User size={20} />
              <span>Login</span>
            </button>

          </nav>
        </div>
      </div>
    </header>
  );
}