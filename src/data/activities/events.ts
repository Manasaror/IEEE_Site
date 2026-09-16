export type Activity = {
  id: string; // Branch + Year + post sequence year form 0 to 999

  // Basic Information
  title: string;
  category: string;
  branch: string;

  // Event Details
  date: string;
  time: string;
  venue: string;
  organizedBy: string;

  // Report Information
  reportAuthor: string;

  // Content
  overview: string;
  description: string;

  // Key Discussion Points
  keyDiscussion: string[];

  // Attendance
  studentsPresent: string[];

  // Event Image
  image: string;
};

export const activities: Activity[] = [
  // =========================
  // CSE
  // =========================
  {
    id: 'CSE26001',

    title: 'Web Development Workshop',
    category: 'Workshops',
    branch: 'CSE',

    date: 'September 15, 2026',
    time: '10:00 AM - 1:00 PM',
    venue: 'Computer Lab, GBPIET',
    organizedBy: 'IEEE GBPIET Student Branch',

    reportAuthor: 'Chandan Singh',

    overview:
      'A technical workshop focused on modern web development technologies and practical application development.',

    description:
      'The workshop introduced students to modern web development concepts through theoretical explanations and practical discussions.',

    keyDiscussion: [
      'Introduction to modern web development technologies.',
      'Understanding the structure of web applications.',
      'Frontend development using HTML, CSS and JavaScript.',
      'Responsive web design principles.',
      'Deployment and development workflows.',
    ],

    studentsPresent: ['Chandan Singh', 'Rahul Sharma', 'Aman Rawat', 'Priya Bisht', 'Aditya Negi'],

    image: '/images/hero_engineering_lab.jpg',
  },

  // ========================
  // CSE -AIML
  //=========================

  {
    id: 'AIML26001',

    title: 'Web Development Workshop',
    category: 'Workshops',
    branch: 'AIML',

    date: 'September 15, 2026',
    time: '10:00 AM - 1:00 PM',
    venue: 'Computer Lab, GBPIET',
    organizedBy: 'IEEE GBPIET Student Branch',

    reportAuthor: 'Kunal Singh',

    overview:
      'A technical workshop focused on modern web development technologies and practical application development.',

    description:
      'The workshop introduced students to modern web development concepts through theoretical explanations and practical discussions.',

    keyDiscussion: [
      'Introduction to modern web development technologies.',
      'Understanding the structure of web applications.',
      'Frontend development using HTML, CSS and JavaScript.',
      'Responsive web design principles.',
      'Deployment and development workflows.',
    ],

    studentsPresent: ['Chandan Singh', 'Rahul Sharma', 'Aman Rawat', 'Priya Bisht', 'Aditya Negi'],

    image: '/images/hero_engineering_lab.jpg',
  },

  // =========================
  // Biotechnology
  // =========================

  {
    id: 'BT26001',

    title: 'Web Development Workshop',
    category: 'Workshops',
    branch: 'BT',

    date: 'September 15, 2026',
    time: '10:00 AM - 1:00 PM',
    venue: 'Computer Lab, GBPIET',
    organizedBy: 'IEEE GBPIET Student Branch',

    reportAuthor: 'Chandan Singh',

    overview:
      'A technical workshop focused on modern web development technologies and practical application development.',

    description:
      'The workshop introduced students to modern web development concepts through theoretical explanations and practical discussions.',

    keyDiscussion: [
      'Introduction to modern web development technologies.',
      'Understanding the structure of web applications.',
      'Frontend development using HTML, CSS and JavaScript.',
      'Responsive web design principles.',
      'Deployment and development workflows.',
    ],

    studentsPresent: ['Chandan Singh', 'Rahul Sharma', 'Aman Rawat', 'Priya Bisht', 'Aditya Negi'],

    image: '/images/hero_engineering_lab.jpg',
  },
 

  // =========================
  // Electrical
  // =========================

  {
    id: 'EE26001',

    title: 'Web Development Workshop',
    category: 'Workshops',
    branch: 'EE',

    date: 'September 15, 2026',
    time: '10:00 AM - 1:00 PM',
    venue: 'Computer Lab, GBPIET',
    organizedBy: 'IEEE GBPIET Student Branch',

    reportAuthor: 'Chandan Singh',

    overview:
      'A technical workshop focused on modern web development technologies and practical application development.',

    description:
      'The workshop introduced students to modern web development concepts through theoretical explanations and practical discussions.',

    keyDiscussion: [
      'Introduction to modern web development technologies.',
      'Understanding the structure of web applications.',
      'Frontend development using HTML, CSS and JavaScript.',
      'Responsive web design principles.',
      'Deployment and development workflows.',
    ],

    studentsPresent: ['Chandan Singh', 'Rahul Sharma', 'Aman Rawat', 'Priya Bisht', 'Aditya Negi'],

    image: '/images/hero_engineering_lab.jpg',
  },

  // =========================
  // Electronics
  // =========================
  {
    id: 'ECE26001',

    title: 'Web Development Workshop',
    category: 'Workshops',
    branch: 'ECE',

    date: 'September 15, 2026',
    time: '10:00 AM - 1:00 PM',
    venue: 'Computer Lab, GBPIET',
    organizedBy: 'IEEE GBPIET Student Branch',

    reportAuthor: 'Chandan Singh',

    overview:
      'A technical workshop focused on modern web development technologies and practical application development.',

    description:
      'The workshop introduced students to modern web development concepts through theoretical explanations and practical discussions.',

    keyDiscussion: [
      'Introduction to modern web development technologies.',
      'Understanding the structure of web applications.',
      'Frontend development using HTML, CSS and JavaScript.',
      'Responsive web design principles.',
      'Deployment and development workflows.',
    ],

    studentsPresent: ['Chandan Singh', 'Rahul Sharma', 'Aman Rawat', 'Priya Bisht', 'Aditya Negi'],

    image: '/images/hero_engineering_lab.jpg',
  },
];
