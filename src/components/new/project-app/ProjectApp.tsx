import React from "react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Github, Clock } from "lucide-react";
import { AppFrame } from "../app-frames/App-frames";
import "./project-app.css";

export type ProjectHighlight = {
    icon: LucideIcon;
    title: string;
    text: string;
};

export type ProjectTech = {
    name: string;
    icon?: IconType;
    color: string;
    mono?: string;
};

export type ProjectLink = {
    label: string;
    href?: string;
    variant: "primary" | "ghost" | "soon";
};

export type ProjectContent = {
    id: string;
    title: string;
    tagline: string;
    badge: string;
    wip?: boolean;
    accent: string;
    accentInk: string;
    gradientFrom: string;
    gradientTo: string;
    description: string;
    highlights: ProjectHighlight[];
    tech: ProjectTech[];
    screenshot?: string;
    screenshotAlt?: string;
    placeholder?: { title: string; text: string };
    links: ProjectLink[];
};

type ProjectAppProps = {
    isOpen: boolean;
    onClose: () => void;
    focusToken?: number;
    project: ProjectContent;
};

const hexToRgba = (hex: string, alpha: number) => {
    const value = hex.replace("#", "");
    const r = parseInt(value.substring(0, 2), 16);
    const g = parseInt(value.substring(2, 4), 16);
    const b = parseInt(value.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const ProjectApp: React.FC<ProjectAppProps> = ({
    isOpen,
    onClose,
    focusToken,
    project,
}) => {
    const accentVars = {
        "--proj-accent": project.accent,
        "--proj-accent-ink": project.accentInk,
        "--proj-accent-soft": hexToRgba(project.accent, 0.13),
        "--proj-accent-border": hexToRgba(project.accent, 0.26),
        "--proj-accent-shadow": hexToRgba(project.accent, 0.3),
        "--proj-glow": hexToRgba(project.accent, 0.18),
        "--proj-grad-from": project.gradientFrom,
        "--proj-grad-to": project.gradientTo,
    } as React.CSSProperties;

    return (
        <AppFrame
            isOpen={isOpen}
            onClose={onClose}
            focusToken={focusToken}
            title={project.title}
            overlay
            windowClassName="project-window"
            contentClassName="project-body"
        >
            <div className="project-page" style={accentVars}>
                <header className="project-hero">
                    <span
                        className={`project-badge ${
                            project.wip ? "project-badge-wip" : ""
                        }`}
                    >
                        <span className="project-badge-dot" />
                        {project.badge}
                    </span>
                    <h1 className="project-title">{project.title}</h1>
                    <p className="project-tagline">{project.tagline}</p>
                    {project.links.length > 0 && (
                        <div className="project-actions">
                            {project.links.map((link) => {
                                if (link.variant === "soon") {
                                    return (
                                        <span
                                            key={link.label}
                                            className="project-btn-soon"
                                        >
                                            <Clock size={15} />
                                            {link.label}
                                        </span>
                                    );
                                }
                                const isGhost = link.variant === "ghost";
                                return (
                                    <a
                                        key={link.label}
                                        className={
                                            isGhost
                                                ? "project-btn-ghost"
                                                : "project-btn"
                                        }
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {isGhost ? (
                                            <Github size={16} />
                                        ) : null}
                                        {link.label}
                                        {!isGhost ? (
                                            <ArrowUpRight size={16} />
                                        ) : null}
                                    </a>
                                );
                            })}
                        </div>
                    )}
                </header>

                <section className="project-features">
                    {project.highlights.map((highlight) => {
                        const HighlightIcon = highlight.icon;
                        return (
                            <div key={highlight.title} className="project-feature">
                                <span className="project-feature-icon">
                                    <HighlightIcon size={20} />
                                </span>
                                <h3 className="project-feature-title">
                                    {highlight.title}
                                </h3>
                                <p className="project-feature-text">
                                    {highlight.text}
                                </p>
                            </div>
                        );
                    })}
                </section>

                {project.screenshot ? (
                    <div className="project-shot-frame">
                        <img
                            src={project.screenshot}
                            alt={project.screenshotAlt ?? project.title}
                            className="project-shot-img"
                        />
                    </div>
                ) : project.placeholder ? (
                    <div className="project-shot-placeholder">
                        <span className="project-shot-placeholder-icon">
                            <Clock size={22} />
                        </span>
                        <p className="project-shot-placeholder-title">
                            {project.placeholder.title}
                        </p>
                        <p className="project-shot-placeholder-text">
                            {project.placeholder.text}
                        </p>
                    </div>
                ) : null}

                <section className="project-about">
                    <h2 className="project-section-title">About this project</h2>
                    <p className="project-about-text">{project.description}</p>
                </section>

                <section className="project-stack">
                    <h2 className="project-section-title">Built with</h2>
                    <div className="project-chips">
                        {project.tech.map((item) => {
                            const TechIcon = item.icon;
                            return (
                                <span key={item.name} className="project-chip">
                                    <span
                                        className="project-chip-icon"
                                        style={{ color: item.color }}
                                    >
                                        {TechIcon ? (
                                            <TechIcon />
                                        ) : (
                                            <span
                                                className="project-chip-mono"
                                                style={{ background: item.color }}
                                            >
                                                {item.mono}
                                            </span>
                                        )}
                                    </span>
                                    <span className="project-chip-name">
                                        {item.name}
                                    </span>
                                </span>
                            );
                        })}
                    </div>
                </section>
            </div>
        </AppFrame>
    );
};

export default ProjectApp;
