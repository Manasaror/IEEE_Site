export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface MainNavItem {
  label: string;
  href: string;
  children?: NavDropdownItem[];
}

export const primaryNav: MainNavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'ACTIVITIES', href: '/activities' },
  { label: 'TEAM', href: '/team' },
  { label: 'CONTACT', href: '/contact' },
];

export const footerLinks = {
  organization: [
    { label: 'About Us', href: '/about' },
    { label: 'Executive Board', href: '/team' },
    { label: 'Constitution & Bylaws', href: '/about#constitution' },
    { label: 'Annual Elections', href: '/elections' },
  ],
  activities: [
    { label: 'Projects Showcase', href: '/projects' },
    { label: 'Technical Workshops', href: '/activities#workshops' },
    { label: 'Hackathons & Events', href: '/activities#events' },
    { label: 'Women in Engineering (WIE)', href: '/activities#outreach' },
  ],
  resources: [
    { label: 'IEEE Global', href: 'https://www.ieee.org' },
    { label: 'IEEE Region 10', href: 'https://www.ieeer10.org' },
    { label: 'GBPIET Institute Portal', href: 'https://gbpiet.ac.in' },
    { label: 'Contact & Inquiries', href: '/contact' },
  ],
};
