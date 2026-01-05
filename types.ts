
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'AI' | 'Tools';
}
