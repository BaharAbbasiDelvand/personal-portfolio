import React, { useState } from "react";
import type { IconType } from "react-icons";
import {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiC,
    SiCplusplus,
    SiSharp,
    SiGnubash,
    SiGo,
    SiOpenjdk,
    SiHaskell,
    SiRuby,
    SiSwift,
    SiElm,
    SiCss3,
    SiSass,
    SiHtml5,
    SiReact,
    SiNodedotjs,
    SiNextdotjs,
    SiRedux,
    SiAngular,
    SiFlask,
    SiExpress,
    SiSpringboot,
    SiJest,
    SiJunit5,
    SiTailwindcss,
    SiBootstrap,
    SiMui,
    SiPandas,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiOracle,
    SiAmazondynamodb,
    SiDocker,
    SiLinux,
    SiVercel,
    SiGooglecloud,
    SiAmazonwebservices,
    SiGit,
    SiPostman,
    SiAuth0,
} from "react-icons/si";
import { Code2, Boxes, Database, Wrench, Globe } from "lucide-react";
import { AppFrame } from "../app-frames/App-frames";
import "./skills.css";

type Skill = {
    name: string;
    icon?: IconType;
    color: string;
    mono?: string;
};

type Category = {
    id: string;
    label: string;
    icon: IconType;
    blurb: string;
    skills: Skill[];
};

const categories: Category[] = [
    {
        id: "languages",
        label: "Languages",
        icon: Code2,
        blurb: "The languages I reach for across systems, web, and scripting.",
        skills: [
            { name: "JavaScript", icon: SiJavascript, color: "#E9A700" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "C", icon: SiC, color: "#5C6BC0" },
            { name: "C++", icon: SiCplusplus, color: "#00599C" },
            { name: "C#", icon: SiSharp, color: "#68217A" },
            { name: "Go", icon: SiGo, color: "#00ADD8" },
            { name: "Java", icon: SiOpenjdk, color: "#E76F00" },
            { name: "Haskell", icon: SiHaskell, color: "#5D4F85" },
            { name: "Ruby", icon: SiRuby, color: "#CC342D" },
            { name: "Swift", icon: SiSwift, color: "#F05138" },
            { name: "Elm", icon: SiElm, color: "#1293D8" },
            { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
            { name: "SQL", icon: Database, color: "#4B5563" },
            { name: "Assembly", color: "#64748B", mono: "ASM" },
            { name: "HTML", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS", icon: SiCss3, color: "#1572B6" },
            { name: "Sass", icon: SiSass, color: "#CC6699" },
        ],
    },
    {
        id: "frameworks",
        label: "Frameworks & Libraries",
        icon: Boxes,
        blurb: "Tools I build interfaces, services, and tests with.",
        skills: [
            { name: "React", icon: SiReact, color: "#149ECA" },
            { name: "Node.js", icon: SiNodedotjs, color: "#539E43" },
            { name: "Next.js", icon: SiNextdotjs, color: "#111111" },
            { name: "Redux", icon: SiRedux, color: "#764ABC" },
            { name: "Angular", icon: SiAngular, color: "#DD0031" },
            { name: "Flask", icon: SiFlask, color: "#111111" },
            { name: "Express", icon: SiExpress, color: "#444444" },
            { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
            { name: "Jest", icon: SiJest, color: "#C21325" },
            { name: "JUnit", icon: SiJunit5, color: "#25A162" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
            { name: "MUI", icon: SiMui, color: "#007FFF" },
            { name: "pandas", icon: SiPandas, color: "#150458" },
            { name: "Zustand", color: "#8B5E3C", mono: "Zu" },
            { name: "Liveblocks", color: "#FF4F9A", mono: "Lb" },
            { name: "RESTful API", icon: Globe, color: "#0EA5E9" },
        ],
    },
    {
        id: "databases",
        label: "Databases",
        icon: Database,
        blurb: "Where I store, model, and query data.",
        skills: [
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "MSSQL", color: "#CC2927", mono: "MS" },
            { name: "Redis", icon: SiRedis, color: "#DC382D" },
            { name: "Oracle", icon: SiOracle, color: "#F80000" },
            { name: "DynamoDB", icon: SiAmazondynamodb, color: "#4053D6" },
        ],
    },
    {
        id: "tools",
        label: "Tools & Cloud",
        icon: Wrench,
        blurb: "The platforms and tooling behind shipping and deploying.",
        skills: [
            { name: "AWS", icon: SiAmazonwebservices, color: "#E88B00" },
            { name: "Azure", color: "#0078D4", mono: "Az" },
            { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "Linux", icon: SiLinux, color: "#333333" },
            { name: "UNIX", color: "#4B5563", mono: "Ux" },
            { name: "Vercel", icon: SiVercel, color: "#111111" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
            { name: "OAuth0", icon: SiAuth0, color: "#EB5424" },
        ],
    },
];

type SkillsAppProps = {
    isOpen: boolean;
    onClose: () => void;
    focusToken?: number;
};

export const SkillsApp: React.FC<SkillsAppProps> = ({
    isOpen,
    onClose,
    focusToken,
}) => {
    const [activeId, setActiveId] = useState(categories[0].id);
    const activeCategory =
        categories.find((category) => category.id === activeId) ?? categories[0];

    return (
        <AppFrame
            isOpen={isOpen}
            onClose={onClose}
            focusToken={focusToken}
            title="Skills"
            overlay
            windowClassName="skills-window"
            contentClassName="skills-body"
        >
            <div className="skills-layout">
                <aside className="skills-sidebar">
                    <p className="skills-sidebar-head">Skills</p>
                    {categories.map((category) => {
                        const CategoryIcon = category.icon;
                        const selected = category.id === activeId;
                        return (
                            <button
                                key={category.id}
                                type="button"
                                className={`skills-nav-item ${
                                    selected ? "is-active" : ""
                                }`}
                                onClick={() => setActiveId(category.id)}
                            >
                                <span className="skills-nav-icon">
                                    <CategoryIcon size={18} />
                                </span>
                                <span className="skills-nav-label">
                                    {category.label}
                                </span>
                                <span className="skills-nav-count">
                                    {category.skills.length}
                                </span>
                            </button>
                        );
                    })}
                </aside>

                <section className="skills-panel">
                    <header className="skills-panel-head">
                        <h1 className="skills-panel-title">
                            {activeCategory.label}
                        </h1>
                        <p className="skills-panel-blurb">
                            {activeCategory.blurb}
                        </p>
                    </header>

                    <div className="skills-grid">
                        {activeCategory.skills.map((skill) => {
                            const SkillIcon = skill.icon;
                            return (
                                <div
                                    key={skill.name}
                                    className="skills-chip"
                                    title={skill.name}
                                >
                                    <span
                                        className="skills-chip-icon"
                                        style={{ color: skill.color }}
                                    >
                                        {SkillIcon ? (
                                            <SkillIcon />
                                        ) : (
                                            <span
                                                className="skills-chip-mono"
                                                style={{
                                                    background: skill.color,
                                                }}
                                            >
                                                {skill.mono ??
                                                    skill.name.slice(0, 2)}
                                            </span>
                                        )}
                                    </span>
                                    <span className="skills-chip-name">
                                        {skill.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </AppFrame>
    );
};

export default SkillsApp;
