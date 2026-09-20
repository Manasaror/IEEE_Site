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
    title: 'IEEE Student Branch Meeting Report',
    category: 'Meetings',
    branch: 'CSE',
    date: 'September 10, 2026',
    time: '4:00 PM - 5:30 PM',
    venue: 'LT-04, Electrical Department',
    organizedBy: 'IEEE Student Branch',
    reportAuthor: 'Kavi Raj',
    overview: 'The meeting was organized by the final-year IEEE members for the 2nd- and 3rd-year members as part of the branch’s ongoing coordination and preparation for upcoming activities.',
    description: 'The interaction provided an opportunity for the senior members to brief the juniors on IEEE event management, responsibilities, and the practical procedures involved in organizing branch activities. It also served as a platform for assigning teams and establishing coordination for the upcoming work.',
    keyDiscussion: [
      'Proposed ideas and planning for Engineers’ Day, including the related roles assigned to members.',
      'IEEE project budget and maintenance requirements.',
      'Preparation of faculty invitations, official event mail, and certificates.',
      'Responsibilities related to SIH and Engineers’ Day were distributed among the members.'
    ],
    studentsPresent: [
      'Rachita Pant',
      'Mohit Rawat',
      'Ansh Dhamija',
      'Janmejay Pant',
      'Harsh',
      'Rohit Thapliyal',
      'Asmi Naithani',
      'Vishwas Bhatia',
      'Priyanshu Nautiyal',
      'Priyanshu Shah',
      'Suraj Khanduri',
      'Vaibhav Pokhriyal',
      'Rahul Joshi',
      'Manas Arora',
      'Naval Budhlakoti',
      'Sumit Rawat',
      'Nikhil Suyal',
      'Priyanshu Gusain',
      'Priya Maurya',
      'Ahana',
      'Aman'
    ],
    image: '/activities/CSE/CSE26001.png',
  },
  {
    id: 'CSE26002',
    title: 'IEEE Student Branch Recruitment Drive 2026',
    category: 'Recruitment',
    branch: 'CSE',
    date: 'September 6, 2026',
    time: '3:00 PM - 6:00 PM',
    venue: 'LT-04, Electrical Department',
    organizedBy: 'IEEE Student Branch',
    reportAuthor: 'Surbhi Naithani',
    overview: 'The IEEE Student Branch of GBPIET conducted its annual recruitment drive at LT-04 in the Electrical Department. The session began with the Branch Chair addressing the students and giving a basic overview of IEEE and the available posts within the society.',
    description: 'The event saw the participation of over 70 students. The recruitment process was divided into two stages. The first stage required all junior students to give a self-introduction to the existing members and fellow recruits, where they shared their skills and interests. This was followed by a one-on-one interview for each student. In the second stage, a team of members questioned students according to what was shared in their introductions, evaluating them based on their specific skills, communication, and dedication. The recruitment concluded with over 30 students being successfully shortlisted. The final results of the recruitment drive were announced on September 7, 2026.',
    keyDiscussion: [
      'Introduction to IEEE and available posts within the society.',
      'Self-introduction by junior students.',
      'Sharing of skills and interests.',
      'One-on-one interviews.',
      'Evaluation based on skills, communication, and dedication.',
      'Shortlisting of students.'
    ],
    studentsPresent: [
      'Suraj Khanduri',
      'Priyanshu Shah',
      'Priyanshu Nautiyal',
      'Sumit Rawat',
      'Priyanshu Gusain',
      'Aadarsh',
      'Nikhil Suyal',
      'Ahana',
      'Yash Saini',
      'Rahul Joshi',
      'Vaibhav Pokhriyal',
      'Manas Arora'
    ],
    image: '/activities/CSE/CSE26002.png',
  },
  {
    id: 'CSE26003',
    title: 'SQL COMPETITION',
    category: 'Competitions',
    branch: 'CSE',
    date: 'April 11, 2026',
    time: '3:00 PM - 5:00 PM',
    venue: 'Seminar Hall, ECED',
    organizedBy: 'IEEE Student Branch',
    reportAuthor: 'Priyanshu Nautiyal',
    overview: 'IEEE Student Branch organized a SQL Competition to enhance the practical understanding of participants. The competition was conducted in a structured environment, allowing students to apply the concepts and techniques introduced during the workshop.',
    description: 'The event commenced with a brief introduction by the organizing team, outlining the rules, evaluation criteria, and objectives of the competition. Participants were provided with a problem set based on real-world database scenarios, requiring the use of Data Definition Language (DDL) and Data Manipulation Language (DML) on the HACKERRANK platform. The questions were designed to test conceptual clarity, query-writing skills, and the ability to efficiently retrieve and manipulate data. During the competition, participants worked on solving SQL queries involving database creation, data insertion, filtering, sorting, and aggregation. The tasks also encouraged logical thinking and problem-solving under time constraints. The competition environment ensured fair evaluation and active engagement from all participants. The competition served as a valuable platform for participants to reinforce their learning, gain hands-on experience, and build confidence in SQL. It also highlighted the importance of practical application in mastering database management skills. Positive feedback and enthusiasm from participants reflected the success of both the workshop and the competition, encouraging the organization of similar technical events in the future.',
    keyDiscussion: [
      'SQL concepts and practical database management.',
      'Data Definition Language (DDL).',
      'Data Manipulation Language (DML).',
      'Real-world database scenarios.',
      'Database creation and data insertion.',
      'Filtering, sorting, and aggregation.',
      'Query-writing skills.',
      'Logical thinking and problem-solving under time constraints.'
    ],
    studentsPresent: [
      'Harshit Gini',
      'Vishwas Bhatia',
      'Ojasvi Thapa',
      'Harsh Sharma',
      'Suraj Khanduri',
      'Sumit Rawat',
      'Priyanshu Gusain',
      'Priyanshu Nautiyal',
      'Daksh Kandpal',
      'Aman',
      'Vikrant Kumar',
      'Nikhil Suyal',
      'Manas Arora',
      'Rashid'
    ],
    image: '/activities/CSE/CSE26003.png',
  },
  {
    id: 'CSE26004',
    title: 'SQL PRACTICE SESSION',
    category: 'Workshops',
    branch: 'CSE',
    date: 'March 27, 2026',
    time: '4:00 PM - 6:00 PM',
    venue: 'Seminar Hall, EED',
    organizedBy: 'IEEE Student Branch',
    reportAuthor: 'Priyanshu Nautiyal',
    overview: 'The IEEE Student Branch organized a SQL Practice Session at the EED Seminar Hall on March 27, 2026. The session introduced attendees to DBMS and MySQL as the primary tools for the session.',
    description: 'The session was commenced by the final year Branch Chair Jiyanshi Batra and Creative Media Head Paras Dhiman, who introduced the attendees to DBMS and MySQL as the primary tools for the session. The introductory segment covered the fundamentals of ER diagrams, database architecture, and table structure, establishing the conceptual groundwork for the hands-on work that followed. The technical segment progressed into the practical implementation of Data Definition Language (DDL), wherein a base database was created with structured tables and subsequently connected to CSV data files. Following the DDL segment, participants engaged in a practice session covering Data Manipulation Language (DML) commands, working directly with the created database to formulate and execute queries. Practice material comprising an ER diagram, relevant data files, and a set of practice questions has been shared with all attendees. All participants are advised to attempt the provided questions prior to the upcoming competition. For any doubts or clarifications regarding the material, participants may contact the session organizer directly. Interest in a follow-up session covering nested queries, joins, and advanced SQL topics has been noted; participants wishing to attend may register their interest by reaching out to the organizer.',
    keyDiscussion: [
      'DBMS and MySQL.',
      'ER diagrams.',
      'Database architecture.',
      'Table structure.',
      'Data Definition Language (DDL).',
      'Connecting databases to CSV data files.',
      'Data Manipulation Language (DML).',
      'Formulating and executing SQL queries.',
      'Nested queries, joins, and advanced SQL topics.'
    ],
    studentsPresent: [
      'Jiyanshi Batra',
      'Paras Dhiman',
      'Anurag Gupta',
      'Harshit Gini',
      'Rachita Pant',
      'Ojasvi Thapa',
      'Priyanshu Nautiyal',
      'Vaibhav Pokhriyal',
      'Rahul Joshi',
      'Daksh Kandpal',
      'Aman',
      'Nitin Rawat',
      'Nikhil Suyal',
      'Aahana',
      'Priya Maurya',
      'Yash Joshi',
      'Naval'
    ],
    image: '/activities/CSE/CSE26004.png',
  },
  {
    id: 'CSE25001',
    title: 'IOT workshop and project demonstration',
    category: 'Workshops',
    branch: 'CSE',
    date: 'November 29, 2025',
    time: '4:00 PM - 5:30 PM',
    venue: 'Seminar Room, CSED',
    organizedBy: 'IEEE Student Branch',
    reportAuthor: 'Priyanshu Nautiyal',
    overview: 'IEEE student branch representatives from the pre-final year and second year volunteers organized an IoT workshop.',
    description: 'The event commenced with a brief introduction outlining IEEE and its core objectives. The technical segment comprised a hands-on session detailing ESP32 microcontrollers, sensor integration, and real-time data processing concepts. A practical demonstration featured a functional hardware project named "air mouse", developed by the organizing team members. The workshop included a structured Q&A session where first-year students presented technical inquiries and indicated interest in future project development. The proceedings concluded with a technical quiz and the collection of student feedback regarding preferences for future events.',
    keyDiscussion: [
      'Introduction to IEEE and its core objectives.',
      'ESP32 microcontrollers.',
      'Sensor integration.',
      'Real-time data processing concepts.',
      'Practical demonstration of an air mouse project.',
      'Structured Q&A session.',
      'Technical quiz.',
      'Collection of student feedback for future events.'
    ],
    studentsPresent: [
      'Rachita Pant',
      'Rohit Mahant'
    ],
    image: '/activities/CSE/CSE25001.jpeg',
  },
  {
    id: 'CSE25002',
    title: 'UTKARSH 1.0 – Internal Hackathon (Stage 1)',
    category: 'Hackathons',
    branch: 'CSE',
    date: 'May 6, 2025',
    time: '2:00 PM - 5:00 PM',
    venue: 'CSED Seminar Hall',
    organizedBy: 'IEEE Student Branch, GBPIET',
    reportAuthor: 'Samriddhi Bhatt',
    overview: 'The IEEE Student Branch of GBPIET successfully organized the internal hackathon UTKARSH 1.0 (Stage-1) on 6th May at the CSED Seminar Hall under the theme "AI Readiness for Sustainable Development."',
    description: 'The hackathon featured active participation from four student teams: Project RAINS, Project AlertNest, Project Green City AI, and Project Sahayak, each consisting of 4 to 5 members. The teams presented their innovative AI-based solutions in front of an esteemed panel of judges: Dr. Priti Dimri, Dr. Ashish Negi, Dr. Surbhi Lingwal, and Dr. J.S. Rauthan. Judges posed insightful questions and provided valuable suggestions for improvement. The event was efficiently hosted by Jiyanshi Batra, and the atmosphere remained enthusiastic and interactive throughout. The hackathon encouraged critical thinking, innovation, and teamwork.',
    keyDiscussion: [
      'AI Readiness for Sustainable Development.',
      'Project RAINS.',
      'Project AlertNest.',
      'Project Green City AI.',
      'Project Sahayak.',
      'AI-based solutions.',
      'Project presentation and evaluation.',
      'Critical thinking, innovation, and teamwork.'
    ],
    studentsPresent: [
      'Jiyanshi Batra'
    ],
    image: '/activities/CSE/CSE25002.jpeg',
  },
  {
    id: 'CSE25003',
    title: 'Intra-college chess tournament',
    category: 'Competitions',
    branch: 'CSE',
    date: 'April 27, 2025',
    time: '4:00 PM - 6:00 PM',
    venue: 'Auditorium Premises',
    organizedBy: 'IEEE core team members',
    reportAuthor: 'Janmejay Pant, Ojasvi Thapa and Samriddhi Bhatt',
    overview: 'IEEE student branch representatives from pre-final year and second year volunteers organized an intra-college chess tournament.',
    description: 'An initial online round was conducted on chess.com and the top 8 players were selected based on their performance. To maintain fair play and encounter cheating of any sort, players had to be present on Google Meet. A final offline round was conducted in single round-robin format among the top 8 players of the previous online round. The tournament concluded successfully and the top players were decided after a final match of armageddon.',
    keyDiscussion: [
      'Online preliminary round on chess.com.',
      'Selection of the top 8 players.',
      'Fair-play monitoring through Google Meet.',
      'Offline single round-robin final.',
      'Armageddon final match.'
    ],
    studentsPresent: [
      'Paras Dhiman'
    ],
    image: '/activities/CSE/CSE25003.jpeg',
  },
  {
    id: 'CSE25004',
    title: 'A Virtual Session with Miss Shivani Pant',
    category: 'Sessions',
    branch: 'CSE',
    date: 'March 30, 2025',
    time: '09:15 PM - 10:15 PM',
    venue: 'Online (Google Meet)',
    organizedBy: 'IEEE Student Activity Cell',
    reportAuthor: 'Janmejay Pant and Ojasvi Thapa',
    overview: 'The IEEE Student Activity Cell successfully hosted an insightful online session on March 30, 2025, featuring Shivani Pant, an Engineering Manager at Plaid.',
    description: 'Shivani Pant shared her experiences and expertise on global data systems, fintech leadership, and career growth. She discussed career planning, career blueprints, and different career roles such as Software Engineer (SWE), Product Manager, Data Scientist, and Support Engineer. She emphasized building resumes through programming skills, internships, projects, and open-source contributions. She also shared her career path from BTech at IIT Allahabad to working at Amazon, Google (Tokyo & Seattle), and currently at Plaid. She provided insights into her work on Google Maps, BigQuery, and fintech innovations. The session included an interactive Q&A covering emerging technologies, AI’s impact on jobs, hands-on learning, and breaking into top tech firms.',
    keyDiscussion: [
      'Career planning and career blueprints.',
      'Software Engineer, Product Manager, Data Scientist and Support Engineer roles.',
      'Resume building through programming skills, internships and projects.',
      'Open-source contributions.',
      'Career journey through Amazon, Google and Plaid.',
      'Google Maps and BigQuery.',
      'Fintech innovation.',
      'Emerging technologies and AI’s impact on jobs.'
    ],
    studentsPresent: [
      'Jiyanshi Batra',
      'Paras Dhiman'
    ],
    image: '/activities/CSE/CSE25004.jpeg',
  },
  {
    id: 'CSE25005',
    title: 'Chatbot Designing Event',
    category: 'Workshops',
    branch: 'CSE',
    date: 'March 29, 2025',
    time: '4:00 PM - 6:00 PM',
    venue: 'LT-05, CSED',
    organizedBy: 'IEEE Student Activity Cell',
    reportAuthor: 'Samriddhi Bhatt',
    overview: 'The IEEE Student Activity Cell of GBPIET successfully organized ChatBot Challenge 2025 as an interactive hands-on workshop.',
    description: 'The event was conducted as an interactive hands-on workshop where Ojasvi guided students on how to design and develop an AI-based chatbot. Participants were introduced to the fundamentals of chatbot development, including conversational flow, response handling, and basic implementation using tools related to Natural Language Processing (NLP), APIs, and web frameworks. Students actively followed the live demonstration and created their own chatbots under guidance. The workshop provided practical exposure to conversational AI and helped students understand real-world applications such as automated assistance, customer support, and information retrieval while enhancing their technical and problem-solving skills.',
    keyDiscussion: [
      'Fundamentals of chatbot development.',
      'Conversational flow.',
      'Response handling.',
      'Natural Language Processing (NLP).',
      'APIs and web frameworks.',
      'Live chatbot development demonstration.',
      'Conversational AI applications.',
      'Automated assistance, customer support and information retrieval.'
    ],
    studentsPresent: [
      'Adeeb Arfi',
      'Ojasvi Arora',
      'Ansh Dhamija',
      'Asmi Naithani',
      'Harshit Gini',
      'Janmejay Pant',
      'Mohit Rawat',
      'Prakriti Arya',
      'Rachita Pant'
    ],
    image: '/activities/CSE/CSE25005.jpeg',
  },
  {
    id: 'CSE25006',
    title: 'Interactive speaker session with Mr. Devashish Mamgain',
    category: 'Speaker Sessions',
    branch: 'CSE',
    date: 'March 26, 2025',
    time: '4:30 PM - 5:30 PM',
    venue: 'LT-1 BTD',
    organizedBy: 'IEEE core team members',
    reportAuthor: 'Janmejay Pant and Ojasvi Thapa',
    overview: 'IEEE student branch representatives from pre-final year and second year volunteers organized an interactive question and answer session with Mr. Devashish Mamgain, CEO and Co-Founder of Kommunicate.',
    description: 'The meeting began with Mr. Devashish briefing the students on various aspects and opportunities in the tech industry and sharing his own experiences and views on the latest trends via a presentation. The discussion then proceeded with an interactive Q&A session. All the questions were answered gracefully and sincerely. The discussion concluded by congratulating him on his achievements and a great career that he has built with his hard work and persistence.',
    keyDiscussion: [
      'Opportunities in the technology industry.',
      'Latest technology trends.',
      'Entrepreneurship and industry experience.',
      'Interactive Q&A session.',
      'Career development and persistence.'
    ],
    studentsPresent: [
      'Jiyanshi Batra',
      'Paras Dhiman',
      'Muskan Singh'
    ],
    image: '/activities/CSE/CSE25006.jpeg',
  },
  {
    id: 'CSE25007',
    title: 'Workshop on basics of a simple chatbot and its implementation',
    category: 'Workshops',
    branch: 'CSE',
    date: 'March 26, 2025',
    time: '4:30 PM - 5:30 PM',
    venue: 'LT-1 BTD',
    organizedBy: 'IEEE core team members',
    reportAuthor: 'Janmejay Pant and Ojasvi Thapa',
    overview: 'IEEE student branch representatives from pre-final year and second year volunteers organized a chatbot introduction and implementation workshop.',
    description: 'The meeting began with Ms. Rachita Pant briefing the attendees about the basics, history, modern changes and market analysis of modern-day chatbots. The discussion then proceeded with a demonstration of the implementation of a simple chatbot made on DialogFlow and implemented as a Telegram bot by Ms. Ojasvi Arora. The workshop concluded with successful execution of a Telegram bot.',
    keyDiscussion: [
      'Basics and history of chatbots.',
      'Modern changes in chatbot technology.',
      'Market analysis of modern-day chatbots.',
      'DialogFlow.',
      'Implementation of a simple chatbot.',
      'Telegram bot development.'
    ],
    studentsPresent: [
      'Jiyanshi Batra',
      'Shivam Dangwal'
    ],
    image: '/activities/CSE/CSE25007.jpeg',
  },
  {
    id: 'CSE25008',
    title: 'Web Capture 2025 - Live Web Design Challenge',
    category: 'Competitions',
    branch: 'CSE',
    date: 'March 24, 2025',
    time: '11:00 AM - 5:00 PM',
    venue: 'Seminar hall, CSED',
    organizedBy: 'IEEE Student Activity Cell of GBPIET',
    reportAuthor: 'Samriddhi Bhatt',
    overview: 'The IEEE Student Activity Cell of GBPIET successfully organized Web Capture 2025, a live web design competition focused on modern UI/UX design practices.',
    description: 'Participants, working in teams of two, were presented with design themes at the beginning of the event and were tasked with building responsive, functional websites within a fixed timeframe. Evaluation parameters included originality, design aesthetics, responsiveness, technical execution, and adherence to the assigned theme. Participants utilized a wide range of web development frameworks and tools, demonstrating their versatility and proficiency in delivering quality outcomes. Web Capture 2025 served as a platform for students to showcase their design thinking, problem solving capabilities, and adaptability under time constraints.',
    keyDiscussion: [
      'Real-Time UI/UX-Based Website Design.',
      'Team-based website development.',
      'Responsive and functional website design.',
      'Originality and design aesthetics.',
      'Responsiveness and technical execution.',
      'Web development frameworks and tools.',
      'Design thinking and problem solving.',
      'Adaptability under time constraints.'
    ],
    studentsPresent: [
      'Paras Dhiman',
      'Muskan'
    ],
    image: '/activities/CSE/CSE25008.jpeg',
  },
  {
    id: 'CSE24001',
    title: 'Interactive Question and Answer session with Ms. Vrinda Gupta',
    category: 'Interactive Session',
    branch: 'CSE',
    date: 'November 16, 2024',
    time: '4:30 PM - 5:30 PM',
    venue: 'Seminar Hall, CSED',
    organizedBy: 'IEEE core team members',
    reportAuthor: 'Janmejay Pant and Ojasvi Thapa',
    overview: 'IEEE student branch representatives from pre-final year and second year volunteers organized an interactive question and answer session with Ms. Vrinda Gupta (Ex. Microsoft SDE, current Google SDE).',
    description: 'The meeting began with the introduction of Ms. Vrinda Gupta and her achievements in the tech industry. The discussion then proceeded with an interactive Q&A session where questions submitted by various students prior to the event and during the event were put before her. All the questions were answered gracefully and sincerely. The discussion concluded by congratulating her on her achievements and a great career that she has built with her hard work and persistence.',
    keyDiscussion: [
      'Interactive question and answer session with Ms. Vrinda Gupta.',
      'Discussion about her achievements in the technology industry.',
      'Questions submitted by students before and during the event.',
      'Career insights and professional experiences.',
      'Interaction between students and an industry professional.'
    ],
    studentsPresent: [
      'Kritesh Purohit',
      'Khushi Lingwal',
      'Divyanshi Naithani',
      'Ananya Chauhan',
      'Paras Dhiman',
      'Akriti Chauhan'
    ],
    image: '/activities/CSE/CSE24001.jpeg',
  },
  {
    id: 'CSE24002',
    title: 'Introductory Meet for First Year Students 2024-25',
    category: 'Meet',
    branch: 'CSE',
    date: 'October 10, 2024',
    time: '4:00 PM - 5:00 PM',
    venue: 'LT-6, CSED',
    organizedBy: 'IEEE core team members',
    reportAuthor: 'Janmejay Pant and Ojasvi Thapa',
    overview: 'IEEE student branch representatives from pre-final year and second year volunteers organized an introductory meeting for the newly admitted first year students.',
    description: 'The meeting began with the introduction of all the current IEEE members present. The discussion then proceeded with the members introducing the organization IEEE and various opportunities and benefits associated with it. The discussion concluded with a description of the IEEE GBPIET Student Branch, its various activities and future plans.',
    keyDiscussion: [
      'Introduction of IEEE organization.',
      'Opportunities and benefits associated with IEEE.',
      'Introduction to IEEE GBPIET Student Branch.',
      'IEEE student branch activities.',
      'Future plans of the student branch.'
    ],
    studentsPresent: [
      'Kritesh Purohit',
      'Nitin Goswami',
      'Asmi Naithani',
      'Rachita Pant',
      'Prakriti Arya',
      'Mohit Rawat'
    ],
    image: '/activities/CSE/CSE24002.jpeg',
  },
  {
    id: 'CSE24003',
    title: 'Workshop on Open-Source Contribution and Freelancing',
    category: 'Workshops',
    branch: 'CSE',
    date: 'September 8, 2024',
    time: '11:00 AM - 12:30 PM',
    venue: 'Seminar Hall, CSED',
    organizedBy: 'IEEE Student Branch',
    reportAuthor: 'Janmejay Pant and Ojasvi Thapa',
    overview: 'A workshop on open-source contribution and freelancing was organized by the IEEE Student Branch.',
    description: 'The session began with an introductory PowerPoint presentation by Rachita Pant and Prakriti Arya on open source and freelancing respectively. Both the volunteers briefed the students on how to get started and its benefits. The session was hosted by Tejas Chhabra, who shared his experiences on freelancing and open-source software. He also shared his exposure related to GitHub and LinkedIn. At the end of the session, doubts raised by the students were answered.',
    keyDiscussion: [
      'Introduction to open-source contribution.',
      'Introduction to freelancing.',
      'How to get started with open source and freelancing.',
      'Benefits of open-source contribution.',
      'Freelancing experiences.',
      'GitHub and LinkedIn.',
      'Question and answer session.'
    ],
    studentsPresent: [
      'Jiyanshi Batra',
      'Aakriti Chauhan',
      'Rakshit Pant',
      'Divyanshi Naithani',
      'Ananya Chauhan',
      'Vanshika Painuly',
      'Sneha Saraswat',
      'Shivam Dangwal'
    ],
    image: '/activities/CSE/CSE24003.jpeg',
  },
  {
    id: 'CSE24004',
    title: 'SIH Internal Hackathon 2024',
    category: 'Hackathons',
    branch: 'CSE',
    date: 'September 4-5, 2024',
    time: '10:00 AM - 1:00 PM',
    venue: 'Seminar Room, ECED',
    organizedBy: 'IEEE Student Chapter',
    reportAuthor: 'IEEE Student Chapter',
    overview: 'The SIH Internal Hackathon 2024 was organized by the IEEE Student Branch GBPIET as a two-day programme.',
    description: 'There were a total of 24 teams from the college registered for the internal hackathon. The hackathon was scheduled from September 4th to September 5th. It started at 10:00 AM wherein teams were to present their PowerPoint presentations. The teams were already made aware of the rules and regulations to be followed. Judges from different fields of expertise were present. After each presentation, the judges asked questions related to the problem statement and the project domains chosen. Simultaneously, the teams were awarded marks according to the specified judging criteria. The participating teams then awaited the results which were released on September 6th.',
    keyDiscussion: [
      'Internal Hackathon 2024.',
      'Participation of 24 teams from the college.',
      'PowerPoint project presentations.',
      'Rules and regulations of the hackathon.',
      'Evaluation by judges from different fields.',
      'Problem statements and project domains.',
      'Evaluation according to specified judging criteria.'
    ],
    studentsPresent: [],
    image: '/activities/CSE/CSE24004.jpeg',
  },
  {
    id: 'CSE24005',
    title: 'Interview for IEEE Recruitment ("Empowering Innovation, Connecting Minds")',
    category: 'Recruitment',
    branch: 'CSE',
    date: 'August 26, 2024',
    time: '2:30 PM - 5:40 PM',
    venue: 'LT-03, BTED',
    organizedBy: 'IEEE (Student Chapter)',
    reportAuthor: 'Akriti Chauhan and Vanshika Painuly',
    overview: 'An interview session was organized for IEEE recruitment under the theme "Empowering Innovation, Connecting Minds".',
    description: 'The session began with the members introducing themselves and their desired posts. There was a briefing about the various positions and their significance in efficient functioning of the club. The students were then asked to introduce themselves on paper and mention their desired position, skillset and why they were suitable for the position.',
    keyDiscussion: [
      'Introduction of IEEE recruitment positions.',
      'Significance of different positions in the club.',
      'First round of interviews in groups of four.',
      'Discussion about desired positions and contributions towards the club.',
      'Second round of interviews.',
      'Candidate performance feedback from the Core Team.'
    ],
    studentsPresent: [],
    image: '/activities/CSE/CSE24005.jpeg',
  },
  {
    id: 'CSE24006',
    title: 'Future Trek',
    category: 'Seminar',
    branch: 'CSE',
    date: 'February 25, 2024',
    time: '11:00 AM - 1:00 PM',
    venue: 'LT-3, Department of Computer Science',
    organizedBy: 'IEEE (Student Branch)',
    reportAuthor: 'IEEE Student Branch',
    overview: 'The "Future Trek" event hosted at the institution aimed to provide students with valuable guidance on upcoming trends in B.Tech, particularly focusing on placements and GATE examinations.',
    description: 'The event featured motivational speeches by Tejas Chhabra, Tanishka Petwal and Vivek Naithani. Throughout the speeches, students were enlightened about the evolving landscape of the tech industry and the importance of staying abreast of future trends. Special emphasis was placed on the significance of placements and the GATE exam in shaping students’ career trajectories.',
    keyDiscussion: [
      'Upcoming trends in B.Tech.',
      'Placement opportunities.',
      'GATE examination.',
      'Evolving technology industry.',
      'Importance of continuous learning.',
      'Career planning and professional development.'
    ],
    studentsPresent: [
      'Ananya Chauhan',
      'Khushi Lingwal',
      'Kritesh Purohit',
      'Nutan Senwal',
      'Shrishti',
      'Vibha Bora',
      'Divyanshi Naithani'
    ],
    image: '/activities/CSE/CSE24006.jpeg',
  },
  {
    id: 'CSE24007',
    title: 'IEEE Workshop on "Introduction of GitHub"',
    category: 'Workshops',
    branch: 'CSE',
    date: 'February 12, 2024',
    time: '4:00 PM',
    venue: 'LS, CSE Department',
    organizedBy: 'IEEE Student Branch',
    reportAuthor: 'IEEE Student Branch',
    overview: 'The workshop was conducted on 12 February 2024 to introduce first-year and second-year students to GitHub software.',
    description: 'It was an open workshop for all students of first and second year of any branch. The record of participation was collected with the help of a Google Form that was circulated with the poster a day before the event was scheduled.',
    keyDiscussion: [
      'Introduction to GitHub.',
      'GitHub software and its uses.',
      'Participation of first-year students.',
      'Participation of second-year students.',
      'Open workshop for students of all branches.'
    ],
    studentsPresent: [
      'Kritesh Purohit',
      'Jiyanshi',
      'Asmit Rana'
    ],
    image: '/activities/CSE/CSE24007.jpeg',
  },
  {
    id: 'CSE23001',
    title: 'IEEE Introductory Meet tailored for CSE, AIML, BT and ECE students',
    category: 'Meet',
    branch: 'CSE',
    date: 'December 6, 2023',
    time: '4:00 PM - 5:15 PM',
    venue: 'LT-5, Department of Computer Science',
    organizedBy: 'IEEE (Student Branch)',
    reportAuthor: 'Akriti Chauhan and Vanshika Painuly',
    overview: 'IEEE Student Branch organized an engaging and enlightening event to introduce IEEE organization, its benefits, functioning and the reason for joining the same.',
    description: 'The event began with a comprehensive introduction to IEEE, outlining its history, mission, global reach, and significance in various technical fields. Speakers highlighted the benefits of IEEE membership, including access to cutting-edge research, networking opportunities, skill development workshops, and participation in international conferences.',
    keyDiscussion: [
      'Introduction to IEEE global organization and its history.',
      'Benefits of IEEE membership and student chapters.',
      'Overview of student branch activities, projects, and upcoming events.',
      'Interactive Q&A session on student involvement and opportunities.'
    ],
    studentsPresent: [
      'Kritesh Purohit',
      'Akriti Chauhan',
      'Vanshika Painuly',
      'Jiyanshi Batra'
    ],
    image: '/activities/CSE/CSE23001.jpeg',
  }
];