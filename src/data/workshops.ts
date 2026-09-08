export interface WorkshopItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  tools: string[];
  schedule: string;
}

export const workshops: WorkshopItem[] = [
  {
    id: 'embedded-systems',
    title: 'Embedded Systems & ARM Architecture',
    category: 'Hardware',
    duration: '2 Days Intensive',
    level: 'Intermediate',
    description:
      'Master register-level programming, bare-metal C on ARM Cortex-M microcontrollers, timer interrupts, ADC sampling, and hardware communication buses (UART, SPI, I2C).',
    tools: ['STM32CubeIDE', 'ARM Cortex-M4', 'Logic Analyzers', 'C/C++'],
    schedule: 'Bi-Annual Fall Lab',
  },
  {
    id: 'pcb-design',
    title: 'High-Speed Multilayer PCB Design',
    category: 'Hardware',
    duration: '2 Days Hands-On',
    level: 'Intermediate',
    description:
      'From schematic capture to physical board fabrication. Learn differential signal routing, power planes, decoupling capacitor placement, and industry DRC checks.',
    tools: ['Altium Designer', 'KiCad', 'SMD Soldering', 'Gerber Cam'],
    schedule: 'Winter Technical Track',
  },
  {
    id: 'arduino-iot',
    title: 'Arduino, ESP32 & IoT Sensor Networks',
    category: 'IoT',
    duration: 'Weekend Workshop',
    level: 'Beginner',
    description:
      'Introduction to embedded electronics, interfacing digital/analog transducers, Wi-Fi telemetry with ESP32, and streaming time-series sensor data to MQTT dashboards.',
    tools: ['ESP32', 'Arduino IDE', 'MQTT', 'Node-RED', 'Sensors'],
    schedule: 'Monthly Branch Series',
  },
  {
    id: 'robotics-bootcamp',
    title: 'Autonomous Robotics with ROS 2',
    category: 'Robotics',
    duration: '3 Days Bootcamp',
    level: 'Advanced',
    description:
      'Foundations of robot kinematics, sensor fusion with LiDAR and depth cameras, SLAM mapping, and navigational path planning using ROS 2 Humble.',
    tools: ['ROS 2', 'Linux/Ubuntu', 'Python', 'LiDAR', 'Gazebo'],
    schedule: 'Flagship Spring Bootcamp',
  },
  {
    id: 'ai-fundamentals',
    title: 'AI Fundamentals & TinyML Edge Deployment',
    category: 'AI/ML',
    duration: '2 Days Hands-On',
    level: 'Intermediate',
    description:
      'Core concepts in deep learning, model quantization, and compiling neural networks to run inferences locally on microcontrollers without cloud latency.',
    tools: ['TensorFlow', 'PyTorch', 'TinyML', 'Edge Impulse', 'Python'],
    schedule: 'Annual Tech Track',
  },
  {
    id: 'web-engineering',
    title: 'Modern Web Engineering & APIs for Hardware',
    category: 'Software',
    duration: 'Weekend Bootcamp',
    level: 'Beginner',
    description:
      'Building modern, fast, and responsive web portals and REST/WebSocket APIs for controlling IoT hardware devices and managing student branch operations.',
    tools: ['TypeScript', 'Astro', 'React', 'Tailwind CSS', 'Node.js'],
    schedule: 'Annual Summer Series',
  },
];
