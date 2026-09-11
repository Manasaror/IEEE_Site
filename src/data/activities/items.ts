export type Activity = {
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  branch: string;
};

export const activities: Activity[] = [
  // =========================
  // CSE
  // =========================
  {
    title: 'Himalayan TechHacks',
    category: 'Competitions',
    date: 'October 2026',
    description: 'A national hardware and software hackathon for student innovators.',
    image: '/images/hero_engineering_lab.jpg',
    branch: 'CSE',
  },
  {
    title: 'Web Development Workshop',
    category: 'Workshops',
    date: 'September 2026',
    description: 'A hands-on workshop covering modern web development and application design.',
    image: '/images/about_engineering_bench.jpg',
    branch: 'CSE',
  },
  {
    title: 'Campus Connect',
    category: 'Projects',
    date: 'Ongoing',
    description:
      'A student-built platform designed to connect students, clubs and campus activities.',
    image: '/images/project_rover.jpg',
    branch: 'CSE',
  },

  // =========================
  // CSE-AIML
  // =========================
  {
    title: 'AI Innovation Challenge',
    category: 'Competitions',
    date: 'November 2026',
    description: 'A competitive challenge where students build innovative AI-powered solutions.',
    image: '/images/project_rover.jpg',
    branch: 'CSE-AIML',
  },
  {
    title: 'Machine Learning Bootcamp',
    category: 'Workshops',
    date: 'September 2026',
    description: 'An intensive introduction to machine learning, datasets and model development.',
    image: '/images/hero_engineering_lab.jpg',
    branch: 'CSE-AIML',
  },
  {
    title: 'Smart Vision',
    category: 'Projects',
    date: 'Ongoing',
    description: 'An AI-based computer vision project developed by student researchers.',
    image: '/images/about_engineering_bench.jpg',
    branch: 'CSE-AIML',
  },

  // =========================
  // Biotechnology
  // =========================
  {
    title: 'BioTech Innovation Challenge',
    category: 'Competitions',
    date: 'October 2026',
    description:
      'A competition encouraging students to develop innovative biotechnology solutions.',
    image: '/images/hero_engineering_lab.jpg',
    branch: 'Biotechnology',
  },
  {
    title: 'Molecular Biology Workshop',
    category: 'Workshops',
    date: 'August 2026',
    description: 'An interactive workshop exploring modern molecular biology techniques.',
    image: '/images/about_engineering_bench.jpg',
    branch: 'Biotechnology',
  },
  {
    title: 'BioResearch Initiative',
    category: 'Projects',
    date: 'Ongoing',
    description:
      'A collaborative student research initiative focused on biotechnology applications.',
    image: '/images/project_rover.jpg',
    branch: 'Biotechnology',
  },

  // =========================
  // Electrical
  // =========================
  {
    title: 'PowerTech Challenge',
    category: 'Competitions',
    date: 'October 2026',
    description:
      'A technical competition focused on electrical systems and innovative power solutions.',
    image: '/images/project_rover.jpg',
    branch: 'Electrical',
  },
  {
    title: 'PCB Design Masterclass',
    category: 'Workshops',
    date: 'August 2026',
    description: 'Practical learning in PCB layout and fabrication workflows.',
    image: '/images/about_engineering_bench.jpg',
    branch: 'Electrical',
  },
  {
    title: 'Smart Energy Grid',
    category: 'Projects',
    date: 'Ongoing',
    description:
      'A student project exploring intelligent energy management and monitoring systems.',
    image: '/images/hero_engineering_lab.jpg',
    branch: 'Electrical',
  },

  // =========================
  // Electronics
  // =========================
  {
    title: 'Embedded Systems Challenge',
    category: 'Competitions',
    date: 'November 2026',
    description:
      'A hands-on competition challenging students to design innovative embedded systems.',
    image: '/images/hero_engineering_lab.jpg',
    branch: 'Electronics',
  },
  {
    title: 'IoT Development Workshop',
    category: 'Workshops',
    date: 'September 2026',
    description: 'Learn how sensors, microcontrollers and cloud systems work together in IoT.',
    image: '/images/about_engineering_bench.jpg',
    branch: 'Electronics',
  },
  {
    title: 'Smart Automation',
    category: 'Projects',
    date: 'Ongoing',
    description: 'An electronics project focused on intelligent automation and connected devices.',
    image: '/images/project_rover.jpg',
    branch: 'Electronics',
  },
];
