// ──────────────────────────────────────────────────────────────
// IEEE GBPIET — Team Members Data
// ──────────────────────────────────────────────────────────────
// HOW TO ADD A NEW MEMBER:
//   Copy one of the objects below and fill in your details.
//
//   name        → Full name of the member
//   role        → Designation (e.g. "Chairperson", "Secretary")
//   department  → Branch / Department name
//   year        → Current year (e.g. "2nd Year", "3rd Year", "Faculty")
//   photo       → (Optional) Paste the URL/path of the member's photo here.
//                  Example: "/images/members/aarav.jpg" or "https://example.com/photo.jpg"
//   socials     → Social media profile links (all optional).
//                  Paste the full URL for each platform you want to show.
//                  Supported: linkedin, github, instagram, twitter
//                  Leave out or set to empty string if not available.
// ──────────────────────────────────────────────────────────────

export type SocialLinks = {
  linkedin?: string; // e.g. "https://linkedin.com/in/your-username"
  github?: string; // e.g. "https://github.com/your-username"
  instagram?: string; // e.g. "https://instagram.com/your-username"
  twitter?: string; // e.g. "https://twitter.com/your-username"  (or x.com)
};

export type TeamMember = {
  name: string; // Full name
  role: string; // Designation / Position
  department: string; // Branch / Department
  year: string; // Year of study or "Faculty"
  photo?: string; // ← Paste photo URL/path here (optional)
  socials: SocialLinks; // ← Paste social media links here
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Dr. V. K. Sharma',
    role: 'Branch Counselor & Faculty Advisor',
    department: 'Electronics & Communication Engineering',
    year: 'Faculty',
    photo: '', // ← Paste photo link here
    socials: {
      linkedin: 'https://linkedin.com/in/', // ← Paste LinkedIn profile link
    },
  },
  {
    name: 'Aarav Singh',
    role: 'Chairperson',
    department: 'Electrical & Electronics Engineering',
    year: '4th Year',
    photo: '', // ← Paste photo link here
    socials: {
      linkedin: 'https://linkedin.com/in/', // ← Paste LinkedIn profile link
      github: 'https://github.com/', // ← Paste GitHub profile link
      instagram: 'https://instagram.com/', // ← Paste Instagram profile link
      twitter: 'https://twitter.com/', // ← Paste Twitter/X profile link
    },
  },
  {
    name: 'Ananya Joshi',
    role: 'Vice Chairperson',
    department: 'Computer Science & Engineering',
    year: '3rd Year',
    photo: '', // ← Paste photo link here
    socials: {
      linkedin: 'https://linkedin.com/in/', // ← Paste LinkedIn profile link
      github: 'https://github.com/', // ← Paste GitHub profile link
      instagram: 'https://instagram.com/', // ← Paste Instagram profile link
    },
  },
  {
    name: 'Rohit Rawat',
    role: 'Secretary',
    department: 'Electronics & Communication Engineering',
    year: '3rd Year',
    photo: '', // ← Paste photo link here
    socials: {
      linkedin: 'https://linkedin.com/in/', // ← Paste LinkedIn profile link
      github: 'https://github.com/', // ← Paste GitHub profile link
      twitter: 'https://twitter.com/', // ← Paste Twitter/X profile link
    },
  },
  {
    name: 'Priya Negi',
    role: 'Treasurer',
    department: 'Computer Science & Engineering',
    year: '3rd Year',
    photo: '', // ← Paste photo link here
    socials: {
      linkedin: 'https://linkedin.com/in/', // ← Paste LinkedIn profile link
      github: 'https://github.com/', // ← Paste GitHub profile link
      instagram: 'https://instagram.com/', // ← Paste Instagram profile link
    },
  },
  {
    name: 'Vikram Chauhan',
    role: 'Technical Lead',
    department: 'Information Technology',
    year: '4th Year',
    photo: '', // ← Paste photo link here
    socials: {
      linkedin: 'https://linkedin.com/in/', // ← Paste LinkedIn profile link
      github: 'https://github.com/', // ← Paste GitHub profile link
    },
  },
  {
    name: 'Sneha Bisht',
    role: 'Event Coordinator',
    department: 'Computer Science & Engineering',
    year: '2nd Year',
    photo: '', // ← Paste photo link here
    socials: {
      linkedin: 'https://linkedin.com/in/', // ← Paste LinkedIn profile link
      instagram: 'https://instagram.com/', // ← Paste Instagram profile link
    },
  },
  {
    name: 'Arjun Mehta',
    role: 'Web Master',
    department: 'Information Technology',
    year: '3rd Year',
    photo: '', // ← Paste photo link here
    socials: {
      linkedin: 'https://linkedin.com/in/', // ← Paste LinkedIn profile link
      github: 'https://github.com/', // ← Paste GitHub profile link
      twitter: 'https://twitter.com/', // ← Paste Twitter/X profile link
    },
  },
  {
    name: 'Kavya Pandey',
    role: 'Design Head',
    department: 'Computer Science & Engineering',
    year: '2nd Year',
    photo: '', // ← Paste photo link here
    socials: {
      linkedin: 'https://linkedin.com/in/', // ← Paste LinkedIn profile link
      instagram: 'https://instagram.com/', // ← Paste Instagram profile link
    },
  },
  {
    name: 'Rahul Thapa',
    role: 'PR & Outreach Lead',
    department: 'Electrical & Electronics Engineering',
    year: '3rd Year',
    photo: '', // ← Paste photo link here
    socials: {
      linkedin: 'https://linkedin.com/in/', // ← Paste LinkedIn profile link
      instagram: 'https://instagram.com/', // ← Paste Instagram profile link
      twitter: 'https://twitter.com/', // ← Paste Twitter/X profile link
    },
  },
];
