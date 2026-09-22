import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { MotionReveal } from "@/components/ui/motion-reveal";

export function ProjectCard({
  project,
  priority = false,
}: {
  project: ProjectItem;
  priority?: boolean;
}) {
  return (
    <MotionReveal>
      <Card className="group h-full overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border/70 bg-slate-950">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            priority={priority}
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>
        <CardContent className="flex h-full flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3">
            <Badge>{project.role}</Badge>
            <Badge variant="muted">
              {project.status}
            </Badge>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm leading-7 text-muted-foreground">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies
              .slice(0, 5)
              .map((technology) => (
                <Badge
                  key={technology}
                  variant="muted"
                >
                  {technology}
                </Badge>
              ))}
          </div>
          <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            {project.impact.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border/60 bg-secondary/30 px-4 py-3"
              >
                {item}
              </div>
            ))}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View details
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </CardContent>
      </Card>
    </MotionReveal>
  );
}
