import React from "react";
import type { IconType } from "react-icons";
import {
    SiReact,
    SiNextdotjs,
    SiExpress,
    SiTypescript,
    SiAuth0,
    SiVercel,
    SiOpenai,
    SiSlack,
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
        period: "Jun 2024 — Present",
        location: "Remote",
        summary:
            "Building a full-stack financial platform end to end — from real-time routing and auth to AI-powered internal tooling.",
        bullets: [
            "Built and deployed a full-stack financial platform with Next.js, React, Express.js, Vercel, and Azure SQL — real-time routing, global state with Zustand, and secure auth via Auth0 and JWTs.",
            "Created two AI-driven chatbots: one using Retrieval-Augmented Generation with vectorized semantic search, and another that turns natural-language prompts into structured JSON tables and generates database schemas.",
            "Developed a Slack integration with full multi-workspace support and persistent per-workspace state, letting users reach their linked workspaces in-app and cutting context switching.",
            "Implemented real-time UI features — drag-and-drop task workflows, live notifications, and dynamic data rehydration — to improve responsiveness and interactivity.",
        ],
        tech: [
            { name: "Next.js", icon: SiNextdotjs, color: "#111111" },
            { name: "React", icon: SiReact, color: "#149ECA" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Express", icon: SiExpress, color: "#444444" },
            { name: "Zustand", color: "#8B5E3C", mono: "Zu" },
            { name: "Auth0", icon: SiAuth0, color: "#EB5424" },
            { name: "Azure", color: "#0078D4", mono: "Az" },
            { name: "Vercel", icon: SiVercel, color: "#111111" },
            { name: "OpenAI", icon: SiOpenai, color: "#412991" },
            { name: "Slack", icon: SiSlack, color: "#4A154B" },
        ],
    },
    {
        company: "McMaster University · Art History Research",
        role: "Research & Technical Assistant",
        period: "Jun 2024 — Present",
        location: "Hamilton, ON",
        summary:
            "Spatial-data research mapping 19th-century French artists' networks alongside a McMaster Art History professor.",
        bullets: [
            "Mapped 19th-century French artists' residences and migration patterns with ArcGIS Pro, SQL, and Excel to analyze how geography and proximity to institutions shaped artistic networks.",
            "Cleaned and organized historical data from multiple sources into structured artist profiles; standardized locations and dates for accurate spatial mapping and analysis.",
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
