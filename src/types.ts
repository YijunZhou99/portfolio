export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  description?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
