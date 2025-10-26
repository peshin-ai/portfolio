import { useState } from "react";
import { experiences } from "../lib/data";

const Roadmap = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(selectedNode === nodeId ? null : nodeId);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden" id="roadmap">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
        </div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Career Journey
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My professional evolution from intern to full-stack developer,
            building enterprise solutions across fintech and blockchain
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600 opacity-30"></div>

          <div className="md:hidden absolute left-3 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 opacity-30"></div>

          <div className="space-y-8 md:space-y-16">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                <div
                  className={`hidden md:block absolute top-8 w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 opacity-50 ${
                    index % 2 === 0 ? " left-1/2" : "right-1/2"
                  }`}
                ></div>
                <div className="md:hidden absolute left-3 top-6 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 opacity-50"></div>

                <div
                  className={`absolute w-8 h-8 rounded-full bg-gradient-to-r ${exp.color} shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300 flex items-center justify-center text-white font-bold z-10
                    md:left-1/2 md:top-5 md:transform md:-translate-x-1/2
                    left-3 top-2 transform -translate-x-1/2`}
                  onClick={() => handleNodeClick(exp.id)}
                >
                  <span className="text-sm">{exp.icon}</span>
                </div>

                <div
                  className={`
                    md:flex 
                    ${
                      index % 2 === 0
                        ? "md:justify-end md:pr-8"
                        : "md:justify-start md:pl-8"
                    }
                    pl-16 md:pl-0
                  `}
                >
                  <div
                    className={`max-w-md w-full bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 dark:border-slate-700 cursor-pointer ${
                      selectedNode === exp.id
                        ? "ring-2 ring-blue-500 shadow-2xl"
                        : ""
                    } ${exp.isActive ? "ring-2 ring-green-500" : ""}`}
                    onClick={() => handleNodeClick(exp.id)}
                  >
                    <div className="p-4 md:p-6">
                      <div className="flex items-start justify-between mb-3 md:mb-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1 truncate">
                            {exp.company}
                          </h3>
                          <p className="text-sm md:text-base text-blue-600 dark:text-blue-400 font-medium">
                            {exp.position}
                          </p>
                          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">
                            {exp.duration}
                          </p>
                          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                            {exp.location}
                          </p>
                        </div>
                        {exp.isActive && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 ml-2 flex-shrink-0">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="mb-3 md:mb-4">
                        <h4 className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          {selectedNode === exp.id
                            ? "All Highlights"
                            : "Key Highlights"}
                        </h4>
                        <ul className="space-y-1">
                          {(selectedNode === exp.id
                            ? exp.highlights
                            : exp.highlights.slice(0, 2)
                          ).map((highlight, i) => (
                            <li
                              key={i}
                              className="text-xs md:text-sm text-slate-600 dark:text-slate-400 flex items-start"
                            >
                              <span className="text-blue-500 mr-1 md:mr-2 mt-1 flex-shrink-0">
                                •
                              </span>
                              <span
                                className={
                                  selectedNode === exp.id
                                    ? "leading-relaxed"
                                    : "line-clamp-2 leading-relaxed"
                                }
                              >
                                {highlight}
                              </span>
                            </li>
                          ))}
                          {selectedNode !== exp.id &&
                            exp.highlights.length > 2 && (
                              <li className="text-xs md:text-sm text-blue-600 dark:text-blue-400 font-medium">
                                +{exp.highlights.length - 2} more highlights...
                              </li>
                            )}
                        </ul>
                      </div>

                      <div className="mb-3 md:mb-4">
                        <h4 className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {(selectedNode === exp.id
                            ? exp.technologies
                            : exp.technologies.slice(0, 4)
                          ).map((tech, i) => (
                            <span
                              key={i}
                              className="px-1.5 md:px-2 py-0.5 md:py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                          {selectedNode !== exp.id &&
                            exp.technologies.length > 4 && (
                              <span className="px-1.5 md:px-2 py-0.5 md:py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-md">
                                +{exp.technologies.length - 4}
                              </span>
                            )}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          {selectedNode === exp.id
                            ? "All Achievements"
                            : "Key Achievements"}
                        </h4>
                        <div
                          className={
                            selectedNode === exp.id
                              ? "grid grid-cols-1 gap-2"
                              : "grid grid-cols-1 md:grid-cols-2 gap-2"
                          }
                        >
                          {(selectedNode === exp.id
                            ? exp.achievements
                            : exp.achievements.slice(0, 2)
                          ).map((achievement, i) => (
                            <div
                              key={i}
                              className="text-xs text-center p-2 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-lg"
                            >
                              <span className="font-medium text-slate-700 dark:text-slate-300">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 relative z-10">
          <div className="text-center p-4 md:p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
            <div className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1 md:mb-2">
              3+ Years
            </div>
            <div className="text-sm md:text-base text-slate-600 dark:text-slate-300">
              Experience
            </div>
          </div>

          <div className="text-center p-4 md:p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
            <div className="text-xl md:text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1 md:mb-2">
              260K+
            </div>
            <div className="text-sm md:text-base text-slate-600 dark:text-slate-300">
              Users Impacted
            </div>
          </div>
          <div className="text-center p-4 md:p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg col-span-2 md:col-span-1">
            <div className="text-xl md:text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1 md:mb-2">
              $4.5M+
            </div>
            <div className="text-slate-600 dark:text-slate-300">
              Assets Managed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
