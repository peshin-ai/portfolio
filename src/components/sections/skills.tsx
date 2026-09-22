import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Skills"
          title="Technical depth organized by delivery context, not percentage bars."
          description="The focus stays on the tools and patterns used in shipped products across frontend, architecture and Web3-oriented interfaces."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map(
            (category, index) => (
              <MotionReveal
                key={category.title}
                delay={index * 0.03}
              >
                <Card className="h-full">
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map(
                        (skill) => (
                          <Badge
                            key={skill}
                            variant="muted"
                            className="px-3 py-1.5 text-sm"
                          >
                            {skill}
                          </Badge>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>
              </MotionReveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
