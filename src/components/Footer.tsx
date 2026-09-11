import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight } from 'lucide-react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Activities', href: '/activities' },
    { name: 'Teams', href: '/teams' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Top blue line */}

      {/* Subtle glow */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#00629b]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-14 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
        {/* Main footer */}
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-10 lg:gap-20">
          {/* BRAND */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/images/IeeeLogo.webp"
                alt="IEEE Logo"
                className="h-14 w-14 object-contain sm:h-16 sm:w-16"
              />

              <div>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  <span className="text-[#00629b]">IEEE</span>{' '}
                  <span className="text-white">GBPIET</span>
                </h2>

                <p className="mt-1 text-xs font-medium uppercase tracking-[0.25em] text-white/40">
                  Student Branch
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
              IEEE GBPIET Student Branch is a community of students passionate about technology,
              innovation, research and creating meaningful impact.
            </p>

            {/* Location */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-white/80">GBPIET Pauri</p>

              <p className="mt-1 text-xs text-white/35">Uttarakhand, India</p>
            </div>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-300 hover:border-[#00629b] hover:bg-[#00629b] hover:text-white"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-300 hover:border-[#00629b] hover:bg-[#00629b] hover:text-white"
              >
                <FaLinkedinIn size={17} />
              </a>

              <a
                href="mailto:ieee@gbpiet.ac.in"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-300 hover:border-[#00629b] hover:bg-[#00629b] hover:text-white"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <p className="mb-6 text-xl font-bold uppercase tracking-[0.25em] text-[#00629b]">
              Quick Links
            </p>

            <nav className="flex flex-col items-start">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="group flex items-center gap-2 border-b border-transparent py-2 text-l text-white/50 transition-all duration-300 hover:pl-2 hover:text-white"
                >
                  <span>{link.name}</span>

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 group-hover:text-[#00629b]"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* NAVIGATION / GET INVOLVED */}
          <div>
            <p className="mb-6 text-xl font-bold uppercase tracking-[0.25em] text-[#00629b]">
              Get  Involved
            </p>

            <div className="space-y-4">
              <Link to="/contact" className="group block">
                <p className="text-base font-semibold text-white transition-colors group-hover:text-[#00629b]">
                  Join IEEE
                </p>
              </Link>

              <Link to="/activities" className="group block">
                <p className="text-base font-semibold text-white transition-colors group-hover:text-[#00629b]">
                  Explore Activities
                </p>
              </Link>

              <Link to="/teams" className="group block">
                <p className="text-base font-semibold text-white transition-colors group-hover:text-[#00629b]">
                  Meet Our Team
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10 sm:my-12" />

        {/* Bottom bar */}
        <div className="text-center flex flex-col gap-4 text-center text-xl text-white/30 sm:flex-row sm:items-center text-center sm:justify-between">
          <p>© 2026 IEEE GBPIET Student Branch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
