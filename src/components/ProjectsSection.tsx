import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    name: "RecurPixel.EasyMessages",
    description: "Production-ready message library for .NET. 200+ built-in messages. Zero configuration. Because developers shouldn't waste time writing error messages. 🚀",
    technologies: [".NET", "C#", "NuGet Package", "Clean Architecture"],
    tags: ["NuGet", "Open Source", "Production"],
    github: "https://github.com/RecurPixel/RecurPixel.EasyMessages",
    demo: "https://www.nuget.org/packages/RecurPixel.EasyMessages",
    metrics: ["500+ downloads", "200+ messages", "Zero config"],
    highlights: [
      "200+ built-in error, success, and validation messages",
      "Zero configuration required",
      "Type-safe message access",
      "Extensible for custom messages",
    ],
  },
  {
    name: "RecurPixel.Notify",
    description: "Production-ready NuGet library for multi-channel notification delivery in ASP.NET Core. Drop-in solution supporting Email, SMS, Push, WhatsApp, Slack, Discord, Teams, and more.",
    technologies: [".NET", "ASP.NET Core", "NuGet Package", "SendGrid", "Twilio", "Firebase"],
    tags: ["NuGet", "Open Source", "Production"],
    github: "https://github.com/RecurPixel/Notify",
    demo: "https://www.nuget.org/packages/RecurPixel.Notify.Sdk",
    metrics: ["500+ downloads", "30+ adapters", "13+ channels"],
    highlights: [
      "30+ provider adapters",
      "DI-native with ASP.NET Core integration",
      "Retry with exponential backoff",
      "Cross-channel fallback chains",
    ],
  },
  {
    name: "ShopCore",
    description: "ShopCore is a dual-purpose platform combining traditional e-commerce with an innovative subscription-based recurring delivery model for daily essentials in the Indian market.",
    technologies: ["ASP.NET Core 10", "Entity Framework Core", "MediatR", "FluentValidation", "SQL Server"],
    tags: ["E-Commerce", "Subscriptions", "Multi-Vendor"],
    github: "https://github.com/RecurPixel/ShopCore",
    demo: "",
    metrics: ["150+ API endpoints", "50+ entities", "40+ tables", "Dual-purpose platform"],
    highlights: [
      "One backend, two frontends: public marketplace + private subscription product",
      "Flexible billing cycles with daily delivery and monthly payment",
      "Optional deposit system with smart settlement",
      "Multi-item subscriptions in one plan (milk + newspaper + bread)",
      "Vendor-led onboarding and location-based vendor discovery",
      "Razorpay and Stripe integration with role-based access control",
    ],
  },
];

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
            {project.description}
          </p>

          {project.metrics && (
            <div className="flex flex-wrap gap-2 mb-3">
              {project.metrics.map((metric) => (
                <span key={metric} className="font-mono text-[10px] text-primary bg-primary/5 px-2 py-0.5 rounded">
                  {metric}
                </span>
              ))}
            </div>
          )}

          {project.highlights && (
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
