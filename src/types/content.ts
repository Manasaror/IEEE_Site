export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'executive' | 'technical' | 'outreach' | 'counselor';
  department?: string;
  domain?: string;
  photoUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  email?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: 'Robotics' | 'IoT' | 'AI/ML' | 'Embedded' | 'Power & Energy';
  featured?: boolean;
  status: 'Completed' | 'In Progress' | 'Competition Ready';
  tags: string[];
  imageUrl: string;
  repoUrl?: string;
  liveUrl?: string;
  specs?: { label: string; value: string }[];
}

export interface EventItem {
  id: string;
  title: string;
  category: 'Workshop' | 'Hackathon' | 'Technical Talk' | 'Competition' | 'Outreach';
  description: string;
  date: string;
  time?: string;
  location: string;
  imageUrl?: string;
  registrationUrl?: string;
  status: 'Upcoming' | 'Past' | 'Ongoing';
  badge?: string;
}

export interface ActivityChapter {
  id: string;
  name: string;
  code: string;
  description: string;
  lead: string;
  initiatives: string[];
  icon: string;
}

export type BadgeVariant = 'default' | 'primary' | 'accent' | 'muted' | 'success';
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
