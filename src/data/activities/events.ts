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
