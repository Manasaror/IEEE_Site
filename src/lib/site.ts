/**
 * Central site configuration.
 *
 * Import this instead of hardcoding the site name, description, or URL
 * throughout the codebase. Values can later be sourced from environment
 * variables (see `env.example`) without touching consuming components.
 */
export const siteConfig = {
  name: 'IEEE GBPIET Student Branch',
  shortName: 'IEEE GBPIET',
  description:
    'Official website of the IEEE Student Branch at G.B. Pant Institute of Engineering and Technology — showcasing student activities, projects, workshops, and technical initiatives.',
  url: import.meta.env.PUBLIC_SITE_URL ?? 'https://ieee-gbpiet.example.org',
  locale: 'en-US',
  keywords: [
    'IEEE',
    'GBPIET',
    'Student Branch',
    'Technical Society',
    'Engineering',
    'Workshops',
    'Projects',
  ],
  social: {
    instagram: import.meta.env.PUBLIC_SOCIAL_INSTAGRAM ?? '',
    linkedin: import.meta.env.PUBLIC_SOCIAL_LINKEDIN ?? '',
    twitter: import.meta.env.PUBLIC_SOCIAL_TWITTER ?? '',
    github: import.meta.env.PUBLIC_SOCIAL_GITHUB ?? '',
  },
} as const;
