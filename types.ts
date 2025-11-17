
export interface Education {
  degree: string;
  institution: string;
  university: string;
  year: number;
  percentage: string;
}

export interface Experience {
  period: string;
  position: string;
  details?: string;
  organization: string;
  duration: string;
}

export interface Project {
  level: string;
  title: string;
  tech: string;
}

export interface Skill {
  name: string;
}
