import type { EventItem } from '@/types/content';

export const events: EventItem[] = [
  {
    id: 'himalayan-hackathon-2026',
    title: 'Himalayan TechHacks 2026: National 36-Hour Hackathon',
    category: 'Hackathon',
    description:
      'Annual flagship technical hackathon gathering 250+ student developers and hardware engineers to solve pressing challenges in climate resilience, disaster mitigation, and smart rural infrastructure.',
    date: 'OCT 24 - 26, 2026',
    time: '36-Hour Non-stop Sprint',
    location: 'Central Computing Auditorium, GBPIET Campus',
    imageUrl: '/images/hero_engineering_lab.jpg',
    registrationUrl: 'https://ieee-gbpiet.org/hackathon',
    status: 'Upcoming',
    badge: 'Flagship Event',
  },
  {
    id: 'pcb-design-altium',
    title: 'Hands-On High-Speed Multilayer PCB Design with Altium',
    category: 'Workshop',
    description:
      'Comprehensive 2-day intensive bootcamp covering schematic capture, differential pair signal routing, impedance matching, power plane optimization, and Gerber fabrication generation.',
    date: 'NOV 12 - 13, 2026',
    time: '10:00 AM - 4:30 PM IST',
    location: 'VLSI & Embedded Systems Research Lab',
    imageUrl: '/images/about_engineering_bench.jpg',
    registrationUrl: 'https://ieee-gbpiet.org/workshops/pcb',
    status: 'Upcoming',
    badge: 'Hardware Lab',
  },
  {
    id: 'embedded-ros2-robotics',
    title: 'Autonomous Robotics with ROS 2 & Micro-ROS on Microcontrollers',
    category: 'Workshop',
    description:
      'Practical masterclass on bridging embedded microcontrollers (ESP32/STM32) to ROS 2 Humble over serial and Wi-Fi DDS channels for real-time robotic actuator control.',
    date: 'DEC 05, 2026',
    time: '02:00 PM - 06:00 PM IST',
    location: 'Robotics Center of Excellence',
    imageUrl: '/images/project_rover.jpg',
    registrationUrl: 'https://ieee-gbpiet.org/workshops/ros2',
    status: 'Upcoming',
    badge: 'Hands-on',
  },
  {
    id: 'quantum-computing-talk',
    title: 'Distinguished Lecture: Frontiers in Superconducting Quantum Qubits',
    category: 'Technical Talk',
    description:
      'Keynote discourse by IEEE Senior Member Dr. A. Sharma on cryo-CMOS readouts, quantum error correction surface codes, and NISQ-era algorithms.',
    date: 'DEC 18, 2026',
    time: '11:00 AM IST',
    location: 'Hybrid • Seminar Hall & Zoom Live',
    imageUrl: '/images/about_engineering_bench.jpg',
    registrationUrl: 'https://ieee-gbpiet.org/talks/quantum',
    status: 'Upcoming',
    badge: 'Distinguished Lecture',
  },
];
