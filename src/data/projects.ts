import type { ProjectItem } from "@/types";

export const projects: ProjectItem[] = [
  {
    slug: "ai-powered-defi-trading-platform",
    title: "AI-Powered DeFi Trading Platform",
    description:
      "AI-powered trading platform built on SUI blockchain, focused on DeFi trading workflows and AI agent trading vaults.",
    role: "Frontend Developer",
    status: "Private / Production Project",
    impact: [
      "$4.5M liquidity",
      "200K+ users",
      "35% organic traffic growth",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "React Hook Form",
      "SUI Blockchain",
    ],
    contributions: [
      "Built trading vault interfaces and product flows for AI-assisted DeFi actions.",
      "Improved product performance through code splitting and lazy loading.",
      "Delivered landing pages and SEO improvements for acquisition-focused surfaces.",
    ],
    challenges: [
      "Balancing complex trading information density with clear user feedback.",
      "Maintaining performance while shipping feature-rich dashboards and blockchain interactions.",
      "Keeping conversion-focused marketing pages visually aligned with the product UI.",
    ],
    image: "/projects/defi-platform.svg",
  },
  {
    slug: "enterprise-micro-frontend-platform",
    title: "Enterprise Micro-frontend Platform",
    description:
      "Enterprise frontend platform designed using micro-frontend architecture for large-scale insurance applications.",
    role: "Junior Frontend Developer",
    status: "Private / Production Project",
    impact: [
      "50K+ users",
      "40% development-time reduction",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Material UI",
      "Micro-frontends",
      "Atomic Design",
    ],
    contributions: [
      "Implemented reusable UI primitives and shared frontend patterns across teams.",
      "Helped define coding standards and architecture guidance for the platform.",
      "Delivered production features within a large enterprise workflow environment.",
    ],
    challenges: [
      "Aligning multiple teams around shared component quality and interface contracts.",
      "Reducing duplicated implementation work across independently delivered modules.",
      "Maintaining consistency while evolving a distributed frontend architecture.",
    ],
    image: "/projects/micro-frontend.svg",
  },
  {
    slug: "financial-data-visualization-dashboard",
    title:
      "Financial Data Visualization Dashboard",
    description:
      "Interactive financial dashboard for enterprise insurance users with data visualization and responsive UI.",
    role: "Junior Frontend Developer",
    status: "Private / Production Project",
    impact: [
      "10K+ enterprise clients",
      "WCAG 2.1 practices applied",
    ],
    technologies: [
      "React",
      "Chart.js",
      "Material UI",
      "REST APIs",
      "SCSS",
    ],
    contributions: [
      "Built data-rich dashboard interfaces for financial workflows.",
      "Translated product and design requirements into responsive production screens.",
      "Improved accessibility and usability for enterprise users.",
    ],
    challenges: [
      "Presenting complex financial data in a readable way across breakpoints.",
      "Keeping dashboards responsive while rendering multiple chart and table views.",
      "Ensuring accessibility within dense, analytical interfaces.",
    ],
    image: "/projects/financial-dashboard.svg",
  },
];

export const projectSlugs = projects.map(
  (project) => project.slug,
);
