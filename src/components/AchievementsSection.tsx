import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolioData";
import { BookMarked } from "lucide-react";
import SectionHeading from "./SectionHeading";

const learning = (portfolioData.achievements ?? []).map((item) => ({
  title: item.title,
  provider: item.issuer ?? "",
  status: item.status ?? "Planned",
  timeframe: item.date ?? "",
  description: item.description ?? "",
}));

const badgeVariantByStatus: Record<string, "default" | "secondary" | "outline"> = {
  Completed: "default",
  Ongoing: "secondary",
  Planned: "outline",
};

const AchievementsSection = () => (
  <section>
    <SectionHeading title="Learning & Professional Development" id="achievements" />
    <p className="text-xs text-muted-foreground mb-4">
      Focused on continuous upskilling through Pluralsight paths. Items are labeled by current progress to keep this section fully accurate.
    </p>
    <div className="space-y-4">
      {learning.map((item) => (
        <div key={item.title} className="flex gap-3 items-start">
          <BookMarked size={14} className="text-primary shrink-0 mt-0.5" />
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-foreground font-medium">{item.title}</span>
              <span className="text-xs text-muted-foreground">• {item.provider}</span>
              <span className="text-xs font-mono text-muted-foreground">({item.timeframe})</span>
              <Badge variant={badgeVariantByStatus[item.status] ?? "outline"} className="text-[10px] px-1.5 py-0">
                {item.status}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default AchievementsSection;
