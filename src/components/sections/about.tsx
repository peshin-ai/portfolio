import {
  profile,
  technologyHighlights,
} from "@/data/profile";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="About"
          title="Frontend engineering for products that carry real business weight."
          description="A concise view of the experience, technology choices and product domains that define this portfolio."
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <MotionReveal>
            <Card>
              <CardContent className="space-y-5">
                {profile.about.map(
                  (paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-8 text-muted-foreground sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ),
                )}
              </CardContent>
            </Card>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <Card className="h-full">
              <CardContent className="flex h-full flex-col justify-between gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">
                    Core stack
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                    Technology with strong product
                    context.
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {technologyHighlights.map(
                    (item) => (
                      <Badge
                        key={item}
                        variant="muted"
                        className="px-4 py-2 text-sm"
                      >
                        {item}
                      </Badge>
                    ),
                  )}
                </div>
                <div className="rounded-3xl border border-primary/10 bg-primary/5 p-5 text-sm leading-7 text-muted-foreground">
                  Positioning: Frontend Developer
                  with strong Web3 and Fintech
                  experience who is expanding
                  toward Full-stack.
                </div>
              </CardContent>
            </Card>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
