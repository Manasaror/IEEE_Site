import type { Project } from '@/types/content';

export const projects: Project[] = [
  {
    id: 'micromouse-robot',
    title: 'High-Speed Autonomous Micromouse Maze Solver',
    subtitle: 'Custom PCB & Floodfill Algorithmic Navigation Platform',
    description:
      'Precision autonomous robotics platform featuring dual DC coreless motors, IR distance sensory arrays, high-speed rotary encoders, and a diagonal floodfill pathfinding algorithm solving 16x16 maze labyrinths under 12 seconds.',
    category: 'Robotics',
    featured: true,
    status: 'Completed',
    tags: ['STM32', 'C++', 'Encoders', 'PID Control', 'Custom PCB'],
    imageUrl: '/images/about_engineering_bench.jpg',
    repoUrl: 'https://github.com/ieee-gbpiet/micromouse-robot',
    liveUrl: '/projects#micromouse-robot',
    specs: [
      { label: 'Controller', value: 'STM32F405 168MHz' },
      { label: 'Top Speed', value: '3.4 m/s' },
      { label: 'Sensors', value: '6x Sharp IR + Gyro' },
    ],
  },
  {
    id: 'aurora-rover',
    title: 'Project AURORA: Planetary Exploration Rover',
    subtitle: 'University Rover Challenge Hardware & Navigation Prototype',
    description:
      'A 6-wheel rocker-bogie autonomous exploration rover equipped with a 4-DOF carbon-fiber robotic arm, rotating 360° LiDAR, stereo depth estimation, and custom STM32 motor driver power electronics designed for rugged terrain navigation.',
    category: 'Robotics',
    featured: true,
    status: 'Competition Ready',
    tags: ['ROS', 'LiDAR', 'STM32', 'Computer Vision', 'Python'],
    imageUrl: '/images/project_rover.jpg',
    repoUrl: 'https://github.com/ieee-gbpiet/project-aurora-rover',
    liveUrl: '/projects#aurora-rover',
    specs: [
      { label: 'Chassis', value: '6-Wheel Rocker Bogie' },
      { label: 'Compute', value: 'Jetson + STM32' },
      { label: 'Telemetry', value: '2.4GHz AirMax' },
    ],
  },
  {
    id: 'garhwal-telemetry-iot',
    title: 'IoT Smart Environmental Telemetry Grid',
    subtitle: 'Low-Power Wide-Area Solar Environmental Sensing System',
    description:
      'An off-grid IoT telemetry network deployed across Himalayan slopes in Pauri Garhwal. Measures soil moisture gradients, pore pressure, and seismic micro-vibrations with solar harvesting and LoRa mesh backhaul for early hazard warning.',
    category: 'IoT',
    featured: false,
    status: 'Completed',
    tags: ['ESP32', 'IoT', 'LoRa', 'Solar MPPT', 'Embedded C'],
    imageUrl: '/images/project_iot.svg',
    repoUrl: 'https://github.com/ieee-gbpiet/garhwal-iot-telemetry',
    liveUrl: '/projects#garhwal-telemetry-iot',
    specs: [
      { label: 'Link', value: '14.2 km LoRa Link' },
      { label: 'Uptime', value: '99.8% Solar Autonomy' },
    ],
  },
  {
    id: 'edge-vision-tinyml',
    title: 'Edge-Vision: Ultra-Low-Power TinyML Defect Scanner',
    subtitle: 'On-Device Quantized Neural Network for Quality Control',
    description:
      'Embedded vision subsystem utilizing INT8-quantized MobileNet models deployed onto ARM Cortex-M7 microcontrollers for high-speed automated PCB trace defect detection without cloud connectivity.',
    category: 'AI/ML',
    featured: false,
    status: 'Completed',
    tags: ['Machine Learning', 'ARM Cortex', 'TinyML', 'Python', 'C++'],
    imageUrl: '/images/project_edge_ai.svg',
    repoUrl: 'https://github.com/ieee-gbpiet/edge-vision-tinyml',
    liveUrl: '/projects#edge-vision-tinyml',
    specs: [
      { label: 'Inference', value: '38ms per Frame' },
      { label: 'Memory', value: '< 380 KB SRAM' },
    ],
  },
  {
    id: 'embedded-flight-controller',
    title: 'Autonomous Embedded Flight Controller Architecture',
    subtitle: 'Custom IMU Sensor Fusion & Brushless ESC Telemetry',
    description:
      'Real-time embedded flight management board with dual redundant IMUs, Extended Kalman Filter (EKF) sensor fusion, barometric altitude hold, and sub-millisecond PWM signal modulation for quadrotor stabilization.',
    category: 'Embedded',
    featured: false,
    status: 'Completed',
    tags: ['Embedded C', 'STM32', 'Kalman Filter', 'SPI', 'Altium'],
    imageUrl: '/images/hero_engineering_lab.jpg',
    repoUrl: 'https://github.com/ieee-gbpiet/embedded-flight-controller',
    liveUrl: '/projects#embedded-flight-controller',
    specs: [
      { label: 'Loop Rate', value: '1 kHz PID Loop' },
      { label: 'Sensors', value: 'Dual BMI088 + BMP388' },
    ],
  },
  {
    id: 'bms-battery-telemetry',
    title: 'Renewable Smart Battery Management System (BMS)',
    subtitle: 'Automotive Grade High-Voltage LiFePO4 Energy Controller',
    description:
      'Custom 16S active cell-balancing BMS architecture with isolated SPI communication, temperature profiling across every cell, CAN bus integration, and overcurrent fault protection within 2 microseconds for clean energy storage.',
    category: 'Power & Energy',
    featured: false,
    status: 'In Progress',
    tags: ['Power Electronics', 'CAN Bus', 'Embedded C', 'Renewable'],
    imageUrl: '/images/project_iot.svg',
    repoUrl: 'https://github.com/ieee-gbpiet/smart-bms-controller',
    liveUrl: '/projects#bms-battery-telemetry',
    specs: [
      { label: 'Voltage', value: '48V - 64V Nominal' },
      { label: 'Balancing', value: 'Active Inductive' },
    ],
  },
];
