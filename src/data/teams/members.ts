// IEEE GBPIET — Team Members Data
// Source: https://edu.ieee.org/in-gbpiet/our-team/

// HOW TO ADD A NEW MEMBER:
//   Copy one of the objects below and fill in your details.
//
//   name            → Full name of the member
//   role            → Designation (e.g. "Chairperson", "Secretary")
//   department      → Branch / Department name
//   year            → Current year (e.g. "2nd Year", "3rd Year", "Faculty")
//   photo           → (Optional) Paste the URL/path of the member's photo here.
//                     Example: "/images/members/aarav.jpg" or "https://example.com/photo.jpg"
//   socials         → Social media profile links (all optional).
//                     Paste the full URL for each platform you want to show.
//                     Supported: linkedin, github, instagram, twitter
//                     Leave out or set to empty string if not available.
//   priority        → Number controlling display order within a committee (lower = shown first).
//   committee       → Which section this member belongs to: 'executive' or 'student'

export type SocialLinks = {
  linkedin?: string; // e.g. "https://linkedin.com/in/your-username"
  github?: string; // e.g. "https://github.com/your-username"
  instagram?: string; // e.g. "https://instagram.com/your-username"
  twitter?: string; // e.g. "https://twitter.com/your-username"  (or x.com)
};

export type Committee = 'executive' | 'student';

export type TeamMember = {
  name: string; // Full name
  role: string; // Designation / Position
  department: string; // Branch / Department
  photo?: string; // ← Paste photo URL/path here (optional)
  socials: SocialLinks; // ← Paste social media links here
  priority: number; // Sort order within committee (lower = higher rank)
  committee: Committee; // 'executive' or 'student'
};

// ── Member data ─────────────────────────────────────────────────
// Ordered: Executive Committee first, then Student Committee

export const teamMembers: TeamMember[] = [
  // ===========================================================================
  // EXECUTIVE COMMITTEE
  // ===========================================================================
  {
    name: 'Dr. V.K Banga',
    role: 'Chief Patron & Director',
    department: 'GBPIET',
    photo: '',
    priority: 1,
    committee: 'executive',
    socials: {
      linkedin: 'https://linkedin.com/in/',
    },
  },
  {
    name: 'Dr. Kamaljit Singh Bhatia',
    role: 'Sr. Member IEEE, Branch Counsellor',
    department: 'Coordinator Professional Societies, GBPIET',
    photo: '',
    priority: 2,
    committee: 'executive',
    socials: {
      linkedin: 'https://linkedin.com/in/',
    },
  },
  {
    name: 'Dr. Mamta Baunthiyal',
    role: 'DEAN R&D',
    department: 'GBPIET',
    photo: '',
    priority: 3,
    committee: 'executive',
    socials: {
      linkedin: 'https://linkedin.com/in/',
    },
  },
  {
    name: 'Dr. Sanjay Gairola',
    role: 'Sr. Member IEEE, OIC Library',
    department: 'GBPIET',
    photo: '',
    priority: 4,
    committee: 'executive',
    socials: {
      linkedin: 'https://linkedin.com/in/',
    },
  },
  {
    name: 'Dr. Jitendra Singh Rauthan',
    role: 'Member IEEE & Branch Advisor',
    department: 'CSE Department',
    photo: '',
    priority: 5,
    committee: 'executive',
    socials: {
      linkedin: 'https://linkedin.com/in/',
    },
  },
  {
    name: 'Mr. Neem Sagar',
    role: 'Member IEEE & Branch Advisor',
    department: 'EE Department',
    photo: '',
    priority: 6,
    committee: 'executive',
    socials: {
      linkedin: 'https://linkedin.com/in/',
    },
  },
  {
    name: 'Dr. Sandeep Kumar',
    role: 'Member IEEE & Branch Advisor',
    department: 'ECE Department',
    photo: '',
    priority: 7,
    committee: 'executive',
    socials: {
      linkedin: 'https://linkedin.com/in/',
    },
  },
  {
    name: 'Mr. Pranshu Dangwal',
    role: 'Member IEEE & Branch Advisor',
    department: 'BT Department',
    photo: '',
    priority: 8,
    committee: 'executive',
    socials: {
      linkedin: 'https://linkedin.com/in/',
    },
  },

  // ===========================================================================
  // STUDENT COMMITTEE
  // ===========================================================================
  {
    name: 'Jiyanshi Batra',
    role: 'Student Branch Chair',
    department: 'IEEE Student Branch',
    photo: '',
    priority: 1,
    committee: 'student',
    socials: {
      linkedin: 'https://linkedin.com/in/',
      github: 'https://github.com/',
      instagram: 'https://instagram.com/',
    },
  },
  {
    name: 'Paras Dhiman',
    role: 'Student Branch Vice Chair',
    department: 'IEEE Student Branch',
    photo: '',
    priority: 2,
    committee: 'student',
    socials: {
      linkedin: 'https://linkedin.com/in/',
      github: 'https://github.com/',
      instagram: 'https://instagram.com/',
    },
  },
  {
    name: 'Vanshika Painuly',
    role: 'Student Secretary',
    department: 'IEEE Student Branch',
    photo: '',
    priority: 3,
    committee: 'student',
    socials: {
      linkedin: 'https://linkedin.com/in/',
      instagram: 'https://instagram.com/',
    },
  },
  {
    name: 'Akriti Chauhan',
    role: 'Student Treasurer',
    department: 'IEEE Student Branch',
    photo: '',
    priority: 4,
    committee: 'student',
    socials: {
      linkedin: 'https://linkedin.com/in/',
      instagram: 'https://instagram.com/',
    },
  },
  {
    name: 'Muskan Singh',
    role: 'Creative Media Head',
    department: 'IEEE Student Branch',
    photo: '',
    priority: 5,
    committee: 'student',
    socials: {
      linkedin: 'https://linkedin.com/in/',
      instagram: 'https://instagram.com/',
    },
  },
  {
    name: 'Shivam Dangwal',
    role: 'Web Master',
    department: 'IEEE Student Branch',
    photo: '',
    priority: 6,
    committee: 'student',
    socials: {
      linkedin: 'https://linkedin.com/in/',
      github: 'https://github.com/',
      instagram: 'https://instagram.com/',
    },
  },
];
