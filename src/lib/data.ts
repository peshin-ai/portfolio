import type { ExperienceNode } from "../types";

export const profile = {
  name: "Ung Ta Hoang Tuan",
  role: "Frontend Engineer",
  tagline:
    "Crafting accessible, performant, and robust user interfaces with React and TypeScript.",
  location: "Ho Chi Minh City, Vietnam",
  email: "uthtuan0204@gmail.com",
  phone: "(+84) 702 856 497",
  socials: [
    { label: "GitHub", href: "https://github.com/uthtuan" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hoang-tuan-ung-ta-74ba19172/",
    },
  ],
};

export const experiences: ExperienceNode[] = [
  {
    id: "nodo",
    company: "NODO",
    position: "Front-End Developer",
    duration: "October 2023 - Present",
    period: "2023 - Present",
    location: "Dubai, United Arab Emirates",
    highlights: [
      "Developed and maintained AI-powered trading platform on SUI blockchain managing $4.5 million in liquidity",
      "Architected and built AI Agent trading vaults utilizing modern tech stack",
      "Enhanced DApp features for an active user base of 200,000+ users",
      "Architected high-converting landing pages attracting 40,000+ new visitors",
      "Optimized web application performance, reducing page load times",
    ],
    technologies: [
      "React",
      "Vue2",
      "Nuxt2",
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "Framer Motion",
      "React-query",
      "React-hook-form",
    ],
    achievements: [
      "$4.5M liquidity management",
      "200K+ active users",
      "40K+ new visitors attracted",
      "35% organic traffic increase",
    ],
    icon: "/roadmap/nodo.png",
    size: "w-8 h-8",
    color: "white",
    isActive: true,
  },
  {
    id: "360f-pacs",
    company: "360F - PRUDENTIAL ASSURANCE COMPANY (PACS)",
    position: "Junior Front-End Developer",
    duration: "March 2023 - October 2023",
    period: "2023",
    location: "Singapore",
    highlights: [
      "Successfully architected and deployed enterprise-grade micro-frontend application supporting 50,000+ users",
      "Delivered 100% of milestone features on schedule, contributing to contract expansion opportunities",
      "Implemented reusable component library following atomic design principles",
      "Collaborated with cross-functional teams including backend developers, QA engineers, and product managers",
      "Established coding standards and best practices documentation for micro-frontend architecture adoption",
    ],
    technologies: [
      "ReactJS",
      "Micro-frontend Architecture",
      "Redux",
      "Material UI",
      "TypeScript",
    ],
    achievements: [
      "50K+ users supported",
      "100% milestone delivery",
      "$2M+ contract expansion",
      "40% development time reduction",
    ],
    icon: "🏢",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "360f-zurich",
    company: "360F - ZURICH",
    position: "Junior Front-End Developer",
    duration: "March 2022 - March 2023",
    period: "2022 - 2023",
    location: "Singapore",
    highlights: [
      "Led front-end development initiatives for insurance platform serving 10,000+ enterprise clients",
      "Developed interactive financial visualization dashboard using Chart.js",
      "Partnered with design team to translate wireframes and mockups into pixel-perfect, responsive web interfaces",
      "Conducted code reviews and provided mentorship to junior developers",
      "Implemented accessibility standards (WCAG 2.1) ensuring inclusive user experience",
    ],
    technologies: [
      "ReactJS",
      "Chart.js",
      "Material UI",
      "SCSS",
      "Responsive Design",
      "RESTful APIs",
    ],
    achievements: [
      "10K+ enterprise clients served",
      "25% decision-making efficiency improvement",
      "WCAG 2.1 compliance achieved",
      "Mentorship program established",
    ],
    icon: "📊",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "360f-intern",
    company: "360F",
    position: "Intern Front-End Developer",
    duration: "March 2022 - October 2022",
    period: "2022",
    location: "Singapore",
    highlights: [
      "Designed and developed reusable UI components adhering to Material UI design system",
      "Identified and resolved 50+ UI bugs and discrepancies, improving overall application stability",
      "Integrated RESTful APIs to dynamically render UI components with real-time data",
      "Participated in daily stand-ups and sprint planning sessions, gaining exposure to Agile/Scrum methodologies",
      "Collaborated with senior developers on code optimization and performance enhancement initiatives",
    ],
    technologies: [
      "ReactJS",
      "Material UI",
      "JavaScript",
      "API Integration",
      "Git",
      "Agile/Scrum",
    ],
    achievements: [
      "20+ application modules",
      "50+ bugs resolved",
      "30% user satisfaction improvement",
      "Agile/Scrum methodology exposure",
    ],
    icon: "🌱",
    color: "from-teal-500 to-cyan-600",
  },
];

export const skillCategories = {
  frontend: {
    title: "Frontend",
    skills: [
      {
        name: "React",
        projects: [
          "NODO AI Trading Platform ($4.5M liquidity)",
          "360F Micro-frontend (50K+ users)",
          "Insurance Platform (10K+ clients)",
        ],
      },
      {
        name: "Vue",
        projects: ["NODO DApp Community Features (200K+ users)"],
      },
      {
        name: "Nuxt2",
        projects: ["NODO DApp Community Features (200K+ users)"],
      },
      {
        name: "TypeScript",
        projects: ["NODO AI Trading Platform", "360F Micro-frontend"],
      },
      {
        name: "TailwindCSS",
        projects: ["NODO Trading Platform", "Modern Landing Pages"],
      },
      {
        name: "Material UI",
        projects: [
          "360F Insurance Platform",
          "Reusable Component Libraries",
          "20+ Application Modules",
        ],
      },
      {
        name: "Ant Design",
        projects: ["NODO DApp Community Features", "NODO admin page"],
      },
      { name: "Shadcn UI", projects: ["NODO AI Trading Platform"] },
      {
        name: "Framer Motion",
        projects: ["NODO AI Trading Platform"],
      },
      {
        name: "React Hook Form",
        projects: ["NODO AI Trading Platform", "360F Micro-frontend"],
      },

      {
        name: "Vitest",
        projects: ["NODO AI Trading Platform"],
      },
      {
        name: "Testing-Library",
        projects: ["360F Micro-frontend"],
      },
      {
        name: "Chart.js",
        projects: ["360F Insurance Dashboard"],
      },
      {
        name: "Recharts",
        projects: ["NODO AI Trading Platform"],
      },
    ],
  },
  backend: {
    title: "Backend",
    skills: [
      { name: "Node.js", projects: ["Side Project"] },
      { name: "Express.js", projects: ["Side Project"] },
      { name: "MongoDB", projects: ["Side Project"] },
      { name: "Prisma", projects: ["Side Project"] },
      { name: "MySQL", projects: ["Side Project"] },
    ],
  },
  tooling: {
    title: "Tooling",
    skills: [
      { name: "esbuild", projects: ["NODO AI Trading Platform"] },
      { name: "Vite", projects: ["NODO AI Trading Platform"] },
      { name: "Webpack", projects: ["360F Micro-frontend"] },
      { name: "Copilot", projects: ["All Projects"] },
      { name: "Figma", projects: ["All Projects"] },
    ],
  },
  data: {
    title: "Data & APIs",
    skills: [
      { name: "REST", projects: ["360F Insurance APIs", "NODO Trading APIs"] },
      { name: "React Query", projects: ["NODO AI Trading Platform"] },
      { name: "Zustand", projects: ["NODO AI Trading Platform"] },
      {
        name: "Redux",
        projects: ["360F Micro-frontend"],
      },
      { name: "Redux Saga", projects: ["360F Micro-frontend"] },
    ],
  },
  quality: {
    title: "Quality",
    skills: [
      {
        name: "Accessibility (a11y)",
        projects: ["360F Insurance Platform", "NODO AI Trading Platform"],
      },
      {
        name: "SEO",
        projects: ["NODO Trading Platform", "Modern Landing Pages"],
      },
      { name: "Performance", projects: ["NODO AI Trading Platform"] },
      { name: "Responsive Design", projects: ["All Projects"] },
      {
        name: "Testing",
        projects: ["360F Insurance Platform", "NODO AI Trading Platform"],
      },
    ],
  },
  management: {
    title: "Management",
    skills: [
      {
        name: "Jira",
        projects: ["360F Insurance Platform", "NODO AI Trading Platform"],
      },
      { name: "Notion", projects: ["All Projects"] },
      {
        name: "Agile/Scrum",
        projects: ["360F Insurance Platform", "NODO AI Trading Platform"],
      },
    ],
  },
};
