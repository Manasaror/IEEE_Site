import type { NavItem } from '@/types/navigation';

/**
 * Primary navigation items, rendered by `Navbar.astro`.
 * Update this list to add, remove, or reorder pages in the main nav.
 */
export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects & Workshops', href: '/projects' },
  { label: 'Team', href: '/team' },
  { label: 'Contact Us', href: '/contact' },
];

/**
 * Footer "Quick Links" — kept separate from `primaryNav` so the footer
 * can diverge from the header as the site grows (e.g. Blog, Gallery).
 */
export const footerLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects & Workshops', href: '/projects' },
  { label: 'Team', href: '/team' },
  { label: 'Contact Us', href: '/contact' },
];
