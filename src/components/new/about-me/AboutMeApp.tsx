import React from "react";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import { AppFrame } from "../app-frames/App-frames";
import "./aboutmeapp.css";
import Me from "../../../Assets/photos/Me.png";

type AboutMeAppProps = {
    isOpen: boolean;
    onClose: () => void;
    focusToken?: number;
};

const facts = [
    { icon: MapPin, label: "Based in", value: "Toronto, ON" },
    {
        icon: GraduationCap,
        label: "Studied",
        value: "Computer Science, McMaster (Art History minor)",
    },
    {
        icon: Briefcase,
        label: "Currently",
        value: "Full-Stack Developer @ MBA4HIRE",
    },
];

export const AboutMeApp: React.FC<AboutMeAppProps> = ({
    isOpen,
    onClose,
    focusToken,
}) => {
    return (
        <AppFrame
            isOpen={isOpen}
            onClose={onClose}
            focusToken={focusToken}
            title="About Me"
            overlay={true}
            windowClassName="aboutme-window"
            contentClassName="aboutme-body"
        >
            <div className="aboutme-layout">
                <aside className="aboutme-aside">
                    <div className="aboutme-photo">
                        <img
                            src={Me}
                            alt="Bahar Abbasi Delvand"
                            className="aboutme-photo-img"
                        />
                    </div>
                    <div className="aboutme-facts">
                        {facts.map((fact) => {
                            const FactIcon = fact.icon;
                            return (
                                <div key={fact.label} className="aboutme-fact">
                                    <span className="aboutme-fact-icon">
                                        <FactIcon size={16} />
                                    </span>
                                    <span className="aboutme-fact-text">
                                        <span className="aboutme-fact-label">
                                            {fact.label}
                                        </span>
                                        <span className="aboutme-fact-value">
                                            {fact.value}
                                        </span>
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </aside>

                <div className="aboutme-content">
                    <p className="aboutme-eyebrow">Hello there! I&apos;m</p>
                    <h1 className="aboutme-name">Bahar Abbasi Delvand</h1>
                    <p className="aboutme-role">
                        Computer Science graduate &amp; full-stack developer
                    </p>

                    <div className="aboutme-prose">
                        <p>
                            My work blends technical problem-solving with clear,
                            intentional design. Whether I&apos;m building
                            full-stack web apps, integrating AI into development
                            workflows, or analyzing 19th-century artists through
                            geospatial data, I focus on creating systems that are
                            intuitive, efficient, and thoughtful.
                        </p>
                        <p>
                            I&apos;m currently a full-stack developer at
                            MBA4HIRE, where I&apos;ve helped build scalable tools
                            for real-time financial operations and automated
                            schema generation using GPT-powered features. I also
                            assist on an art history research project using
                            ArcGIS and SQL to study how geography shaped artistic
                            networks in 19th-century France.
                        </p>
                        <p>
                            This portfolio is a space for the things I&apos;ve
                            built, explored, and continue to learn. Thanks for
                            stopping by.
                        </p>
                    </div>
                </div>
            </div>
        </AppFrame>
    );
};

export default AboutMeApp;
