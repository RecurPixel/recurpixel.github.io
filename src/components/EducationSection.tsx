import { portfolioData } from "@/lib/portfolioData";
import SectionHeading from "./SectionHeading";

const education = (portfolioData.education ?? []).map((item) => ({
  period: `${item.startDate ?? ""} - ${item.endDate ?? ""}`.trim(),
  degree: item.degree,
  school: item.institution,
  grade: item.grade ?? "",
}));

const EducationSection = () => (
  <section>
    <SectionHeading title="Education" id="education" />
    <div className="space-y-4">
      {education.map((e) => (
        <div key={e.degree} className="flex items-baseline justify-between gap-4">
          <div>
            <h3 className="text-sm font-medium text-foreground">{e.degree}</h3>
            <p className="text-xs text-muted-foreground">{e.school} · <span className="text-primary font-mono">{e.grade}</span></p>
          </div>
          <span className="text-xs font-mono text-muted-foreground shrink-0">{e.period}</span>
        </div>
      ))}
    </div>
  </section>
);

export default EducationSection;
