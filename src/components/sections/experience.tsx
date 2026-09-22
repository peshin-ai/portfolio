import { experience } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Experience"
          title="A timeline shaped by Web3, enterprise insurance and production product work."
          description="The emphasis is on shipped frontend systems, measurable scale and collaboration across delivery teams."
        />
        <div className="relative space-y-6 before:absolute before:left-5 before:top-3 before:hidden before:h-[calc(100%-24px)] before:w-px before:bg-border/80 lg:before:block">
          {experience.map((item, index) => (
            <MotionReveal
              key={item.slug}
              delay={index * 0.05}
            >
              <Card className="relative lg:ml-14">
                <span className="absolute left-[-2.9rem] top-8 hidden h-5 w-5 rounded-full border-4 border-background bg-primary lg:block" />
                <CardContent className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
                  <div className="space-y-3">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">
                      {item.period}
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">
                        {item.role}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {item.company}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.location}
                      </p>
                    </div>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {item.summary}
                    </p>
                  </div>
                  <div className="space-y-5">
                    <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                      {item.highlights.map(
                        (highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3"
                          >
                            <span className="text-accent inline text-lg">
                              •
                            </span>
                            <span>
                              {highlight}
                            </span>
                          </li>
                        ),
                      )}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map(
                        (technology) => (
                          <Badge
                            key={technology}
                            variant="muted"
                          >
                            {technology}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
