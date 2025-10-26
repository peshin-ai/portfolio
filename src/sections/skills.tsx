import { useState, useEffect } from "react";

interface Skill {
  name: string;
  level: number;
  icon: string;
  category?: string;
  projects: string[];
  description: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const skillCategories: Record<string, SkillCategory> = {
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
          projects: [
            "NODO DApp Features (200K+ users)",
            "360F Insurance Platform",
          ],
          description:
            "Developed interactive blockchain features and enterprise insurance interfaces",
        },
        {
          name: "Nuxt2",
          level: 78,
          icon: "🚀",
          projects: ["NODO DApp Features", "360F Platform Extensions"],
          description:
            "Server-side rendering for improved SEO and performance in blockchain applications",
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
          projects: [
            "Trading Algorithms",
            "Real-time Data Processing",
            "Component Logic",
          ],
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
            "NODO DApp Features",
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
          projects: [
            "Team Collaboration",
            "Task Management",
            "Project Tracking",
          ],
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

  const getAllSkills = (): (Skill & { category: string })[] => {
    return Object.values(skillCategories).flatMap((category) =>
      category.skills.map((skill) => ({ ...skill, category: category.title }))
    );
  };

  const getFilteredSkills = (): Skill[] => {
    if (activeCategory === "all") {
      return getAllSkills();
    }
    return (
      skillCategories[activeCategory as keyof typeof skillCategories]?.skills ||
      []
    );
  };

  const getDisplayedSkills = (): Skill[] => {
    const filteredSkills = getFilteredSkills();
    if (showAll) {
      return filteredSkills;
    }
    // Show 4 on mobile and 6 on desktop
    const limit = isMobile ? 4 : 6;
    return filteredSkills.slice(0, limit);
  };

  const shouldShowViewMore = (): boolean => {
    const limit = isMobile ? 4 : 6;
    return getFilteredSkills().length > limit;
  };

  const handleCategoryChange = (categoryKey: string) => {
    setActiveCategory(categoryKey);
    setShowAll(false); // Reset to collapsed view when changing categories
  };

  const categories = [
    { key: "all", label: "All Skills", icon: "🎯" },
    { key: "frontend", label: "Frontend", icon: "⚛️" },
    { key: "ui", label: "UI/Styling", icon: "🎨" },
    { key: "backend", label: "API/State", icon: "🔗" },
    { key: "tools", label: "Tools", icon: "🛠️" },
    { key: "management", label: "Management", icon: "📋" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
            levels
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => handleCategoryChange(category.key)}
              className={`
                px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105
                ${
                  activeCategory === category.key
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/50"
                    : "bg-white text-slate-700 hover:bg-blue-50 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-700"
                }
              `}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getDisplayedSkills().map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 dark:border-slate-700 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative mb-4">
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 mb-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                {/* Skill Level Indicator */}
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 line-clamp-2">
                {skill.description}
              </p>

              {/* Tooltip Content - Hidden by default, shown on hover */}
              <div
                className="absolute inset-0 bg-slate-900/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl pl-8 pr-6 py-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10 [&::-webkit-scrollbar]:w-0.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-400 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-slate-300"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgb(148 163 184) transparent",
                }}
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="font-semibold text-white text-lg">
                      {skill.name}
                    </h3>
                    <span className="text-sm font-medium text-blue-300">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="flex-1 overflow-y-auto">
                    <p className="text-slate-200 text-sm mb-4 leading-relaxed">
                      {skill.description}
                    </p>

                    <div>
                      <h4 className="text-white font-medium mb-2 text-sm">
                        Projects Used In:
                      </h4>
                      <ul className="space-y-1">
                        {skill.projects.map((project, projectIndex) => (
                          <li
                            key={projectIndex}
                            className="text-slate-300 text-xs flex items-start space-x-2"
                          >
                            <span className="text-blue-300 mt-1">•</span>
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category Badge (only show when 'all' is selected) */}
              {activeCategory === "all" && "category" in skill && (
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                    {(skill as Skill & { category: string }).category}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        {shouldShowViewMore() && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>{showAll ? "View Less" : "View More Skills"}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {getAllSkills().length}+
            </div>
            <div className="text-slate-600 dark:text-slate-300">
              Total Skills
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {getAllSkills().filter((skill) => skill.level >= 85).length}
            </div>
            <div className="text-slate-600 dark:text-slate-300">
              Expert Level
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {Object.keys(skillCategories).length}
            </div>
            <div className="text-slate-600 dark:text-slate-300">Categories</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              {Math.round(
                getAllSkills().reduce((acc, skill) => acc + skill.level, 0) /
                  getAllSkills().length
              )}
              %
            </div>
            <div className="text-slate-600 dark:text-slate-300">
              Avg Proficiency
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
