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
  image: 'public\activities\CSE\CSE26001.png',
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
  image: 'public\activities\CSE\CSE26002.png',
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
  image: 'public\activities\CSE\CSE26003.png',
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
  image: 'public\activities\CSE\CSE26004.png.jpg',
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
  image: 'public\activities\CSE\CSE25001.jpeg',
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
  image: 'public\activities\CSE\CSE25002.jpeg',
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
  image: 'public\activities\CSE\CSE25003.jpeg',
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
  image: 'public\activities\CSE\CSE25004.jpeg',
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
  image: 'public\activities\CSE\CSE25005.jpeg',
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
  image: 'public\activities\CSE\CSE25006.jpeg',
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
  image: 'public\activities\CSE\CSE25007.jpeg',
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
  image: 'public\activities\CSE\CSE25008.jpeg',
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
    overview:
        'IEEE student branch representatives from pre-final year and second year volunteers organized an interactive question and answer session with Ms. Vrinda Gupta (Ex. Microsoft SDE, current Google SDE).',
    description:
        'The meeting began with the introduction of Ms. Vrinda Gupta and her achievements in the tech industry. The discussion then proceeded with an interactive Q&A session where questions submitted by various students prior to the event and during the event were put before her. All the questions were answered gracefully and sincerely. The discussion concluded by congratulating her on her achievements and a great career that she has built with her hard work and persistence.',
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
    image: 'public\activities\CSE\CSE24001.jpeg',
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
    overview:
        'IEEE student branch representatives from pre-final year and second year volunteers organized an introductory meeting for the newly admitted first year students.',
    description:
        'The meeting began with the introduction of all the current IEEE members present. The discussion then proceeded with the members introducing the organization IEEE and various opportunities and benefits associated with it. The discussion concluded with a description of the IEEE GBPIET Student Branch, its various activities and future plans.',
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
    image: 'public\activities\CSE\CSE24002.jpeg',
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
    overview:
        'A workshop on open-source contribution and freelancing was organized by the IEEE Student Branch.',
    description:
        'The session began with an introductory PowerPoint presentation by Rachita Pant and Prakriti Arya on open source and freelancing respectively. Both the volunteers briefed the students on how to get started and its benefits. The session was hosted by Tejas Chhabra, who shared his experiences on freelancing and open-source software. He also shared his exposure related to GitHub and LinkedIn. At the end of the session, doubts raised by the students were answered.',
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
    image: 'public\activities\CSE\CSE24003.jpeg',
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
    overview:
        'The SIH Internal Hackathon 2024 was organized by the IEEE Student Branch GBPIET as a two-day programme.',
    description:
        'There were a total of 24 teams from the college registered for the internal hackathon. The hackathon was scheduled from September 4th to September 5th. It started at 10:00 AM wherein teams were to present their PowerPoint presentations. The teams were already made aware of the rules and regulations to be followed. Judges from different fields of expertise were present. After each presentation, the judges asked questions related to the problem statement and the project domains chosen. Simultaneously, the teams were awarded marks according to the specified judging criteria. The participating teams then awaited the results which were released on September 6th.',
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
    image: 'public\activities\CSE\CSE24004.jpeg',
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
    overview:
        'An interview session was organized for IEEE recruitment under the theme "Empowering Innovation, Connecting Minds".',
    description:
        'The session began with the members introducing themselves and their desired posts. There was a briefing about the various positions and their significance in efficient functioning of the club. The students were then asked to introduce themselves on paper and mention their desired position, skillset and why they were suitable for the position.',
    keyDiscussion: [
        'Introduction of IEEE recruitment positions.',
        'Significance of different positions in the club.',
        'First round of interviews in groups of four.',
        'Discussion about desired positions and contributions towards the club.',
        'Second round of interviews.',
        'Candidate performance feedback from the Core Team.'
    ],
    studentsPresent: [],
    image: 'public\activities\CSE\CSE24005.jpeg',
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
    overview:
        'The "Future Trek" event hosted at the institution aimed to provide students with valuable guidance on upcoming trends in B.Tech, particularly focusing on placements and GATE examinations.',
    description:
        'The event featured motivational speeches by Tejas Chhabra, Tanishka Petwal and Vivek Naithani. Throughout the speeches, students were enlightened about the evolving landscape of the tech industry and the importance of staying abreast of future trends. Special emphasis was placed on the significance of placements and the GATE exam in shaping students’ career trajectories.',
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
    image: 'public\activities\CSE\CSE24006.jpeg',
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
    overview:
        'The workshop was conducted on 12 February 2024 to introduce first-year and second-year students to GitHub software.',
    description:
        'It was an open workshop for all students of first and second year of any branch. The record of participation was collected with the help of a Google Form that was circulated with the poster a day before the event was scheduled.',
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
    image: 'public\activities\CSE\CSE24007.jpeg',
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
    overview:
        'IEEE Student Branch organized an engaging and enlightening event to introduce IEEE organization, its benefits, functioning and the reason for joining the same.',
    description:
        'The event began with a comprehensive introduction to IEEE, outlining its global presence, diverse membership and the various technical fields it encompasses. A PowerPoint presentation was presented to explain it better. Various social media handles and websites were introduced to the students. The positions were also discussed with the students that would allow them to actively contribute to the IEEE community, shaping their identity as future Engineers and Technologists.',
    keyDiscussion: [
        'Introduction to IEEE organization and its benefits.',
        'IEEE global presence and diverse membership.',
        'Various technical fields covered by IEEE.',
        'Introduction to IEEE social media handles and websites.',
        'Discussion of positions in the IEEE community.',
        'Opportunities for students to contribute to IEEE.'
    ],
    studentsPresent: [
        'Abhishekh Lakhera',
        'Jiyanshi Batra',
        'Akshita Nautiyal',
        'Kritesh',
        'Ashmit',
        'Khushi Lingwal',
        'Nitin Goswami',
        'Divyanshi Naithani'
    ],
    image: 'public\activities\CSE\CSE23001.webp',
},

{
    id: 'CSE23002',
    title: 'Coding Competition',
    category: 'Competitions',
    branch: 'CSE',
    date: 'October 29, 2023',
    time: 'Not specified',
    venue: 'Seminar Room, CSE Department',
    organizedBy: 'Department of Computer Science IEEE Committee',
    reportAuthor: 'Department of Computer Science IEEE Committee',
    overview:
        'The Department of Computer Science IEEE committee organized a Coding Competition for the students of first, second and third year on October 29, 2023.',
    description:
        'The event aimed to promote coding skills and foster interest in programming among the participants. The competition was focused on Data Structures and consisted of different levels of coding challenges, including real life problems. The competition was conducted online on HackerRank platform. The competition was for beginners and intermediate coders. The event witnessed a great turnout of enthusiastic coders from different branches and semesters. The first three winners were awarded with coupons and certificates of excellence. All the participants were given certificates of participation. The event was a successful and memorable one that achieved its objective and showcased the talent and potential of the students.',
    keyDiscussion: [
        'Promotion of coding skills and interest in programming.',
        'Data Structures based coding challenges.',
        'Different levels of coding challenges including real life problems.',
        'Online competition conducted on HackerRank.',
        'Participation of beginners and intermediate coders.',
        'Awards and certificates for winners and participants.'
    ],
    studentsPresent: [
        'Tanishka Petwal',
        'Tejas Chhabra',
        'Khushi Lingwal',
        'Jiyanshi Batra',
        'Divyanshi Naithani',
        'Muskan Singh',
        'Kritesh Purohit'
    ],
    image: 'public\activities\CSE\CSE23002.webp',
},

{
    id: 'CSE23003',
    title: 'Visit to Government Primary School',
    category: 'Social Outreach',
    branch: 'CSE',
    date: 'May 12, 2023',
    time: 'Not specified',
    venue: 'Ghurdaun',
    organizedBy: 'Department of Computer Science IEEE Committee',
    reportAuthor: 'Department of Computer Science IEEE Committee',
    overview:
        'The team had the privilege of visiting the nearest government primary school to engage with the students of classes 6, 7 and 8.',
    description:
        'The objective of the visit was to provide valuable information about potential career options and prestigious educational institutions, including RIMC, Navodaya Vidyalaya and Sainik School. Additionally, the team aimed to motivate the students towards academic excellence, sports participation and all-around development. Multiple activities were conducted for the students including presentation on career options, introduction to RIMC, overview of Navodaya Vidyalaya, information about Sainik School, motivational talk, sports and extracurricular activities. The visit to the government primary school was a resounding success in terms of achieving the objectives.',
    keyDiscussion: [
        'Career options for school students.',
        'Introduction to RIMC.',
        'Overview of Navodaya Vidyalaya.',
        'Information about Sainik School.',
        'Motivational talk.',
        'Sports participation.',
        'Extracurricular activities.'
    ],
    studentsPresent: [
        'Parth Uniyal',
        'Shubham Bhatt',
        'Tejas Chhabra',
        'Vivek Naithani',
        'Richa Gaur',
        'Nandini',
        'Shivangi Chamoli'
    ],
    image: 'public\activities\CSE\CSE23003.webp',
},

{
    id: 'CSE23004',
    title: 'Spardha, Coding Re-write',
    category: 'Competitions',
    branch: 'CSE',
    date: 'April 22, 2023',
    time: 'Not specified',
    venue: 'Seminar Room, CSE Department',
    organizedBy: 'Department of Computer Science IEEE Committee',
    reportAuthor: 'Department of Computer Science IEEE Committee',
    overview:
        'The Coding Competition for Juniors was organized by the Department of Computer Science IEEE committee with the aim of promoting coding skills and fostering interest in programming among young participants.',
    description:
        'The competition was for beginners. It served as an excellent opportunity for participants to test their skills, learn from their peers and receive recognition for their coding prowess. The first three winners were awarded with coupons, swags and certificate.',
    keyDiscussion: [
        'Coding competition for juniors.',
        'Promotion of coding skills.',
        'Fostering interest in programming.',
        'Opportunity for beginners to test their skills.',
        'Learning from peers.',
        'Recognition and awards for winners.'
    ],
    studentsPresent: [
        'Anushka Uniyal',
        'Tanishka Petwal',
        'Tejas Chhabra',
        'Vivek Naithani'
    ],
    image: 'public\activities\CSE\CSE23004.webp',
},

{
    id: 'CSE23005',
    title: 'Gynecologist Visit',
    category: 'Awareness',
    branch: 'CSE',
    date: 'April 13, 2023',
    time: 'Not specified',
    venue: 'Seminar Room, CSE Department',
    organizedBy: 'Department of Computer Science IEEE Committee',
    reportAuthor: 'Department of Computer Science IEEE Committee',
    overview:
        'The gynecological visit aimed to promote women’s health awareness and provide access to healthcare services for the college community.',
    description:
        'The primary objectives of the visit were to educate students, faculty and staff on gynecological health, offer consultations and facilitate preventive screenings. It was specially conducted for girls’ health and delivered by Dr. Rajnandani. Topics covered included menstrual health, contraception options and common gynecological conditions. Following the seminar, a Q&A session provided an opportunity for attendees to seek expert advice. This visit proved to be a significant initiative in promoting women’s health awareness on campus.',
    keyDiscussion: [
        'Women’s health awareness.',
        'Gynecological health education.',
        'Menstrual health.',
        'Contraception options.',
        'Common gynecological conditions.',
        'Healthcare consultations and preventive screenings.',
        'Question and answer session.'
    ],
    studentsPresent: [
        'Anushka Uniyal',
        'Tanishka Petwal'
    ],
    image: 'public\activities\CSE\CSE23005.webp',
},   
 
{
  id: 'CSE22001',
  title: 'Introduction to Programming',
  category: 'Workshops',
  branch: 'CSE',
  date: 'December 4, 2022',
  time: '11:00 AM - 12:00 PM',
  venue: 'GBPIET Pauri',
  organizedBy: 'CSE Department in association with IEEE GBPIET Student Branch under IEEE UP Section',
  reportAuthor: 'Department of CSE',
  overview: 'A workshop on "Introduction to Programming" was organized by the CSE Department on 4 December, 2022 in association with IEEE GBPIET Student Branch under IEEE UP Section. The workshop introduced students to programming languages such as C, C++, Java and Python.',
  description: 'The workshop was conducted for one hour, from 11 AM to 12 PM, with around 50 students participating. It focused on the need for programming languages, their evolution, and the basics of different programming languages. The maximum number of participating students were from the CSE, AIML and ECE departments.',
  keyDiscussion: [
    'Need for programming languages.',
    'Evolution of programming languages.',
    'Basics of C programming.',
    'Basics of C++ programming.',
    'Basics of Java programming.',
    'Basics of Python programming.'
  ],
  studentsPresent: [],
  image: 'public\activities\CSE\CSE22001.jpg',
},

{
  id: 'CSE22002',
  title: 'Disaster Management: Reflections on Science, Policy and Society',
  category: 'Webinars',
  branch: 'CSE',
  date: 'September 24, 2022',
  time: '1 hour',
  venue: 'Online',
  organizedBy: 'Mumbai Campus, Centre for Disasters and Development, Jamsetji Tata School of Disaster Studies for Campus in association with IEEE GBPIET Student Branch under IEEE UP Section',
  reportAuthor: 'IEEE GBPIET Student Branch',
  overview: 'A webinar on "Disaster Management: Reflections on Science, Policy and Society" was organized by Mumbai Campus, Centre for Disasters and Development, Jamsetji Tata School of Disaster Studies for Campus on 24th September, 2022 in association with IEEE GBPIET Student Branch under IEEE UP Section.',
  description: 'It was a live online interactive session for the duration of 01 hour delivered by Prof. Janki Andharia, Chairperson - Centre for Disasters and Development, Jamsetji Tata School of Disaster Studies. The importance of collaboration between different professionals and organizations was discussed in order to prevent an effective management of disaster. This webinar helped the attendees to look into science, policy, and society and try to work towards integration and transdisciplinary. The discussion was about how disasters are rising and extreme weather events are around us all over the world and yet we find that there is a disconnect between science, policy, and society.',
  keyDiscussion: [
    'System approach: Understanding interconnections.',
    'Barriers and challenges.',
    'Collaboration between different professionals and organizations.',
    'Integration and transdisciplinary approaches.',
    'Science, policy, and society in disaster management.',
    'Rising disasters and extreme weather events.'
  ],
  studentsPresent: [],
  image: 'public\activities\CSE\CSE22002.jpg',
},

{
  id: 'CSE22003',
  title: 'DECODE',
  category: 'Competitions',
  branch: 'CSE',
  date: 'September 17, 2022',
  time: '10:00 AM - 11:30 AM',
  venue: 'GBPIET Pauri',
  organizedBy: 'CSE Department in association with IEEE GBPIET Student Branch under IEEE UP Section',
  reportAuthor: 'Department of CSE',
  overview: 'A coding competition "DECODE" was organized by the CSE Department on 17 September, 2022 in association with IEEE GBPIET Student Branch under IEEE UP Section.',
  description: 'The competition was conducted for one and a half hours, from 10 AM to 11:30 AM, with around 40 students participating. The event was organized to assess the programming skills of students in various programming languages such as C, C++, Java and Python. The maximum number of participating students were from the CSE, AIML and ECE departments.',
  keyDiscussion: [
    'Programming skills assessment.',
    'C programming.',
    'C++ programming.',
    'Java programming.',
    'Python programming.',
    'Participation from CSE, AIML and ECE departments.'
  ],
  studentsPresent: [],
  image: 'public\activities\CSE\CSE22003.jpg',
},

{
  id: 'CSE22004',
  title: 'Webinar: Preparing the Next Generation of Cloud Engineers',
  category: 'Webinars',
  branch: 'CSE',
  date: 'September 7, 2022',
  time: '45 minutes',
  venue: 'Online',
  organizedBy: 'Coursera for Campus in association with IEEE GBPIET Student Branch under IEEE UP Section',
  reportAuthor: 'IEEE GBPIET Student Branch',
  overview: 'A webinar on "Preparing the Next Generation of Cloud Engineers" was organized by Coursera for Campus on 7th September, 2022 in association with IEEE GBPIET Student Branch under IEEE UP Section.',
  description: 'The webinar was a live online interactive session of 45 minutes delivered by Coursera experts Miss Lauren Muller and Miss Aisha Lawrey. The session focused on how higher education institutions can effectively prepare students for emerging career opportunities in cloud engineering. The discussion explored the skills and hands-on experience required to excel in the field of cloud engineering.',
  keyDiscussion: [
    'Best practices for incorporating cloud skills into the curriculum.',
    'Essential skills to support career outcomes for graduates.',
    'Strategies for engaging students throughout their learning journey.',
    'Emerging career opportunities in cloud engineering.',
    'In-demand cloud skills and hands-on experience.'
  ],
  studentsPresent: [],
  image: 'public\activities\CSE\CSE22004.jpg',
},

{
  id: 'CSE22005',
  title: 'Tech Fest',
  category: 'Tech Fest',
  branch: 'CSE',
  date: 'May 29-30, 2022',
  time: 'Not specified',
  venue: 'GB Pant Institute of Engineering and Technology',
  organizedBy: 'Vinci Innovative Society in association with IEEE GBPIET Student Branch under IEEE UP Section',
  reportAuthor: 'IEEE GBPIET Student Branch',
  overview: 'The Techfest "Eureka" was successfully organized by Vinci Innovative Society for G. B. Pant Institute of Engineering and Technology on 29 and 30 May, 2022 in association with IEEE GBPIET Student Branch under IEEE UP Section.',
  description: 'The event included many technical sub-events. Four teams from seven departments participated in the event: Team 1 – Mechanical Engineering and Civil Engineering (Mech A Wars), Team 2 – Computer Science and Engineering and Artificial Intelligence and Machine Learning (TecQuilla), Team 3 – Electrical Engineering and Biotechnology (Arthra Bots), and Team 4 – Electronics and Communication Engineering (Tony Lohar). Approximately 150 students actively participated in the event, and the organizing team consisted of 20 members. The final rankings were Mech A Wars, TecQuilla, Tony Lohar, and ArthraBots.',
  keyDiscussion: [
    'Techfest "Eureka".',
    'Technical sub-events.',
    'Participation of seven departments.',
    'Mech A Wars.',
    'TecQuilla.',
    'Arthra Bots.',
    'Tony Lohar.',
    'Approximately 150 student participants.',
    'Organizing team of 20 members.',
    'Final team rankings.'
  ],
  studentsPresent: [],
  image: 'public\activities\CSE\CSE22005.jpg',
},
    
  {
    id: 'CSE20001',
    title: 'Webinar: Demystifying Professional Communication and Business Ethics',
    date: '10th October, 2020',
    time: 'Not specified',
    venue: 'Online',
    organizedBy: 'CSE, Department of Computer Science & Engineering, GBPIET Pauri, in association with IEEE GBPIET Student Branch under IEEE UP Section',
    reportAuthor: 'IEEE GBPIET Student Branch',
    overview: 'A Webinar to celebrate IEEE Day, 2020 was organized by CSE, Department of Computer Science & Engineering, GBPIET Pauri on 10th October, 2020 in association with IEEE GBPIET Student Branch under IEEE UP Section.',
    description: 'It was delivered by SmartBrains Engineers & Technologist Pvt. Ltd. Experts Mr. Naresh Yadav and Ms. S. Pandey. A total of 53 students have attended this webinar. The webinar covered confidence building, presentation skills, professional communication and business ethics.',
    keyDiscussion: [
      'Confidence building and presentation skills.',
      'Professional communication.',
      'Business ethics.',
      'How to listen, speak and write while communicating ethically.'
    ],
    studentsPresent: [],
    image: 'public\activities\CSE\CSE20001.webp',
    category: "",
    branch: ""
  },

  {
    id: 'CSE20002',
    title: 'CodeChef Contest Event',
    date: '27th September, 2020',
    time: 'Not specified',
    venue: 'GBPIET Pauri',
    organizedBy: 'CSE, Department of Computer Science & Engineering, GBPIET Pauri, in association with IEEE GBPIET Student Branch under IEEE UP Section',
    reportAuthor: 'IEEE GBPIET Student Branch',
    overview: 'CodeChef Contest Event was organized by CSE, Department of Computer Science & Engineering, GBPIET Pauri on 27th September, 2020 in association with IEEE GBPIET Student Branch under IEEE UP Section.',
    description: 'The event was organized to spread the importance of competitive programming, developing programming culture in the campus and to let students know about CodeChef platform. A total of 46 students have successfully participated in this competitive contest. A virtual Lecture was also held to help, guide, motivate and instruct the students.',
    keyDiscussion: [
      'Importance of competitive programming.',
      'Development of programming culture in the campus.',
      'Introduction to CodeChef platform.',
      'Competitive programming contest.'
    ],
    studentsPresent: [],
    image: 'public\activities\CSE\CSE20002.jpg',
    category: "",
    branch: ""
  },

  {
    id: 'CSE20003',
    title: 'Virtual IoT Workshop',
    date: '26th - 27th September, 2020',
    time: '8 hours',
    venue: 'Online',
    organizedBy: 'CSE, Department of Computer Science & Engineering, GBPIET Pauri, in association with IEEE GBPIET Student Branch under IEEE UP Section',
    reportAuthor: 'IEEE GBPIET Student Branch',
    overview: 'Virtual workshop on IoT was organized by CSE, department of Computer Science & Engineering, GBPIET Pauri during 26th to 27th September 2020 in association with IEEE GBPIET Student Branch under IEEE UP Section.',
    description: 'It was a live online interactive session on "Internet of Things (Applications & Security)" for the duration of 8 hours delivered by Ensino R&D Pvt Ltd. A total of 47 students have successfully completed the workshop.',
    keyDiscussion: [
      'Internet of Things.',
      'IoT applications and security.',
      'Automation.',
      'Arduino IDE.',
      'Relay.',
      'Electromagnetic Switch.'
    ],
    studentsPresent: [],
    image: 'public\activities\CSE\CSE20003.webp',
    category: "",
    branch: ""
  },

  {
    id: 'CSE20004',
    title: 'Microsoft Certification Program - 2020',
    date: '06th August - 02nd September, 2020',
    time: '40 to 50 hours',
    venue: 'GBPIET Pauri',
    organizedBy: 'Department of Computer Science & Engineering, GBPIET Pauri',
    reportAuthor: 'Department of Computer Science & Engineering',
    overview: 'Microsoft Certification Program - 2020 was organized by department of Computer Science & Engineering, GBPIET, Pauri from 6th August 2020 to 2nd September 2020.',
    description: 'It was a four weeks live online interactive session on "Machine Learning with Python" for the duration of 40 to 50 hours delivered by Smart Brains Pvt. Ltd. Noida. A total of 21 students have enrolled and successfully completed the training program.',
    keyDiscussion: [
      'Machine Learning with Python.',
      'Regression.',
      'Clustering.',
      'Decision Tree.',
      'Random Forest.',
      'Naive Bayes.',
      'Reinforcement Learning.'
    ],
    studentsPresent: [],
    image: 'public\activities\CSE\CSE20004.jpg',
    category: "",
    branch: ""
  },

  {
    id: 'CSE20005',
    title: 'Online International Conferencing',
    date: '26th - 27th June, 2020',
    time: 'Not specified',
    venue: 'Online',
    organizedBy: 'Department of Computer Science, Electronics & Electrical Engineering, GBPIET Pauri',
    reportAuthor: 'Department of Computer Science, Electronics & Electrical Engineering',
    overview: 'GBPIET Pauri has organized an Online International Conference on "Smart Machine Intelligence and Real-Time Computing" sponsored by TEQIP-3 during June 26-27, 2020.',
    description: 'The aim of the conference was to bring together researchers, scientists, engineers and research students in areas of Engineering and Technology, and it provides them a national forum for dissemination of original research, new ideas and practical development experiences. A total of 151 research papers were accepted out of which 116 research papers were accepted and presented in this conference.',
    keyDiscussion: [
      'Smart Machine Intelligence.',
      'Real-Time Computing.',
      'Original research.',
      'New ideas and practical development experiences.',
      'Research paper presentation.'
    ],
    studentsPresent: [],
    image: 'public\activities\CSE\CSE20005.webp',
    category: "",
    branch: ""
  },

  {
    id: 'CSE20006',
    title: 'Online Seminar',
    date: '31st May, 2020',
    time: '11:00 AM onwards',
    venue: 'Online',
    organizedBy: 'GBPIET Pauri and CORPIANS Noida',
    reportAuthor: 'Department of Computer Science & Engineering',
    overview: 'Online seminar on the topic "The Future of Programming MEAN Stacks" was conducted by GBPIET Pauri and CORPIANS Noida on 31st May 2020 from 11:00 AM onwards.',
    description: 'A total of 12 students participated in this live webinar that was delivered by Mr. Ajay Shankar, Solution Architect, CORPIANS. The webinar briefly covered important topics in the field of computer science such as MongoDB, Express JS, Angular JS and Node JS.',
    keyDiscussion: [
      'MongoDB.',
      'Express JS.',
      'Angular JS.',
      'Node JS.',
      'MEAN Stack.',
      'Future of programming.'
    ],
    studentsPresent: [],
    image: 'public\activities\CSE\CSE20006.webp',
    category: "",
    branch: ""
  },

  {
    id: 'CSE20007',

    title: 'Coursera Certification',

    date: 'April, 2020',
    time: 'Not specified',
    venue: 'Online',
    organizedBy: 'GBPIET Pauri',

    reportAuthor: 'GBPIET Pauri',

    overview: 'GBPIET Pauri has subscribed for Coursera certification in the month of April, 2020.',

    description: 'Coursera is a worldwide online learning platform founded by Stanford University which provides courses, certificates, and degrees online from world-class universities and companies. A number of courses provided by Coursera were freely available for students and faculty members from various departments for auditing and certification. A total of 365 participants including faculty members and students have enrolled for about 1662 courses.',
    keyDiscussion: [
      'Online learning through Coursera.',
      'Courses and certifications.',
      'Auditing and certification.',
      'Participation of students and faculty members.'
    ],
    studentsPresent: [],
    image: 'public\activities\CSE\CSE20007.webp',
    category: "",
    branch: ""
  },
  {
    id: 'CSE19001',

    title: 'Hackathon Events',
    category: 'Hackathons',
    branch: 'CSE',

    date: 'December 23, 2019',
    time: '10:00 AM - 5:00 PM',
    venue: 'Seminar Hall, CSED',
    organizedBy: 'Institute Innovation Cell, GBPIET Pauri',

    reportAuthor: 'Institute Innovation Cell',

    overview:
      'The Institute Innovation Cell of GBPIET Pauri organized an internal hackathon event for shortlisting interested teams for Smart India Hackathon 2020.',

    description:
      'The event was organized to provide students a platform to solve some of the pressing problems faced in daily life and to inculcate a culture of product innovation and a mindset of problem solving.',

    keyDiscussion: [
      'Internal hackathon for shortlisting teams for Smart India Hackathon 2020.',
      'Participation of teams with different problem statements.',
      'Evaluation based on novelty and complexity of the idea.',
      'Assessment of clarity, feasibility and practicability.',
      'Evaluation of sustainability, scale of impact and user experience.',
      'Shortlisting of teams for the Smart India Hackathon 2020 finale.',
    ],

    studentsPresent: [
      // Add student names if available
    ],

    image: 'public\activities\CSE\CSE19001.png',
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

    title: "Earth's Micro Batteries",
    category: 'Workshops',
    branch: 'BT',

    date: '29 April 2026',
    time: '2:00 PM - 5:00 PM',
    venue: 'Biotechnology Seminar Hall',
    organizedBy: 'IEEE in collaboration with Genesis Society of Biotechnology',

    reportAuthor: 'IEEE Student Branch',
    overview: 'A technical workshop on microbial batteries and sustainable bio-energy.',

    description:
      "The Genesis Society of Biotechnology and IEEE GBPIET organized an interactive workshop on Earth's Micro Batteries. The event included MICROVISION (E-Poster presentation) ECO-GENIUS   (Quiz), and BioSpark hands-on workshop.",
    keyDiscussion: [
      'Introduction to microbial batteries',
      'BioSpark hands-on workshop',
      'Quiz and E-poster presentation',
      'Sustainable bio-energy applications',
    ],

    studentsPresent: [
      '1st Year Biotechnology Students',
      '2nd Year Biotechnology Students',
      'Faculty Members',
    ],

    image: '/activities/BT/BT26001.jpeg',
  },
  {
    id: 'BT24001',

    title: 'Introductory Meet for First Year Students 2024-25',
    category: 'workshops',
    branch: 'BT',

    date: 'October 10, 2024',
    time: '4:00 PM - 5:30 PM',
    venue: 'LT-5, CSED',
    organizedBy: 'IEEE Core Team Members',

    reportAuthor: 'Janmejay Pant and Ojasvi Thapa',

    overview: 'An introductory meeting for newly admitted first-year students.',
    description:
      'IEEE student branch representatives organized an interactive session to introduce IEEE, its global presence, benefits, and upcoming activities to newly joined engineering students.',
    keyDiscussion: [
      'Introduction of IEEE core members',
      'Benefits and opportunities of joining IEEE',
      'Overview of GBPIET Student Branch activities',
      'Future plans and upcoming events',
    ],

    studentsPresent: ['First Year Students (ECE, EE, BT)', 'IEEE Core Team Members'],

    image: '/activities/BT/BT24001.png',
  },
  {
    id: 'BT24002',

    title: "Interview for IEEE Recruitment ('Empowering Innovation, Connecting Minds')",
    category: 'workshops',
    branch: 'BT',

    date: 'August 26, 2024',
    time: '2:30 PM - 5:00 PM',
    venue: 'Lt-03, BTED',
    organizedBy: 'IEEE Student Chapter',

    reportAuthor: 'Akriti Chauhan and Vanshrika Patni',

    overview: 'Recruitment drive to select new core team members and volunteers for IEEE.',
    description:
      'Multi-stage offline interview session conducted for interested students to evaluate their skill sets, communication, and interest in serving the IEEE student chapter.',
    keyDiscussion: [
      'Self-introduction and domain interest',
      'Skill alignment for specific club positions',
      'Problem-solving and peer interaction',
      'Queries and performance feedback',
    ],

    studentsPresent: ['Registered Student Applicants', 'IEEE Core Interview Panel'],

    image: '/activities/BT/BT24002.jpeg',
  },
  {
    id: 'BT23003',

    title: 'IEEE Introductory Meet tailored for CSE, AIML, BT and ECE students',
    category: 'workshops',
    branch: 'BT',

    date: 'December 9, 2023',
    time: '4:00 PM - 5:15 PM',
    venue: 'Lt-2, Department of Electrical Engineering',
    organizedBy: 'IEEE Student Branch',

    reportAuthor: 'Akriti Chauhan and Vanshrika Patni',

    overview: 'Detailed orientation session for engineering branches on IEEE global exposure.',
    description:
      'An engaging session focusing on how students across multiple engineering branches can leverage IEEE memberships, technical societies, and leadership roles.',
    keyDiscussion: [
      'Global network and benefits of IEEE',
      'Technical fields and domain-specific opportunities',
      'Role of student leaders in shaping IEEE community',
      'Q&A session with senior members',
    ],

    studentsPresent: ['CSE, AIML, BT, and ECE Students', 'IEEE Office Bearers'],

    image: '/activities/BT/BT23003.jpeg',
  },
  {
    id: 'BT23004',

    title: "Food Festival - 'Rasyaan'",
    category: ' workshops',
    branch: 'BT',

    date: '22nd September 2023',
    time: '10:00 AM onwards',
    venue: 'GBPIET Campus',
    organizedBy: 'Genesis Society of Biotechnology in coordination with Women Empowerment Dept.',

    reportAuthor: 'Genesis Society',

    overview:
      'A cultural and food festival promoting traditional food varieties and nutritional values.',
    description:
      'A lively event featuring cultural performances, traditional dish stalls, poster competitions, and e-competitions held to spread nutritional awareness.',
    keyDiscussion: [
      'Nutritional values of traditional Indian food',
      'Cultural ethics and heritage',
      'Poster, Food Fest, and Musical competitions',
    ],

    studentsPresent: ['GBPIET Students', 'Faculty & Invited Guests'],

    image: '/activities/BT/BT23004.png',
  },
  {
    id: 'BT22001',

    title: 'TechFest - Laboratory Safety and Security',
    category: 'projects',
    branch: 'BT',

    date: 'May 28, 2022',
    time: 'Full Day',
    venue: 'Department of Biotechnology',
    organizedBy: 'Genesis Society of Biotechnology in collab with IEEE GBPIET',

    reportAuthor: 'IEEE Student Branch',

    overview: 'A multi-event fest covering meditation, quizzes, poster presentations, and debate.',
    description:
      "Fest consisting of four key modules: Meditation Session, Quiz Competition, Poster Presentation on 'Laboratory Safety and Security', and Tech Advocate debate competition.",
    keyDiscussion: [
      'Yoga and stress management techniques',
      'Assessment of lab safety and security protocols',
      "Debate: 'Is technology a trend or foe?'",
    ],

    studentsPresent: ['Biotechnology Students', 'Department Faculty Members'],

    image: '/activities/BT/BT22001.png',
  },
  {
    id: 'BT22002',

    title: "Webinar on 'GC & its application in Food Research'",
    category: 'workshops',
    branch: 'BT',

    date: 'May 26, 2022',
    time: '10:00 AM - 1:00 PM',
    venue: 'MS Teams (Online)',
    organizedBy: 'Genesis Society of Biotechnology (SAJAG)',

    reportAuthor: 'IEEE Student Branch',

    overview: 'Technical webinar on Gas Chromatography and its applications in food analysis.',
    description:
      'Dr. Rahul Shrivastava delivered an insightful lecture covering renewable energy, lignin degradation, catalytic lignin valorization, and GC techniques in food research.',
    keyDiscussion: [
      'Principles of Gas Chromatography (GC)',
      'Applications of GC in food research and safety',
      'Lignin valorization and bio-depolymerization',
      'Future prospects in bio-energy',
    ],

    studentsPresent: ['125 Participants', '10 Faculty Members'],

    image: '/activities/BT/BT22002.png',
  },
  {
    id: 'BT22003',

    title: "Webinar on 'Lignin Valorization- Towards a Sustainable Future'",
    category: 'workshops',
    branch: 'BT',

    date: 'May 25, 2022',
    time: '11:00 AM - 12:30 PM',
    venue: 'MS Teams (Online)',
    organizedBy: 'Genesis Society of Biotechnology (SAJAG)',

    reportAuthor: 'IEEE Student Branch',

    overview: 'Webinar exploring sustainable bio-energy and lignin utilization.',
    description:
      'Dr. Piyush Parkhey (Assistant Professor, Amity University) discussed lignin structure, applications as a renewable energy source, and depolymerization techniques.',
    keyDiscussion: [
      'Lignin structure and bio-refinery concepts',
      'Catalytic lignin valorization methods',
      'Lignin as a sustainable renewable energy source',
      'Industrial scale applications',
    ],

    studentsPresent: ['115 Participants', '10 Faculty Members'],

    image: '/activities/BT/BT22003.png',
  },
  {
    id: 'BT22004',

    title: "Webinar on 'Laboratory Biosafety & Security'",
    category: 'workshops',
    branch: 'BT',

    date: 'May 24, 2022',
    time: '10:00 AM - 1:00 PM',
    venue: 'MS Teams (Online)',
    organizedBy: 'Genesis Society of Biotechnology (SAJAG)',

    reportAuthor: 'IEEE Student Branch',

    overview: 'Session focused on biological risk assessment and lab safety standards.',
    description:
      'Dr. Shraddha Chauhan (Postdoctoral Fellow, IISER Bhopal) presented on biosafety levels, microbiological techniques, biological material transport, and risk management.',
    keyDiscussion: [
      'Microbiological risk assessment methods',
      'Biological safety levels (BSL) & biosecurity implementation',
      'Transport of infectious material and risk in genetic engineering',
      'Laboratory biosecurity protocols',
    ],

    studentsPresent: ['130 Participants', '10 Faculty Members'],

    image: '/activities/BT/BT22004.png',
  },
  {
    id: 'BT22005',

    title: 'Science Day Celebration',
    category: 'workshops',
    branch: 'BT',

    date: 'February 28 - March 5, 2022',
    time: 'Online Submission',
    venue: 'Online Mode',
    organizedBy: 'SAJAG Club & IEEE Student Branch',

    reportAuthor: 'IEEE Student Branch',

    overview:
      "Online competitions held on the theme 'Science, Technology & Innovation in the time of COVID-19'.",
    description:
      'Celebration featuring Poster Making, Slogan Writing, and Logo Competition aimed at enhancing creativity, vocabulary, and technical presentation skills among students.',
    keyDiscussion: [
      'Digital poster design on pandemic tech innovations',
      'Slogan competition promoting scientific awareness',
      'Logo design competition for SAJAG club',
    ],

    studentsPresent: ['Student Participants across all Branches', 'Event Faculty Judges'],

    image: '/activities/BT/BT22005.png',
  },
  {
    id: 'BT22006',

    title: "Webinar on 'Made in India COVID vaccines: India's contribution to world'",
    category: 'workshops',
    branch: 'BT',

    date: 'February 28, 2022',
    time: '11:00 AM to 1:00 PM',
    venue: 'MS Teams (Online)',
    organizedBy: 'SAJAG Club & IEEE Student Branch',

    reportAuthor: 'IEEE Student Branch',

    overview: 'National Science Day talk highlighting vaccine research in India.',
    description:
      "Dr. Ashwin Kumar (Assistant Professor, NIIT University) discussed bioinformatics, biotechnology contributions, and India's role in global healthcare during COVID-19.",
    keyDiscussion: [
      'Bioinformatics in vaccine development',
      'Indigenous COVID-19 vaccine production processes',
      'Global impact of Indian biotechnology advancements',
    ],

    studentsPresent: ['200 Attendees overall', '10 Academic Members'],

    image: '/activities/BT/BT22006.png',
  },

  {
    id: 'BT22007',

    title: 'Tree Plantation Drive',
    category: ' projects',
    branch: 'BT',

    date: 'August 24, 2022',
    time: 'Online / Field Mode',
    venue: 'Google Meet / GBPIET Campus',
    organizedBy: 'Genesis Society of Biotechnology (Azadi Ka Amrit Mahotsav)',

    reportAuthor: 'IEEE Student Branch',

    overview: 'Webinar and tree plantation drive held under Azadi Ka Amrit Mahotsav.',
    description:
      'An initiative organized to spread awareness about environmental sustainability along with a technical talk by Mr. Subrat Sahu (Examiner of Patent and Designs) on IPR and patent filing.',
    keyDiscussion: [
      'Environmental conservation and plantation',
      'Types of Intellectual Property Rights (IPR)',
      'Patentability vs Non-patentability conditions',
      'Process of filing online patent applications',
    ],

    studentsPresent: ['90 Participants (including students)', '10 Faculty Members'],

    image: '/activities/BT/BT22007.png',
  },
  {
    id: 'BT22008',

    title: "Webinar on 'IPR awareness programme' under NIPAM",
    category: 'workshops',
    branch: 'BT',

    date: 'August 24, 2022',
    time: '11:00 AM - 12:00 PM',
    venue: 'Google Meet',
    organizedBy: 'Department of Biotechnology & NIPAM / IEEE',

    reportAuthor: 'IEEE Student Branch',

    overview: 'National Intellectual Property Awareness Mission (NIPAM) awareness session.',
    description:
      'Special IP awareness webinar delivered by Mr. Subrat Sahu, Patent Office, Government of India, focusing on trademarks, copyrights, and geographical indications.',
    keyDiscussion: [
      'National Intellectual Property Awareness Mission framework',
      'Subject matter of trademarks and copyrights',
      'Geographical Indications (GI) and trade secrets',
      'Role of IPR in boosting student research innovations',
    ],

    studentsPresent: ['Biotechnology Students', 'Department Faculty Members'],

    image: '/activities/BT/BT22008.png',
  },

  {
    id: 'BT20001',

    title: "Session 13: 'Indian Army: Where growth is a way of life'",
    category: 'workshops',
    branch: 'BT',

    date: 'September 30, 2020',
    time: 'Online Mode',
    venue: 'Microsoft Teams',
    organizedBy: 'Department of Biotechnology & Electrical Engineering',

    reportAuthor: 'IEEE Student Branch',

    overview: 'Inspirational career guidance talk by an Indian Army officer.',
    description:
      'Captain Bhanu Pratap Singh Bisht shared insights on SSB preparation, permanent vs short service commissions, and career opportunities for biotechnology engineers in armed forces.',
    keyDiscussion: [
      'Life and ethos of the Indian Army',
      'Technological requirements in defense forces',
      'SSB entry procedures and interview preparation',
      'Career growth path for M.Tech/B.Tech graduates',
    ],

    studentsPresent: ['2nd Year & Pre-final Year Students', 'Faculty Members'],

    image: '/activities/BT/BT20001.png',
  },
  {
    id: 'BT20002',

    title: "Session 12: 'Launch yourself into ISRO'",
    category: 'workshops',
    branch: 'BT',

    date: 'October 23, 2020',
    time: 'Online Mode',
    venue: 'Microsoft Teams',
    organizedBy: 'Department of Biotechnology & Electrical Engineering',

    reportAuthor: 'IEEE Student Branch',

    overview: 'Career pathway session on joining ISRO and space research organizations.',
    description:
      'Mr. Deepak Chandra Paliwal (Scientist/Engineer, UR Rao Satellite Centre) shared GATE exam strategies, interview experience, and research opportunities at ISRO.',
    keyDiscussion: [
      'GATE preparation strategy for top ranks',
      'Work culture and satellite project insights at ISRO',
      'Selection procedure for Scientist/Engineer posts',
    ],

    studentsPresent: ['Biotechnology & Electrical Engineering Students', 'Department Faculty'],

    image: '/activities/BT/BT20002.png',
  },
  {
    id: 'BT20003',

    title: "Session 11: 'Resume formatting and designing & Tips for HR interview'",
    category: 'workshopst',
    branch: 'BT',

    date: 'October 22, 2020',

    time: 'Online Mode',
    venue: 'Microsoft Teams',

    organizedBy: 'Department of Biotechnology & Electrical Engineering',

    reportAuthor: 'IEEE Student Branch',

    overview: 'Practical session on professional resume building and HR interview mastery.',
    description:
      'Ms. Sonia Patwal (HR Specialist at Accenture) guided students on impactful resume formatting, corporate culture adaptation, and answering common HR interview questions.',
    keyDiscussion: [
      'Effective resume structuring and key sections',
      "Do's and Don'ts during HR interviews",
      'Corporate expectations and soft skills requirement',
    ],

    studentsPresent: ['Engineering Students across Departments', 'Placement Cell Members'],
    image: '/activities/BT/BT20003.png',
  },
  {
    id: 'BT20004',

    title: "Session 10: 'Role of communication skills for enhancement of career'",
    category: 'workshops ',
    branch: 'BT',

    date: 'October 22, 2020',
    time: 'Online Mode',
    venue: 'Microsoft Teams',
    organizedBy: 'Department of Biotechnology & Electrical Engineering',

    reportAuthor: 'IEEE Student Branch',

    overview: 'Interactive session on effective verbal and written communication.',
    description:
      'Mr. Vinay Devrani emphasized how strong English communication, IELTS readiness, and active listening skills accelerate professional growth.',
    keyDiscussion: [
      'The communication process and barrier breakdown',
      'Importance of professional writing in corporate/academia',
      'IELTS exam preparation overview',
    ],

    studentsPresent: ['Engineering Students', 'Faculty Participants'],

    image: '/activities/BT/BT20004.png',
  },
  {
    id: 'BT20005',

    title:
      "Session 9: 'Opportunities for students with special reference to Gov. of India schemes'",
    category: 'workshops',
    branch: 'BT',

    date: 'October 21, 2020',
    time: 'Online Mode',
    venue: 'Microsoft Teams',
    organizedBy: 'Department of Biotechnology & Electrical Engineering',

    reportAuthor: 'IEEE Student Branch',

    overview: 'Session detailing government scholarships, grants, and international fellowships.',
    description:
      'Dr. Ajeet Singh (Regional Officer, AICTE) explained Government of India schemes including Pragati, Saksham, BIG (Biotechnology Ignition Grant), and MITACS Canada internships.',
    keyDiscussion: [
      'Government scholarships for SC/ST and women entrepreneurs',
      'BIG grant & funding support by BIRAC',
      'International research opportunities (MITACS Canada)',
    ],

    studentsPresent: ['Biotechnology & Engineering Students', 'Faculty Coordinators'],

    image: '/activities/BT/BT20005.png',
  },
  {
    id: 'BT20006',

    title: "Session 8: 'Paving the way towards corporate'",
    category: 'workshops',
    branch: 'BT',

    date: 'October 21, 2020',
    time: 'Online Mode',
    venue: 'Microsoft Teams',
    organizedBy: 'Department of Biotechnology & Electrical Engineering',

    reportAuthor: 'IEEE Student Branch',

    overview: 'Guidance talk on corporate transition and industry readiness.',
    description:
      'Ms. Garima Rana (Team Lead, BMTC Advisons) shared personal experiences on selecting corporate paths post-graduation, finance/ops roles, and workplace adaptiveness.',
    keyDiscussion: [
      'Choosing right career paths after M.Tech/B.Tech',
      'Self-analysis and identifying personal strengths',
      'Understanding corporate work environment',
    ],

    studentsPresent: ['Engineering Students', 'Department Staff'],

    image: '/activities/BT/BT20006.png',
  },
  {
    id: 'BT20007',

    title: "Session 6: 'India to USA: Dreams to Reality'",
    category: 'workshops',
    branch: 'BT',

    date: 'October 21, 2020',
    time: '9:30 AM',
    venue: 'Microsoft Teams',
    organizedBy: 'Department of Biotechnology & Electrical Engineering',

    reportAuthor: 'IEEE Student Branch',

    overview: 'Interactive guidance session on higher studies and careers in the USA.',
    description:
      'Ms. Monica Jain (Business Analyst, AWS) & Mr. Abhijit Kuve shared insights on pursuing MS/MBA in the USA, profile building, and navigating international admissions.',
    keyDiscussion: [
      'Planning for MS abroad and GRE/TOEFL timeline',
      'Application process for top US universities',
      'Transitioning from Engineering to Data Analytics / Business Roles',
    ],

    studentsPresent: ['Aspiring Study-Abroad Students', 'Faculty Members'],

    image: '/activities/BT/BT20007.png',
  },
  {
    id: 'BT20008',

    title: "Session 5: 'Life beyond engineering'",
    category: 'workshops',
    branch: 'BT',

    date: 'October 20, 2020',
    time: 'Online Mode',
    venue: 'Microsoft Teams',
    organizedBy: 'Department of Biotechnology & Electrical Engineering',

    reportAuthor: 'IEEE Student Branch',

    overview: 'Motivational session on clearing competitive exams and diverse career choices.',
    description:
      'Mr. Naveen Bijalwan (Junior Court Officer, Supreme Court of India & GATE AIR 190) shared his journey of hard work, cracking competitive exams, and constitutional awareness.',
    keyDiscussion: [
      'Cracking GATE and public sector exams',
      'Career options in judiciary/civil services post engineering',
      'Maintaining focus and determination during preparation',
    ],

    studentsPresent: ['Engineering Students', 'IEEE Student Branch Members'],

    image: '/activities/BT/BT20008.png',
  },
  {
    id: 'BT20009',

    title: "Session 4: 'Opportunities in entrepreneurship, technology management and IPR space'",
    category: ' workshops',
    branch: 'BT',

    date: 'October 20, 2020',
    time: 'Online Mode',
    venue: 'Microsoft Teams',
    organizedBy: 'Department of Biotechnology & Electrical Engineering',

    reportAuthor: 'IEEE Student Branch',

    overview: 'Lecture on Intellectual Property Rights (IPR) and tech commercialization.',
    description:
      'Mr. Anand Pandey (IIT Gandhinagar Research Park) discussed innovation ecosystems, patents, technology transfers, and starting tech ventures in India.',
    keyDiscussion: [
      'Why innovation and technology commercialization matter',
      'Intellectual Property Rights (IPR) fundamentals',
      'Startup incubation & research park ecosystems',
    ],

    studentsPresent: ['B.Tech & M.Tech Students', 'Faculty Coordinators'],

    image: '/activities/BT/BT20009.png',
  },
  {
    id: 'BT20010',

    title: "Session 3: 'Exploring and Excelling in your career choices'",
    category: 'workshops',
    branch: 'BT',

    date: 'October 21, 2020',
    time: 'Online Mode',
    venue: 'Microsoft Teams',
    organizedBy: 'Department of Biotechnology & Computer Science Engineering',

    reportAuthor: 'IEEE Student Branch',

    overview: 'Webinar on software engineering trends and global career pathways.',
    description:
      'Ms. Anjali Doneria (Software Engineer, Google) shared 14+ years of industry experience, covering MS in Information Systems, Data Science careers, and preparing for tech giants.',
    keyDiscussion: [
      'Building a strong profile for tech majors like Google',
      "Pursuing Master's in CS/IS in the US",
      'Handling career choices and industry expectations',
    ],

    studentsPresent: ['Biotechnology & CSE Students', 'Department Staff'],

    image: '/activities/BT/BT20010.png',
  },
  {
    id: 'BT20011',

    title: "Session 2: 'From Engineering to MBA & Beyond- a Primer on CAT & GD-PI Preparation'",
    category: 'workshops',
    branch: 'BT',

    date: 'October 20, 2020',
    time: 'Online Mode',
    venue: 'Microsoft Teams',
    organizedBy: 'Department of Biotechnology & Electrical Engineering',

    reportAuthor: 'IEEE Student Branch',

    overview: 'Strategy session on clearing CAT, GD-PI, and life after an MBA.',
    description:
      'Mr. Prateek Gahlot (MBA IIM Bangalore, BITS Pilani alumnus) explained CAT preparation techniques, resume building for B-schools, and management consulting careers.',
    keyDiscussion: [
      'CAT exam preparation methodology',
      'Cracking Group Discussions and Personal Interviews (GD-PI)',
      'Management Consulting & post-MBA career scope',
    ],

    studentsPresent: ['Engineering Students across all Years', 'IEEE Team Members'],

    image: '/activities/BT/BT20011.png',
  },
  {
    id: 'BT20012',

    title: "Session 1: 'Current scenario and career opportunities: Beginning of self-reliance'",
    category: ' workshops',
    branch: 'BT',

    date: 'October 19, 2020',
    time: 'Online Mode',
    venue: 'Microsoft Teams',
    organizedBy: 'Department of Biotechnology & Electrical Engineering',

    reportAuthor: 'IEEE Student Branch',

    overview: 'Opening session of the Campus-to-Career webinar series.',
    description:
      'Dr. Ashok Kumar Rathoure delivered the inaugural lecture on environmental biotechnology, developing entrepreneurial potential, and building self-reliance.',
    keyDiscussion: [
      'Environmental biotechnology research & publications',
      'Developing entrepreneurial mindset in technical domains',
      'Overcoming competition and career stress',
    ],

    studentsPresent: ['Department Students & Faculty', 'Series Registrants'],

    image: '/activities/BT/BT20012.png',
  },
  {
    id: 'BT20013',

    title:
      "One Week International Online Workshop / Interactive Session on 'Campus to Career- Webinar Series for Graduates'",
    category: ' Workshops',
    branch: 'BT',

    date: '19th to 23rd October 2020',
    time: 'Multi-session (10:00 AM onwards)',
    venue: 'Online Mode (Microsoft Teams)',
    organizedBy: 'Jointly Organized by Department of Biotechnology & Electrical Engineering',

    reportAuthor: 'IEEE Student Branch',

    overview:
      'A comprehensive 1-week international workshop to bridge campus learning and industry expectations.',
    description:
      'A flagship multi-session international series featuring talks from industry veterans, IAS/defence officers, study-abroad experts, and corporate HR managers across 13 dedicated tracks.',
    keyDiscussion: [
      'Global opportunities in higher education & MS in USA',
      'Corporate readiness and resume designing strategies',
      'Entrepreneurship, IPR, and start-up commercialization',
      'Preparation pathways for CAT, ISRO, and Armed Forces',
    ],

    studentsPresent: ['Over 300+ Engineering Graduates', 'Faculty across multiple departments'],

    image: '/activities/BT/BT20013.png',
  },
  {
    id: 'BT20014',

    title:
      "TEQIP-III Sponsored Two-Week Online Industrial Internship on 'Current Practices in Pharmabiotech'",
    category: ' projects',
    branch: 'BT',

    date: '17th to 28th August 2020',
    time: 'Two-Week Schedule',
    venue: 'Online Mode',
    organizedBy: 'Department of Biotechnology (TEQIP-III Sponsored)',

    reportAuthor: 'IEEE Student Branch',

    overview:
      'Two-week hands-on virtual industrial training in pharma and biotechnology practices.',
    description:
      'Industrial training program exposing students to biopharmaceutical processing, quality control/quality assurance standards, regulatory compliance, and industrial scale fermentation.',
    keyDiscussion: [
      'Current industrial practices in pharma-bioprocessing',
      'GMP (Good Manufacturing Practices) and FDA guidelines',
      'Upstream and downstream processing in pharmaceutical units',
      'Quality control techniques in modern biotechnology labs',
    ],

    studentsPresent: ['Biotechnology Undergraduate Students', 'Post-Graduate Research Scholars'],

    image: '/activities/BT/BT20014.png',
  },
  // ========================
  // Electrical
  //=========================
  {
  id: 'EE25001',

  title: 'Online Speaker Session with Our College Alumni',
  category: 'Speaker Sessions',
  branch: 'EE',

  date: 'March 22, 2025',
  time: '4:00 PM - 5:30 PM',
  venue: 'Seminar Hall, ECED',
  organizedBy: 'IEEE Core Team Members',

  reportAuthor: 'Janmejay Pant and Ojasvi Thapa',

  overview:
    'An interactive speaker session featuring college alumnus Mr. Abhishek Pandey, CEO of Deepaarogya AI, who shared insights from his entrepreneurship journey and career experiences.',

  description:
    'The session began with the current second-year volunteer and host, Harshit Giri, addressing the participants and introducing the programme. Mr. Abhishek Pandey, CEO of Deepaarogya AI and a college alumnus, joined the session online. The host provided a brief introduction to his entrepreneurial journey and accomplishments. The session was interactive and engaging, with students actively participating in the discussion. Towards the end, the speaker addressed questions and doubts raised by the students. The session concluded with congratulations to Mr. Abhishek Pandey on his achievements and career journey built through hard work and persistence.',

  keyDiscussion: [
    'Introduction to the speaker and his entrepreneurial journey.',
    'Career experiences and accomplishments of college alumnus Mr. Abhishek Pandey.',
    'Entrepreneurship and professional growth insights.',
    'Interactive discussion with students.',
    'Questions and doubts addressed by the speaker.',
    'Lessons from the speaker’s career journey and persistence.',
  ],

  studentsPresent: [
    'Jiyanshi Batra',
    'Harshit Giri',
    'Harsh Sharma',
    'Anurag Gupta',
    'Janmejay Pant',
    'Rohit Mahant',
    'Ojasvi Thapa',
  ],

  image: '/activities/EE/EE25001.jpeg',
},
{
  id: 'EE24002',

  title: 'Introductory Meet for First Year Students 2024-25',

  category: 'Introductory Meets',

  branch: 'EE',

  date: 'October 10, 2024',

  time: '4:00 PM - 5:00 PM',

  venue: 'LT-6, CSED',

  organizedBy: 'IEEE Core Team Members',

  reportAuthor: 'Janmejay Pant and Ojasvi Thapa',

  overview:

    'An introductory meeting organized for newly admitted first-year students to familiarize them with IEEE, its opportunities and benefits, and the activities of the IEEE GBPIET Student Branch.',

  description:

    'IEEE Student Branch representatives from the pre-final year and second-year volunteers organized an introductory meeting for newly admitted first-year students. The meeting began with introductions of the current IEEE members present. The discussion then introduced students to IEEE and highlighted various opportunities and benefits associated with the organization. The session concluded with an overview of the IEEE GBPIET Student Branch, its activities, and future plans. A total of 82 students from the ECE, EE, and BT branches attended the meet.',

  keyDiscussion: [

    'Introduction of current IEEE Student Branch members.',

    'Introduction to IEEE and its purpose.',

    'Opportunities and benefits associated with IEEE membership.',

    'Overview of the IEEE GBPIET Student Branch.',

    'Activities conducted by the IEEE GBPIET Student Branch.',

    'Future plans and initiatives of the student branch.',

  ],

  studentsPresent: [

    '82 students from ECE, EE, and BT branches',

  ],

  image: '/activities/EE/EE24001.webp',

},
{
  id: 'EE24003',

  title: 'SIH Internal Hackathon 2024',

  category: 'Hackathons',

  branch: 'EE',

  date: 'September 4-5, 2024',

  time: '10:00 AM - 1:00 PM',

  venue: 'Seminar Room (ECED)',

  organizedBy: 'IEEE Student Chapter',


  reportAuthor: 'IEEE Student Chapter',

  overview:

    'A two-day internal hackathon organized as part of the Smart India Hackathon initiative, providing students with an opportunity to present solutions based on selected problem statements and project domains.',

  description:

    'The SIH Internal Hackathon 2024 was organized by the IEEE Student Branch GBPIET as a two-day programme from September 4 to September 5, 2024. A total of 24 teams from the college registered for the internal hackathon. The event began at 10:00 AM with teams presenting their PowerPoint presentations based on their selected problem statements and project domains. The participants were briefed about the rules and regulations to be followed. Judges from different fields of expertise evaluated the teams and asked questions related to their problem statements and project domains. Marks were awarded according to the specified judging criteria. The participating teams then awaited the results, which were released on September 6, 2024.',

  keyDiscussion: [

    'Presentation of solutions by participating teams.',

    'Problem statements and project domains selected by the teams.',

    'Rules and regulations of the internal hackathon.',

    'Evaluation by judges from different fields of expertise.',

    'Questions and discussions regarding the proposed projects.',

    'Assessment based on the specified judging criteria.',

    'Announcement of the hackathon results on September 6, 2024.',

  ],

  studentsPresent: [

    '24 participating teams from GBPIET',

  ],

  image: '/activities/ECE/ECE24002.png',

},
{
  id: 'EE24004',

  title: 'Interview for IEEE Recruitment ("Empowering Innovation, Connecting Minds")',

  category: 'Recruitment',

  branch: 'EE',

  date: 'August 26, 2024',

  time: '2:30 PM - 5:40 PM',

  venue: 'LT-03, BTED',

  organizedBy: 'IEEE Student Chapter',



  reportAuthor: 'Akriti Chauhan and Vanshika Painuly',

  overview:

    'An IEEE recruitment interview session conducted to introduce students to various positions within the club and assess their skills, interests, and suitability for different roles.',

  description:

    'The recruitment session began with the members introducing themselves and sharing their desired positions. The participants were briefed about the various positions available within IEEE and their significance in the efficient functioning of the club.',
  keyDiscussion: [

    'Introduction of IEEE members and desired positions.',

    'Overview of various IEEE positions and their significance.',

    'Students presenting their desired positions and skillsets.',

    'First-round interviews conducted in groups of four.',

    'Discussion of candidates’ contributions to the IEEE club.',

    'Second-round interviews and comparison of candidates for desired positions.',

    'Resolution of candidate queries and feedback from the Core Team.',

    'Announcement of recruitment results after the interview process.',

  ],

  studentsPresent: [

    'IEEE recruitment candidates',

  ],

  image: '/activities/ECE/ECE24004.jpg',

},
{
  id: 'EE23005',

  title: 'IEEE Recruitment Session - Recruitment of New Volunteers',

  category: 'Recruitment',

  branch: 'EE',

  date: 'October 14, 2023',

  time: '10:00 AM',

  venue: 'LT-3, BT Department',

  organizedBy: 'IEEE Student Branch',


  reportAuthor: 'IEEE Student Branch',

  overview:

    'A recruitment session organized to select new volunteers from the second-year graduation course and introduce them to the management and responsibilities associated with being an IEEE member.',

  description:

    'The IEEE recruitment session was conducted on Saturday, October 14, 2023, with the objective of recruiting volunteers from the second-year graduation course. The session aimed to provide selected volunteers with an opportunity to learn about the management of activities and the responsibilities associated with being an IEEE member. The recruitment process was based on responses received through a Google Form circulated earlier, followed by an interview round. The session was coordinated by members of the IEEE Student Branch who guided the recruitment process.',

  keyDiscussion: [

    'Recruitment of new IEEE volunteers from the second-year graduation course.',

    'Introduction to the responsibilities of an IEEE member.',

    'Management and handling of IEEE Student Branch activities.',

    'Evaluation based on previously submitted Google Form responses.',

    'Interview round for prospective volunteers.',

    'Coordination of the recruitment process by IEEE Student Branch members.',

  ],

  studentsPresent: [

    'Second-year students participating in the recruitment session',

  ],

  image: '/activities/EE/EE23001.jpg',

},
{
  id: 'EE23006',

  title: 'Workshop on Design and Simulation of EV',

  category: 'Workshops',

  branch: 'EE',

  date: 'August 12, 2023',

  time: 'N/A',

  venue: 'Electrical Department',

  organizedBy: 'IEEE Branch Coordinators, Electrical Engineering Department',

  reportAuthor: 'IEEE Student Branch',

  overview:

    'A technical workshop focused on the design and simulation of Electric Vehicles, providing students with an introduction to EV technology and practical insights into MATLAB-based design and simulation.',

  description:

    'A workshop on the Design and Simulation of Electric Vehicles was conducted on August 12, 2023, at the Electrical Department under IEEE. The workshop was organized by the Branch Coordinators from the Electrical Engineering Department and assisted by IEEE volunteers Anurag Joshi and Navtej Chaudhary, who shared their knowledge of EV manufacturing and simulation. Navtej Chaudhary, a third-year EE student, provided an introduction to Electric Vehicles and discussed their design and working. Anurag Joshi explained the use of MATLAB and its role in EV design and simulation. Various problems that can occur in Electric Vehicles were also discussed. Students from various branches participated in the workshop, which was managed and organized by the Branch Coordinators. The workshop received keen interest from the participants and was successfully conducted.',

  keyDiscussion: [

    'Introduction to Electric Vehicles and their working.',

    'Design and simulation concepts related to Electric Vehicles.',

    'Introduction to MATLAB and its applications in EV design.',

    'Design and simulation of EV systems using MATLAB.',

    'Manufacturing and simulation aspects of Electric Vehicles.',

    'Common problems and challenges that can occur in Electric Vehicles.',

    'Participation of students from various branches.',

  ],

  studentsPresent: [

    'Students from various branches of GBPIET',

  ],

  image: '/activities/EE/EE23002.jpg',

},
{
  id: 'EE22007',

  title: 'Quiz and Logo Making Competition',

  category: 'Competitions',

  branch: 'EE',

  date: 'October 2, 2022',

  time: '3:00 PM - 5:00 PM',

  venue: 'Electrical Engineering Department',

  organizedBy: 'Society of Electrical Engineering (SEE) and IEEE Students',

  reportAuthor: 'IEEE Student Branch',

  overview:

    'A combined aptitude quiz and logo making competition organized to develop students’ basic knowledge, assess their aptitude, and encourage creativity among undergraduate students.',

  description:

    'An aptitude assessment and quiz competition was conducted by the Society of Electrical Engineering on October 2, 2022, from 3:00 PM to 5:00 PM. Students from the second and third years of the Electrical Engineering Department participated in the event. The quiz consisted of moderately difficult questions, including questions based on basic electrical engineering concepts. Savan Kumar from the third year secured the first position, Mayank Panwar from the third year secured the second position, and Divyanshu Chauhan from the second year secured the third position. Following the quiz, a logo making competition was organized. Amisha Negi from the third year secured the first position, while Vansh Saini from the third year was the runner-up. The aptitude assessment aimed to strengthen students’ basic knowledge and support their preparation for examinations and interviews such as CAT, IIT JAM, GATE, and other competitive examinations. The event was successfully conducted through the efforts of IEEE students and SEE members.',

  keyDiscussion: [

    'Aptitude assessment for undergraduate students.',

    'Quiz questions covering aptitude and basic electrical engineering concepts.',

    'Participation of second-year and third-year Electrical Engineering students.',

    'Development of basic knowledge for competitive examinations and interviews.',

    'Logo making competition to encourage creativity among students.',

    'Recognition of winners and participants in both competitions.',

  ],

  studentsPresent: [

    'Savan Kumar - 1st position in Quiz',

    'Mayank Panwar - 2nd position in Quiz',

    'Divyanshu Chauhan - 3rd position in Quiz',

    'Amisha Negi - 1st position in Logo Making Competition',

    'Vansh Saini - Runner-up in Logo Making Competition',

    'Students from 2nd and 3rd year Electrical Engineering',

  ],

  image: '/activities/EE/EE23003.png',

},




{
  id: 'EE22008',

  title: "Engineer's Day",

  category: 'Webinars',

  branch: 'EE',

  date: 'September 15, 2022',

  time: 'N/A',

  venue: 'G.B. Pant Institute of Engineering and Technology',

  organizedBy: 'Electrical Engineering Department',


  reportAuthor: 'Electrical Engineering Department',

  overview:

    "Engineer's Day was celebrated on September 15, 2022, to commemorate the birth anniversary of Dr. M. Visvesvaraya. The celebration featured a webinar on Electrical Switch Testing and Commissioning, along with insights into power transmission, substation operation, and maintenance.",

  description:

    "Engineer's Day was celebrated on September 15, 2022, at G.B. Pant Institute of Engineering and Technology in honour of the birth anniversary of Dr. M. Visvesvaraya. A webinar on 'Electrical Switch: Testing and Commissioning' was organized as part of the celebration. Mr. Rohit Tyagi, Assistant Engineer at PTCUL Srinagar Garhwal, served as the speaker and chief guest. Dr. V.M. Mishra, HOD of the Electrical Engineering Department, Prof. M.K. Panda, and Dr. Sanjay Gairola accompanied the chief guest. Dr. V.M. Mishra delivered the welcome address and introduced the speaker. Mr. Rohit Tyagi discussed electrical switch testing and commissioning and provided an introduction to Power Transmission Corporation of Uttaranchal Limited (PTCUL), along with insights from his professional experience. A total of 60 third-year and final-year students, along with faculty members, attended the programme. Prof. M.K. Panda encouraged students to broaden their perspectives and enhance their skills, while Dr. Sanjay Gairola delivered an inspirational address encouraging students to become capable engineers and responsible citizens. The seminar aimed to increase awareness among students about substation working and maintenance.",

  keyDiscussion: [

    "Celebration of Engineer's Day and the birth anniversary of Dr. M. Visvesvaraya.",

    'Electrical switch testing and commissioning.',

    'Introduction to Power Transmission Corporation of Uttaranchal Limited (PTCUL).',

    'Power transmission and the role of PTCUL.',

    'Professional experiences and practical insights shared by the speaker.',

    'Substation working and maintenance.',

    'Importance of broadening perspectives and enhancing technical skills.',

    'Role of engineers as responsible citizens.',

  ],

  studentsPresent: [

    '60 third-year and final-year students',

    'Faculty members of the Electrical Engineering Department',

  ],

  image: '/activities/EE/EE22001.jpg',

},
{
  id: 'EE22009',

  title: 'Seminar on Electrical Switchyard Testing and Commissioning',

  category: 'Seminars',

  branch: 'EE',

  date: 'September 9, 2022',

  time: '10:00 AM onwards',

  venue: 'Seminar Hall, GBPIET Ghurdauri',

  organizedBy: 'Electrical Engineering Department, GBPIET Ghurdauri',


  reportAuthor: 'Electrical Engineering Department',

  overview:

    'A guest lecture on Electrical Switchyard Testing and Commissioning conducted by the Electrical Engineering Department, featuring Mr. Krishna Kumar and providing students with technical and professional insights into electrical engineering and emerging technologies.',

  description:

    'A guest lecture was conducted by the Electrical Engineering Department of GBPIET Ghurdauri on September 9, 2022, from 10:00 AM onwards in the Seminar Hall. The session featured Mr. Krishna Kumar, who was working as a Research and Development Engineer at UJVNL Ltd. at the time of the lecture. The session was attended by students and faculty members of the Electrical Engineering Department. Mr. Krishna Kumar has more than 11 years of professional experience and has published numerous research papers in international journals. His research interests include Renewable Energy, Artificial Intelligence, Cloud Computing, and IoT. Before joining UJVNL, he worked as an Assistant Professor at BTKIT, Dwarahat. He completed his B.E. in Electronics and Communication Engineering from Govind Ballabh Pant Engineering College, Pauri Garhwal, and M.Tech in Digital Systems from Motilal Nehru NIT Allahabad. He was also pursuing his Ph.D. from the Indian Institute of Technology, Roorkee. The session was highly interactive, with students participating enthusiastically throughout the lecture.',

  keyDiscussion: [

    'Electrical switchyard testing and commissioning.',

    'Practical and professional aspects of electrical engineering.',

    'Renewable Energy and its applications.',

    'Artificial Intelligence in engineering applications.',

    'Cloud Computing and Internet of Things (IoT).',

    'Research and development opportunities in electrical engineering.',

    'Professional experiences and career insights from the guest speaker.',

  ],

  studentsPresent: [

    'Students of the Electrical Engineering Department',

    'Faculty members of the Electrical Engineering Department',

  ],

  image: '/activities/EE/EE22003.jpg',

},
{
  id: 'EE22010',

  title: 'Hands-on Session on Electronics Circuit Design for Electrical Engineers',

  category: 'Hands-on Sessions',

  branch: 'EE',

  date: 'September 7, 2022',

  time: '10:00 AM - 1:00 PM',

  venue: 'EED2, Electrical Department',

  organizedBy: 'Electrical Engineering Department',


  reportAuthor: 'Electrical Engineering Department',

  overview:

    'A hands-on technical session designed to introduce Electrical and Electronics Engineering students to electronic circuit design, simulation, data acquisition, and analysis using various hardware and software tools.',

  description:

    'A hands-on session on Electronics Circuit Design for Electrical Engineers was conducted on September 7, 2022, from 10:00 AM to 1:00 PM at EED2 in the Electrical Department. The session was conducted by Mr. Sachin Negi, Assistant Professor, EED, GBPIET. A total of 108 students from the second year of the Electrical Engineering and Electronics departments attended the session. Students were introduced to electronic circuits used for data acquisition and analysis in different applications. The session covered Arduino-based microcontroller experiments, circuit simulation experiments, and PCB-based instrumentation experiments. Students were also given a basic introduction to circuit designing using PROTEUS and other software tools including LabVIEW, MATLAB, and PSPICE. The session aimed to familiarize upcoming Electrical and Electronics Engineers with the fundamentals and practical process of electronic circuit designing.',

  keyDiscussion: [

    'Introduction to electronic circuits for data acquisition and analysis.',

    'Arduino-based microcontroller experiments.',

    'Circuit simulation experiments.',

    'PCB-based instrumentation experiments.',

    'Basics of electronic circuit design using PROTEUS.',

    'Applications of LabVIEW, MATLAB, and PSPICE in circuit design and simulation.',

    'Practical approach to electronic circuit designing for Electrical and Electronics Engineers.',

  ],

  studentsPresent: [

    '108 second-year students from Electrical Engineering and Electronics departments',

  ],

  image: '/activities/EE/EE22004.jpg',

},
{
  id: 'EE22011',

  title: 'Webinar on Human Value and Ethics',

  category: 'Webinars',

  branch: 'EE',

  date: 'N/A',

  time: 'N/A',

  venue: 'Online',

  organizedBy: 'IEEE Student Branch',

  reportAuthor: 'IEEE Student Branch',

  overview:

    'A webinar focused on understanding human values and ethics, with emphasis on basic human aspirations, life goals, physical facilities, and the importance of relationships.',

  description:

    'The webinar on Human Value and Ethics focused on helping students understand fundamental aspects of human aspirations and ethical living. The session explored how individuals can identify and achieve meaningful goals in real life, understand what is required beyond physical facilities, and recognize the importance of relationships in fulfilling human aspirations.',

  keyDiscussion: [

    'Understanding the fulfillment of basic human aspirations.',

    'Defining meaningful goals in real life.',

    'Approaches to achieving real-life goals.',

    'Understanding what is required beyond physical facilities.',

    'Importance and need of relationships.',

    'Role of human values and ethics in everyday life.',

  ],

  studentsPresent: [

    'Students participating in the webinar',

  ],

  image: '/activities/EE/EE22005.jpg',

},
{
  id: 'EE20012',

  title: 'Placement Team',

  category: 'Student Activities',

  branch: 'EE',

  date: '2020-21',

  time: 'N/A',

  venue: 'Electrical Engineering Department',

  organizedBy: 'Department of Electrical Engineering',

  reportAuthor: 'Department of Electrical Engineering',

  overview:

    'The Department of Electrical Engineering constituted a departmental placement student team for the 2020-21 academic session, comprising students from the second, third, and fourth years.',

  description:

    'The Department of Electrical Engineering constituted a placement student team for the 2020-21 academic session. The team included students from the second, third, and fourth years and was formed to support and coordinate departmental placement-related activities.',

  keyDiscussion: [

    'Formation of the departmental placement student team for the 2020-21 session.',

    'Participation of second-year, third-year, and fourth-year students.',

    'Coordination and support for departmental placement-related activities.',

  ],

  studentsPresent: [

    'Second-year students',

    'Third-year students',

    'Fourth-year students',

  ],

  image: '/activities/EE/EE20001.png',

},
{
  id: 'EE20013',

  title: 'Online Internship Program on MATLAB, VLAB & Applications in Electrical Engineering',

  category: 'Internships',

  branch: 'EE',

  date: 'August 17-28, 2020',

  time: 'N/A',

  venue: 'Online',

  organizedBy: 'Department of Electrical Engineering, GBPIET Pauri',



  reportAuthor: 'Department of Electrical Engineering',

  overview:

    'An online internship program organized to provide Electrical Engineering students with practical exposure to MATLAB, VLAB, control systems, semiconductor devices, solar cells, renewable energy, and other core areas of Electrical Engineering.',

  description:

    'The Department of Electrical Engineering, GBPIET Pauri, organized an online internship program on "MATLAB, VLAB & Applications in Electrical Engineering" from August 17 to August 28, 2020. The program was sponsored by TEQIP-3 and conducted in collaboration with SmartBrain Engineers and Technologies Pvt. Ltd. A total of 105 second-year and third-year Electrical Engineering students participated in the internship. The program covered several important areas of Electrical Engineering, including MATLAB, VLAB, Control Systems, Semiconductor Devices, Solar Cells, Renewable Energy, and related applications.',

  keyDiscussion: [

    'Introduction to MATLAB and its applications in Electrical Engineering.',

    'Virtual Laboratory (VLAB) and its applications.',

    'Control Systems and their applications.',

    'Semiconductor devices and related concepts.',

    'Solar cells and their applications.',

    'Renewable energy technologies.',

    'Practical applications of software and technologies in Electrical Engineering.',

  ],

  studentsPresent: [

    '105 second-year and third-year Electrical Engineering students',

  ],

  image: '/activities/EE/EE20002.png',

},
{
  id: 'EE20014',

  title: 'International Conference on Smart Machine Intelligence and Real-Time Computing',

  category: 'Conferences',

  branch: 'EE',

  date: 'June 26-27, 2020',

  time: 'N/A',

  venue: 'Online',

  organizedBy: 'Department of Computer Science, Electronics & Electrical Engineering, GBPIET Pauri',

  reportAuthor: 'Department of Computer Science, Electronics & Electrical Engineering',

  overview:

    'An online international conference organized to bring together researchers, scientists, engineers, and research students to share original research, new ideas, and practical development experiences in Engineering and Technology.',

  description:

    'The Department of Computer Science, Electronics and Electrical Engineering, GBPIET Pauri, organized an Online International Conference on "Smart Machine Intelligence and Real-Time Computing" from June 26 to June 27, 2020. The conference was sponsored by TEQIP-3. It aimed to provide a platform for researchers, scientists, engineers, and research students working in various areas of Engineering and Technology to disseminate original research, innovative ideas, and practical development experiences. A total of 151 research papers were received, out of which 116 research papers were accepted and presented during the conference.',

  keyDiscussion: [

    'Smart Machine Intelligence and Real-Time Computing.',

    'Original research and emerging ideas in Engineering and Technology.',

    'Practical development experiences and technological applications.',

    'Research contributions from scientists, engineers, and research students.',

    'Presentation and dissemination of accepted research papers.',

  ],

  studentsPresent: [

    'Researchers, scientists, engineers, and research students',

    '116 accepted research papers presented at the conference',

  ],

  image: '/activities/ECE/ECE20001.png',

},
{
  id: 'EE20015',

  title: 'PowerPoint Presentation Program',

  category: 'Competitions',

  branch: 'EE',

  date: 'March 1, 2020',

  time: 'N/A',

  venue: 'N/A',

  organizedBy: 'Society of Electrical Engineering (SEE)',

  reportAuthor: 'SEE Committee, Session 2019-20',

  overview:

    'A technical PowerPoint presentation competition organized to enhance students’ communication, presentation, research, and public speaking skills through presentations on technical topics of their choice.',

  description:

    'The PowerPoint Presentation Program was held on March 1, 2020, under the Society of Electrical Engineering. Students from the first and second years were asked to prepare presentations on technical topics of their choice and present their research work before a jury. The programme aimed to enhance students’ communication and presentation skills, encourage them to overcome the hesitation of speaking in public, and increase their awareness of technology and current developments. Respective juries evaluated the participants based on their presentation skills, capabilities, and ability to communicate their ideas and views. Students participated enthusiastically and demonstrated their technical knowledge and presentation abilities. The programme also provided an opportunity for students to understand and appreciate each other’s skills and perspectives.',

  keyDiscussion: [

    'Technical presentations on topics selected by the students.',

    'Research work and technical knowledge sharing.',

    'Development of communication and presentation skills.',

    'Building confidence in public speaking.',

    'Evaluation based on presentation skills and ability to communicate ideas.',

    'Awareness of technological developments and current trends.',

    'Exchange of knowledge, ideas, and perspectives among students.',

  ],

  studentsPresent: [

    'First-year Electrical Engineering students',

    'Second-year Electrical Engineering students',

    '1st Position - Manas, Kunal, Nanak',

    '2nd Position - Purvanshi, Prateek, Yogesh',

    '3rd Position - Priyanshu, Karishma, Suja',

  ],

  image: '/activities/EE/EE20003.jpg',

},
{
  id: 'EE20016',

  title: 'VJ Hunt',

  category: 'Competitions',

  branch: 'EE',

  date: 'February 16, 2020',

  time: 'N/A',

  venue: 'N/A',

  organizedBy: 'Society of Electrical Engineering (SEE)',

  reportAuthor: 'Society of Electrical Engineering',

  overview:

    'An interactive activity organized to encourage students to express their perspectives, connect different topics, and create an open and engaging environment among participants.',

  description:

    'The VJ Hunt was organized by the Society of Electrical Engineering on February 16, 2020. During the activity, participants picked chits containing different topics and were required to speak about each topic and establish connections between them. Students presented their individual perspectives and ideas, making the event interactive and enjoyable. The activity encouraged participants to think creatively, express their thoughts openly, and appreciate different viewpoints. The event aimed to create an open and friendly environment among students while promoting communication and spontaneous thinking.',

  keyDiscussion: [

    'Speaking on topics selected through chits.',

    'Connecting and correlating different topics.',

    'Expression of individual perspectives and ideas.',

    'Creative and spontaneous thinking.',

    'Encouraging open communication among students.',

    'Creating an interactive and engaging environment.',

  ],

  studentsPresent: [

    'Students of the Electrical Engineering Department',

  ],

  image: '/activities/EE/EE20004.png',

},

  // =========================
  // Electronics
  // =========================


  {
    id: 'ECE26001',

    title: 'KiCraft Workshop & Competition',
    category: 'Workshops',
    branch: 'ECE',

    date: 'March 19, 2026',
    time: '10:00 AM - 5:30 PM',
    venue: 'Seminar Hall, ECED',
    organizedBy: 'IEEE Student Branch',

    reportAuthor: 'Sumit Rawat',

    overview:
      'KiCraft was organized by the 2nd year volunteers of the IEEE Student Branch, GBPIET, with guidance and support from third-year members. The event aimed to introduce participants to PCB design and enhance their practical skills using KiCad software.',

    description:
      'The event was conducted in two phases. The first phase consisted of an interactive workshop on KiCad, covering schematic design, component placement, PCB layout, and 3D design. The second phase featured a competition where participants applied the concepts learned during the workshop to complete practical tasks. More than 30 students participated enthusiastically, and the winners were awarded certificates, medals, and cash prizes.',

    keyDiscussion: [
      'Introduction to PCB design using KiCad software.',
      'Understanding schematic design and component placement.',
      'PCB layout and design workflow.',
      'Introduction to 3D PCB design.',
      'Hands-on application of KiCad concepts.',
      'Competition based on the concepts covered during the workshop.',
      'Encouraging teamwork, creativity, innovation, and practical learning.',
    ],

    studentsPresent: [
      'Paras Dhiman',
      'Anurag Gupta',
      'Harshit Giri',
      'Rachita Pant',
      'Ojasvi Thapa',
      'Suraj Khanduri',
      'Sumit Rawat',
      'Vijay Saini',
      'Priyanshu Nautiyal',
      'Vaibhav Pokhriyal',
      'Vikrant Kumar',
      'Daksh Kandpal',
      'Priyanshu Gusain',
      'Nitin Rawat',
      'Nikhil Suyal',
      'Aahana',
      'Ishita Sati',
      'Yash Joshi',
      'Naval',
    ],

    image: '/activities/ECE/ECE26001.jpeg',
  },
  {
    id: 'ECE25003',

    title: '2 Day Introductory Workshop on EDA Tools',
    category: 'Workshops',
    branch: 'ECE',

    date: 'April 28, 2025 - April 29, 2025',
    time: '5:00 PM - 6:00 PM',
    venue: 'Seminar Hall, ECED',
    organizedBy: 'IEEE Core Team Members,Ojasvi Thapa',


    reportAuthor: 'Janmejay Pant, Samriddhi Bhatt and Ojasvi Thapa',

    overview:
      'A two-day introductory workshop on EDA Tools was conducted by the IEEE Student Branch to introduce students to basic EDA tools, their features, methodologies, and practical applications.',

    description:
      'The workshop was conducted over two days. On the first day, students were introduced to the basics and features of various EDA tools through presentations covering their introduction, methodologies, and practical insights. On the second day, practical implementation using KiCad and Xilinx Vivado was demonstrated. Students designed a 555 timer and a blink circuit using transistors on KiCad, while coding, schematic design, and simulations using Verilog on Xilinx Vivado were also explained. The workshop concluded with students sharing their views and feedback. The primary audience consisted of first and second-year students from the ECE and EE branches.',

    keyDiscussion: [
      'Introduction to Electronic Design Automation (EDA) tools.',
      'Understanding the features and applications of various EDA tools.',
      'Introduction to EDA methodologies and workflows.',
      'Practical implementation using KiCad.',
      'Designing a 555 timer circuit using KiCad.',
      'Designing a blink circuit using transistors.',
      'Introduction to Xilinx Vivado.',
      'Coding, schematic design, and simulation using Verilog.',
      'Student feedback and discussion about the workshop.',
    ],

    studentsPresent: [
      'Akriti Chauhan',
      'Akshita Nautiyal',
      'Anurag Gupta',
      'Ankita Negi',
      'Rachita Pant',
      'Mahi Devli',
      'Ojasvi Thapa',
    ],

    image: '/activities/ECE/ECE26002.png',
  },
  {
    id: 'ECE24004',

    title: 'Introductory Meet for First Year Students 2024-25',
    category: 'Meetings',
    branch: 'ECE',

    date: 'October 10, 2024',
    time: '4:00 PM - 5:00 PM',
    venue: 'LT-6, CSED',
    organizedBy: 'IEEE Core Team Members',

    reportAuthor: 'Janmejay Pant and Ojasvi Thapa',

    overview:
      'IEEE Student Branch representatives from the pre-final year and second-year volunteers organized an introductory meeting for newly admitted first-year students to introduce them to IEEE and its activities.',

    description:
      'The meeting began with an introduction of the current IEEE members present. The representatives then introduced students to IEEE and discussed the various opportunities and benefits associated with being a part of the organization. The session concluded with an overview of the IEEE GBPIET Student Branch, including its activities and future plans. A total of 82 students from the ECE, EE, and BT branches attended the meeting.',

    keyDiscussion: [
      'Introduction of the current IEEE Student Branch members.',
      'Introduction to IEEE and its purpose.',
      'Opportunities and benefits associated with IEEE.',
      'Overview of the IEEE GBPIET Student Branch.',
      'Discussion about IEEE GBPIET activities.',
      'Introduction to future plans and initiatives of the student branch.',
      'Interaction with newly admitted first-year students.',
    ],

    studentsPresent: [
      'First-year students from ECE, EE, and BT branches',
      'IEEE pre-final year representatives',
      'IEEE second-year volunteers',
    ],

    image: '/activities/ECE/ECE24001.png',
  },
  {
    id: 'ECE24005',

    title: 'SIH Internal Hackathon 2024',
    category: 'Hackathons',
    branch: 'ECE',

    date: 'September 4, 2024 - September 5, 2024',
    time: '10:00 AM - 1:00 PM',
    venue: 'Seminar Room, ECED',
    organizedBy: 'IEEE (Student Chapter)',
    reportAuthor: '',
    overview:
      'The SIH Internal Hackathon 2024 was organized by the IEEE Student Branch, GBPIET, as a two-day programme to provide students with an opportunity to develop and present solutions based on selected problem statements.',

    description:
      'The internal hackathon was conducted from September 4th to September 5th, 2024, with a total of 24 teams from the college registered for the event. The hackathon began at 10:00 AM, with participating teams presenting their PowerPoint presentations based on their selected problem statements and project domains. The teams were briefed about the rules and regulations beforehand. Judges from different fields of expertise evaluated the presentations and asked questions related to the problem statements and project domains. Marks were awarded according to the specified judging criteria. The participating teams awaited the results, which were released on September 6th.',

    keyDiscussion: [
      'Introduction to the SIH Internal Hackathon and its objectives.',
      'Presentation of solutions based on selected problem statements.',
      'Evaluation of projects by judges from different fields of expertise.',
      'Question-and-answer sessions following each team presentation.',
      'Assessment according to specified judging criteria.',
      'Participation of 24 teams from the college.',
      'Announcement of hackathon results on September 6th, 2024.',
    ],

    studentsPresent: [
      '24 participating teams from GBPIET',
    ],

    image: '/activities/ECE/ECE24002.png',
  },
  {
    id: 'ECE24006',

    title: 'Workshop on Basic Electronics Components',
    category: 'Workshops',
    branch: 'ECE',

    date: 'May 10, 2024',
    time: '2:00 PM - 5:00 PM',
    venue: 'LT-05, ECED',
    organizedBy: 'IEEE (Student Chapter ECE)',

    reportAuthor: 'Akriti Chauhan and Vanshika Painuly',

    overview:
      'IEEE Student Branch (ECE) organized an informative workshop on Basic Electronics Components to introduce students to fundamental electronic components and provide them with practical hands-on experience.',

    description:
      'The session began with a PowerPoint presentation and an explanation of basic electronics components such as resistors, transistors, capacitors, and sensors, highlighting their importance as fundamental elements of electronic circuits and systems. Participants were given hands-on experience with the components and were guided through their working principles. Experts also addressed the doubts raised by the students. A special project was demonstrated during the session, which generated considerable interest among the participants. The session was hosted by Vinay Kathait, with Aditya Raj Haldiya serving as an expert for clarifying doubts. Yogesh Bisht and Akhil Kothari presented their project, while Jay presented the electronics components. Students from the ECE first year primarily attended the workshop.',

    keyDiscussion: [
      'Introduction to basic electronics components.',
      'Understanding resistors, transistors, capacitors, and sensors.',
      'Role of electronic components in circuits and systems.',
      'Hands-on experience with basic electronic components.',
      'Understanding the working principles of different components.',
      'Interactive doubt-clearing session with experts.',
      'Demonstration of a special electronics project.',
      'Project presentation by students.',
    ],

    studentsPresent: [
      'Parth Uniyal',
      'Jay Kumar',
      'Akriti Chauhan',
      'Ashutosh Suyal',
      'Mudit Panwar',
      'Ashmit Rana',
      'Aditya Raj Haldiya',
      'Yogesh Bisht',
      'Akhil Kothari',
    ],

    image: '/activities/ECE/ECE24003.png',
  },
  {
    id: 'ECE24007',

    title: 'Interview for IEEE Recruitment – Empowering Innovation, Connecting Minds',
    category: 'Recruitment',
    branch: 'ECE',

    date: 'August 26, 2024',
    time: '2:30 PM - 5:40 PM',
    venue: 'LT-03, BTED',
    organizedBy: 'IEEE (Student Chapter)',


    reportAuthor: 'Akriti Chauhan and Vanshika Painuly',

    overview:
      'The IEEE Recruitment Interview was organized under the theme "Empowering Innovation, Connecting Minds" to identify students interested in taking up various positions and contributing to the efficient functioning of the IEEE Student Chapter.',

    description:
      'The session began with the members introducing themselves and discussing their desired positions. A briefing was provided about the various positions available and their significance in the effective functioning of the club. Students were then asked to introduce themselves in writing, mention their desired position, describe their skillset, and explain why they were suitable for the position. The first round of interviews was conducted with candidates appearing before the interview panel in groups of four. Candidates were asked about their desired positions and how they would contribute to the club. In the second round, students competed with their peers for their preferred positions and were encouraged to demonstrate their skills and distinguish themselves from other candidates. Queries were addressed and feedback on performance was provided by the Core Team. The results of the recruitment process were to be disclosed subsequently.',

    keyDiscussion: [
      'Introduction of IEEE members and discussion of desired positions.',
      'Overview of various IEEE positions and their significance.',
      'Submission of candidate introductions, skillsets, and preferred positions.',
      'First-round interviews conducted in groups of four.',
      'Discussion of candidates’ contributions to the IEEE Student Chapter.',
      'Second-round interviews and evaluation of candidates.',
      'Opportunity for candidates to demonstrate their skills and suitability.',
      'Resolution of candidate queries and feedback from the Core Team.',
      'Announcement of recruitment results at a later stage.',
    ],

    studentsPresent: [
      'IEEE Student Chapter members',
      'Students participating in the IEEE recruitment process',
    ],

    image: '/activities/ECE/ECE24004.jpg',
  },
  {
    id: 'ECE24008',

    title: 'IEEE Introductory Meet',
    category: 'Meetings',
    branch: 'ECE',

    date: 'February 24, 2024',
    time: '4:00 PM - 4:50 PM',
    venue: 'LT-5, EEED',
    organizedBy: 'IEEE (Student Branch ECE)',

    reportAuthor: 'Akriti Chauhan',

    overview:
      'IEEE Student Branch (ECE) organized an engaging introductory meet to familiarize students with IEEE, its benefits, functioning, technical community, and opportunities for active participation.',

    description:
      'The event began with a comprehensive introduction to IEEE, covering its global presence, diverse membership, and the various technical fields associated with the organization. A PowerPoint presentation was used to explain IEEE and its activities in detail. Students were also introduced to various IEEE social media handles and websites. Different positions within the IEEE Student Branch were discussed, highlighting opportunities for students to actively contribute to the IEEE community and develop their identity as future engineers and technologists. Master Abhishekh Lakhera, Chairperson, Master Parth Uniyal, Secretary, and other IEEE members attended the event and shared their experiences and insights with the students. The session was coordinated by members of the IEEE Student Branch.',

    keyDiscussion: [
      'Introduction to IEEE and its global presence.',
      'Understanding the benefits of IEEE membership.',
      'Overview of IEEE functioning and technical fields.',
      'Presentation on IEEE activities and opportunities.',
      'Introduction to IEEE social media handles and websites.',
      'Discussion of various positions within the IEEE Student Branch.',
      'Opportunities for students to actively contribute to IEEE.',
      'Interaction with the Chairperson, Secretary, and other IEEE members.',
    ],

    studentsPresent: [
      'Akshita Nautiyal',
      'Jai Kumar',
      'Akriti Chauhan',
      'Priyanka Bhandari',
      'Mudit Panwar',
      'Ashutosh Suyal',
      'Abhishekh Lakhera',
      'Parth Uniyal',
    ],

    image: '/activities/ECE/ECE24005.jpg',
  },
  {
    id: 'ECE23009',

    title: 'Recruitment of New Volunteers',
    category: 'Recruitment',
    branch: 'ECE',

    date: 'October 14, 2023',
    time: '10:00 AM',
    venue: 'LT-3, BT Department',
    organizedBy: 'IEEE Student Branch',


    reportAuthor: 'IEEE Student Branch',

    overview:
      'The recruitment session was conducted to select new volunteers from the second year of the graduation course and provide them with an opportunity to learn management skills and handle responsibilities as IEEE members.',

    description:
      'The interview session was conducted on Saturday, October 14, 2023. The purpose of the session was to recruit volunteers from the second year of the graduation course and provide them with an opportunity to learn the management and handling of responsibilities as members of IEEE. The recruitment process was based on responses received through a Google Form circulated earlier, followed by an interview round. The session was coordinated by members of the IEEE Student Branch.',

    keyDiscussion: [
      'Recruitment of new IEEE Student Branch volunteers.',
      'Selection of volunteers from the second year of the graduation course.',
      'Review of responses submitted through the Google Form.',
      'Conducting interviews for the recruitment process.',
      'Understanding management and organizational responsibilities.',
      'Introduction to responsibilities associated with being an IEEE member.',
    ],

    studentsPresent: [
      'Abhishek Lakhera - Students Branch Chairman',
      'Shobhit Kanswal - Students Branch Chairman',
      'Tanmay Bisht - Creative Media Head',
      'Tejas Chhabra - Students Branch Vice Chairman',
      'Shaifali Bhardwaj - Students Branch Vice Chairman',
    ],

    image: '/activities/ECE/ECE23001.jpg',
  },
  {
    id: 'ECE23010',

    title: 'IEEE Outreach Event - IoT Home Automation Workshop at Government School',
    category: 'Outreach',
    branch: 'ECE',

    date: 'November 1, 2023',
    time: 'N/A',
    venue: 'Government Primary School, Ghurdauri',
    organizedBy: 'GBPIET Student Teacher Branch of IEEE',

    reportAuthor: 'IEEE Student Branch',

    overview:
      'The IEEE outreach event at Government Primary School Ghurdauri aimed to introduce students to the Internet of Things (IoT) and home automation through interactive sessions, hands-on projects, and practical demonstrations.',

    description:
      'The IEEE outreach event was organized at Government Primary School Ghurdauri to familiarize students with IoT and its applications in home automation. The event began with an introduction to the Internet of Things and its relevance in everyday life. Students were provided with hands-on experience involving electronic components and coding to understand the development of IoT-based projects. The volunteers also explained the projects and their applications to the students. The event included refreshments, a motivational session, and a question-and-answer session where students could interact with the volunteers and clarify their doubts. The event successfully provided students with a practical understanding of IoT and encouraged them to explore technology and innovation.',

    keyDiscussion: [
      'Introduction to the Internet of Things (IoT).',
      'Understanding the relevance of IoT in daily life.',
      'Introduction to IoT-based home automation.',
      'Hands-on experience with electronic components.',
      'Understanding coding for IoT-based projects.',
      'Explanation and demonstration of IoT projects.',
      'Motivational session encouraging students to explore technology.',
      'Interactive question-and-answer session.',
    ],

    studentsPresent: [
      'Parth Uniyal',
      'Shubham Bhatt',
      'Priyanshu Bisht',
      'Aditya Raj Haldia',
      'Vinay Kathait',
    ],

    image: '/activities/ECE/ECE23002.png',
  },
  {
    id: 'ECE23011',

    title: 'Initiative in the Field of Social Welfare by Ghurdauri Engineering College',
    category: 'Outreach',
    branch: 'ECE',

    date: 'September 21, 2023',
    time: 'N/A',
    venue: 'Ghurdauri Junior School',
    organizedBy: 'Ghurdauri Engineering College through IEEE Branch Chapter',

    reportAuthor: 'Ghurdauri Engineering College',

    overview:
      'Ghurdauri Engineering College has been undertaking various social welfare initiatives to support the educational development and upliftment of students at Ghurdauri Junior School.',

    description:
      'As part of its ongoing social welfare initiatives, Ghurdauri Engineering College organized a programme at Ghurdauri Junior School on September 21, 2023. College teachers distributed reading materials among all the students and provided guidance and encouragement for their bright future. The initiative is being conducted through the IEEE Branch Chapter, with an objective of helping school students develop their talents and skills across various fields. Prof. Sanjay Gairola, Dr. K. S. Bhatia, Dr. Manoj Kumar, Mr. Pushkar Praveen, and Dr. Ajay Kumar, along with teachers from the school, were present during the programme. College Director Dr. V.N. Kala has also assured continued support for educational welfare initiatives.',

    keyDiscussion: [
      'Social welfare initiatives undertaken by Ghurdauri Engineering College.',
      'Distribution of reading materials among school students.',
      'Guidance and encouragement for students’ educational development.',
      'Supporting the upliftment of students at Ghurdauri Junior School.',
      'Development of students’ talents and skills through IEEE initiatives.',
      'Collaboration between college teachers and school teachers.',
      'Continued institutional support for educational welfare programmes.',
    ],

    studentsPresent: [
      'Students of Ghurdauri Junior School',
      'Prof. Sanjay Gairola',
      'Dr. K. S. Bhatia',
      'Dr. Manoj Kumar',
      'Mr. Pushkar Praveen',
      'Dr. Ajay Kumar',
      'Teachers of Ghurdauri Junior School',
    ],

    image: '/activities/ECE/ECE23003.jpg',
  },
  {
    id: 'ECE23012',

    title: 'Nurturing Innovation and Insight - Think Tank Session',
    category: 'Meetings',
    branch: 'ECE',

    date: 'August 26, 2023',
    time: 'N/A',
    venue: 'N/A',
    organizedBy: 'IEEE Student Chapter',

    reportAuthor: 'IEEE Student Chapter',

    overview:
      'IEEE Student Chapter hosted an engaging and enlightening event to introduce students to IEEE, its benefits, functioning, and the opportunities associated with becoming an IEEE member.',

    description:
      'The event began with a comprehensive introduction to IEEE (Institute of Electrical and Electronics Engineers), covering its global presence, diverse membership, and the various technical fields it encompasses. The session emphasized the benefits of IEEE membership, including access to research, networking opportunities, workshops, conferences, and career development resources. The highlight of the event was an interactive Think Tank session where students were encouraged to share their views and ideas on innovation and invention. The session provided students with a platform for intellectual discussion and encouraged them to explore innovative ideas and their potential to contribute to positive change.',

    keyDiscussion: [
      'Introduction to IEEE and its global presence.',
      'Understanding IEEE membership and its benefits.',
      'Overview of technical fields covered by IEEE.',
      'Access to research, networking, workshops, and conferences.',
      'Career development opportunities through IEEE.',
      'Interactive Think Tank session on innovation and invention.',
      'Encouraging students to share innovative ideas and perspectives.',
      'Exploring the potential of students to drive positive change through innovation.',
    ],

    studentsPresent: [
      'IEEE Student Chapter members',
      'Students participating in the Think Tank session',
    ],

    image: '/activities/ECE/ECE23004.jpg',
  },

  {
    id: 'ECE20014',

    title: 'Industrial Training on "Current Industry Scenario"',
    category: 'Training',
    branch: 'ECE',

    date: 'July 29, 2020 - August 9, 2020',
    time: 'N/A',
    venue: 'Online',
    organizedBy: 'Electronics & Communication Engineering Department, GBPIET Pauri',

    reportAuthor: 'Electronics & Communication Engineering Department, GBPIET Pauri',

    overview:
      'An online industrial training programme was conducted to provide students with insights into the latest industry trends, work culture, business processes, and innovation across IT and core sectors.',

    description:
      'The Electronics & Communication Engineering Department, GBPIET Pauri conducted an online Industrial Training programme on "Current Industry Scenario" from July 29 to August 9, 2020. Around 100 students participated in the live webinar sessions delivered by highly qualified and experienced industry professionals. The training aimed to familiarize students with the latest trends in industry, business process management, current industry work culture, and innovation in IT and core sectors. The experts also shared valuable guidance and tips to help students understand career opportunities and prepare for professional growth in their respective industries.',

    keyDiscussion: [
      'Overview of the current industry scenario.',
      'Latest trends and developments in the industry.',
      'Introduction to business process management.',
      'Understanding current industry work culture.',
      'Innovation and opportunities in the IT sector.',
      'Innovation and developments in core industries.',
      'Insights from experienced industry professionals.',
      'Career guidance and tips for professional growth.',
    ],

    studentsPresent: [
      'Around 100 participating students',
      'Industry professionals and experts',
    ],

    image: '/activities/ECE/ECE20002.png',
  },
  {
    id: 'ECE20015',

    title: 'Hands-on Workshop on "MATLAB and Data Science using Python"',
    category: 'Workshops',
    branch: 'ECE',

    date: 'September 21, 2020 - September 25, 2020',
    time: 'N/A',
    venue: 'Online',
    organizedBy: 'Department of Electronics & Communication Engineering, GBPIET',

    reportAuthor: 'Department of Electronics & Communication Engineering, GBPIET',

    overview:
      'A hands-on online workshop was organized to provide participants with practical knowledge of MATLAB and introduce them to data science using Python, covering programming fundamentals, data manipulation, and analysis tools.',

    description:
      'The Department of Electronics & Communication Engineering, GBPIET organized a hands-on online workshop on "MATLAB and Data Science using Python" from September 21 to September 25, 2020. Dr. Tapan Kr Jain from IIIT Nagpur conducted three sessions on MATLAB, followed by sessions on data science using Python delivered by Dr. Pooja Jain from IIIT Nagpur. Dr. Tapan introduced participants to MATLAB and demonstrated how its built-in tools and programming capabilities can be used to enhance computing and problem-solving experiences. Dr. Pooja introduced learners to the Python programming environment and fundamental programming techniques, including lambda functions, reading and manipulating CSV files, and the NumPy library. She also covered data manipulation and cleaning techniques using the Python Pandas library and introduced Series and DataFrame as central data structures for data analysis.',

    keyDiscussion: [
      'Introduction to MATLAB and its applications.',
      'Practical use of MATLAB built-in tools.',
      'Programming techniques for enhancing computing with MATLAB.',
      'Introduction to the Python programming environment.',
      'Fundamental Python programming techniques and lambda functions.',
      'Reading and manipulating CSV files using Python.',
      'Introduction to the NumPy library.',
      'Data manipulation and cleaning using Pandas.',
      'Understanding Series and DataFrame for data analysis.',
    ],

    studentsPresent: [
      'Workshop participants',
      'Learners from the Department of Electronics & Communication Engineering',
    ],

    image: '/activities/ECE/ECE20002.png',
  },
  {
    id: 'ECE22016',

    title: 'Webinar on "Advanced Driver Assistance Systems (ADAS)"',
    category: 'Webinars',
    branch: 'ECE',

    date: 'September 27, 2022',
    time: 'N/A',
    venue: 'Online',
    organizedBy: 'Department of Electronics & Communication Engineering, GBPIET',


    reportAuthor: 'Department of Electronics & Communication Engineering, GBPIET',

    overview:
      'The Department of Electronics & Communication Engineering, GBPIET organized a webinar on Advanced Driver Assistance Systems (ADAS) to introduce students to ADAS technologies, their applications in modern vehicles, and career opportunities in the field of Electronics and Communication Engineering.',

    description:
      'The Department of Electronics & Communication Engineering, GBPIET organized a webinar on "Advanced Driver Assistance Systems (ADAS)" on September 27, 2022. The session was delivered by industry expert Mr. Shashank Shekar from Netradyne, an alumnus of GBPIET who completed his B.Tech in ECE in 2013 and has more than nine years of industry experience with organizations including Broadcom, Micromax, and Netradyne. Mr. Shashank Shekar introduced participants to the basics of the ADAS environment and explained its applications in modern vehicles and related industries. The session covered applications such as fleet tracking, driver safety, the insurance industry, 3D mapping of roads, and data collection for autonomous vehicle testing and simulation. He also discussed various career and professional opportunities available in the field of Electronics and Communication Engineering. The webinar was supported by Mr. Pushkar Praveen and Dr. K.S. Bhatia.',

    keyDiscussion: [
      'Introduction to Advanced Driver Assistance Systems (ADAS).',
      'Understanding the ADAS environment and its features.',
      'Applications of ADAS in modern-day vehicles.',
      'Fleet tracking and driver safety technologies.',
      'Applications of ADAS in the insurance industry.',
      '3D mapping of roads.',
      'Data collection for autonomous vehicle testing and simulation.',
      'Career and professional opportunities in Electronics and Communication Engineering.',
      'Industry insights from an ECE alumnus and professional.',
    ],

    studentsPresent: [
      'Students of the Department of Electronics & Communication Engineering',
      'Mr. Shashank Shekar - Industry Expert and GBPIET Alumnus',
    ],

    image: '/activities/ECE/ECE20004.png',
  }
{
 'ECE25003',

  title: '2 Day Introductory Workshop on EDA Tools',
  category: 'Workshops',
  branch: 'ECE',

  date: 'April 28, 2025 - April 29, 2025',
  time: '5:00 PM - 6:00 PM',
  venue: 'Seminar Hall, ECED',
  organizedBy: 'IEEE Core Team Members,Ojasvi Thapa',
  

  reportAuthor: 'Janmejay Pant, Samriddhi Bhatt and Ojasvi Thapa',

  overview:
    'A two-day introductory workshop on EDA Tools was conducted by the IEEE Student Branch to introduce students to basic EDA tools, their features, methodologies, and practical applications.',

  description:
    'The workshop was conducted over two days. On the first day, students were introduced to the basics and features of various EDA tools through presentations covering their introduction, methodologies, and practical insights. On the second day, practical implementation using KiCad and Xilinx Vivado was demonstrated. Students designed a 555 timer and a blink circuit using transistors on KiCad, while coding, schematic design, and simulations using Verilog on Xilinx Vivado were also explained. The workshop concluded with students sharing their views and feedback. The primary audience consisted of first and second-year students from the ECE and EE branches.',

  keyDiscussion: [
    'Introduction to Electronic Design Automation (EDA) tools.',
    'Understanding the features and applications of various EDA tools.',
    'Introduction to EDA methodologies and workflows.',
    'Practical implementation using KiCad.',
    'Designing a 555 timer circuit using KiCad.',
    'Designing a blink circuit using transistors.',
    'Introduction to Xilinx Vivado.',
    'Coding, schematic design, and simulation using Verilog.',
    'Student feedback and discussion about the workshop.',
  ],

  studentsPresent: [
    'Akriti Chauhan',
    'Akshita Nautiyal',
    'Anurag Gupta',
    'Ankita Negi',
    'Rachita Pant',
    'Mahi Devli',
    'Ojasvi Thapa',
  ],

  image: '/activities/ECE/ECE26002.png',
},
{
  id: 'ECE24004',

  title: 'Introductory Meet for First Year Students 2024-25',
  category: 'Meetings',
  branch: 'ECE',

  date: 'October 10, 2024',
  time: '4:00 PM - 5:00 PM',
  venue: 'LT-6, CSED',
  organizedBy: 'IEEE Core Team Members',

  reportAuthor: 'Janmejay Pant and Ojasvi Thapa',

  overview:
    'IEEE Student Branch representatives from the pre-final year and second-year volunteers organized an introductory meeting for newly admitted first-year students to introduce them to IEEE and its activities.',

  description:
    'The meeting began with an introduction of the current IEEE members present. The representatives then introduced students to IEEE and discussed the various opportunities and benefits associated with being a part of the organization. The session concluded with an overview of the IEEE GBPIET Student Branch, including its activities and future plans. A total of 82 students from the ECE, EE, and BT branches attended the meeting.',

  keyDiscussion: [
    'Introduction of the current IEEE Student Branch members.',
    'Introduction to IEEE and its purpose.',
    'Opportunities and benefits associated with IEEE.',
    'Overview of the IEEE GBPIET Student Branch.',
    'Discussion about IEEE GBPIET activities.',
    'Introduction to future plans and initiatives of the student branch.',
    'Interaction with newly admitted first-year students.',
  ],

  studentsPresent: [
    'First-year students from ECE, EE, and BT branches',
    'IEEE pre-final year representatives',
    'IEEE second-year volunteers',
  ],

  image: '/activities/ECE/ECE24001.png',
},
{
  id: 'ECE24005',

  title: 'SIH Internal Hackathon 2024',
  category: 'Hackathons',
  branch: 'ECE',

  date: 'September 4, 2024 - September 5, 2024',
  time: '10:00 AM - 1:00 PM',
  venue: 'Seminar Room, ECED',
  organizedBy: 'IEEE (Student Chapter)',
  reportAuthor:'',
  overview:
    'The SIH Internal Hackathon 2024 was organized by the IEEE Student Branch, GBPIET, as a two-day programme to provide students with an opportunity to develop and present solutions based on selected problem statements.',

  description:
    'The internal hackathon was conducted from September 4th to September 5th, 2024, with a total of 24 teams from the college registered for the event. The hackathon began at 10:00 AM, with participating teams presenting their PowerPoint presentations based on their selected problem statements and project domains. The teams were briefed about the rules and regulations beforehand. Judges from different fields of expertise evaluated the presentations and asked questions related to the problem statements and project domains. Marks were awarded according to the specified judging criteria. The participating teams awaited the results, which were released on September 6th.',

  keyDiscussion: [
    'Introduction to the SIH Internal Hackathon and its objectives.',
    'Presentation of solutions based on selected problem statements.',
    'Evaluation of projects by judges from different fields of expertise.',
    'Question-and-answer sessions following each team presentation.',
    'Assessment according to specified judging criteria.',
    'Participation of 24 teams from the college.',
    'Announcement of hackathon results on September 6th, 2024.',
  ],

  studentsPresent: [
    '24 participating teams from GBPIET',
  ],

  image: '/activities/ECE/ECE24002.png',
},
{
  id: 'ECE24006',

  title: 'Workshop on Basic Electronics Components',
  category: 'Workshops',
  branch: 'ECE',

  date: 'May 10, 2024',
  time: '2:00 PM - 5:00 PM',
  venue: 'LT-05, ECED',
  organizedBy: 'IEEE (Student Chapter ECE)',

  reportAuthor: 'Akriti Chauhan and Vanshika Painuly',

  overview:
    'IEEE Student Branch (ECE) organized an informative workshop on Basic Electronics Components to introduce students to fundamental electronic components and provide them with practical hands-on experience.',

  description:
    'The session began with a PowerPoint presentation and an explanation of basic electronics components such as resistors, transistors, capacitors, and sensors, highlighting their importance as fundamental elements of electronic circuits and systems. Participants were given hands-on experience with the components and were guided through their working principles. Experts also addressed the doubts raised by the students. A special project was demonstrated during the session, which generated considerable interest among the participants. The session was hosted by Vinay Kathait, with Aditya Raj Haldiya serving as an expert for clarifying doubts. Yogesh Bisht and Akhil Kothari presented their project, while Jay presented the electronics components. Students from the ECE first year primarily attended the workshop.',

  keyDiscussion: [
    'Introduction to basic electronics components.',
    'Understanding resistors, transistors, capacitors, and sensors.',
    'Role of electronic components in circuits and systems.',
    'Hands-on experience with basic electronic components.',
    'Understanding the working principles of different components.',
    'Interactive doubt-clearing session with experts.',
    'Demonstration of a special electronics project.',
    'Project presentation by students.',
  ],

  studentsPresent: [
    'Parth Uniyal',
    'Jay Kumar',
    'Akriti Chauhan',
    'Ashutosh Suyal',
    'Mudit Panwar',
    'Ashmit Rana',
    'Aditya Raj Haldiya',
    'Yogesh Bisht',
    'Akhil Kothari',
  ],

  image: '/activities/ECE/ECE24003.png',
},
{
  id: 'ECE24007',

  title: 'Interview for IEEE Recruitment – Empowering Innovation, Connecting Minds',
  category: 'Recruitment',
  branch: 'ECE',

  date: 'August 26, 2024',
  time: '2:30 PM - 5:40 PM',
  venue: 'LT-03, BTED',
  organizedBy: 'IEEE (Student Chapter)',


  reportAuthor: 'Akriti Chauhan and Vanshika Painuly',

  overview:
    'The IEEE Recruitment Interview was organized under the theme "Empowering Innovation, Connecting Minds" to identify students interested in taking up various positions and contributing to the efficient functioning of the IEEE Student Chapter.',

  description:
    'The session began with the members introducing themselves and discussing their desired positions. A briefing was provided about the various positions available and their significance in the effective functioning of the club. Students were then asked to introduce themselves in writing, mention their desired position, describe their skillset, and explain why they were suitable for the position. The first round of interviews was conducted with candidates appearing before the interview panel in groups of four. Candidates were asked about their desired positions and how they would contribute to the club. In the second round, students competed with their peers for their preferred positions and were encouraged to demonstrate their skills and distinguish themselves from other candidates. Queries were addressed and feedback on performance was provided by the Core Team. The results of the recruitment process were to be disclosed subsequently.',

  keyDiscussion: [
    'Introduction of IEEE members and discussion of desired positions.',
    'Overview of various IEEE positions and their significance.',
    'Submission of candidate introductions, skillsets, and preferred positions.',
    'First-round interviews conducted in groups of four.',
    'Discussion of candidates’ contributions to the IEEE Student Chapter.',
    'Second-round interviews and evaluation of candidates.',
    'Opportunity for candidates to demonstrate their skills and suitability.',
    'Resolution of candidate queries and feedback from the Core Team.',
    'Announcement of recruitment results at a later stage.',
  ],

  studentsPresent: [
    'IEEE Student Chapter members',
    'Students participating in the IEEE recruitment process',
  ],

  image: '/activities/ECE/ECE24004.jpg',
},
{
  id: 'ECE24008',

  title: 'IEEE Introductory Meet',
  category: 'Meetings',
  branch: 'ECE',

  date: 'February 24, 2024',
  time: '4:00 PM - 4:50 PM',
  venue: 'LT-5, EEED',
  organizedBy: 'IEEE (Student Branch ECE)',

  reportAuthor: 'Akriti Chauhan',

  overview:
    'IEEE Student Branch (ECE) organized an engaging introductory meet to familiarize students with IEEE, its benefits, functioning, technical community, and opportunities for active participation.',

  description:
    'The event began with a comprehensive introduction to IEEE, covering its global presence, diverse membership, and the various technical fields associated with the organization. A PowerPoint presentation was used to explain IEEE and its activities in detail. Students were also introduced to various IEEE social media handles and websites. Different positions within the IEEE Student Branch were discussed, highlighting opportunities for students to actively contribute to the IEEE community and develop their identity as future engineers and technologists. Master Abhishekh Lakhera, Chairperson, Master Parth Uniyal, Secretary, and other IEEE members attended the event and shared their experiences and insights with the students. The session was coordinated by members of the IEEE Student Branch.',

  keyDiscussion: [
    'Introduction to IEEE and its global presence.',
    'Understanding the benefits of IEEE membership.',
    'Overview of IEEE functioning and technical fields.',
    'Presentation on IEEE activities and opportunities.',
    'Introduction to IEEE social media handles and websites.',
    'Discussion of various positions within the IEEE Student Branch.',
    'Opportunities for students to actively contribute to IEEE.',
    'Interaction with the Chairperson, Secretary, and other IEEE members.',
  ],

  studentsPresent: [
    'Akshita Nautiyal',
    'Jai Kumar',
    'Akriti Chauhan',
    'Priyanka Bhandari',
    'Mudit Panwar',
    'Ashutosh Suyal',
    'Abhishekh Lakhera',
    'Parth Uniyal',
  ],

  image: '/activities/ECE/ECE24005.jpg',
},
{
  id: 'ECE23009',

  title: 'Recruitment of New Volunteers',
  category: 'Recruitment',
  branch: 'ECE',

  date: 'October 14, 2023',
  time: '10:00 AM',
  venue: 'LT-3, BT Department',
  organizedBy: 'IEEE Student Branch',


  reportAuthor: 'IEEE Student Branch',

  overview:
    'The recruitment session was conducted to select new volunteers from the second year of the graduation course and provide them with an opportunity to learn management skills and handle responsibilities as IEEE members.',

  description:
    'The interview session was conducted on Saturday, October 14, 2023. The purpose of the session was to recruit volunteers from the second year of the graduation course and provide them with an opportunity to learn the management and handling of responsibilities as members of IEEE. The recruitment process was based on responses received through a Google Form circulated earlier, followed by an interview round. The session was coordinated by members of the IEEE Student Branch.',

  keyDiscussion: [
    'Recruitment of new IEEE Student Branch volunteers.',
    'Selection of volunteers from the second year of the graduation course.',
    'Review of responses submitted through the Google Form.',
    'Conducting interviews for the recruitment process.',
    'Understanding management and organizational responsibilities.',
    'Introduction to responsibilities associated with being an IEEE member.',
  ],

  studentsPresent: [
    'Abhishek Lakhera - Students Branch Chairman',
    'Shobhit Kanswal - Students Branch Chairman',
    'Tanmay Bisht - Creative Media Head',
    'Tejas Chhabra - Students Branch Vice Chairman',
    'Shaifali Bhardwaj - Students Branch Vice Chairman',
  ],

  image: '/activities/ECE/ECE23001.jpg',
},
{
  id: 'ECE23010',

  title: 'IEEE Outreach Event - IoT Home Automation Workshop at Government School',
  category: 'Outreach',
  branch: 'ECE',

  date: 'November 1, 2023',
  time: 'N/A',
  venue: 'Government Primary School, Ghurdauri',
  organizedBy: 'GBPIET Student Teacher Branch of IEEE',

  reportAuthor: 'IEEE Student Branch',

  overview:
    'The IEEE outreach event at Government Primary School Ghurdauri aimed to introduce students to the Internet of Things (IoT) and home automation through interactive sessions, hands-on projects, and practical demonstrations.',

  description:
    'The IEEE outreach event was organized at Government Primary School Ghurdauri to familiarize students with IoT and its applications in home automation. The event began with an introduction to the Internet of Things and its relevance in everyday life. Students were provided with hands-on experience involving electronic components and coding to understand the development of IoT-based projects. The volunteers also explained the projects and their applications to the students. The event included refreshments, a motivational session, and a question-and-answer session where students could interact with the volunteers and clarify their doubts. The event successfully provided students with a practical understanding of IoT and encouraged them to explore technology and innovation.',

  keyDiscussion: [
    'Introduction to the Internet of Things (IoT).',
    'Understanding the relevance of IoT in daily life.',
    'Introduction to IoT-based home automation.',
    'Hands-on experience with electronic components.',
    'Understanding coding for IoT-based projects.',
    'Explanation and demonstration of IoT projects.',
    'Motivational session encouraging students to explore technology.',
    'Interactive question-and-answer session.',
  ],

  studentsPresent: [
    'Parth Uniyal',
    'Shubham Bhatt',
    'Priyanshu Bisht',
    'Aditya Raj Haldia',
    'Vinay Kathait',
  ],

  image: '/activities/ECE/ECE23002.png',
},
{
  id: 'ECE23011',

  title: 'Initiative in the Field of Social Welfare by Ghurdauri Engineering College',
  category: 'Outreach',
  branch: 'ECE',

  date: 'September 21, 2023',
  time: 'N/A',
  venue: 'Ghurdauri Junior School',
  organizedBy: 'Ghurdauri Engineering College through IEEE Branch Chapter',

  reportAuthor: 'Ghurdauri Engineering College',

  overview:
    'Ghurdauri Engineering College has been undertaking various social welfare initiatives to support the educational development and upliftment of students at Ghurdauri Junior School.',

  description:
    'As part of its ongoing social welfare initiatives, Ghurdauri Engineering College organized a programme at Ghurdauri Junior School on September 21, 2023. College teachers distributed reading materials among all the students and provided guidance and encouragement for their bright future. The initiative is being conducted through the IEEE Branch Chapter, with an objective of helping school students develop their talents and skills across various fields. Prof. Sanjay Gairola, Dr. K. S. Bhatia, Dr. Manoj Kumar, Mr. Pushkar Praveen, and Dr. Ajay Kumar, along with teachers from the school, were present during the programme. College Director Dr. V.N. Kala has also assured continued support for educational welfare initiatives.',

  keyDiscussion: [
    'Social welfare initiatives undertaken by Ghurdauri Engineering College.',
    'Distribution of reading materials among school students.',
    'Guidance and encouragement for students’ educational development.',
    'Supporting the upliftment of students at Ghurdauri Junior School.',
    'Development of students’ talents and skills through IEEE initiatives.',
    'Collaboration between college teachers and school teachers.',
    'Continued institutional support for educational welfare programmes.',
  ],

  studentsPresent: [
    'Students of Ghurdauri Junior School',
    'Prof. Sanjay Gairola',
    'Dr. K. S. Bhatia',
    'Dr. Manoj Kumar',
    'Mr. Pushkar Praveen',
    'Dr. Ajay Kumar',
    'Teachers of Ghurdauri Junior School',
  ],

  image: '/activities/ECE/ECE23003.jpg',
},
{
  id: 'ECE23012',

  title: 'Nurturing Innovation and Insight - Think Tank Session',
  category: 'Meetings',
  branch: 'ECE',

  date: 'August 26, 2023',
  time: 'N/A',
  venue: 'N/A',
  organizedBy: 'IEEE Student Chapter',

  reportAuthor: 'IEEE Student Chapter',

  overview:
    'IEEE Student Chapter hosted an engaging and enlightening event to introduce students to IEEE, its benefits, functioning, and the opportunities associated with becoming an IEEE member.',

  description:
    'The event began with a comprehensive introduction to IEEE (Institute of Electrical and Electronics Engineers), covering its global presence, diverse membership, and the various technical fields it encompasses. The session emphasized the benefits of IEEE membership, including access to research, networking opportunities, workshops, conferences, and career development resources. The highlight of the event was an interactive Think Tank session where students were encouraged to share their views and ideas on innovation and invention. The session provided students with a platform for intellectual discussion and encouraged them to explore innovative ideas and their potential to contribute to positive change.',

  keyDiscussion: [
    'Introduction to IEEE and its global presence.',
    'Understanding IEEE membership and its benefits.',
    'Overview of technical fields covered by IEEE.',
    'Access to research, networking, workshops, and conferences.',
    'Career development opportunities through IEEE.',
    'Interactive Think Tank session on innovation and invention.',
    'Encouraging students to share innovative ideas and perspectives.',
    'Exploring the potential of students to drive positive change through innovation.',
  ],

  studentsPresent: [
    'IEEE Student Chapter members',
    'Students participating in the Think Tank session',
  ],

  image: '/activities/ECE/ECE23004.jpg',
},

{
  id: 'ECE20014',

  title: 'Industrial Training on "Current Industry Scenario"',
  category: 'Training',
  branch: 'ECE',

  date: 'July 29, 2020 - August 9, 2020',
  time: 'N/A',
  venue: 'Online',
  organizedBy: 'Electronics & Communication Engineering Department, GBPIET Pauri',

  reportAuthor: 'Electronics & Communication Engineering Department, GBPIET Pauri',

  overview:
    'An online industrial training programme was conducted to provide students with insights into the latest industry trends, work culture, business processes, and innovation across IT and core sectors.',

  description:
    'The Electronics & Communication Engineering Department, GBPIET Pauri conducted an online Industrial Training programme on "Current Industry Scenario" from July 29 to August 9, 2020. Around 100 students participated in the live webinar sessions delivered by highly qualified and experienced industry professionals. The training aimed to familiarize students with the latest trends in industry, business process management, current industry work culture, and innovation in IT and core sectors. The experts also shared valuable guidance and tips to help students understand career opportunities and prepare for professional growth in their respective industries.',

  keyDiscussion: [
    'Overview of the current industry scenario.',
    'Latest trends and developments in the industry.',
    'Introduction to business process management.',
    'Understanding current industry work culture.',
    'Innovation and opportunities in the IT sector.',
    'Innovation and developments in core industries.',
    'Insights from experienced industry professionals.',
    'Career guidance and tips for professional growth.',
  ],

  studentsPresent: [
    'Around 100 participating students',
    'Industry professionals and experts',
  ],

  image: '/activities/ECE/ECE20002.png',
},
{
  id: 'ECE20015',

  title: 'Hands-on Workshop on "MATLAB and Data Science using Python"',
  category: 'Workshops',
  branch: 'ECE',

  date: 'September 21, 2020 - September 25, 2020',
  time: 'N/A',
  venue: 'Online',
  organizedBy: 'Department of Electronics & Communication Engineering, GBPIET',

  reportAuthor: 'Department of Electronics & Communication Engineering, GBPIET',

  overview:
    'A hands-on online workshop was organized to provide participants with practical knowledge of MATLAB and introduce them to data science using Python, covering programming fundamentals, data manipulation, and analysis tools.',

  description:
    'The Department of Electronics & Communication Engineering, GBPIET organized a hands-on online workshop on "MATLAB and Data Science using Python" from September 21 to September 25, 2020. Dr. Tapan Kr Jain from IIIT Nagpur conducted three sessions on MATLAB, followed by sessions on data science using Python delivered by Dr. Pooja Jain from IIIT Nagpur. Dr. Tapan introduced participants to MATLAB and demonstrated how its built-in tools and programming capabilities can be used to enhance computing and problem-solving experiences. Dr. Pooja introduced learners to the Python programming environment and fundamental programming techniques, including lambda functions, reading and manipulating CSV files, and the NumPy library. She also covered data manipulation and cleaning techniques using the Python Pandas library and introduced Series and DataFrame as central data structures for data analysis.',

  keyDiscussion: [
    'Introduction to MATLAB and its applications.',
    'Practical use of MATLAB built-in tools.',
    'Programming techniques for enhancing computing with MATLAB.',
    'Introduction to the Python programming environment.',
    'Fundamental Python programming techniques and lambda functions.',
    'Reading and manipulating CSV files using Python.',
    'Introduction to the NumPy library.',
    'Data manipulation and cleaning using Pandas.',
    'Understanding Series and DataFrame for data analysis.',
  ],

  studentsPresent: [
    'Workshop participants',
    'Learners from the Department of Electronics & Communication Engineering',
  ],

  image:'/activities/ECE/ECE20002.png',
},
{
  id: 'ECE22016',

  title: 'Webinar on "Advanced Driver Assistance Systems (ADAS)"',
  category: 'Webinars',
  branch: 'ECE',

  date: 'September 27, 2022',
  time: 'N/A',
  venue: 'Online',
  organizedBy: 'Department of Electronics & Communication Engineering, GBPIET',


  reportAuthor: 'Department of Electronics & Communication Engineering, GBPIET',

  overview:
    'The Department of Electronics & Communication Engineering, GBPIET organized a webinar on Advanced Driver Assistance Systems (ADAS) to introduce students to ADAS technologies, their applications in modern vehicles, and career opportunities in the field of Electronics and Communication Engineering.',

  description:
    'The Department of Electronics & Communication Engineering, GBPIET organized a webinar on "Advanced Driver Assistance Systems (ADAS)" on September 27, 2022. The session was delivered by industry expert Mr. Shashank Shekar from Netradyne, an alumnus of GBPIET who completed his B.Tech in ECE in 2013 and has more than nine years of industry experience with organizations including Broadcom, Micromax, and Netradyne. Mr. Shashank Shekar introduced participants to the basics of the ADAS environment and explained its applications in modern vehicles and related industries. The session covered applications such as fleet tracking, driver safety, the insurance industry, 3D mapping of roads, and data collection for autonomous vehicle testing and simulation. He also discussed various career and professional opportunities available in the field of Electronics and Communication Engineering. The webinar was supported by Mr. Pushkar Praveen and Dr. K.S. Bhatia.',

  keyDiscussion: [
    'Introduction to Advanced Driver Assistance Systems (ADAS).',
    'Understanding the ADAS environment and its features.',
    'Applications of ADAS in modern-day vehicles.',
    'Fleet tracking and driver safety technologies.',
    'Applications of ADAS in the insurance industry.',
    '3D mapping of roads.',
    'Data collection for autonomous vehicle testing and simulation.',
    'Career and professional opportunities in Electronics and Communication Engineering.',
    'Industry insights from an ECE alumnus and professional.',
  ],

  studentsPresent: [
    'Students of the Department of Electronics & Communication Engineering',
    'Mr. Shashank Shekar - Industry Expert and GBPIET Alumnus',
  ],

  image: '/activities/ECE/ECE20004.png',
},
{
  id: 'ECE20018',

  title: 'Workshop on "OptiSystem Fundamentals and Design Techniques"',
  category: 'Workshops',
  branch: 'ECE',

  date: 'September 14, 2020 - September 16, 2020',
  time: 'N/A',
  venue: 'Online',
  organizedBy: 'Department of Electronics & Communication Engineering, GBPIET Pauri',

  reportAuthor: 'Department of Electronics & Communication Engineering, GBPIET Pauri',

  overview:
    'An online workshop on OptiSystem Fundamentals and Design Techniques was organized to provide students with practical exposure to the design and simulation of optical links used in modern optical networks.',

  description:
    'The Department of Electronics & Communication Engineering, GBPIET Pauri organized an online workshop on "OptiSystem Fundamentals and Design Techniques" from September 14 to September 16, 2020, sponsored by TEQIP-3. The workshop aimed to provide participants with hands-on experience in designing and simulating optical links for modern optical networks. The workshop was attended by third and fourth-year students and was open to students from all branches, receiving active participation across the institute. Mr. Amandeep Singh from HR Universal System Inc. introduced participants to the OptiSystem software, its applications, and the basics of getting started with it. Interactive examples were used to explain theoretical concepts, including digital communication modulation techniques such as QPSK and FSK. The programme consisted of three two-hour sessions, with discussions and Q&A sessions between them to reinforce learning. During the final session, a satellite communication project was presented, integrating the concepts and knowledge acquired throughout the workshop. The programme was conducted successfully with the support and contributions of the Principal, faculty members, and students.',

  keyDiscussion: [
    'Introduction to OptiSystem software and its applications.',
    'Fundamentals of optical communication systems.',
    'Design and simulation of optical links.',
    'Applications of optical networks in modern communication.',
    'Digital communication modulation techniques such as QPSK and FSK.',
    'Interactive software-based examples and demonstrations.',
    'Discussion and question-and-answer sessions.',
    'Satellite communication project using concepts covered during the workshop.',
  ],

  studentsPresent: [
    'Third-year students',
    'Fourth-year students',
    'Students from various branches of GBPIET',
  ],

  image: '/activities/ECE/ECE20006.jpeg',
},
{
  id: 'ECE22017',
    id: 'ECE20018',

    title: 'Workshop on "OptiSystem Fundamentals and Design Techniques"',
    category: 'Workshops',
    branch: 'ECE',

    date: 'September 14, 2020 - September 16, 2020',
    time: 'N/A',
    venue: 'Online',
    organizedBy: 'Department of Electronics & Communication Engineering, GBPIET Pauri',

    reportAuthor: 'Department of Electronics & Communication Engineering, GBPIET Pauri',

    overview:
      'An online workshop on OptiSystem Fundamentals and Design Techniques was organized to provide students with practical exposure to the design and simulation of optical links used in modern optical networks.',

    description:
      'The Department of Electronics & Communication Engineering, GBPIET Pauri organized an online workshop on "OptiSystem Fundamentals and Design Techniques" from September 14 to September 16, 2020, sponsored by TEQIP-3. The workshop aimed to provide participants with hands-on experience in designing and simulating optical links for modern optical networks. The workshop was attended by third and fourth-year students and was open to students from all branches, receiving active participation across the institute. Mr. Amandeep Singh from HR Universal System Inc. introduced participants to the OptiSystem software, its applications, and the basics of getting started with it. Interactive examples were used to explain theoretical concepts, including digital communication modulation techniques such as QPSK and FSK. The programme consisted of three two-hour sessions, with discussions and Q&A sessions between them to reinforce learning. During the final session, a satellite communication project was presented, integrating the concepts and knowledge acquired throughout the workshop. The programme was conducted successfully with the support and contributions of the Principal, faculty members, and students.',

    keyDiscussion: [
      'Introduction to OptiSystem software and its applications.',
      'Fundamentals of optical communication systems.',
      'Design and simulation of optical links.',
      'Applications of optical networks in modern communication.',
      'Digital communication modulation techniques such as QPSK and FSK.',
      'Interactive software-based examples and demonstrations.',
      'Discussion and question-and-answer sessions.',
      'Satellite communication project using concepts covered during the workshop.',
    ],

    studentsPresent: [
      'Third-year students',
      'Fourth-year students',
      'Students from various branches of GBPIET',
    ],

    image: '/activities/ECE/ECE20006.jpeg',
  },

  title: 'Training and E-Content Development Programme on "Python Programming"',
  category: 'Training',
  branch: 'ECE',

  date: 'September 15, 2022 - September 24, 2022',
  time: 'N/A',
  venue: 'Online',
  organizedBy:
    'PDPM Indian Institute of Information Technology, Design and Manufacturing, Jabalpur, India',

  reportAuthor: 'PDPM IIITDM Jabalpur',

  overview:
    'A training and e-content development programme on Python programming was organized to provide participants with essential programming skills and advanced knowledge in machine learning and data visualization. The programme also aimed to empower girls and contribute towards reducing the gender gap in the IT sector in the South Asian region.',

  description:
    'The training programme on Python programming was conducted by PDPM Indian Institute of Information Technology, Design and Manufacturing, Jabalpur, India. The programme commenced on September 15, 2022, with the inauguration conducted by Dean Academics Dr. A.K. Gautam. The training was conducted from September 15-17 and September 22-24, 2022, with quizzes held on September 17 and September 24 to evaluate the progress of participants. Students were introduced to the essentials of Python programming, including data types, conditional statements, and error handling. The programme also provided in-depth knowledge of machine learning and data visualization. Approximately 1000 participants from different parts of the world registered for the programme. The training was completed successfully on September 24, 2022, with support from Dr. K.S. Bhatia, Dr. A.R. Verma, and Mr. Pushkar Praveen.',

  keyDiscussion: [
    'Introduction to Python programming.',
    'Understanding Python data types.',
    'Conditional statements and programming logic.',
    'Error handling techniques in Python.',
    'Introduction to machine learning.',
    'Data visualization using Python.',
    'Evaluation of participant progress through quizzes.',
    'Empowering girls and reducing the gender gap in the IT sector.',
    'Practical learning through training and e-content development.',
  ],

  studentsPresent: [
    'Approximately 1000 registered participants',
    'Participants from different parts of the world',
  ],

  image: '/activities/ECE/ECE20005.png',
},
{
  id: 'ECE22019',

  title: 'Webinar on "Future Outlook of Grid Compliance for Wind Turbines and Wind Power Plants"',
  category: 'Webinars',
  branch: 'ECE',

  date: 'October 19, 2022',
  time: 'N/A',
  venue: 'Online - MS Teams',
  organizedBy: 'IEEE GBPIET Student Branch',
  reportAuthor: 'IEEE GBPIET Student Branch',

  overview:
    'An online webinar was organized to provide students with insights into the future outlook of grid compliance for wind turbines and wind power plants, along with emerging innovations and developments in wind energy generation.',

  description:
    'The webinar was conducted on October 19, 2022, in online mode through MS Teams by the IEEE GBPIET Student Branch. The session was delivered by Gabriel Miguel Gomes Guerreiro from the Industrial PhD Department of Wind Energy at the Technical University of Denmark (DTU). Approximately 120-150 students registered their presence along with faculty members. The webinar focused on future developments and innovations in energy generation through wind energy. Participants gained insights into the growth and potential of wind power and the importance of integrating wind energy into modern power generation systems.',

  keyDiscussion: [
    'Future outlook of grid compliance for wind turbines.',
    'Grid compliance requirements for wind power plants.',
    'Emerging innovations in wind energy generation.',
    'Growth and potential of wind power generation.',
    'Integration of wind energy into modern power systems.',
    'Future developments in renewable energy technologies.',
    'Industry and research perspectives on wind energy.',
  ],

  studentsPresent: [
    'Approximately 120-150 registered students',
    'Faculty members of GBPIET',
  ],

  image: '/activities/ECE/ECE22001.png',
},
{
  id: 'ECE22020',

  title: 'Webinar on "Carbon-Aware Computing @Google and Beyond"',
  category: 'Webinars',
  branch: 'ECE',

  date: 'December 1, 2022',
  time: 'N/A',
  venue: 'Online - MS Teams',
  organizedBy: 'IEEE GBPIET Student Branch',


  reportAuthor: 'IEEE GBPIET Student Branch',

  overview:
    'An online webinar was organized to introduce students to the concept of carbon-aware computing, its development in recent years, and approaches for reducing the environmental impact of computing systems.',

  description:
    'The webinar was conducted on December 1, 2022, in online mode through MS Teams. The session was delivered by Ana Radovanovic, who holds a PhD in Electrical Engineering from Columbia University. The webinar introduced participants to the basic concept of carbon-aware computing and discussed its relevance and impact in recent years. The session also covered Google’s efforts towards reducing its carbon footprint and explored approaches and considerations associated with reducing the environmental impact of computing.',

  keyDiscussion: [
    'Introduction to carbon-aware computing.',
    'Understanding the environmental impact of computing.',
    'Development and relevance of carbon-aware computing in recent years.',
    'Google’s efforts to reduce its carbon footprint.',
    'Approaches for reducing carbon emissions from computing systems.',
    'Environmental considerations in modern computing.',
    'Future perspectives on sustainable and carbon-aware computing.',
  ],

  studentsPresent: [
    'Students participating in the webinar',
    'Faculty members of GBPIET',
  ],

  image: '/activities/ECE/ECE22002.png',
},
{
  id: 'ECE22021',

  title: 'Webinar on "Exposure for Beginners: Journey from Electrons to Photons Past, Present, and Future"',
  category: 'Webinars',
  branch: 'ECE',

  date: 'May 13, 2022',
  time: '3:00 PM - 4:00 PM',
  venue: 'Online - MS Teams',
  organizedBy: 'IEEE GBPIET Student Branch',

  reportAuthor: 'IEEE GBPIET Student Branch',

  overview:
    'An online webinar organized on the occasion of International Day of Light 2022, focusing on the journey from electrons to photons and exploring its past, present, and future.',

  description:
    'The webinar was conducted on May 13, 2022, from 3:00 PM to 4:00 PM through MS Teams. The event was organized on the occasion of International Day of Light 2022 as part of the celebrations of Azadi Ka Amrit Mahotsav, commemorating the 75th Anniversary of Indian Independence. The session was delivered by Dr. Rikmantra Basu, a faculty member at NIT Delhi. Faculty members, IEEE members, and students participated in the webinar. The session provided insights into the origins, present developments, and future perspectives of the journey from electrons to photons.',

  keyDiscussion: [
    'Introduction to the journey from electrons to photons.',
    'Historical origin and development of concepts related to electrons and photons.',
    'Present scenario and advancements in the field.',
    'Future perspectives and emerging possibilities involving electrons and photons.',
    'Importance of light and photonics in modern technology.',
    'Insights into the evolving role of photonics and related technologies.',
  ],

  studentsPresent: [
    'Students participating in the webinar',
    'IEEE members',
    'Faculty members of GBPIET',
  ],

  image: '/activities/ECE/ECE22003.png',
},

];
