import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-[90vh] flex items-center pt-14">
    <div className="w-full">
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10">
        <div className="flex-1">
          <p className="font-mono text-xs text-primary mb-4 tracking-wider">// Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
            Manu.
          </h1>
          <p className="text-lg text-muted-foreground mt-2 font-light">
            Backend Developer | .NET & ASP.NET Core
          </p>
          <p className="font-mono text-xs text-muted-foreground mt-1">
            📍 Pune, Maharashtra, IN
          </p>

          <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-md">
            Backend engineer with 4+ years of proven delivery experience across APIs and production systems,
            including 2+ years leading independent product and open-source development.
            Specialized in .NET, ASP.NET Core, and Entity Framework Core with a strong focus on clean architecture.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a href="https://github.com/RecurPixel" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile" title="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/RecurPixel" target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile" title="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:recurpixel@gmail.com" aria-label="Send email to recurpixel@gmail.com" title="Email" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} />
            </a>
            <span className="h-4 w-px bg-border mx-1" />
            <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-primary hover:underline">resume.pdf</a>
          </div>
        </div>

        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-border ring-offset-2 ring-offset-background shrink-0">
          <img src="/assets/profile-passport.png" alt="Manu" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
