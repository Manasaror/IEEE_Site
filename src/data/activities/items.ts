export type Activity = {
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
};
export const activities: Activity[] = [
  {
    title: 'Himalayan TechHacks',
    category: 'Competition',
    date: 'October 2026',
    description: 'A national hardware and software hackathon for student innovators.',
    image: '/images/hero_engineering_lab.jpg',
  },
  {
    title: 'PCB Design Masterclass',
    category: 'Workshop',
    date: 'August 2026',
    description: 'Practical learning in PCB layout and fabrication workflows.',
    image: '/images/about_engineering_bench.jpg',
  },
  {
    title: 'Project AURORA',
    category: 'Project',
    date: 'Ongoing',
    description: 'Autonomous rover research and development by student members.',
    image: '/images/project_rover.jpg',
  },
];
