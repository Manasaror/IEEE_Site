import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight, ChevronDown } from 'lucide-react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const quickLinks = [
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
    <footer className="relative overflow-hidden bg-black text-white">

      {/* Subtle glow */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#00629b]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-14 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">

        {/* =========================
            MAIN FOOTER
            ========================= */}
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-10 lg:gap-20">

          {/* =========================
              BRAND
              ========================= */}
          <div>

            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              <img
                src="/images/IeeeLogo.webp"
                alt="IEEE Logo"
                className="h-14 w-14 object-contain sm:h-16 sm:w-16"
              />

              <div>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  <span className="text-[#00629b]">
                    IEEE
                  </span>{' '}

                  <span className="text-white">
                    GBPIET
                  </span>
                </h2>

                <p className="mt-1 text-xs font-medium uppercase tracking-[0.25em] text-white/40">
                  Student Branch
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
              IEEE GBPIET Student Branch is a community of students
              passionate about technology, innovation, research and
              creating meaningful impact.
            </p>

            {/* Location */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-white/80">
                GBPIET Pauri
              </p>

              <p className="mt-1 text-xs text-white/35">
                Uttarakhand, India
              </p>
            </div>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-3">

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/45
                  transition-all
                  duration-300
                  hover:border-[#00629b]
                  hover:bg-[#00629b]
                  hover:text-white
                "
              >
                <FaInstagram size={17} />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/45
                  transition-all
                  duration-300
                  hover:border-[#00629b]
                  hover:bg-[#00629b]
                  hover:text-white
                "
              >
                <FaLinkedinIn size={17} />
              </a>

              {/* Email */}
              <a
                href="mailto:ieee@gbpiet.ac.in"
                aria-label="Email"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/45
                  transition-all
                  duration-300
                  hover:border-[#00629b]
                  hover:bg-[#00629b]
                  hover:text-white
                "
              >
                <Mail size={17} />
              </a>

            </div>
          </div>

          {/* =========================
              QUICK LINKS
              ========================= */}
          <div>

            <p className="mb-6 text-xl font-bold uppercase tracking-[0.25em] text-[#00629b]">
              Quick Links
            </p>

            <nav className="flex flex-col items-start">

              {quickLinks.map((link) => (

                <div
                  key={link.name}
                  className="group relative w-full"
                >

                  {/* Normal link */}
                  {!link.dropdown && (
                    <Link
                      to={link.href}
                      className="
                        group/link
                        flex
                        items-center
                        gap-2
                        py-2
                        text-base
                        text-white/50
                        transition-all
                        duration-300
                        hover:pl-2
                        hover:text-white
                      "
                    >
                      <span>
                        {link.name}
                      </span>

                      <ArrowUpRight
                        size={13}
                        className="
                          opacity-0
                          transition-all
                          duration-300
                          group-hover/link:translate-x-1
                          group-hover/link:-translate-y-1
                          group-hover/link:opacity-100
                          group-hover/link:text-[#00629b]
                        "
                      />
                    </Link>
                  )}

                  {/* Activities */}
                  {link.dropdown && (
                    <div className="w-full">

                      {/* Activities heading */}
                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          py-2
                          text-base
                          font-medium
                          text-white/50
                        "
                      >
                        <span>
                          {link.name}
                        </span>

                        <ChevronDown
                          size={15}
                          className="
                            transition-transform
                            duration-300
                            group-hover:rotate-180
                          "
                        />
                      </div>

                      {/* Activities submenu */}
                      <div
                        className="
                          ml-3
                          max-h-0
                          overflow-hidden
                          border-l
                          border-white/10
                          pl-4
                          opacity-0
                          transition-all
                          duration-300
                          group-hover:max-h-32
                          group-hover:opacity-100
                        "
                      >

                        <Link
                          to="/activities/events"
                          className="
                            flex
                            items-center
                            gap-2
                            py-2
                            text-sm
                            text-white/40
                            transition-colors
                            hover:text-[#008dcc]
                          "
                        >
                          <span>
                            Events
                          </span>

                          <ArrowUpRight size={12} />
                        </Link>

                        <Link
                          to="/activities/robotics"
                          className="
                            flex
                            items-center
                            gap-2
                            py-2
                            text-sm
                            text-white/40
                            transition-colors
                            hover:text-[#008dcc]
                          "
                        >
                          <span>
                            Robotics
                          </span>

                          <ArrowUpRight size={12} />
                        </Link>

                      </div>
                    </div>
                  )}

                </div>

              ))}

            </nav>
          </div>

          {/* =========================
              GET INVOLVED
              ========================= */}
          <div>

            <p className="mb-6 text-xl font-bold uppercase tracking-[0.25em] text-[#00629b]">
              Get Involved
            </p>

            <div className="space-y-5">

              {/* Join IEEE */}
              <Link
                to="/contact"
                className="group block"
              >
                <p className="text-base font-semibold text-white transition-colors group-hover:text-[#00629b]">
                  Join IEEE
                </p>

                <p className="mt-1 text-sm text-white/35">
                  Become part of the community
                </p>
              </Link>

              {/* Explore Activities */}
              <Link
                to="/activities"
                className="group block"
              >
                <p className="text-base font-semibold text-white transition-colors group-hover:text-[#00629b]">
                  Explore Activities
                </p>

                <p className="mt-1 text-sm text-white/35">
                  Events, projects and workshops
                </p>
              </Link>

              {/* Meet Team */}
              <Link
                to="/teams"
                className="group block"
              >
                <p className="text-base font-semibold text-white transition-colors group-hover:text-[#00629b]">
                  Meet Our Team
                </p>

                <p className="mt-1 text-sm text-white/35">
                  Discover the people behind IEEE
                </p>
              </Link>

            </div>
          </div>

        </div>

        {/* =========================
            DIVIDER
            ========================= */}
        <div className="my-10 h-px bg-white/10 sm:my-12" />

        {/* =========================
            BOTTOM BAR
            ========================= */}
        <div className="flex flex-col gap-4 text-center text-sm text-white/30 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 IEEE GBPIET Student Branch. All rights reserved.
          </p>

          <p className="text-white/20">
            Technology · Innovation · Impact
          </p>

        </div>

      </div>
    </footer>
  );
}