import { useEffect, useState } from 'react';
import { User, ChevronDown } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* LEFT - LOGO */}
        <div className="flex items-center gap-3">
          <img src="/images/IeeeLogo.webp" alt="IEEE Logo" className="h-12 w-12 object-contain" />

          <div className="text-2xl font-bold tracking-tight">
            <span className="text-[#00629b]">IEEE</span>
            <span className="ml-1 text-white">GBPIET</span>
          </div>
        </div>

        {/* MIDDLE - NAVIGATION */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-lg font-medium transition-colors duration-200 ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-400'
              }`}
            >
              {link.name}

              {/* Hover underline */}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* RIGHT - ADMIN */}
        <div className="relative">
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
      </div>
    </header>
  );
}
