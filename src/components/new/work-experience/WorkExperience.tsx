import React from "react";
import type { IconType } from "react-icons";
import {
    SiNextdotjs,
    SiTypescript,
    SiPrisma,
    SiPostgresql,
    SiArcgis,
} from "react-icons/si";
import { Database } from "lucide-react";
import { AppFrame } from "../app-frames/App-frames";
import "./workexperience.css";

type WorkExperienceProps = {
    isOpen: boolean;
    onClose: () => void;
    focusToken?: number;
};

type Tech = {
    name: string;
    icon?: IconType;
    color: string;
    mono?: string;
};

type ExperienceItem = {
    company: string;
    role: string;
    period: string;
    location: string;
    summary: string;
    bullets: string[];
    tech: Tech[];
};

const experiences: ExperienceItem[] = [
    {
        company: "MBA4HIRE",
        role: "Full-Stack Developer",
        period: "Jun 2024 — Oct 2026",
        location: "Remote",
        summary:
            "Core engineer on a SaaS product built end to end, spanning platform architecture, AI orchestration, workflow automation, and data integration.",
        bullets: [
            "As one of two engineers, built a multi-tenant SaaS platform (Next.js, TypeScript, Prisma, Azure SQL, PostgreSQL/pgvector) from the ground up, designing its architecture, authentication, tenant isolation, and ~210 API endpoints.",
            "Designed the platform's AI orchestration layer, using deterministic routing and RAG to narrow each request to only the relevant tools; built an eval harness that replays real traces so routing changes ship with regression coverage.",
            "Architected a no-code, drag-and-drop workflow engine with ~35 reusable node types, run history, and durable suspend/resume, letting non-technical admins automate business processes and replacing ~30 hours/week of manual coordination.",
            "Built the platform's data-integration layer, connecting external SQL warehouses such as Xactly Connect via Model Context Protocol (MCP) and a REST SQL bridge, with chunked streaming sync of millions of rows into Azure SQL for live dashboards and AI access.",
            "Optimized platform performance and reliability by adding database indexes, batching queries, lazy-loading heavy views, and cutting redundant API fan-out from ~12 calls to 1 per view through caching and deduplication.",
        ],
        tech: [
            { name: "Next.js", icon: SiNextdotjs, color: "#111111" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "Azure SQL", color: "#0078D4", mono: "Az" },
            { name: "RAG", color: "#0EA5E9", mono: "AI" },
            { name: "MCP", color: "#6366F1", mono: "MCP" },
        ],
    },
    {
        company: "McMaster University · Art History Research",
        role: "Geospatial Analysis of Second Empire France Artists",
        period: "Jun 2024 — Present",
        location: "Hamilton, ON",
        summary:
            "Spatial research mapping 19th-century French artists' networks alongside a McMaster Art History professor.",
        bullets: [
            "Collaborated with a McMaster Art History professor, Dr. Alison McQueen, on a spatial research project mapping 19th-century French artists' residences and migration patterns.",
            "Used ArcGIS Pro, SQL, and Excel to clean and standardize historical data, and analyzed how institutional proximity and urban expansion shaped artistic networks.",
        ],
        tech: [
            { name: "ArcGIS Pro", icon: SiArcgis, color: "#0079C1" },
            { name: "SQL", icon: Database, color: "#4B5563" },
            { name: "Excel", color: "#217346", mono: "Xl" },
        ],
    },
];

export const WorkExperience: React.FC<WorkExperienceProps> = ({
    isOpen,
    onClose,
    focusToken,
}) => {
    return (
        <AppFrame
            isOpen={isOpen}
            onClose={onClose}
            focusToken={focusToken}
            title="Work Experience"
            overlay
            windowClassName="we-window"
            contentClassName="we-body"
        >
            <div className="we-main">
                <header className="we-header">
                    <h1 className="we-title">Relevant Work Experience</h1>
                    <p className="we-intro">
                        Roles where I&apos;ve put software engineering,
                        automation, and research-driven problem solving to work.
                    </p>
                </header>

                <div className="we-timeline">
                    {experiences.map((experience, index) => (
                        <section
                            key={`${experience.company}-${experience.role}`}
                            className="we-entry"
                        >
                            <div className="we-marker">
                                <span className="we-dot" />
                                {index !== experiences.length - 1 && (
                                    <span className="we-line" />
                                )}
                            </div>

                            <article className="we-card">
                                <p className="we-company">
                                    {experience.company}
                                </p>
                                <h2 className="we-role">{experience.role}</h2>
                                <div className="we-meta">
                                    <span className="we-period">
                                        {experience.period}
                                    </span>
                                    <span className="we-location">
                                        {experience.location}
                                    </span>
                                </div>

                                <p className="we-summary">
                                    {experience.summary}
                                </p>

                                <ul className="we-bullets">
                                    {experience.bullets.map((bullet) => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>

                                <div className="we-tech">
                                    {experience.tech.map((tech) => {
                                        const TechIcon = tech.icon;
                                        return (
                                            <span
                                                key={tech.name}
                                                className="we-chip"
                                            >
                                                <span
                                                    className="we-chip-icon"
                                                    style={{ color: tech.color }}
                                                >
                                                    {TechIcon ? (
                                                        <TechIcon />
                                                    ) : (
                                                        <span
                                                            className="we-chip-mono"
                                                            style={{
                                                                background:
                                                                    tech.color,
                                                            }}
                                                        >
                                                            {tech.mono ??
                                                                tech.name.slice(
                                                                    0,
                                                                    2
                                                                )}
                                                        </span>
                                                    )}
                                                </span>
                                                <span className="we-chip-name">
                                                    {tech.name}
                                                </span>
                                            </span>
                                        );
                                    })}
                                </div>
                            </article>
                        </section>
                    ))}
                </div>
            </div>
        </AppFrame>
    );
};

export default WorkExperience;
