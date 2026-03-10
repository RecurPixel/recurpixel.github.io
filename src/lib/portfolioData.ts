import rawPortfolioData from "../../portfolio-data.json";

export type PortfolioProject = {
    name: string;
    description?: string;
    technologies?: string[];
    tags?: string[];
    github?: string;
    demo?: string;
    metrics?: Record<string, string> | string[];
    highlights?: string[];
};

export type PortfolioExperience = {
    title: string;
    company: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    duration?: string;
    phase?: string;
    responsibilities?: string[];
    skills?: string[];
};

export type PortfolioEducation = {
    degree: string;
    institution: string;
    startDate?: string;
    endDate?: string;
    grade?: string;
};

export type PortfolioAchievement = {
    title: string;
    issuer?: string;
    date?: string;
    status?: string;
    description?: string;
};

export type PortfolioBook = {
    title: string;
    description?: string;
    tags?: string[];
    status?: string;
    progress?: number;
    link?: string;
    guideCount?: string;
    topics?: string[];
};

export type PortfolioData = {
    personal?: {
        name?: string;
        firstName?: string;
        tagline?: string;
        greeting?: string;
        bio?: string;
        location?: string;
    };
    about?: {
        introduction?: string[];
        goal?: string;
        currentSkills?: string[];
        learningSkills?: string[];
    };
    experience?: PortfolioExperience[];
    education?: PortfolioEducation[];
    projects?: PortfolioProject[];
    achievements?: PortfolioAchievement[];
    books?: PortfolioBook[];
    contact?: {
        email?: string;
        message?: string;
    };
    config?: {
        pages?: {
            posts?: {
                enabled?: boolean;
                devToUsername?: string;
                maxPosts?: number;
            };
        };
        assets?: {
            resumePdf?: string;
            profileImageMain?: string;
            profileImageAbout?: string;
        };
        social?: {
            github?: string;
            linkedin?: string;
            email?: string;
            devto?: string;
        };
    };
};

export const portfolioData = rawPortfolioData as PortfolioData;
