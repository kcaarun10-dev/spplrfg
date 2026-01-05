
import React from 'react';
import { Project, Service, Skill } from './types';
import { Layout, Cpu, Globe, Code, Sparkles, MessageSquare } from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "NeuroVision AI",
    category: "Machine Learning",
    image: "https://picsum.photos/seed/ai/800/600",
    description: "An advanced computer vision system for real-time object detection and analysis.",
    link: "#"
  },
  {
    id: 2,
    title: "Lumina Commerce",
    category: "Web Development",
    image: "https://picsum.photos/seed/web/800/600",
    description: "High-performance headless e-commerce solution with Next.js and Shopify.",
    link: "#"
  },
  {
    id: 3,
    title: "Aether Dashboard",
    category: "UI/UX Design",
    image: "https://picsum.photos/seed/design/800/600",
    description: "A futuristic data visualization platform for crypto analytics.",
    link: "#"
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Building high-performance, accessible, and responsive web applications using the latest technologies.",
    icon: "Globe",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    title: "AI Integration",
    description: "Leveraging Large Language Models and Computer Vision to automate complex business processes.",
    icon: "Cpu",
    color: "from-purple-600 to-pink-500"
  },
  {
    id: 3,
    title: "Digital Strategy",
    description: "Tailored consulting for businesses looking to scale their digital presence through technology.",
    icon: "Sparkles",
    color: "from-orange-500 to-amber-400"
  }
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, category: 'Frontend' },
  { name: "TypeScript", level: 90, category: 'Frontend' },
  { name: "Node.js", level: 85, category: 'Backend' },
  { name: "Python", level: 80, category: 'AI' },
  { name: "Gemini API", level: 92, category: 'AI' },
  { name: "Tailwind CSS", level: 98, category: 'Frontend' },
  { name: "Three.js", level: 75, category: 'Frontend' },
];
