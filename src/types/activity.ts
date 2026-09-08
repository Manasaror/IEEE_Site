/**
 * Activity Types
 * Strict typing for activities, workshops, hackathons, and outreach events.
 */

export type ActivityCategory = 'WORKSHOPS' | 'EVENTS' | 'COMPETITIONS' | 'PROJECTS' | 'OUTREACH';

export type ActivityFilterCategory = 'ALL' | ActivityCategory;

export interface Activity {
  id: string;
  slug: string;
  title: string;
  category: ActivityCategory;
  date: string;
  time?: string;
  location: string;
  description: string;
  shortDescription: string;
  image: string;
  featured?: boolean;
  tags?: string[];
  ctaText?: string;
  ctaLink?: string;
}
