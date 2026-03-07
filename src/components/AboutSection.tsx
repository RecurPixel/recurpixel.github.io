import SectionHeading from "./SectionHeading";

const AboutSection = () => (
  <section>
    <SectionHeading title="About" id="about" />
    <div className="grid md:grid-cols-[1fr_auto] gap-10">
      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          I'm a backend developer with <span className="text-foreground">4+ years of proven backend delivery experience</span>
          across product teams and client projects, including <span className="text-foreground">2+ years of independent product development</span>.
        </p>
        <p>
          My technical journey has evolved from working with different backend technologies to now specializing in the{" "}
          <span className="text-foreground">.NET ecosystem</span>. I focus on building clean, maintainable APIs using ASP.NET Core,
          Entity Framework Core, and modern development practices.
        </p>
        <p>
          I'm passionate about backend architecture, database design, and writing code that's easy for teams to work with.
          Currently expanding my expertise in cloud-native development with Azure.
        </p>

        <div className="pt-4">
          <p className="text-xs font-medium text-foreground mb-2">Current Skills</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-1 font-mono text-xs">
            {[
              "C# & .NET",
              "ASP.NET Core Web API",
              "Entity Framework Core",
              "SQL Server & T-SQL",
              "RESTful API Design",
              "Git & Azure DevOps",
            ].map((s) => (
              <span key={s} className="text-muted-foreground py-0.5">
                <span className="text-primary mr-1.5">›</span>{s}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <p className="text-xs font-medium text-foreground mb-2">Learning</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-1 font-mono text-xs">
            {[
              "Microservices Architecture",
              "Docker & Kubernetes",
              "Azure Cloud Services",
              "Design Patterns",
              "System Design",
            ].map((s) => (
              <span key={s} className="text-muted-foreground py-0.5">
                <span className="text-primary mr-1.5">⟩</span>{s}
              </span>
            ))}
          </div>
        </div>

        <p className="text-xs text-primary pt-4">
          🎯 Seeking backend development opportunities where I can contribute to production systems while growing as a .NET engineer.
        </p>
      </div>

      <div className="hidden md:block w-44 h-56 rounded-md overflow-hidden ring-1 ring-border">
        <img src="/assets/profile-standing-side.png" alt="Manu" className="w-full h-full object-cover" />
      </div>
    </div>
  </section>
);

export default AboutSection;
