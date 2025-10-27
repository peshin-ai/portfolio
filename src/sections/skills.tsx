import { skillCategories } from "../lib/data";
import { useMobile } from "../hooks/use-mobile";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../components/ui/tooltip";

const Skills = () => {
  const isMobile = useMobile();

  // Grouping for display (2 columns)
  const groupOrder: Array<Array<keyof typeof skillCategories>> = [
    ["frontend", "backend", "tooling"],
    ["data", "quality", "management"],
  ];

  // For mobile, stack all groups vertically
  const groupRows: Array<Array<keyof typeof skillCategories>> = isMobile
    ? (Object.keys(skillCategories) as Array<keyof typeof skillCategories>).map(
        (key) => [key]
      )
    : groupOrder;

  return (
    <section
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"
      id="skills"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills &amp; Technologies
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {groupRows.map((row, rowIdx) => (
            <div key={rowIdx} className="flex flex-col gap-8">
              {row.map((catKey) => {
                const cat = skillCategories[catKey];
                if (!cat) return null;
                return (
                  <div
                    key={catKey}
                    className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6"
                  >
                    <div className="font-semibold text-lg text-slate-900 dark:text-white mb-4">
                      {cat.title}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {cat.skills.map(
                        (skill: { name: string; projects: string[] }) => (
                          <Tooltip key={skill.name}>
                            <TooltipTrigger asChild>
                              <span className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium cursor-pointer shadow-sm hover:bg-blue-100 dark:hover:bg-blue-800 transition-all duration-200">
                                {skill.name}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent
                              sideOffset={8}
                              className="w-64 max-w-xs text-xs text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl p-4"
                            >
                              <div className="font-semibold text-sm mb-2 text-blue-700 dark:text-blue-300">
                                Projects used:
                              </div>
                              <ul className="list-disc pl-4 space-y-1">
                                {skill.projects.map(
                                  (proj: string, i: number) => (
                                    <li key={i}>{proj}</li>
                                  )
                                )}
                              </ul>
                            </TooltipContent>
                          </Tooltip>
                        )
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
