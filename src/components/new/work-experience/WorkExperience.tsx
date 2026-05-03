import React from "react";
import { AppFrame } from "../app-frames/App-frames";
import "./workexperience.css";

type WorkExperienceProps = { isOpen: boolean; onClose: () => void };

type ExperienceItem = {
    company: string;
    role: string;
    period: string;
    bullets: string[];
};

const experiences: ExperienceItem[] = [
    {
        company: "MBA4HIRE",
        role: "Full-Stack Developer",
        period: "Current",
        bullets: [
            "Built scalable tools for real-time financial operations.",
            "Developed full-stack features across the application.",
            "Integrated GPT-powered functionality for automated schema generation.",
            "Improved internal workflows by creating efficient, intuitive, and reliable internal tools.",
        ],
    },
    {
        company: "Art History Research Project",
        role: "Research / Technical Assistant",
        period: "Current",
        bullets: [
            "Supported an art history research project focused on 19th-century France.",
            "Used ArcGIS and SQL to analyze how geography shaped artistic networks.",
            "Worked with spatial and relational data to uncover historical patterns.",
            "Combined technical analysis with research-driven storytelling and visualization.",
        ],
    },
];

export const WorkExperience: React.FC<WorkExperienceProps> = ({
    isOpen,
    onClose,
}) => {
    return (
        <AppFrame
            isOpen={isOpen}
            onClose={onClose}
            title="Work Experience"
            overlay
            windowClassName="workexperience-window"
            contentClassName="workexperience-body"
        >
            <div className="workexperience-main">
                <h1 className="workexperience-title">Relevant Work Experience</h1>
                <p className="workexperience-intro">
                    A quick look at the roles where I&apos;ve applied software
                    engineering, automation, and research-focused problem
                    solving.
                </p>

                <div className="workexperience-tree" role="list">
                    {experiences.map((experience, index) => (
                        <section
                            key={`${experience.company}-${experience.role}`}
                            className="workexperience-node"
                            role="listitem"
                        >
                            <div className="workexperience-node-marker">
                                <span className="workexperience-node-dot" />
                                {index !== experiences.length - 1 && (
                                    <span className="workexperience-node-line" />
                                )}
                            </div>

                            <div className="workexperience-node-content">
                                <p className="workexperience-company">
                                    {experience.company}
                                </p>
                                <h2 className="workexperience-role">
                                    {experience.role}
                                </h2>
                                <p className="workexperience-period">
                                    {experience.period}
                                </p>

                                <ul className="workexperience-bullets">
                                    {experience.bullets.map((bullet) => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </AppFrame>
    );
};

export default WorkExperience;