import type { ActivityChapter } from '@/types/content';
import type { Activity } from '@/types/activity';

export const featuredActivity: Activity = {
  id: 'featured-himalayan-techhacks-2026',
  slug: 'himalayan-techhacks-2026',
  title: 'Himalayan TechHacks 2026: 36-Hour Autonomous Systems Hackathon',
  category: 'COMPETITIONS',
  date: 'OCTOBER 14-16, 2026',
  time: '36 Hours Non-Stop',
  location: 'Innovation Complex & Robotics Incubation Center, GBPIET Campus',
  description:
    'The premier national hackathon hosted by the IEEE GBPIET Student Branch, bringing together 300+ student engineers across India to design edge computing, autonomous robotics, and smart energy hardware prototypes under intense industry mentorship.',
  shortDescription:
    'National 36-hour sprint prototyping autonomous hardware, embedded sensors, and edge AI systems with a ₹1,50,000 prize pool.',
  image: '/images/hero_engineering_lab.jpg',
  featured: true,
  tags: ['Autonomous Systems', 'Hardware Prototyping', 'Edge AI', 'IoT', 'Prize: ₹1.5L'],
  ctaText: 'VIEW DETAILS',
  ctaLink: '#himalayan-techhacks-2026',
};

export const activitiesList: Activity[] = [
  // ==========================================
  // WORKSHOPS
  // ==========================================
  {
    id: 'act-pcb-masterclass',
    slug: 'pcb-layout-masterclass',
    title: 'Altium Designer & High-Speed PCB Layout Masterclass',
    category: 'WORKSHOPS',
    date: 'AUG 22, 2026',
    time: '10:00 AM - 4:30 PM',
    location: 'Electronics System Design Lab',
    description:
      'Hands-on masterclass covering multi-layer stackup design, differential pair routing, controlled impedance, and Gerber rule verification for production-grade PCBs.',
    shortDescription:
      'Multi-layer PCB routing, impedance matching, and Gerber verification for rapid hardware prototyping.',
    image: '/images/about_engineering_bench.jpg',
    tags: ['Altium', 'PCB Design', 'Hardware', 'Fabrication'],
    ctaText: 'LEARN MORE',
    ctaLink: '#act-pcb-masterclass',
  },
  {
    id: 'act-ros2-bootcamp',
    slug: 'ros2-autonomous-bootcamp',
    title: 'ROS 2 & Autonomous Mobile Robotics Bootcamp',
    category: 'WORKSHOPS',
    date: 'SEP 05, 2026',
    time: '9:30 AM - 5:00 PM',
    location: 'Robotics Incubation Lab',
    description:
      'Rigorous 3-day practical bootcamp covering ROS 2 Humble nodes, LiDAR SLAM mapping, kinematic control loops, and Nav2 path planning on Ubuntu Linux.',
    shortDescription:
      'ROS 2 nodes, LiDAR SLAM, URDF kinematics, and Nav2 autonomous path planning.',
    image: '/images/project_rover.jpg',
    tags: ['ROS 2', 'Robotics', 'SLAM', 'Linux'],
    ctaText: 'LEARN MORE',
    ctaLink: '#act-ros2-bootcamp',
  },
  {
    id: 'act-tinyml-stm32',
    slug: 'tinyml-edge-ai-stm32',
    title: 'TinyML: Edge Intelligence on ARM Cortex Microcontrollers',
    category: 'WORKSHOPS',
    date: 'OCT 02, 2026',
    time: '11:00 AM - 3:30 PM',
    location: 'Advanced Computing Lab',
    description:
      'Deploying quantized TensorFlow Lite neural models onto ARM Cortex-M4 silicon for real-time accelerometer vibration anomaly detection and sensor inference.',
    shortDescription:
      'Quantized TensorFlow Lite neural deployment on ARM microcontrollers for edge classification.',
    image: '/images/hero_engineering_lab.jpg',
    tags: ['TinyML', 'Embedded AI', 'ARM', 'TensorFlow'],
    ctaText: 'LEARN MORE',
    ctaLink: '#act-tinyml-stm32',
  },

  // ==========================================
  // EVENTS
  // ==========================================
  {
    id: 'act-ieee-day-2026',
    slug: 'ieee-day-2026',
    title: 'IEEE Day 2026: Technology for Humanity Symposium',
    category: 'EVENTS',
    date: 'OCT 06, 2026',
    time: '9:00 AM - 5:00 PM',
    location: 'Institute Main Auditorium',
    description:
      'Annual worldwide celebration featuring keynote addresses from IEEE Senior Members, technical research paper presentations, and campus hardware demos.',
    shortDescription:
      'Worldwide celebration of IEEE with keynote speeches, paper presentations, and hardware exhibitions.',
    image: '/images/about_engineering_bench.jpg',
    tags: ['Symposium', 'Keynotes', 'Global Community', 'IEEE Day'],
    ctaText: 'LEARN MORE',
    ctaLink: '#act-ieee-day-2026',
  },
  {
    id: 'act-ev-powertrains',
    slug: 'ev-powertrains-lecture',
    title: 'Industrial Session: Next-Gen EV Powertrains & 800V Architecture',
    category: 'EVENTS',
    date: 'SEP 18, 2026',
    time: '2:30 PM - 4:30 PM',
    location: 'Seminar Hall B & Virtual Stream',
    description:
      'Distinguished industrial lecture with automotive power electronics leaders discussing Silicon Carbide (SiC) inverters, battery management systems, and high-voltage grids.',
    shortDescription:
      'Automotive industry leaders discussing 800V SiC inverters and advanced battery management.',
    image: '/images/hero_engineering_lab.jpg',
    tags: ['EV Powertrain', 'Power Electronics', 'Industry Lecture'],
    ctaText: 'LEARN MORE',
    ctaLink: '#act-ev-powertrains',
  },
  {
    id: 'act-annual-induction',
    slug: 'annual-induction-2026',
    title: 'Annual Student Branch Induction & Innovation Showcase',
    category: 'EVENTS',
    date: 'AUG 10, 2026',
    time: '1:00 PM - 5:00 PM',
    location: 'Campus Amphitheatre & Innovation Hub',
    description:
      'Welcoming sophomore engineering cohorts into IEEE technical societies, showcasing active multi-semester hardware prototypes, and onboarding new members.',
    shortDescription:
      'Welcoming new engineering cohorts with live lab demonstrations and project group allocations.',
    image: '/images/project_rover.jpg',
    tags: ['Induction', 'Orientation', 'Campus Community'],
    ctaText: 'LEARN MORE',
    ctaLink: '#act-annual-induction',
  },

  // ==========================================
  // COMPETITIONS
  // ==========================================
  {
    id: 'act-techhacks-grid',
    slug: 'himalayan-techhacks-grid',
    title: 'Himalayan TechHacks: National Hardware Hackathon',
    category: 'COMPETITIONS',
    date: 'OCT 14-16, 2026',
    time: '36 Hours Continuous',
    location: 'Innovation Complex, GBPIET',
    description:
      'Flagship 36-hour national sprint where 70+ selected teams prototype embedded disaster relief telemetry, autonomous robots, and energy grid innovations.',
    shortDescription:
      'National 36-hour hackathon challenging student teams to prototype autonomous hardware solutions.',
    image: '/images/hero_engineering_lab.jpg',
    tags: ['Hackathon', 'Autonomous Systems', 'Cash Prizes'],
    ctaText: 'LEARN MORE',
    ctaLink: '#himalayan-techhacks-2026',
  },
  {
    id: 'act-micromouse-challenge',
    slug: 'micromouse-maze-challenge',
    title: 'National Micromouse Autonomous Maze Solver Challenge',
    category: 'COMPETITIONS',
    date: 'NOV 12, 2026',
    time: '10:00 AM - 6:00 PM',
    location: 'Mechanical Arena & Robotics Lab',
    description:
      'High-speed autonomous mobile robot contest requiring custom PCB mice, flood-fill graph traversal algorithms, infrared optical sensors, and precision PID tuning.',
    shortDescription:
      'Autonomous mobile robot maze traversal using flood-fill algorithms and precision PID motor tuning.',
    image: '/images/about_engineering_bench.jpg',
    tags: ['Micromouse', 'Algorithms', 'PID Control', 'Robotics'],
    ctaText: 'LEARN MORE',
    ctaLink: '#act-micromouse-challenge',
  },
  {
    id: 'act-cad-ideathon',
    slug: 'cad-prototyping-sprint',
    title: 'CAD Structural Ideathon & Rapid 3D Prototyping Sprint',
    category: 'COMPETITIONS',
    date: 'NOV 28, 2026',
    time: '9:00 AM - 9:00 PM',
    location: 'CAD Design Center',
    description:
      'Intense 12-hour CAD sprint modeling lightweight planetary gearboxes, rover chassis structures, and drone arm assemblies verified through FEA stress analysis.',
    shortDescription:
      '12-hour CAD sprint modeling lightweight robotic structures and planetary gearboxes.',
    image: '/images/project_rover.jpg',
    tags: ['CAD', 'Finite Element', '3D Printing', 'Mechanical'],
    ctaText: 'LEARN MORE',
    ctaLink: '#act-cad-ideathon',
  },

  // ==========================================
  // PROJECTS
  // ==========================================
  {
    id: 'act-project-aurora',
    slug: 'project-aurora-rover',
    title: 'Project AURORA: Autonomous Planetary Rover Initiative',
    category: 'PROJECTS',
    date: 'ONGOING • 2026',
    location: 'Robotics Incubation Lab',
    description:
      'Multi-semester student engineering project building a 6-wheel rocker-bogie planetary rover equipped with stereoscopic visual odometry, autonomous obstacle avoidance, and robotic arm articulation.',
    shortDescription:
      '6-wheel rocker-bogie Mars rover with autonomous hazard navigation and robotic manipulation.',
    image: '/images/project_rover.jpg',
    tags: ['Rocker-Bogie', 'ROS 2', 'Autonomous Rover', 'Stereo Depth'],
    ctaText: 'LEARN MORE',
    ctaLink: '/projects#aurora',
  },
  {
    id: 'act-himalayan-microgrid',
    slug: 'himalayan-smart-microgrid',
    title: 'Himalayan Smart Microgrid & LoRaWAN Environmental Grid',
    category: 'PROJECTS',
    date: 'ONGOING • 2026',
    location: 'Garhwal Mountain Stations',
    description:
      'Solar-powered environmental sensor nodes deployed along Himalayan mountain passes transmitting high-altitude microclimate data and early landslide telemetry via mesh LoRaWAN.',
    shortDescription:
      'Solar-powered environmental sensor nodes transmitting microclimate telemetry via LoRa mesh.',
    image: '/images/about_engineering_bench.jpg',
    tags: ['LoRaWAN', 'IoT', 'Clean Energy', 'Telemetry'],
    ctaText: 'LEARN MORE',
    ctaLink: '/projects#microgrid',
  },
  {
    id: 'act-pantbot-quadruped',
    slug: 'pantbot-quadruped',
    title: 'PantBot: 12-DOF Dynamic Legged Quadruped Robot',
    category: 'PROJECTS',
    date: 'ONGOING • 2026',
    location: 'Mechatronics Prototyping Bay',
    description:
      'Four-legged dynamic walking robot prototype employing custom brushless planetary actuators, high-rate IMU balance estimators, and closed-loop trotting gait generation.',
    shortDescription:
      '12-DOF legged robot implementing closed-loop inverse kinematics and dynamic gait stabilization.',
    image: '/images/hero_engineering_lab.jpg',
    tags: ['Quadruped', 'Inverse Kinematics', 'Actuators', 'Mechatronics'],
    ctaText: 'LEARN MORE',
    ctaLink: '/projects#pantbot',
  },

  // ==========================================
  // OUTREACH
  // ==========================================
  {
    id: 'act-empower-stem',
    slug: 'empowerstem-school-outreach',
    title: 'EmpowerSTEM: Rural High School Robotics & Code Workshop',
    category: 'OUTREACH',
    date: 'JUL 15, 2026',
    time: '9:00 AM - 3:00 PM',
    location: 'Govt Inter College, Pauri Garhwal',
    description:
      'Flagship community initiative where IEEE student volunteers mentor 120+ rural high school students in introductory electronics, sensor circuits, and visual programming.',
    shortDescription:
      'Mentoring 120+ rural high school students in introductory electronics and visual programming.',
    image: '/images/about_engineering_bench.jpg',
    tags: ['STEM Education', 'Community', 'Arduino', 'Rural Outreach'],
    ctaText: 'LEARN MORE',
    ctaLink: '#act-empower-stem',
  },
  {
    id: 'act-wie-leadership',
    slug: 'wie-leadership-summit',
    title: 'Women in Engineering (WIE) Tech & Leadership Summit',
    category: 'OUTREACH',
    date: 'AUG 28, 2026',
    time: '11:00 AM - 4:00 PM',
    location: 'Virtual & Conference Center',
    description:
      'Empowering female engineering undergraduates through research paper writing circles, industrial panels, and sponsored IEEE student memberships.',
    shortDescription:
      'Empowering female engineering students through career panels, tech talks, and research mentorship.',
    image: '/images/hero_engineering_lab.jpg',
    tags: ['WIE', 'Diversity', 'Leadership', 'Mentorship'],
    ctaText: 'LEARN MORE',
    ctaLink: '#act-wie-leadership',
  },
  {
    id: 'act-ewaste-drive',
    slug: 'campus-ewaste-drive',
    title: 'Campus E-Waste Management & Sustainable Silicon Drive',
    category: 'OUTREACH',
    date: 'SEP 25, 2026',
    time: '10:00 AM - 5:00 PM',
    location: 'GBPIET Campus Grounds',
    description:
      'Annual environmental awareness campaign collecting discarded PCBs, battery packs, and electronics across campus departments for safe, certified metallurgical recycling.',
    shortDescription:
      'Campus-wide sustainable electronics drive collecting discarded PCBs and lithium cells for certified recycling.',
    image: '/images/about_engineering_bench.jpg',
    tags: ['Sustainability', 'Green Tech', 'Environment', 'Recycling'],
    ctaText: 'LEARN MORE',
    ctaLink: '#act-ewaste-drive',
  },
];

export const activityChapters: ActivityChapter[] = [
  {
    id: 'ras',
    name: 'Robotics & Automation Society (RAS)',
    code: 'RAS-GBPIET',
    description:
      'Fosters hands-on engineering in autonomous mobile robotics, embedded kinematic control, computer vision, and national rover competition participation.',
    lead: 'Student Chapter Lead: Dev Kothari',
    initiatives: [
      'Project AURORA Planetary Rover',
      'Autonomous Drone Telemetry',
      'Micro-ROS Firmware Bootcamps',
    ],
    icon: 'Bot',
  },
  {
    id: 'cs',
    name: 'IEEE Computer Society (CS)',
    code: 'CS-GBPIET',
    description:
      'Champions open-source software engineering, distributed systems, competitive programming sprints, and high-performance algorithms.',
    lead: 'Student Chapter Lead: Ananya Joshi',
    initiatives: [
      'Annual Himalayan TechHacks',
      'Algorithmic Systems Series',
      'Cloud Architecture Labs',
    ],
    icon: 'Terminal',
  },
  {
    id: 'wie',
    name: 'Women in Engineering (WIE)',
    code: 'WIE-GBPIET',
    description:
      'Empowers and advances female students and researchers in science, technology, engineering, and mathematics through mentorship and leadership circles.',
    lead: 'Affinity Group Chair: Priya Negi',
    initiatives: [
      'EmpowerSTEM Rural School Outreach',
      'Women Leaders in Tech Keynotes',
      'Hack-Equal Hackathon',
    ],
    icon: 'Sparkles',
  },
  {
    id: 'cas-pes',
    name: 'Power & Circuits Society (PES/CAS)',
    code: 'PES-CAS-GBPIET',
    description:
      'Investigates sustainable microgrids, smart high-voltage battery storage, analog filter designs, and precision sensor signal conditioning.',
    lead: 'Chapter Lead: Aarav Singh',
    initiatives: [
      'Smart 16S BMS Prototype',
      'Solar MPPT Field Deployment',
      'Altium PCB Masterclasses',
    ],
    icon: 'Zap',
  },
];
