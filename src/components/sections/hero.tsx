import Link from "next/link";
import {
  ArrowRight,
  Download,
  Github,
} from "lucide-react";
import {
  heroMetrics,
  profile,
  socialLinks,
} from "@/data/profile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { MotionReveal } from "@/components/ui/motion-reveal";

export function HeroSection() {
  return (
    <section className="section pt-32 sm:pt-36">
      <div className="shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <MotionReveal className="space-y-8">
          <div className="space-y-5">
            <Badge className="w-fit">
              {profile.role}
            </Badge>
            <div className="space-y-4">
              <p className="font-mono text-sm uppercase tracking-[0.28em] text-primary">
                {profile.name}
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                {profile.headline}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                {profile.summary}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full px-6"
            >
              <Link href="#projects">
                View projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-6"
            >
              <Link href="#contact">
                Contact me
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full px-6"
            >
              <Link href="/resume">
                <Download className="mr-2 h-4 w-4" />
                Download resume
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full px-6"
            >
              <a
                href={socialLinks[0].href}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <Card className="overflow-hidden border-primary/10 bg-card/70">
            <CardContent className="grid gap-4 p-4 sm:grid-cols-2 sm:p-6">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-border/70 bg-secondary/35 p-5"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">
                    {metric.label}
                  </p>
                  <p className="mt-4 text-2xl font-semibold tracking-tight">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </MotionReveal>
      </div>
    </section>
  );
}
