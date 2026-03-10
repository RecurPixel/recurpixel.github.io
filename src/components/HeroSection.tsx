import { portfolioData } from "@/lib/portfolioData";
import { Github, Linkedin, Mail } from "lucide-react";

const personal = portfolioData.personal ?? {};
const social = portfolioData.config?.social ?? {};
const assets = portfolioData.config?.assets ?? {};
const contact = portfolioData.contact ?? {};

const greeting = personal.greeting ?? "Hi, my name is";
const displayName = personal.firstName ?? personal.name ?? "Manu";
const tagline = personal.tagline ?? "Backend Developer | .NET & ASP.NET Core";
const location = personal.location ?? "Pune, Maharashtra, IN";
const bio = personal.bio ?? "";
const githubUrl = social.github ?? "https://github.com/RecurPixel";
const linkedinUrl = social.linkedin ?? "https://linkedin.com/in/RecurPixel";
const email = contact.email ?? social.email ?? "recurpixel@gmail.com";
const resumePdf = assets.resumePdf ?? "/assets/resume.pdf";
const profileImage = assets.profileImageMain ?? "/assets/profile-passport.png";

const HeroSection = () => (
  <section className="min-h-[90vh] flex items-center pt-14">
    <div className="w-full">
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10">
        <div className="flex-1">
          <p className="font-mono text-xs text-primary mb-4 tracking-wider">// {greeting}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
            {displayName}.
          </h1>
          <p className="text-lg text-muted-foreground mt-2 font-light">
            {tagline}
          </p>
          <p className="font-mono text-xs text-muted-foreground mt-1">
            {location}
          </p>

          <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-md">
            {bio}
          </p>

          <div className="mt-8 flex items-center gap-4">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile" title="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={18} />
              </a>
            )}
            {linkedinUrl && (
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile" title="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} aria-label={`Send email to ${email}`} title="Email" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={18} />
              </a>
            )}
            <span className="h-4 w-px bg-border mx-1" />
            <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-primary hover:underline">resume.pdf</a>
          </div>
        </div>

        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-border ring-offset-2 ring-offset-background shrink-0">
          <img src={profileImage} alt={displayName} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
