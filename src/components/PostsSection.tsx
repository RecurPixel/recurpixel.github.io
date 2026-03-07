import SectionHeading from "./SectionHeading";
import { ExternalLink } from "lucide-react";

const posts = [
  {
    title: "I Got Tired of Wiring Up Notifications From Scratch — So I Built a Library",
    date: "Feb 2026",
    link: "https://dev.to/recurpixel/i-got-tired-of-wiring-up-notifications-from-scratch-so-i-built-a-library-2poi",
  },
  {
    title: "How I Built My First .NET Package (and Got 500+ Downloads)",
    date: "Jan 2026",
    link: "https://dev.to/recurpixel/how-i-built-my-first-net-package-and-got-500-downloads-2jj2",
  },
  {
    title: "DSA Master Learning Plan - Pattern by Pattern",
    date: "Dec 2025",
    link: "https://dev.to/recurpixel/dsa-master-learning-plan-pattern-by-pattern-53ni",
  },
];

const PostsSection = () => (
  <section>
    <SectionHeading title="Writing" id="posts" />
    <div className="space-y-3">
      {posts.map((p) => (
        <a
          key={p.title}
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-baseline justify-between gap-4 group py-1"
        >
          <div className="flex items-baseline gap-2 min-w-0">
            <ExternalLink size={10} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 relative top-[1px]" />
            <span className="text-sm text-foreground group-hover:text-primary transition-colors truncate">{p.title}</span>
          </div>
          <span className="text-xs font-mono text-muted-foreground shrink-0">{p.date}</span>
        </a>
      ))}
    </div>
    <a href="https://dev.to/recurpixel" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
      → all posts on dev.to
    </a>
  </section>
);

export default PostsSection;
