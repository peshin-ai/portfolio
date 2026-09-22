import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ProjectItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export function ProjectDetail({
  project,
}: {
  project: ProjectItem;
}) {
  return (
    <section className="section pt-32">
      <div className="shell space-y-10">
        <Button
          asChild
          variant="ghost"
          className="-ml-4"
        >
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to projects
          </Link>
        </Button>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <Badge>{project.role}</Badge>
              <Badge variant="muted">
                {project.status}
              </Badge>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {project.title}
              </h1>
              <p className="section-copy max-w-none">
                {project.description}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {project.impact.map((item) => (
                <Card
                  key={item}
                  className="bg-secondary/20"
                >
                  <CardContent className="p-4 text-sm text-muted-foreground">
                    {item}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="panel relative min-h-[320px] overflow-hidden border-primary/10 bg-slate-950/90">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Card>
            <CardContent className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold">
                  Contribution
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                  {project.contributions.map(
                    (item) => (
                      <li
                        key={item}
                        className="flex gap-3"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  Technical challenges
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                  {project.challenges.map(
                    (item) => (
                      <li
                        key={item}
                        className="flex gap-3"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">
                Technology stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(
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
              <div className="rounded-2xl border border-border/60 bg-secondary/30 p-5 text-sm leading-7 text-muted-foreground">
                This project is a private
                production engagement, so there is
                no public demo URL attached.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
