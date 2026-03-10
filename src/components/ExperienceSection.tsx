import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolioData";
import SectionHeading from "./SectionHeading";

const experiences = (portfolioData.experience ?? []).map((exp) => ({
  period: `${exp.startDate ?? ""} - ${exp.endDate ?? "Present"}`.trim(),
  duration: exp.duration ?? "",
  role: exp.title,
  company: exp.company,
  location: exp.location ?? "",
  phase: exp.phase ?? "",
  highlights: exp.responsibilities ?? [],
  skills: exp.skills ?? [],
}));

const ExperienceSection = () => (
  <section>
    <SectionHeading title="Experience" id="experience" />
    <div className="space-y-8">
      {experiences.map((exp) => (
        <div key={`${exp.role}-${exp.company}-${exp.period}`} className="group">
          <div className="flex flex-col gap-1 mb-3">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-sm font-medium text-foreground">{exp.role}</h3>
              <span className="text-xs font-mono text-muted-foreground shrink-0">{exp.period}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-xs text-primary font-mono">{exp.company}</p>
              {exp.location && <span className="text-xs text-muted-foreground">• {exp.location}</span>}
            </div>
            <p className="text-xs text-muted-foreground mt-1">{exp.phase}{exp.duration && ` (${exp.duration})`}</p>
          </div>

          <ul className="space-y-1.5 mb-3">
            {exp.highlights.map((highlight, i) => (
              <li key={i} className="text-xs text-muted-foreground flex gap-2 leading-relaxed">
                <span className="text-primary mt-1 shrink-0">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {exp.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-[10px] font-mono px-2 py-0.5">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
