import { Badge } from "@/components/ui/badge";
import { BookMarked } from "lucide-react";
import SectionHeading from "./SectionHeading";

const learning = [
  {
    title: "C# Advanced Programming",
    provider: "Pluralsight",
    status: "Completed",
    timeframe: "2023",
    description: "Completed deep dives into LINQ, async/await, generics, and modern C# language patterns used in production APIs.",
  },
  {
    title: "ASP.NET Core Fundamentals",
    provider: "Pluralsight",
    status: "Completed",
    timeframe: "2024",
    description: "Covered middleware, dependency injection, configuration, routing, and practical API architecture patterns.",
  },
  {
    title: "Entity Framework Core Path",
    provider: "Pluralsight",
    status: "Ongoing",
    timeframe: "Current",
    description: "Actively improving query optimization, migrations strategy, and performance tuning for large data workflows.",
  },
  {
    title: "Microservices Architecture for .NET",
    provider: "Pluralsight",
    status: "Planned",
    timeframe: "Next",
    description: "Planned next to strengthen service boundaries, resilience, and event-driven integration patterns.",
  },
  {
    title: "DevOps for .NET Developers",
    provider: "Pluralsight",
    status: "Planned",
    timeframe: "Roadmap",
    description: "Planned focus area for CI/CD pipelines, container workflows, and release reliability at scale.",
  },
  {
    title: "System Design for Backend Engineers",
    provider: "Pluralsight",
    status: "Planned",
    timeframe: "Roadmap",
    description: "Planned learning track for scalability, distributed systems tradeoffs, and architecture decision-making.",
  },
];

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
              <Badge variant={badgeVariantByStatus[item.status]} className="text-[10px] px-1.5 py-0">
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
