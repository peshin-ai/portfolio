import type {
  EngineeringFocusItem,
  Metric,
  NavItem,
  SocialLink,
} from "@/types";

export const profile = {
  name: "UNG TA HOANG TUAN",
  role: "Frontend Developer | Web3 | Fintech",
  experience: "4+ years",
  location: "Nghe An, Vietnam",
  email: "uthtuan0204@gmail.com",
  headline:
    "Frontend Developer building scalable Web3, Fintech and enterprise applications.",
  summary:
    "4+ years of experience building production applications with React, Next.js and TypeScript, including DeFi trading platforms and enterprise applications serving large user bases.",
  about: [
    "I am a Frontend Developer with 4+ years of experience building Web3, Fintech and enterprise applications.",
    "My main expertise is React, Next.js, TypeScript and scalable frontend architecture.",
    "I have worked on AI-powered DeFi trading products, enterprise insurance platforms and applications serving large user bases.",
    "I enjoy solving complex UI problems, improving frontend performance and building reusable component systems.",
    "I am currently interested in Web3, Fintech and opportunities where I can continue growing as an engineer.",
  ],
};

export const navigation: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/uthtuan",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hoang-tuan-ung-ta-74ba19172/",
  },
];

export const heroMetrics: Metric[] = [
  {
    label: "Experience",
    value: "4+ Years",
    detail:
      "Frontend delivery across enterprise and product teams.",
  },
  {
    label: "Scale",
    value: "200K+ Users",
    detail:
      "User-facing Web3 product experience at production scale.",
  },
  {
    label: "Domain",
    value: "Web3 / Fintech",
    detail:
      "DeFi workflows, trading UX and enterprise finance products.",
  },
  {
    label: "Core Stack",
    value: "React / Next / TS",
    detail:
      "Modern frontend architecture with performance and reuse in mind.",
  },
];

export const engineeringFocus: EngineeringFocusItem[] =
  [
    {
      title: "Scalable Frontend Architecture",
      description:
        "Reusable components, modular structure and maintainable patterns that keep large products moving.",
    },
    {
      title: "Performance",
      description:
        "Code splitting, lazy loading and rendering decisions that preserve responsiveness under real product constraints.",
    },
    {
      title: "Fintech / Web3 UX",
      description:
        "Interfaces for complex financial and blockchain workflows with a focus on clarity, trust and feedback.",
    },
    {
      title: "Design Systems",
      description:
        "Consistent UI systems and component foundations that reduce duplication across teams and features.",
    },
    {
      title: "Collaboration",
      description:
        "Working closely with Backend, QA, Product and Design to deliver production-ready interfaces.",
    },
  ];

export const technologyHighlights = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React Query",
  "Redux",
  "Framer Motion",
  "SUI",
  "Micro-frontends",
  "Chart.js",
];
