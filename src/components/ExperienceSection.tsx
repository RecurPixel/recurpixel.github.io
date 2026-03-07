import { Badge } from "@/components/ui/badge";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    period: "Jun 2024 – Present",
    duration: "1 yr 10 mos",
    role: "Independent Software Developer",
    company: "Self-Employed",
    location: "Pune District, Maharashtra (Remote)",
    phase: "🚀 Growth & Contribution",
    highlights: [
      "Published and actively maintain RecurPixel.Notify NuGet package (500+ downloads) — multi-channel notification library",
      "Building ShopCore — enterprise-grade multi-vendor e-commerce backend with 150+ API endpoints, Clean Architecture, and CQRS",
      "Architected production systems using ASP.NET Core 10, Entity Framework Core, and Azure",
      "Contributing to .NET community through open-source development",
    ],
    skills: ["ASP.NET Core 10", "Entity Framework Core", "Clean Architecture", "CQRS", "Azure", "NuGet Publishing"],
  },
  {
    period: "Aug 2023 – Jun 2024",
    duration: "11 mos",
    role: "Developer (Part-time, Strategic)",
    company: "ITWorks Infotech Pvt LTD",
    location: "Pune District, Maharashtra (Remote)",
    phase: "⚡ Strategic Transition",
    highlights: [
      "Served as experienced consultant on part-time basis for established client relationships",
      "Maintained and optimized critical backend API systems for production applications",
      "Managed cloud infrastructure (AWS EC2, Linux VPS) ensuring high availability",
      "Leveraged proven track record to negotiate flexible arrangement supporting independent work",
    ],
    skills: ["ASP.NET Core", "AWS", "Linux", "API Optimization"],
  },
  {
    period: "Feb 2023 – Jul 2023",
    duration: "6 mos",
    role: "Web Developer (Freelance)",
    company: "Self-Employed",
    location: "Pune District, Maharashtra",
    phase: "🔧 First Independent Venture",
    highlights: [
      "Built end-to-end solutions for startup and SME clients across multiple industries",
      "Developed complete backend systems with database architectures designed from scratch",
      "Intensively mastered .NET ecosystem (C#, ASP.NET Core, Entity Framework Core)",
      "Delivered 5+ complete projects with 100% client satisfaction",
    ],
    skills: ["C#", "ASP.NET Core", "Backend Architecture", "Database Design"],
  },
  {
    period: "Aug 2021 – Dec 2022",
    duration: "1 yr 5 mos",
    role: "Developer (Full-time Foundation)",
    company: "ITWorks Infotech Pvt LTD",
    location: "Pune Division, Maharashtra (On-site)",
    phase: "🎓 Career Foundation",
    highlights: [
      "Led backend development for 10+ client applications across different business domains",
      "Designed RESTful APIs and database schemas for scalable systems",
      "Integrated payment gateways (Razorpay, Stripe), OAuth, SMS/email providers",
      "Built comprehensive admin dashboards and business management platforms",
    ],
    skills: ["C#", ".NET Framework & .NET Core", "SQL Server", "RESTful API Design"],
  },
];

const ExperienceSection = () => (
  <section>
    <SectionHeading title="Experience" id="experience" />
    <div className="space-y-8">
      {experiences.map((exp, idx) => (
        <div key={idx} className="group">
          <div className="flex flex-col gap-1 mb-3">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-sm font-medium text-foreground">{exp.role}</h3>
              <span className="text-xs font-mono text-muted-foreground shrink-0">{exp.period}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-xs text-primary font-mono">{exp.company}</p>
              <span className="text-xs text-muted-foreground">• {exp.location}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{exp.phase}</p>
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
