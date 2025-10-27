import type { Control } from "react-hook-form";

export interface ExperienceNode {
  id: string;
  company: string;
  position: string;
  duration: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
  achievements: string[];
  icon: string;
  color: string;
  size?: string;
  isActive?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category?: string;
  projects: string[];
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}

export interface InputFieldProps {
  name: keyof ContactFormInputs;
  label: string;
  control: Control<ContactFormInputs>;
  type?: string;
  placeholder?: string;
  rules?: any;
  multiline?: boolean;
  rows?: number;
  autoComplete?: string;
  errors?: any;
}
