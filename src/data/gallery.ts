export interface GalleryItem {
  id: string;
  title: string;
  category: 'Workshops' | 'Projects' | 'Hackathons' | 'Campus';
  caption: string;
  imageUrl: string;
  tag: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Hardware Prototyping & Testing Bench',
    category: 'Projects',
    caption:
      'Student engineers debugging customized STM32 motor driver PCB and oscilloscope signals.',
    imageUrl: '/images/hero_engineering_lab.jpg',
    tag: 'Hardware Lab',
  },
  {
    id: 'g2',
    title: 'Collaborative Schematic Design Session',
    category: 'Workshops',
    caption:
      'Executive and technical leads reviewing schematic architecture and circuit layout for IEEE projects.',
    imageUrl: '/images/about_engineering_bench.jpg',
    tag: 'Altium Workshop',
  },
  {
    id: 'g3',
    title: 'Project AURORA Rocker-Bogie Chassis Inspection',
    category: 'Projects',
    caption:
      'Testing 6-wheel rover robotic gripper articulation and LiDAR mount calibration in workshop.',
    imageUrl: '/images/project_rover.jpg',
    tag: 'Robotics',
  },
  {
    id: 'g4',
    title: 'Autonomous System Telemetry Review',
    category: 'Hackathons',
    caption: 'Hardware teams validating real-time sensor streams and sensor fusion performance.',
    imageUrl: '/images/hero_engineering_lab.jpg',
    tag: 'Hackathon',
  },
  {
    id: 'g5',
    title: 'Soldering & Microcontroller Interfacing Lab',
    category: 'Workshops',
    caption: 'Junior student members assembling surface-mount components during winter bootcamp.',
    imageUrl: '/images/about_engineering_bench.jpg',
    tag: 'Hands-on Lab',
  },
  {
    id: 'g6',
    title: 'All-Terrain Rover Navigation Trials',
    category: 'Projects',
    caption: 'Outdoor field testing of obstacle avoidance and autonomous waypoint navigation.',
    imageUrl: '/images/project_rover.jpg',
    tag: 'Field Test',
  },
];
