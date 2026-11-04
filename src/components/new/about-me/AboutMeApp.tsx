import React from "react";
import { MapPin, GraduationCap, Award } from "lucide-react";
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
        value: "Bachelor of Applied Science (B.A.Sc.), Honours Computer Science (Minor in Art History)",
    },
    {
        icon: Award,
        label: "Certified",
        value: "AWS Certified Developer – Associate",
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
                            I&apos;m a full-stack developer and Honours Computer
                            Science graduate from McMaster University, where I
                            paired my CS degree with a minor in Art History. That
                            mix is sort of my whole thing.
                        </p>
                        <p>
                            I&apos;m passionate about building thoughtful,
                            functional applications and exploring the
                            intersection of technology and creative expression.
                            Coming at things from both sides, I care as much
                            about how something feels to use as whether the code
                            underneath is clean. My interests extend across
                            software engineering,
                            artificial intelligence, web development, and
                            information security.
                        </p>
                        <p>
                            Professionally, I&apos;ve worked across the full
                            stack, helping architect and build a multi-tenant
                            SaaS platform from the ground up. My experience spans
                            scalable web development, AI orchestration and
                            retrieval-augmented generation (RAG), workflow
                            automation, and complex data integrations. I
                            particularly enjoy tackling challenging technical
                            problems, designing systems that are both reliable
                            and intuitive, and finding ways to make sophisticated
                            technology more accessible.
                        </p>
                        <p>
                            Beyond software development, I&apos;m involved in
                            interdisciplinary research at McMaster University,
                            using geospatial analysis to explore the
                            relationships between art, history, and urban
                            development in nineteenth-century France. This work
                            brings together two fields I&apos;m deeply passionate
                            about and allows me to explore how technology can
                            offer new perspectives on the humanities.
                        </p>
                        <p>
                            This portfolio is where all of that lives, the
                            projects I&apos;ve shipped and the ones I&apos;m
                            still tinkering with. Have a look around, and thanks
                            for stopping by!
                        </p>
                    </div>
                </div>
            </div>
        </AppFrame>
    );
};

export default AboutMeApp;
