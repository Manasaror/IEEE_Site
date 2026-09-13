export type Activity = {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  longDescription: string;
  image: string;
  branch: string;
};

export const activities: Activity[] = [
  // =========================
  // CSE
  // =========================
  {
    id: 'himalayan-techhacks',
    title: 'Himalayan TechHacks',
    category: 'Competitions',
    date: 'October 2026',
    description:
      'A national hardware and software hackathon for student innovators.',
    longDescription:
      'Himalayan TechHacks is a national-level hardware and software hackathon designed to bring together student innovators who want to turn ideas into practical solutions. Participants can work on real-world problems, experiment with technology, collaborate with teammates, and develop working prototypes within a competitive environment.',
    image: '/images/hero_engineering_lab.jpg',
    branch: 'CSE',
  },

  {
    id: 'web-development-workshop',
    title: 'Web Development Workshop',
    category: 'Workshops',
    date: 'September 2026',
    description:
      'A hands-on workshop covering modern web development and application design.',
    longDescription:
      'The Web Development Workshop provides students with practical exposure to modern web technologies and application design. The activity focuses on understanding how websites and web applications are structured, developed, and brought together into usable digital products.',
    image: '/images/about_engineering_bench.jpg',
    branch: 'CSE',
  },

  {
    id: 'campus-connect',
    title: 'Campus Connect',
    category: 'Projects',
    date: 'Ongoing',
    description:
      'A student-built platform designed to connect students, clubs and campus activities.',
    longDescription:
      'Campus Connect is a student-built platform intended to bring students, clubs, and campus activities together in one place. The project provides an opportunity for students to work on a practical software product while exploring application design, collaboration, and problem solving.',
    image: '/images/project_rover.jpg',
    branch: 'CSE',
  },

  // =========================
  // CSE-AIML
  // =========================
  {
    id: 'ai-innovation-challenge',
    title: 'AI Innovation Challenge',
    category: 'Competitions',
    date: 'November 2026',
    description:
      'A competitive challenge where students build innovative AI-powered solutions.',
    longDescription:
      'The AI Innovation Challenge encourages students to explore artificial intelligence through practical problem solving. Participants can develop AI-powered ideas and experiment with data, models, and intelligent systems while competing with other student teams.',
    image: '/images/project_rover.jpg',
    branch: 'CSE-AIML',
  },

  {
    id: 'machine-learning-bootcamp',
    title: 'Machine Learning Bootcamp',
    category: 'Workshops',
    date: 'September 2026',
    description:
      'An intensive introduction to machine learning, datasets and model development.',
    longDescription:
      'The Machine Learning Bootcamp introduces students to the fundamentals of machine learning, including datasets, model development, experimentation, and evaluation. The activity is designed to provide a practical starting point for students interested in building intelligent applications.',
    image: '/images/hero_engineering_lab.jpg',
    branch: 'CSE-AIML',
  },

  {
    id: 'smart-vision',
    title: 'Smart Vision',
    category: 'Projects',
    date: 'Ongoing',
    description:
      'An AI-based computer vision project developed by student researchers.',
    longDescription:
      'Smart Vision is an AI-based computer vision project developed by student researchers. The project explores how visual information can be processed and interpreted by intelligent systems, providing students with practical experience in computer vision and AI development.',
    image: '/images/about_engineering_bench.jpg',
    branch: 'CSE-AIML',
  },

  // =========================
  // Biotechnology
  // =========================
  {
    id: 'biotech-innovation-challenge',
    title: 'BioTech Innovation Challenge',
    category: 'Competitions',
    date: 'October 2026',
    description:
      'A competition encouraging students to develop innovative biotechnology solutions.',
    longDescription:
      'The BioTech Innovation Challenge encourages students to approach biotechnology problems through innovation and collaborative problem solving. Participants can explore ideas that connect biological concepts with practical technological applications.',
    image: '/images/hero_engineering_lab.jpg',
    branch: 'Biotechnology',
  },

  {
    id: 'molecular-biology-workshop',
    title: 'Molecular Biology Workshop',
    category: 'Workshops',
    date: 'August 2026',
    description:
      'An interactive workshop exploring modern molecular biology techniques.',
    longDescription:
      'The Molecular Biology Workshop provides students with an interactive introduction to modern molecular biology techniques. It is designed to encourage practical understanding and exploration of concepts used in contemporary biological research.',
    image: '/images/about_engineering_bench.jpg',
    branch: 'Biotechnology',
  },

  {
    id: 'bioresearch-initiative',
    title: 'BioResearch Initiative',
    category: 'Projects',
    date: 'Ongoing',
    description:
      'A collaborative student research initiative focused on biotechnology applications.',
    longDescription:
      'The BioResearch Initiative is a collaborative student research activity focused on exploring biotechnology applications. Students can work together to investigate ideas, develop research skills, and explore potential applications of biotechnology.',
    image: '/images/project_rover.jpg',
    branch: 'Biotechnology',
  },

  // =========================
  // Electrical
  // =========================
  {
    id: 'powertech-challenge',
    title: 'PowerTech Challenge',
    category: 'Competitions',
    date: 'October 2026',
    description:
      'A technical competition focused on electrical systems and innovative power solutions.',
    longDescription:
      'The PowerTech Challenge gives students an opportunity to work with electrical systems and explore innovative approaches to power-related problems. The competition emphasizes technical thinking, experimentation, and practical engineering.',
    image: '/images/project_rover.jpg',
    branch: 'Electrical',
  },

  {
    id: 'pcb-design-masterclass',
    title: 'PCB Design Masterclass',
    category: 'Workshops',
    date: 'August 2026',
    description:
      'Practical learning in PCB layout and fabrication workflows.',
    longDescription:
      'The PCB Design Masterclass introduces students to printed circuit board design, layout, and fabrication workflows. The activity provides a practical environment for understanding how electronic designs can be translated into physical circuit boards.',
    image: '/images/about_engineering_bench.jpg',
    branch: 'Electrical',
  },

  {
    id: 'smart-energy-grid',
    title: 'Smart Energy Grid',
    category: 'Projects',
    date: 'Ongoing',
    description:
      'A student project exploring intelligent energy management and monitoring systems.',
    longDescription:
      'Smart Energy Grid is a student project exploring intelligent approaches to energy management and monitoring. The project gives students an opportunity to investigate how technology can be used to understand and manage energy systems more effectively.',
    image: '/images/hero_engineering_lab.jpg',
    branch: 'Electrical',
  },

  // =========================
  // Electronics
  // =========================
  {
    id: 'embedded-systems-challenge',
    title: 'Embedded Systems Challenge',
    category: 'Competitions',
    date: 'November 2026',
    description:
      'A hands-on competition challenging students to design innovative embedded systems.',
    longDescription:
      'The Embedded Systems Challenge gives students a hands-on environment for designing and developing embedded systems. Participants can explore the interaction between hardware and software while solving technical problems through practical implementation.',
    image: '/images/hero_engineering_lab.jpg',
    branch: 'Electronics',
  },

  {
    id: 'iot-development-workshop',
    title: 'IoT Development Workshop',
    category: 'Workshops',
    date: 'September 2026',
    description:
      'Learn how sensors, microcontrollers and cloud systems work together in IoT.',
    longDescription:
      'The IoT Development Workshop introduces students to the components of connected systems, including sensors, microcontrollers, communication, and cloud-based systems. The activity focuses on understanding how these components work together to create IoT applications.',
    image: '/images/about_engineering_bench.jpg',
    branch: 'Electronics',
  },

  {
    id: 'smart-automation',
    title: 'Smart Automation',
    category: 'Projects',
    date: 'Ongoing',
    description:
      'An electronics project focused on intelligent automation and connected devices.',
    longDescription:
      'Smart Automation is an electronics project focused on intelligent automation and connected devices. Students can explore how electronic components and control logic can be combined to create systems capable of performing automated tasks.',
    image: '/images/project_rover.jpg',
    branch: 'Electronics',
  },
];