import type { ExperienceNode, SkillCategory } from "../types";

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
    icon: "🚀",
    color: "from-blue-500 to-purple-600",
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

export const skillCategories: Record<string, SkillCategory> = {
  frontend: {
    title: "Frontend Frameworks",
    skills: [
      {
        name: "ReactJS",
        level: 85,
        icon: "⚛️",
        projects: [
          "NODO AI Trading Platform ($4.5M liquidity)",
          "360F Micro-frontend (50K+ users)",
          "Insurance Platform (10K+ clients)",
        ],
        description:
          "Built enterprise-grade applications with complex state management and real-time data",
      },
      {
        name: "Vue2",
        level: 80,
        icon: "💚",
        projects: ["NODO DApp Features (200K+ users)"],
        description:
          "Developed interactive blockchain and Defi community features interfaces",
      },
      {
        name: "Nuxt2",
        level: 78,
        icon: "🚀",
        projects: ["NODO Community Features"],
        description:
          "SEO-optimized server-side rendered applications for enhanced discoverability",
      },
      {
        name: "HTML5",
        level: 85,
        icon: "🌐",
        projects: [
          "All Projects",
          "Landing Pages (40K+ visitors)",
          "Component Libraries",
        ],
        description:
          "Semantic markup for accessibility and SEO optimization across all projects",
      },
      {
        name: "CSS3",
        level: 82,
        icon: "🎨",
        projects: [
          "Responsive Web Interfaces",
          "Material UI Customizations",
          "360F Design System",
        ],
        description:
          "Advanced styling with animations, responsive design, and design system implementation",
      },
      {
        name: "JavaScript (ES6+)",
        level: 83,
        icon: "⚡",
        projects: ["All Projects"],
        description:
          "Modern JavaScript for complex business logic and real-time financial data processing",
      },
    ],
  },
  ui: {
    title: "UI Libraries & Styling",
    skills: [
      {
        name: "Material UI",
        level: 82,
        icon: "📱",
        projects: [
          "360F Insurance Platform",
          "Reusable Component Libraries",
          "20+ Application Modules",
        ],
        description:
          "Built consistent UI components following Material Design principles for enterprise applications",
      },
      {
        name: "Ant Design",
        level: 80,
        icon: "🐜",
        projects: [
          "NODO DApp Community Features",
          "Enterprise Dashboards",
          "Admin Interfaces",
        ],
        description:
          "Implemented professional admin interfaces and complex data visualization components",
      },
      {
        name: "Tailwind CSS",
        level: 85,
        icon: "💨",
        projects: [
          "NODO Trading Platform",
          "Modern Landing Pages",
          "Component Styling",
        ],
        description:
          "Utility-first CSS for rapid development and consistent design systems",
      },
      {
        name: "Framer Motion",
        level: 78,
        icon: "🎭",
        projects: [
          "NODO Platform Animations",
          "Interactive UI Elements",
          "Page Transitions",
        ],
        description:
          "Advanced animations and micro-interactions for enhanced user experience",
      },
      {
        name: "SCSS/SASS",
        level: 80,
        icon: "💎",
        projects: [
          "360F Styling Architecture",
          "Design System Variables",
          "Responsive Layouts",
        ],
        description:
          "Structured styling with variables, mixins, and modular architecture",
      },
      {
        name: "Responsive Design",
        level: 85,
        icon: "📐",
        projects: [
          "All Projects",
          "Mobile-first Approach",
          "Cross-device Compatibility",
        ],
        description:
          "WCAG 2.1 compliant responsive interfaces ensuring inclusive user experience",
      },
    ],
  },
  backend: {
    title: "API & State Management",
    skills: [
      {
        name: "Axios",
        level: 82,
        icon: "🔗",
        projects: [
          "All API Integrations",
          "Real-time Trading Data",
          "Dynamic UI Components",
        ],
        description:
          "HTTP client for seamless API integration and real-time data fetching",
      },
      {
        name: "RESTful APIs",
        level: 80,
        icon: "🌍",
        projects: [
          "360F Insurance APIs",
          "NODO Trading APIs",
          "Third-party Integrations",
        ],
        description:
          "Integration with enterprise-grade APIs for financial and insurance platforms",
      },
      {
        name: "Redux",
        level: 78,
        icon: "🔄",
        projects: [
          "360F State Management",
          "Complex Application State",
          "Cross-component Data",
        ],
        description:
          "Predictable state management for large-scale applications with complex data flows",
      },
      {
        name: "Redux-toolkit",
        level: 75,
        icon: "🛠️",
        projects: [
          "Modern Redux Implementation",
          "Simplified State Logic",
          "API State Management",
        ],
        description:
          "Modern Redux patterns with reduced boilerplate for efficient development",
      },
      {
        name: "React-query",
        level: 78,
        icon: "⚡",
        projects: [
          "NODO Trading Platform",
          "Data Caching",
          "Server State Management",
        ],
        description:
          "Powerful data fetching and caching for improved performance and user experience",
      },
    ],
  },
  tools: {
    title: "Development Tools",
    skills: [
      {
        name: "Chart.js",
        level: 75,
        icon: "📊",
        projects: [
          "360F Financial Dashboard",
          "Data Visualization Components",
          "Client Decision-making Tools",
        ],
        description:
          "Interactive financial dashboards improving client decision-making efficiency by 25%",
      },
      {
        name: "Recharts.js",
        level: 70,
        icon: "📈",
        projects: [
          "Real-time Trading Charts",
          "Performance Analytics",
          "Data Insights Visualization",
        ],
        description:
          "React-based charting library for responsive and interactive data visualization",
      },
      {
        name: "React-hook-form",
        level: 80,
        icon: "📝",
        projects: [
          "NODO Platform Forms",
          "User Registration",
          "Complex Form Validation",
        ],
        description:
          "Performant form management with validation for better user experience",
      },
      {
        name: "Git",
        level: 80,
        icon: "🌿",
        projects: [
          "All Projects",
          "Version Control",
          "Collaborative Development",
        ],
        description:
          "Version control for collaborative development across multiple teams and projects",
      },
      {
        name: "GitHub",
        level: 82,
        icon: "🐙",
        projects: ["Code Reviews", "Team Collaboration", "CI/CD Integration"],
        description:
          "Code reviews, mentorship, and fostering code quality in team environments",
      },
      {
        name: "GitHub Copilot",
        level: 85,
        icon: "🤖",
        projects: [
          "AI-assisted Development",
          "Code Generation",
          "Productivity Enhancement",
        ],
        description:
          "AI-powered development tool enhancing coding efficiency and code quality",
      },
    ],
  },
  management: {
    title: "Project & Architecture",
    skills: [
      {
        name: "Jira",
        level: 75,
        icon: "📋",
        projects: [
          "360F Project Management",
          "Sprint Planning",
          "Agile/Scrum Methodologies",
        ],
        description:
          "Daily stand-ups and sprint planning with exposure to Agile/Scrum methodologies",
      },
      {
        name: "Monday",
        level: 70,
        icon: "📅",
        projects: ["Team Collaboration", "Task Management", "Project Tracking"],
        description:
          "Project management and team collaboration for efficient workflow coordination",
      },
      {
        name: "Notion",
        level: 78,
        icon: "📖",
        projects: ["Documentation", "Knowledge Management", "Team Wiki"],
        description:
          "Comprehensive documentation and knowledge management for project continuity",
      },
      {
        name: "Micro-frontend",
        level: 80,
        icon: "🏗️",
        projects: [
          "360F Enterprise Architecture",
          "Modular Development",
          "Team Scalability",
        ],
        description:
          "Enterprise-grade micro-frontend architecture supporting 50K+ users with modular development",
      },
      {
        name: "Component-based Design",
        level: 82,
        icon: "🧩",
        projects: [
          "Reusable Component Libraries",
          "Atomic Design Principles",
          "Development Time Reduction",
        ],
        description:
          "Atomic design principles reducing development time by 40% across development teams",
      },
    ],
  },
};
