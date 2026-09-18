// IEEE GBPIET — Team Members Data
// Source: https://edu.ieee.org/in-gbpiet/our-team/

// -----------------------------------------------------------------------------
// DATA FEEDING GUIDE / INSTRUCTIONS
// -----------------------------------------------------------------------------
// 1. PHOTO:
//    - Put image file in 'public/images/members/' folder (e.g., 'jiyanshi.jpg')
//    - Set photo field: photo: '/images/members/jiyanshi.jpg'
//    - Or paste a direct public URL: photo: 'https://example.com/photo.jpg'
//
// 2. SOCIAL LINKS:
//    - Paste full profile URL inside quotes.
//    - Example: linkedin: 'https://www.linkedin.com/in/username'
//    - If link is not available, leave it as empty string '' or omit the key.
//
// 3. ADDING NEW MEMBER:
//    - Copy-paste any block below, adjust 'priority' (ordering), and set 'committee'.
// -----------------------------------------------------------------------------

export type SocialLinks = {
  linkedin?: string; // Full LinkedIn URL
  github?: string;   // Full GitHub URL
  instagram?: string;// Full Instagram URL
  twitter?: string;  // Full Twitter/X URL
};

export type Committee = 'executive' | 'student';

export type TeamMember = {
  name: string;        // Full name
  role: string;        // Designation / Position
  department: string;  // Branch / Department
  photo?: string;      // Photo path or URL
  socials: SocialLinks;// Social links object
  priority: number;    // Sort order (1 = top display position)
  committee: Committee;// 'executive' or 'student'
};

// ── Member Data Source ───────────────────────────────────────────────────────

export const teamMembers: TeamMember[] = [
  // ===========================================================================
  // EXECUTIVE COMMITTEE
  // ===========================================================================
  {
    name: 'Dr. V.K Banga',
    role: 'Chief Patron & Director',
    department: 'GBPIET',
    photo: '', // e.g. '/images/members/vk-banga.jpg'
    priority: 1,
    committee: 'executive',
    socials: {
      linkedin: 'https://www.linkedin.com/in/kaushik-pathak-7150a5382/',
    },
  },
  {
    name: 'Dr. Kamaljit Singh Bhatia',
    role: 'Sr. Member IEEE, Branch Counsellor',
    department: 'Coordinator Professional Societies, GBPIET',
    photo: '', // e.g. '/images/members/kamaljit-bhatia.jpg'
    priority: 2,
    committee: 'executive',
    socials: {
    },
  },
  {
    name: 'Dr. Mamta Baunthiyal',
    role: 'DEAN R&D',
    department: 'GBPIET',
    photo: '', // e.g. '/images/members/mamta-baunthiyal.jpg'
    priority: 3,
    committee: 'executive',
    socials: {

    },
  },
  {
    name: 'Dr. Sanjay Gairola',
    role: 'Sr. Member IEEE, OIC Library',
    department: 'GBPIET',
    photo: '', // e.g. '/images/members/sanjay-gairola.jpg'
    priority: 4,
    committee: 'executive',
    socials: {

    },
  },
  {
    name: 'Dr. Jitendra Singh Rauthan',
    role: 'Member IEEE & Branch Advisor',
    department: 'CSE Department',
    photo: '', // e.g. '/images/members/jitendra-rauthan.jpg'
    priority: 5,
    committee: 'executive',
    socials: {

    },
  },
  {
    name: 'Mr. Neem Sagar',
    role: 'Member IEEE & Branch Advisor',
    department: 'EE Department',
    photo: '', // e.g. '/images/members/neem-sagar.jpg'
    priority: 6,
    committee: 'executive',
    socials: {

    },
  },
  {
    name: 'Dr. Sandeep Kumar',
    role: 'Member IEEE & Branch Advisor',
    department: 'ECE Department',
    photo: '', // e.g. '/images/members/sandeep-kumar.jpg'
    priority: 7,
    committee: 'executive',
    socials: {

    },
  },
  {
    name: 'Mr. Pranshu Dangwal',
    role: 'Member IEEE & Branch Advisor',
    department: 'BT Department',
    photo: '', // e.g. '/images/members/pranshu-dangwal.jpg'
    priority: 8,
    committee: 'executive',
    socials: {

    },
  },

  // ===========================================================================
  // STUDENT COMMITTEE
  // ===========================================================================
  {
    name: 'Jiyanshi Batra',
    role: 'Student Branch Chair',
    department: 'IEEE Student Branch',
    photo: '', // e.g. '/images/members/jiyanshi-batra.jpg'
    priority: 1,
    committee: 'student',
    socials: {
      linkedin: '',  // e.g. 'https://www.linkedin.com/in/jiyanshi-batra'
      github: '',    // e.g. 'https://github.com/jiyanshi-batra'
      instagram: '', // e.g. 'https://www.instagram.com/jiyanshi_batra'
      twitter: '',   // e.g. 'https://x.com/jiyanshi_batra'
    },
  },
  {
    name: 'Paras Dhiman',
    role: 'Student Branch Vice Chair',
    department: 'IEEE Student Branch',
    photo: '', // e.g. '/images/members/paras-dhiman.jpg'
    priority: 2,
    committee: 'student',
    socials: {
      linkedin: '',  // e.g. 'https://www.linkedin.com/in/paras-dhiman'
      github: '',    // e.g. 'https://github.com/paras-dhiman'
      instagram: '', // e.g. 'https://www.instagram.com/paras_dhiman'
      twitter: '',   // Optional
    },
  },
  {
    name: 'Vanshika Painuly',
    role: 'Student Secretary',
    department: 'IEEE Student Branch',
    photo: '', // e.g. '/images/members/vanshika-painuly.jpg'
    priority: 3,
    committee: 'student',
    socials: {
      linkedin: '',  // e.g. 'https://www.linkedin.com/in/vanshika-painuly'
      github: '',    // Optional
      instagram: '', // e.g. 'https://www.instagram.com/vanshika_painuly'
      twitter: '',   // Optional
    },
  },
  {
    name: 'Akriti Chauhan',
    role: 'Student Treasurer',
    department: 'IEEE Student Branch',
    photo: '', // e.g. '/images/members/akriti-chauhan.jpg'
    priority: 4,
    committee: 'student',
    socials: {
      linkedin: '',  // e.g. 'https://www.linkedin.com/in/akriti-chauhan'
      github: '',    // Optional
      instagram: '', // e.g. 'https://www.instagram.com/akriti_chauhan'
      twitter: '',   // Optional
    },
  },
  {
    name: 'Muskan Singh',
    role: 'Creative Media Head',
    department: 'IEEE Student Branch',
    photo: '', // e.g. '/images/members/muskan-singh.jpg'
    priority: 5,
    committee: 'student',
    socials: {
      linkedin: '',  // e.g. 'https://www.linkedin.com/in/muskan-singh'
      github: '',    // Optional
      instagram: '', // e.g. 'https://www.instagram.com/muskan_singh'
      twitter: '',   // Optional
    },
  },
  {
    name: 'Shivam Dangwal',
    role: 'Web Master',
    department: 'IEEE Student Branch',
    photo: '', // e.g. '/images/members/shivam-dangwal.jpg'
    priority: 6,
    committee: 'student',
    socials: {
      linkedin: '',  // e.g. 'https://www.linkedin.com/in/shivam-dangwal'
      github: '',    // e.g. 'https://github.com/shivam-dangwal'
      instagram: '', // e.g. 'https://www.instagram.com/shivam_dangwal'
      twitter: '',   // Optional
    },
  },
];