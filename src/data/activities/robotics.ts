import type { Activity } from './events';

export const roboticsActivities: Activity[] = [
  {
    id: 'computer-vision-2026',
    title: 'Computer Vision with OpenCV and MediaPipe',
    category: 'Workshops',
    date: 'Sep 24, 2026',
    description: 'Teaching machines to see. Explore the fundamentals of image processing and real-time computer vision.',
    longDescription: 'Teaching machines to see. Explore the fundamentals of image processing and real-time computer vision using OpenCV and MediaPipe. This session covers object detection, gesture and motion tracking, and how vision systems can be used to control hardware in real time — bridging the gap between AI perception and physical action. Location: CS/IT Lab 3, GBPIET.',
    image: '/images/roboticsImages/computer-vision.jpg', // <-- Starts with a slash now
    branch: 'Robotics',
  },
  {
    id: 'rag-genai-2026',
    title: 'RAG-Based Campus Assistant (Generative AI)',
    category: 'Workshops',
    date: 'Oct 8, 2026',
    description: 'Building an AI that actually knows your campus. Get hands-on with Retrieval-Augmented Generation (RAG).',
    longDescription: 'Building an AI that actually knows your campus. Get hands-on with Retrieval-Augmented Generation (RAG), one of the most practical applications of modern generative AI. Participants will learn how open-source LLMs can be combined with a custom knowledge base to build a functional campus information assistant — covering embeddings, vector search, and prompt engineering along the way. Location: Auditorium C, GBPIET.',
    image: '/images/roboticsImages/rag-ai.jpg', // <-- Starts with a slash now
    branch: 'Robotics',
  },
  {
    id: 'cybersecurity-ctf-2026',
    title: 'Cybersecurity and CTF Basics',
    category: 'Workshops',
    date: 'Oct 22, 2026',
    description: 'Think like an attacker, defend like a pro. An introduction to the world of cybersecurity through hands-on, practical learning.',
    longDescription: 'Think like an attacker, defend like a pro. An introduction to the world of cybersecurity through hands-on, practical learning. This workshop covers foundational security concepts, simulated attack-and-defense scenarios, and an introduction to Capture the Flag (CTF) competitions — giving participants a taste of ethical hacking and security problem-solving. Location: Seminar Hall 1, GBPIET.',
    image: '/images/roboticsImages/cybersecurity.jpg', // <-- Starts with a slash now
    branch: 'Robotics',
  }
];