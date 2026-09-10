import { useEffect, useState } from 'react';
import { User, ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
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

        {/* RIGHT - ADMIN + HAMBURGER */}
        <div className="flex items-center gap-2">
          {/* Admin - Desktop only */}
          <div className="relative hidden lg:block">
            <button
              onClick={() => setAdminOpen(!adminOpen)}
              className={`flex items-center gap-1 rounded-full p-2 transition-all duration-200 ${
                scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/20'
              }`}
            >
              <User size={22} strokeWidth={1.8} />

              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${adminOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* DROPDOWN */}
            {adminOpen && (
              <div className="absolute right-0 top-14 w-44 rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-blue-600">
                  <User size={18} />

                  <span>Login</span>
                </button>
              </div>
            )}
          </div>

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

            {/* Mobile Login Button */}
            <button
              className="mt-4 mb-2 flex items-center justify-center gap-3 rounded-xl bg-[#00629b] px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-[#007bbd] active:scale-[0.98]"
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
