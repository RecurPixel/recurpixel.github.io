import SectionHeading from "./SectionHeading";

const education = [
  { period: "2019 – 2021", degree: "M.Sc Computer Science", school: "VCACS, Pune", grade: "CGPA: 9.2" },
  { period: "2016 – 2019", degree: "B.Sc Computer Science", school: "S.M.Joshi College, Pune", grade: "86.8%" },
];

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
