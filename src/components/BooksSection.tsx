import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const books = [
    {
        title: "Book 1: C# Fundamentals",
        description:
            "A practical C# foundation that moves from language basics to real-world concurrency and reflection so you can write confident production code.",
        tags: ["C#", ".NET", "Fundamentals"],
        status: "Published",
        progress: 0,
        link: "https://recurpixel.gitbook.io/books/book-1-c-fundamentals/c-fundamentals",
        guideCount: "14 guides",
        topics: [
            "Fundamentals & Data Types",
            "Control Flow",
            "Object-Oriented Programming",
            "Delegates, Events & Lambdas",
            "Advanced Features Timeline",
            "Exception Handling",
            "LINQ",
            "DateTime, Regex & Utilities",
            "Namespaces & Assemblies",
            ".NET Runtime & Core Concepts",
            "File I/O Quick Reference",
            "Collections",
            "Attributes & Reflection",
            "Async, Threading & Concurrency",
        ],
    },
    {
        title: "Book 2: ASP.NET Core Development (Quick Reference Cards)",
        description:
            "A fast, developer-first ASP.NET Core reference covering the full API lifecycle from project setup to testing, security, and diagnostics.",
        tags: ["ASP.NET Core", "Web API", "Reference"],
        status: "Published",
        progress: 0,
        link: "https://recurpixel.gitbook.io/books/book-2-asp.net-core-development/asp.net-core",
        guideCount: "11 cards",
        topics: [
            "Project Structure & Fundamentals",
            "Configuration & Dependency Injection",
            "Middleware & HTTP Pipeline",
            "Routing & Controllers",
            "Entity Framework Core",
            "REST API, DTO & Validation",
            "Authentication & Authorization",
            "Filters, Logging & Error Handling",
            "Testing ASP.NET Core",
            "Testing (Advanced)",
            "Common Interfaces & Namespaces",
        ],
    },
    {
        title: "Book 3: Complete Workbook",
        description:
            "A guided workbook that helps you study in the right order, practice intentionally, and prepare for interviews with less guesswork.",
        tags: ["Workbook", "Interview Prep", "Learning Path"],
        status: "Published",
        progress: 0,
        link: "https://recurpixel.gitbook.io/books/book-3-complete-workbook/complete-workbook",
        guideCount: "8 core sections",
        topics: [
            "Problems Index (START HERE)",
            "Workbook Guide",
            "Learning Phases",
            "Interview Preparation",
            "Setup Guide",
            "Quick Reference",
            "Troubleshooting Guide",
            "Resources & Next Steps",
        ],
    },
    {
        title: "Book 4: Advanced Guides & References",
        description:
            "An advanced engineering handbook for building scalable backend systems with stronger architecture, performance, and platform-level practices.",
        tags: ["Advanced", "Architecture", "Performance"],
        status: "Published",
        progress: 0,
        link: "https://recurpixel.gitbook.io/books/book-4-advanced-guides-and-references/advanced-guides",
        guideCount: "12 advanced guides",
        topics: [
            "Azure Fundamentals",
            "BenchmarkDotNet & Performance",
            "Caching & Redis Patterns",
            "Clean Architecture",
            "Dapper Micro-ORM",
            "Database Design & Indexing",
            "Docker & CI/CD Pipelines",
            "Git & GitHub Workflow",
            "Logging, Monitoring & Debugging",
            "Message Queues & Event-Driven Architecture",
            "SOLID & Design Patterns",
            "SQL Server & T-SQL",
        ],
    },
    {
        title: "Book 5: Advanced Concepts (In Progress)",
        description:
            "An upcoming deep-dive focused on modern backend engineering: microservices architecture, DevOps workflows, and system design for real production scale.",
        tags: ["Microservices", "DevOps", "System Design"],
        status: "In Progress",
        progress: 35,
        link: "https://recurpixel.gitbook.io/",
        guideCount: "Work in progress",
        topics: [
            "Microservices Design Patterns",
            "DevOps and Delivery Pipelines",
            "Scalable System Design",
            "Observability and Reliability",
            "Distributed Data and Messaging",
        ],
    },
];

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
