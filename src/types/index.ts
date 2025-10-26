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
  isActive?: boolean;
}
