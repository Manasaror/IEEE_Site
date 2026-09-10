// -------------------------------------------------------------
//  About Page � Structured Data Layer
//  IEEE GBPIET Student Branch
// -------------------------------------------------------------

// -- Hero ------------------------------------------------------
export const heroContent = {
  badge: 'IEEE at a Glance',
  heading: 'Advancing Technology',
  headingAccent: 'for Humanity.',
  subtitle:
    'IEEE GBPIET Student Branch � a community of innovators, engineers, and thinkers shaping the future of technology at Govind Ballabh Pant Institute of Engineering and Technology.',
  cta: { label: 'Join the Branch', href: '/contact' },
  ctaSecondary: { label: 'Our Activities', href: '/activities' },
};

// -- Stats -----------------------------------------------------
export const statsData = [
  { number: '120+', label: 'Active Members', description: 'Passionate student engineers' },
  { number: '112+', label: 'Events Hosted', description: 'Workshops, seminars & hackathons' },
  { number: '30+', label: 'Projects Built', description: 'Research & hands-on innovation' },
  { number: '10+', label: 'Years of Legacy', description: 'Shaping futures since founding' },
];

// -- Strategic Plan (Mission & Vision) -------------------------
export const strategicPlan = {
  mission: {
    tag: 'Mission',
    heading: 'Our Mission',
    body: 'To foster technical excellence, professional growth, and service to the community through hands-on engineering, continuous learning, and collaborative innovation � empowering every member to engineer a better world.',
  },
  vision: {
    tag: 'Vision',
    heading: 'Our Vision',
    body: 'To be the most impactful student technical community at GBPIET, recognized for producing skilled, ethical, and globally-minded engineers who contribute to the advancement of technology and humanity.',
  },
};

// -- Ethics & Values -------------------------------------------
export interface ValueItem {
  title: string;
  description: string;
  iconId: 'excellence' | 'integrity' | 'collaboration' | 'innovation' | 'inclusion' | 'service';
  accent: string;
}

export const ethicsValues: ValueItem[] = [
  {
    title: 'Technical Excellence',
    description:
      'We pursue mastery in engineering and science, holding ourselves to the highest standards of quality and rigour in everything we build and learn.',
    iconId: 'excellence',
    accent: 'blue',
  },
  {
    title: 'Integrity & Ethics',
    description:
      'We act with honesty, transparency and professional responsibility � guided by the IEEE Code of Ethics in all our work and interactions.',
    iconId: 'integrity',
    accent: 'cyan',
  },
  {
    title: 'Collaboration',
    description:
      'We believe the best solutions emerge from diverse minds working together, fostering a culture of open knowledge sharing and mutual respect.',
    iconId: 'collaboration',
    accent: 'purple',
  },
  {
    title: 'Innovation',
    description:
      'We challenge assumptions, experiment boldly and embrace creative problem-solving to turn ideas into impactful technological solutions.',
    iconId: 'innovation',
    accent: 'yellow',
  },
  {
    title: 'Inclusion & Diversity',
    description:
      'We welcome engineers of all backgrounds, ensuring every voice is heard and every talent is nurtured in an equitable environment.',
    iconId: 'inclusion',
    accent: 'emerald',
  },
  {
    title: 'Service to Society',
    description:
      "Guided by IEEE's core purpose, we dedicate our skills to initiatives that create tangible benefits for the community and society at large.",
    iconId: 'service',
    accent: 'orange',
  },
];

// -- Leadership Structure ---------------------------------------
export interface LeaderItem {
  name: string;
  role: string;
  department: string;
  initials: string;
  isPrimary?: boolean;
}

export const leadershipData: LeaderItem[] = [
  {
    name: 'Dr. Faculty Counselor',
    role: 'Branch Counselor',
    department: 'IEEE Faculty Advisor',
    initials: 'FC',
    isPrimary: true,
  },
  {
    name: 'Chairperson',
    role: 'Branch Chairperson',
    department: 'Executive Committee',
    initials: 'CH',
  },
  {
    name: 'Vice Chairperson',
    role: 'Vice Chairperson',
    department: 'Executive Committee',
    initials: 'VC',
  },
  {
    name: 'Secretary',
    role: 'Branch Secretary',
    department: 'Executive Committee',
    initials: 'SE',
  },
  {
    name: 'Treasurer',
    role: 'Branch Treasurer',
    department: 'Executive Committee',
    initials: 'TR',
  },
  {
    name: 'Webmaster',
    role: 'Technical Lead',
    department: 'Executive Committee',
    initials: 'WM',
  },
];

// -- Affinity Groups / Societies --------------------------------
export interface SocietyItem {
  acronym: string;
  name: string;
  fullName: string;
  description: string;
  focus: string[];
  accent: string;
  borderColor: string;
  glowColor: string;
  badgeColor: string;
  iconId: 'cs' | 'pes' | 'wie';
}

export const societiesData: SocietyItem[] = [
  {
    acronym: 'CS',
    name: 'Computer Society',
    fullName: 'IEEE Computer Society',
    description:
      'Driving the future of computing through cutting-edge research, education, and collaboration in software, hardware, and emerging technologies.',
    focus: ['Artificial Intelligence', 'Cybersecurity', 'Cloud Computing', 'Software Engineering'],
    accent: 'blue',
    borderColor: 'border-blue-500/20',
    glowColor: 'bg-blue-500/10',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    iconId: 'cs',
  },
  {
    acronym: 'PES',
    name: 'Power & Energy Society',
    fullName: 'IEEE Power & Energy Society',
    description:
      'Advancing the science, technology, and practice of electric power and energy for the benefit of humanity through sustainable innovation.',
    focus: ['Renewable Energy', 'Smart Grids', 'Power Electronics', 'Energy Storage'],
    accent: 'yellow',
    borderColor: 'border-yellow-500/20',
    glowColor: 'bg-yellow-500/10',
    badgeColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    iconId: 'pes',
  },
  {
    acronym: 'WIE',
    name: 'Women in Engineering',
    fullName: 'IEEE Women in Engineering',
    description:
      'Empowering women in engineering and science, fostering an inclusive environment where every aspiring engineer can thrive and lead.',
    focus: ['STEM Outreach', 'Leadership Development', 'Mentorship', 'Community Building'],
    accent: 'pink',
    borderColor: 'border-pink-500/20',
    glowColor: 'bg-pink-500/10',
    badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    iconId: 'wie',
  },
];
