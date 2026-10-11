import React from "react";
import type { IconType } from "react-icons";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiRadixui } from "react-icons/si";
import { Users, PenTool, MessageSquare, FileDown, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AppFrame } from "../app-frames/App-frames";
import "./figma.css";

type FigmaCloneProps = { isOpen: boolean; onClose: () => void; focusToken?: number };

const LIVE = "https://bahars-figma-clone.vercel.app";

type Feature = {
    icon: LucideIcon;
    title: string;
    text: string;
    color: string;
};

const features: Feature[] = [
    {
        icon: Users,
        title: "Real-time multiplayer",
        text: "Live cursors, presence, and shared state so everyone edits the same canvas at once.",
        color: "#1ABCFE",
    },
    {
        icon: PenTool,
        title: "Design canvas",
        text: "Draw, add shapes and text, and freely transform layers on a Fabric.js canvas.",
        color: "#A259FF",
    },
    {
        icon: MessageSquare,
        title: "Comments & reactions",
        text: "Drop comments anywhere on the board and react in the moment with teammates.",
        color: "#FF7262",
    },
    {
        icon: FileDown,
        title: "Export to PDF",
        text: "Turn a finished board into a shareable PDF in a click.",
        color: "#0ACF83",
    },
];

type Tech = { name: string; icon?: IconType; color: string; mono?: string };

const tech: Tech[] = [
    { name: "Next.js", icon: SiNextdotjs, color: "#111111" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Liveblocks", color: "#FF4F9A", mono: "Lb" },
    { name: "Fabric.js", color: "#C2410C", mono: "Fb" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Radix UI", icon: SiRadixui, color: "#111111" },
];

export const FigmaClone: React.FC<FigmaCloneProps> = ({
    isOpen,
    onClose,
    focusToken,
}) => {
    return (
        <AppFrame
            isOpen={isOpen}
            onClose={onClose}
            focusToken={focusToken}
            title="Figma Clone"
            overlay
            windowClassName="figma-window"
            contentClassName="figma-body"
        >
            <div className="figma-page">
                <header className="figma-hero">
                    <span className="figma-badge">Real-time design tool</span>
                    <h1 className="figma-title">Figma Clone</h1>
                    <p className="figma-tagline">
                        A collaborative, multiplayer design canvas — built to
                        feel like designing together in the same room.
                    </p>
                    <div className="figma-actions">
                        <a
                            className="figma-btn"
                            href={LIVE}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View live demo
                            <ArrowUpRight size={16} />
                        </a>
                    </div>
                    <a
                        className="figma-repo-link"
                        href={LIVE}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        bahars-figma-clone.vercel.app
                    </a>
                </header>

                <section className="figma-features">
                    {features.map((feature) => {
                        const FeatureIcon = feature.icon;
                        return (
                            <div key={feature.title} className="figma-feature">
                                <span
                                    className="figma-feature-icon"
                                    style={{
                                        color: feature.color,
                                        background: `${feature.color}1f`,
                                    }}
                                >
                                    <FeatureIcon size={20} />
                                </span>
                                <h3 className="figma-feature-title">
                                    {feature.title}
                                </h3>
                                <p className="figma-feature-text">
                                    {feature.text}
                                </p>
                            </div>
                        );
                    })}
                </section>

                <div className="figma-shot-frame">
                    <div className="figma-shot-bar">
                        <span className="figma-dot" />
                        <span className="figma-dot" />
                        <span className="figma-dot" />
                    </div>
                    <img
                        src="/FigmaClone.png"
                        alt="Figma Clone canvas"
                        className="figma-shot-img"
                    />
                </div>

                <section className="figma-stack">
                    <h2 className="figma-stack-title">Built with</h2>
                    <div className="figma-chips">
                        {tech.map((item) => {
                            const TechIcon = item.icon;
                            return (
                                <span key={item.name} className="figma-chip">
                                    <span
                                        className="figma-chip-icon"
                                        style={{ color: item.color }}
                                    >
                                        {TechIcon ? (
                                            <TechIcon />
                                        ) : (
                                            <span
                                                className="figma-chip-mono"
                                                style={{
                                                    background: item.color,
                                                }}
                                            >
                                                {item.mono}
                                            </span>
                                        )}
                                    </span>
                                    <span className="figma-chip-name">
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

export default FigmaClone;
