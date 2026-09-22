import { engineeringFocus } from "@/data/profile";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function EngineeringFocusSection() {
  return (
    <section className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Engineering Focus"
          title="How I think about shipping frontend systems."
          description="This section summarizes the recurring priorities behind the projects above: maintainability, responsiveness, product clarity and team collaboration."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {engineeringFocus.map((item, index) => (
            <MotionReveal
              key={item.title}
              delay={index * 0.04}
            >
              <Card className="h-full border-primary/10 bg-card/75">
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
