import { Badge } from "@/components/ui/badge";
import { portfolioData, type PortfolioProject } from "@/lib/portfolioData";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";

const toMetricLabel = (key: string, value: string) => {
  const readableKey = key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\bApi\b/g, "API")
    .replace(/\bCqrs\b/g, "CQRS")
    .replace(/\bDb\b/g, "DB")
    .replace(/\bEf\b/g, "EF")
    .replace(/\bNuget\b/g, "NuGet");

  return `${readableKey}: ${value}`;
};

const projects = ((portfolioData.projects as PortfolioProject[]) ?? []).map((project) => {
  const metrics = Array.isArray(project.metrics)
    ? project.metrics
    : project.metrics
      ? Object.entries(project.metrics).map(([key, value]) => toMetricLabel(key, value))
      : [];

  return {
    ...project,
    metrics,
    tags: project.tags ?? [],
    highlights: project.highlights ?? [],
    technologies: project.technologies ?? [],
  };
});

const ProjectsSection = () => (
  <section>
    <SectionHeading title="Projects" id="projects" />
    <div className="space-y-6">
      {projects.map((project) => (
        <div
          key={project.name}
          className="border border-border rounded-md p-5 hover:border-primary/30 transition-colors group"
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-[9px] px-1.5 py-0">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.name} on GitHub`}
                  title="GitHub"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.name} project link`}
                  title="Project link"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed mb-3">
            {project.description ?? ""}
          </p>

          {project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {project.metrics.map((metric) => (
                <span key={metric} className="font-mono text-[10px] text-primary bg-primary/5 px-2 py-0.5 rounded">
                  {metric}
                </span>
              ))}
            </div>
          )}

          {project.highlights.length > 0 && (
            <ul className="space-y-0.5 mb-3">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="text-[11px] text-muted-foreground flex gap-2">
                  <span className="text-primary shrink-0">✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          <p className="font-mono text-[10px] text-muted-foreground">
            {project.technologies.join(" • ")}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
