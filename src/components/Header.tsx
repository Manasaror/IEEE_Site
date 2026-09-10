import { useEffect, useState } from 'react';
import { User, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  // Admin dropdown state
  const [adminOpen, setAdminOpen] = useState(false);

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // -------------------------------------------------------
  // Lock body scroll when mobile menu is open
  // -------------------------------------------------------
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

  // -------------------------------------------------------
  // Navigation links
  // -------------------------------------------------------
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Activities', href: '/activities' },
    { name: 'Teams', href: '/teams' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className="
        fixed
        top-0
        left-0
        z-50
        w-full
        border-b
        border-white/10
        bg-black/90
        backdrop-blur-md
      "
    >
      {/* ---------------------------------------------------
          Thin IEEE blue line at the top
          --------------------------------------------------- */}
      <div className="absolute left-0 top-0 h-[3px] w-full bg-[#00629b]" />

      {/* ---------------------------------------------------
          NAVBAR CONTAINER
          --------------------------------------------------- */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6">
        {/* =================================================
            LEFT - LOGO + BRAND
            ================================================= */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
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

        {/* =================================================
            MIDDLE - DESKTOP NAVIGATION
            ================================================= */}
        <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="
                group
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
          ))}
        </nav>

        {/* =================================================
            RIGHT - ADMIN + HAMBURGER
            ================================================= */}
        <div className="flex items-center gap-2">
          {/* -------------------------------------------------
              ADMIN BUTTON
              Desktop only
              ------------------------------------------------- */}
          <div className="relative hidden lg:block">
            <button
              onClick={() => setAdminOpen(!adminOpen)}
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
                className={`
                  transition-transform
                  duration-200
                  ${adminOpen ? 'rotate-180' : ''}
                `}
              />
            </button>

            {/* -------------------------------------------------
                ADMIN DROPDOWN
                ------------------------------------------------- */}
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

          {/* -------------------------------------------------
              HAMBURGER BUTTON
              Mobile + Tablet only
              ------------------------------------------------- */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU OVERLAY
          ===================================================== */}
      <div
        className={`
          fixed
          inset-0
          top-16
          z-40
          transition-all
          duration-300
          sm:top-20
          lg:hidden
          ${mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}
        `}
      >
        {/* ---------------------------------------------------
            Dark backdrop
            --------------------------------------------------- */}
        <div
          className="
            absolute
            inset-0
            bg-black/50
            backdrop-blur-sm
          "
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* ---------------------------------------------------
            Mobile menu panel
            --------------------------------------------------- */}
        <div
          className={`
            relative
            border-t
            border-white/10
            bg-[#080b0f]/95
            backdrop-blur-xl
            transition-all
            duration-300
            ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
          `}
        >
          <nav className="flex flex-col px-6 py-4">
            {/* Mobile navigation links */}
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
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
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
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
            ))}

            {/* -------------------------------------------------
                Mobile Login Button
                ------------------------------------------------- */}
            <button
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
              onClick={() => setMobileMenuOpen(false)}
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
