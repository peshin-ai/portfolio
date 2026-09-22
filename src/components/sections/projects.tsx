import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work grounded in actual production experience."
          description="These are representative product surfaces from Web3 and enterprise work, not speculative portfolio demos."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
