import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { portfolioData } from "@/lib/portfolioData";
import { BookOpen, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const books = (portfolioData.books ?? []).map((book) => ({
    title: book.title,
    description: book.description ?? "",
    tags: book.tags ?? [],
    status: book.status ?? "Published",
    progress: book.progress ?? 0,
    link: book.link ?? "",
    guideCount: book.guideCount ?? "",
    topics: book.topics ?? [],
}));

const BooksSection = () => (
    <section>
        <SectionHeading title="Books & Writing" id="books" />
        <div className="space-y-4">
            {books.map((book) => (
                <div
                    key={book.title}
                    className="border border-border rounded-md p-5 hover:border-primary/30 transition-colors"
                >
                    <div className="flex items-start gap-3 mb-3">
                        <BookOpen size={16} className="text-primary shrink-0 mt-0.5" />
                        <div className="flex-1">
                            <div className="flex items-start justify-between gap-4 mb-2">
                                <h3 className="text-sm font-medium text-foreground">{book.title}</h3>
                                {book.link && (
                                    <a
                                        href={book.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Open ${book.title}`}
                                        title="Open book"
                                        className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                                    >
                                        <ExternalLink size={14} />
                                    </a>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-1.5 mb-2">
                                {book.tags.map((tag) => (
                                    <Badge key={tag} variant="outline" className="text-[9px] px-1.5 py-0">
                                        {tag}
                                    </Badge>
                                ))}
                                <Badge
                                    variant={book.status === "In Progress" ? "default" : "secondary"}
                                    className="text-[9px] px-1.5 py-0"
                                >
                                    {book.status}
                                </Badge>
                                <Badge variant="outline" className="text-[9px] px-1.5 py-0">
                                    {book.guideCount}
                                </Badge>
                            </div>

                            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                                {book.description}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1 mb-3">
                                {book.topics.map((topic) => (
                                    <p key={topic} className="text-[11px] text-muted-foreground leading-snug">
                                        <span className="text-primary mr-1">•</span>
                                        {topic}
                                    </p>
                                ))}
                            </div>

                            {book.status === "In Progress" && book.progress > 0 && (
                                <div className="space-y-1">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-muted-foreground">
                                            Progress
                                        </span>
                                        <span className="text-[10px] font-mono text-primary">
                                            {book.progress}%
                                        </span>
                                    </div>
                                    <Progress value={book.progress} className="h-1.5" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default BooksSection;
