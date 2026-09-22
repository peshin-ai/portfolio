export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Metric = {
  label: string;
  value: string;
  detail: string;
};

export type EngineeringFocusItem = {
  title: string;
  description: string;
};

export type ExperienceItem = {
  slug: string;
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export type ProjectItem = {
  slug: string;
  title: string;
  description: string;
  role: string;
  status: string;
  impact: string[];
  technologies: string[];
  contributions: string[];
  challenges: string[];
  image: string;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};
