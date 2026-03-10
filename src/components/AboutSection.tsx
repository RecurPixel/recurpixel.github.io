import { portfolioData } from "@/lib/portfolioData";
import SectionHeading from "./SectionHeading";

const aboutData = portfolioData.about ?? {};
const currentSkills = aboutData?.currentSkills ?? [];
const learningSkills = aboutData?.learningSkills ?? [];
const careerGoal = aboutData?.goal ?? "";
const introduction = (aboutData?.introduction ?? []).map((text) => text.replace(/\*\*(.*?)\*\*/g, "$1"));
const profileImage = portfolioData.config?.assets?.profileImageAbout ?? "/assets/profile-standing-side.png";
const profileName = portfolioData.personal?.firstName ?? portfolioData.personal?.name ?? "Manu";

const AboutSection = () => (
  <section>
    <SectionHeading title="About" id="about" />
    <div className="grid md:grid-cols-[1fr_auto] gap-10">
      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        {introduction.map((paragraph, index) => (
          <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
        ))}

        <div className="pt-4">
          <p className="text-xs font-medium text-foreground mb-2">Current Skills</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-1 font-mono text-xs">
            {currentSkills.map((s) => (
              <span key={s} className="text-muted-foreground py-0.5">
                <span className="text-primary mr-1.5">›</span>{s}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <p className="text-xs font-medium text-foreground mb-2">Learning</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-1 font-mono text-xs">
            {learningSkills.map((s) => (
              <span key={s} className="text-muted-foreground py-0.5">
                <span className="text-primary mr-1.5">⟩</span>{s}
              </span>
            ))}
          </div>
        </div>

        <p className="text-xs text-primary pt-4">
          {careerGoal}
        </p>
      </div>

      <div className="hidden md:block w-44 h-56 rounded-md overflow-hidden ring-1 ring-border">
        <img src={profileImage} alt={profileName} className="w-full h-full object-cover" />
      </div>
    </div>
  </section>
);

export default AboutSection;
