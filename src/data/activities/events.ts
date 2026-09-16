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
    id: 'AIML-development-workshop',
    title: 'AIML Development Workshop',
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
  {
  id: 'earths-micro-batteries',
  title: "Earth's Micro Batteries",
  category: 'Workshops',
  date: '29 April 2026',
  description: 'A technical session focused on Earth-inspired micro batteries and their applications.',
  longDescription: `This event introduces students to the concept of micro batteries and explores their applications in modern technology.`,
  image: '/images/earths-micro-batteries.jpeg',
  branch: 'Biotechnology',
},
  {
  id: 'introductory-meet-first-year-2024-25',
  title: 'Introductory Meet for First Year Students 2024-25',
  category: 'Workshops',
  date: '10 October 2024',
  description: 'An introductory session for first-year students to learn about IEEE and its activities.',
  longDescription: `The introductory meet was organized for first-year students to familiarize them with IEEE, its objectives, student activities, and opportunities for technical and professional development.`,
  image: '/images/introductory-meet-2024-25.png',
  branch: 'Biotechnology',
},
{
  id: 'interview-ieee-recruitment',
  title: 'Interview for IEEE Recruitment',
  category: 'Competitions',
  date: '26 August 2024',
  description: 'An interview session conducted as part of the IEEE student recruitment process.',
  longDescription: `The IEEE recruitment interview provides students with an opportunity to interact with the IEEE team and participate in the selection process for joining the student branch.`,
  image: '/images/recruitment-ieee.jpeg',
  branch: 'Biotechnology',
},
{
  id: 'ieee-introductory-meet',
  title: 'IEEE Introductory Meet',
  category: 'workshops',
  date: '6 December 2023',
  description: 'An introductory session to familiarize students with IEEE and its student branch activities.',
  longDescription: `The IEEE Introductory Meet provides students with an overview of IEEE, its objectives, student activities, and the opportunities available through participation in the IEEE student branch.`,
  image: '/images/ieee-introductory-meet.png',
  branch: 'Biotechnology',
},
{
  id: 'ieee-recruitment-session',
  title: 'IEEE Recruitment Session',
  category: 'Workshops',
  date: '14 October 2023',
  description: 'A recruitment session introducing students to the IEEE student branch and its activities.',
  longDescription: `The IEEE Recruitment Session was organized to introduce students to the IEEE student branch, its activities, and the opportunities available to students through active participation.`,
  image: '/images/interview.jpeg',
  branch: 'Biotechnology',
},
{
  id: 'food-festival-rasyaan',
  title: 'Food Festival - Rasyaan',
  category: 'Competitions',
  date: '23 September 2022',
  description: 'A food festival organized to bring students together through food, creativity, and participation.',
  longDescription: `Rasyaan is a food festival that provides students with an opportunity to showcase their creativity, culinary skills, and teamwork while enjoying a fun and engaging campus activity.`,
  image: '/images/rasyaan.png',
  branch: 'Biotechnology',
},
{
  id: 'tree-plantation-drive',
  title: 'Tree Plantation Drive',
  category: ' Projects',
  date: '5 June 2022',
  description: 'A tree plantation drive organized to promote environmental awareness and sustainability.',
  longDescription: `The Tree Plantation Drive encouraged students to actively participate in environmental conservation and highlighted the importance of trees, green spaces, and sustainable practices.`,
  image: '/images/tree-plantation.png',
  branch: 'Biotechnology',
},
{
  id: 'science-day-celebration',
  title: 'Science Day Celebration',
  category: 'Workshops',
  date: '28 February 2022',
  description: 'A celebration highlighting the importance of science, innovation, and scientific thinking.',
  longDescription: `The Science Day Celebration brought students together to recognize the role of science and innovation and to encourage curiosity, learning, and scientific thinking.`,
  image: '/images/science-day.png',
  branch: 'Biotechnology',
},
{
  id: 'gc-application-food-research',
  title: 'GC & Its Application in Food Research',
  category: 'Workshops',
  date: '26 May 2022',
  description: 'A technical session on Gas Chromatography (GC) and its applications in food research.',
  longDescription: `The session introduced students to Gas Chromatography (GC) and discussed its applications in food research, analysis, and characterization of different food components.`,
  image: '/images/GC-application.png',
  branch: 'Biotechnology',
},
{
  id: 'lignin-valorization-sustainable-future',
  title: 'Lignin Valorization – Towards a Sustainable Future',
  category: 'Workshops',
  date: '25 May 2022',
  description: 'A technical session exploring lignin valorization and its role in developing sustainable solutions.',
  longDescription: `The session focused on lignin valorization, its potential applications, and how the effective utilization of lignin can contribute to sustainable and environmentally responsible technologies.`,
  image: '/images/sustainable-feature.png',
  branch: 'Biotechnology',
},
{
  id: 'laboratory-biosafety-security',
  title: 'Laboratory Biosafety & Security',
  category: 'Workshops',
  date: '24 July 2022',
  description: 'A technical session focused on laboratory biosafety practices and security.',
  longDescription: `The session focused on the principles of laboratory biosafety and security, highlighting safe laboratory practices, responsible handling of materials, and the importance of maintaining a secure laboratory environment.`,
  image: '/images/Laboratory.png',
  branch: 'Biotechnology',
},
{
  id: 'made-in-india-covid-vaccines',
  title: 'Made in India COVID Vaccines',
  category: 'Workshops',
  date: '28 February 2022',
  description: 'A session discussing the development and significance of COVID-19 vaccines made in India.',
  longDescription: `The session explored the development of COVID-19 vaccines in India, the scientific efforts involved, and the importance of indigenous vaccine development in addressing public health challenges.`,
  image: '/images/made-in-india.png',
  branch: 'Biotechnology',
},
{
  id: 'session-13-indian-army',
  title: 'Session 13 – Indian Army',
  category: ' Workshops',
  date: '23 October 2020',
  description: 'A session providing students with insights into the Indian Army, career opportunities, and service.',
  longDescription: `Session 13 of the webinar series focused on the Indian Army and provided students with information about career opportunities, roles, and pathways for those interested in serving in the armed forces.`,
  image: '/images/indian-army.png',
  branch: 'Biotechnology',
},
{
  id: 'session-12-launch-yourself-isro',
  title: 'Session 12 – Launch Yourself in ISRO',
  category: 'Workshops',
  date: '23 October 2020',
  description: 'A session introducing students to ISRO and career opportunities in the space sector.',
  longDescription: `Session 12 of the webinar series focused on ISRO and provided students with insights into career opportunities, the space sector, and possible pathways for students interested in pursuing a career in space science and technology.`,
  image: '/images/isro.png',
  branch: 'Biotechnology',
},
{
  id: 'session-11-resume-formatting-designing',
  title: 'Session 11 – Resume Formatting and Designing',
  category: 'Workshops',
  date: '22 October 2020',
  description: 'A session focused on creating, formatting, and designing an effective professional resume.',
  longDescription: `Session 11 of the webinar series focused on resume formatting and designing, helping students understand how to present their education, skills, experience, and achievements effectively in a professional resume.`,
  image: '/images/session-11.png',
  branch: 'Biotechnology',
},
{
  id: 'session-10-role-of-communication-skills',
  title: 'Session 10 – Role of Communication Skills',
  category: 'Workshops',
  date: '22 October 2020',
  description: 'A session highlighting the importance of communication skills in academic and professional life.',
  longDescription: `Session 10 of the webinar series focused on the role of communication skills and how effective communication can help students in their academic, professional, and career development.`,
  image: '/images/session-10.png',
  branch: 'Biotechnology',
},
{
  id: 'session-9-opportunities-for-students',
  title: 'Session 9 – Opportunities for Students',
  category: 'Workshops',
  date: '22 October 2020',
  description: 'A session introducing students to various academic, professional, and career opportunities.',
  longDescription: `Session 9 of the webinar series focused on the different opportunities available to students and encouraged them to explore pathways for academic growth, skill development, and career advancement.`,
  image: '/images/session-9.png',
  branch: 'Biotechnology',
},
{
  id: 'session-8-paving-way-towards-corporate',
  title: 'Session 8 – Paving the Way Towards Corporate',
  category: 'Workshops',
  date: '21 October 2020',
  description: 'A session providing students with insights into corporate careers and professional development.',
  longDescription: `Session 8 of the webinar series focused on preparing students for the corporate world, including professional development, workplace expectations, and skills that can help students transition from academics to a professional career.`,
  image: '/images/session-8.png',
  branch: 'Biotechnology',
},
{
  id: 'session-6-india-to-usa',
  title: 'Session 6 – India to USA',
  category: 'Workshops',
  date: '21 October 2020',
  description: 'A session sharing insights about opportunities and career pathways from India to the USA.',
  longDescription: `Session 6 of the webinar series focused on the journey from India to the USA, providing students with insights into opportunities, higher education, and career pathways in the United States.`,
  image: '/images/session-6.png',
  branch: 'Biotechnology',
},
{
  id: 'session-5-life-beyond-engineering',
  title: 'Session 5 – Life Beyond Engineering',
  category: 'Workshops',
  date: '20 October 2020',
  description: 'A session exploring career and life opportunities beyond traditional engineering roles.',
  longDescription: `Session 5 of the webinar series explored possibilities beyond conventional engineering careers and encouraged students to consider diverse professional paths based on their interests, skills, and goals.`,
  image: '/images/session-5.png',
  branch: 'Biotechnology',
},
{
  id: 'session-4-opportunities-in-entrepreneurship',
  title: 'Session 4 – Opportunities in Entrepreneurship',
  category: 'Workshops',
  date: '20 October 2020',
  description: 'A session introducing students to entrepreneurship and the opportunities available for aspiring entrepreneurs.',
  longDescription: `Session 4 of the webinar series focused on entrepreneurship, helping students understand entrepreneurial opportunities, explore business ideas, and consider entrepreneurship as a potential career pathway.`,
  image: '/images/session-4.png',
  branch: 'Biotechnology',
},
{
  id: 'session-3-exploring-and-excelling-career-choices',
  title: 'Session 3 – Exploring and Excelling in Your Career Choices',
  category: 'Workshops',
  date: '20 October 2020',
  description: 'A session focused on exploring career choices and developing the skills needed for professional success.',
  longDescription: `Session 3 of the webinar series focused on helping students explore different career choices, understand their interests and strengths, and make informed decisions about their professional journey.`,
  image: '/images/session-3.png',
  branch: 'Biotechnology',
},
{
  id: 'session-2-from-engineering-to-mba',
  title: 'Session 2 – From Engineering to MBA',
  category: 'Workshops',
  date: '19 October 2020',
  description: 'A session exploring the transition from engineering to an MBA and related career opportunities.',
  longDescription: `Session 2 of the webinar series focused on the journey from engineering to an MBA, discussing higher education options, career pathways, and opportunities available to engineering students interested in management.`,
  image: '/images/session-2.png',
  branch: 'Biotechnology',
},
{
  id: 'session-1-current-scenario-career-opportunities',
  title: 'Session 1 – Current Scenario and Career Opportunities',
  category: 'Workshops',
  date: '19 October 2020',
  description: 'A session discussing the current professional scenario and career opportunities available to students.',
  longDescription: `Session 1 of the webinar series focused on the current career scenario and the opportunities available to students, helping them understand different career pathways and make informed choices about their future.`,
  image: '/images/session-a.png',
  branch: 'Biotechnology',
},
{
  id: 'campus-to-career-webinar-series',
  title: 'Campus to Career Webinar Series',
  category: 'Workshops',
  date: '19–23 October 2020',
  description: 'A webinar series focused on helping students understand career opportunities and the transition from campus to professional life.',
  longDescription: `The Campus to Career Webinar Series provides students with insights into career planning, professional development, higher education, industry opportunities, and the transition from college life to a professional career.`,
  image: '/images/campus-drive.png',
  branch: 'Biotechnology',
},
{
  id: 'teqip-iii-industrial-internship',
  title: 'TEQIP-III Industrial Internship',
  category: 'Projects',
  date: '17–28 August 2020',
  description: 'An industrial internship initiative providing students with practical exposure and professional experience.',
  longDescription: `The TEQIP-III Industrial Internship provided students with an opportunity to gain practical exposure, understand industrial practices, and develop professional skills through internship experience.`,
  image: '/images/TEQ.png',
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
  }
];