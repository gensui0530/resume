export interface SocialLink {
  platform: "github" | "linkedin" | "twitter" | "website" | "email";
  url: string;
  label: string;
}

export interface Profile {
  name: string;
  title: string;
  email: string;
  location: string;
  summary: string;
  avatar?: string;
  social: SocialLink[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image?: string;
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
  };
  featured: boolean;
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: string;
  type: "paper" | "presentation";
}

export interface Strength {
  id: string;
  title: string;
  subtitle: string;
  points: string[];
  icon: "users" | "lightbulb" | "rocket";
}

export interface ResumeData {
  profile: Profile;
  strengths: Strength[];
  experiences: Experience[];
  skillCategories: SkillCategory[];
  projects: Project[];
  publications: Publication[];
}
