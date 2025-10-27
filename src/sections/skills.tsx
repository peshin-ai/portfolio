import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ChevronDown } from "lucide-react";
import type { Skill } from "../types";
import { skillCategories } from "../lib/data";
import { useMobile } from "../hooks/use-mobile";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const isMobile = useMobile();

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
    <section
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"
      id="skills"
    >
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

        {/* Skills Grid with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={showAll ? "all" : "partial"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {getDisplayedSkills().map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 dark:border-slate-700 relative overflow-hidden"
              >
                {/* ...existing code for each skill card... */}
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
          </motion.div>
        </AnimatePresence>

        {/* View More Button */}
        {shouldShowViewMore() && (
          <div className="flex justify-center mt-8">
            <Button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>{showAll ? "View Less" : "View More Skills"}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
                strokeWidth={2}
              />
            </Button>
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
