/**
 * Shared content models.
 *
 * These types describe the shape of data consumed by card and section
 * components. They are intentionally generic placeholders — extend them
 * as real content (team bios, project write-ups, event details) is added.
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  domain?: string;
  photoUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  imageUrl?: string;
  repoUrl?: string;
  liveUrl?: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date?: string;
  location?: string;
  imageUrl?: string;
  registrationUrl?: string;
}

export type BadgeVariant = 'default' | 'primary' | 'accent' | 'muted';
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
