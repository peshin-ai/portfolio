import { Mail, Github, Linkedin } from "lucide-react";
import { profile, socialLinks } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  return (
    <section id="contact" className="section pb-24">
      <div className="shell">
        <Card className="border-primary/10 bg-card/70">
          <CardContent className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-5">
              <SectionHeading
                eyebrow="Contact"
                title="Let's build something meaningful."
                description="I'm open to opportunities in Frontend, Web3 and Fintech engineering. If the resume file is not available yet, reach out directly and I can share it separately."
              />
              <div className="text-sm leading-7 text-muted-foreground">
                <p>{profile.location}</p>
                <a href={`mailto:${profile.email}`} className="text-primary hover:text-primary/80">
                  {profile.email}
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href={`mailto:${profile.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Email me
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                <a href={socialLinks[1].href} target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full px-6">
                <a href={socialLinks[0].href} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
