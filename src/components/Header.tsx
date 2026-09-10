import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Activities', href: '/activities' },
    { name: 'Teams', href: '/teams' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-black/30 backdrop-blur-[4px]'
      }`}
    >
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* LEFT - LOGO */}
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src="/images/IeeeLogo.webp"
            alt="IEEE Logo"
            className="h-9 w-9 sm:h-12 sm:w-12 object-contain"
          />

          <div className="text-lg sm:text-2xl font-bold tracking-tight">
            <span className="text-[#00629b]">IEEE</span>
            <span className="ml-1 text-white">GBPIET</span>
          </div>
        </div>

        {/* MIDDLE - DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-6 lg:gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-base lg:text-lg font-medium transition-colors duration-200 ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-400'
              }`}
            >
              {link.name}

              {/* Hover underline */}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* RIGHT - HAMBURGER */}
        <div className="flex items-center gap-2">
          {/* Hamburger - Mobile/Tablet only */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden flex items-center justify-center rounded-lg p-2 transition-all duration-200 ${
              scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`lg:hidden fixed inset-0 top-16 sm:top-20 z-40 transition-all duration-300 ${
          mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`relative bg-gray-900/95 backdrop-blur-xl border-t border-white/10 transition-all duration-300 ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between border-b border-white/10 py-4 text-lg font-medium text-white transition-all duration-200 hover:text-blue-400 hover:pl-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span>{link.name}</span>
                <ChevronDown
                  size={16}
                  className="-rotate-90 text-white/30 transition-colors group-hover:text-blue-400"
                />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
