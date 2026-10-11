import React, { useRef } from "react";
import {
    Code2,
    GitBranch,
    Sparkles,
    Zap,
    ArrowRight,
    ChevronDown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AppFrame } from "../app-frames/App-frames";
import "./gaib.css";

type GaibProps = {
    onClose: () => void;
    isOpen: boolean;
    focusToken?: number;
};

const MARKETPLACE =
    "https://marketplace.visualstudio.com/items?itemName=GAIB.genai";

type Feature = { icon: LucideIcon; title: string; text: string };

const features: Feature[] = [
    {
        icon: GitBranch,
        title: "Reads your commits",
        text: "Diffs become context — no manual setup.",
    },
    {
        icon: Sparkles,
        title: "Infers intent",
        text: "Understands what the change is meant to do.",
    },
    {
        icon: Zap,
        title: "Tests in seconds",
        text: "Targeted unit tests, generated on the fly.",
    },
];

const steps: React.ReactNode[] = [
    <>
        Open <strong>Extensions</strong> in VS Code (⇧⌘X).
    </>,
    <>
        Search <strong>“GAIB”</strong> and hit Install.
    </>,
    <>Make a commit — let GAIB write the tests.</>,
];

export const GAIB: React.FC<GaibProps> = ({ isOpen, onClose, focusToken }) => {
    const featuresRef = useRef<HTMLElement | null>(null);

    const scrollToFeatures = () => {
        featuresRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <AppFrame
            isOpen={isOpen}
            onClose={onClose}
            focusToken={focusToken}
            title="GAIB"
            overlay
            contentClassName="gaib-body"
            windowClassName="gaib-window"
        >
            <div className="gaib-page">
                <section className="gaib-hero">
                    <span className="gaib-badge">
                        <Code2 size={14} />
                        VS Code Extension
                    </span>
                    <h1 className="gaib-title">GAIB</h1>
                    <p className="gaib-tagline">
                        Your AI test generator, right inside the editor.
                    </p>
                    <p className="gaib-lede">
                        GAIB analyzes your commits, infers intent, and writes
                        targeted unit tests in seconds — tighter feedback loops,
                        more reliable code.
                    </p>
                    <a
                        className="gaib-install"
                        href={MARKETPLACE}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Install from Marketplace
                        <ArrowRight size={16} />
                    </a>

                    <button
                        type="button"
                        className="gaib-scroll-cue"
                        onClick={scrollToFeatures}
                        aria-label="Scroll to learn more"
                    >
                        <span className="gaib-scroll-cue-label">
                            Scroll for more
                        </span>
                        <ChevronDown size={18} />
                    </button>
                </section>

                <section className="gaib-features" ref={featuresRef}>
                    {features.map((feature) => {
                        const FeatureIcon = feature.icon;
                        return (
                            <div key={feature.title} className="gaib-feature">
                                <span className="gaib-feature-icon">
                                    <FeatureIcon size={20} />
                                </span>
                                <h3 className="gaib-feature-title">
                                    {feature.title}
                                </h3>
                                <p className="gaib-feature-text">
                                    {feature.text}
                                </p>
                            </div>
                        );
                    })}
                </section>

                <section className="gaib-section">
                    <h2 className="gaib-section-title">How it works</h2>
                    <ol className="gaib-steps">
                        {steps.map((step, index) => (
                            <li key={index}>
                                <span className="gaib-step-num">
                                    {index + 1}
                                </span>
                                <span className="gaib-step-text">{step}</span>
                            </li>
                        ))}
                    </ol>
                </section>

                <section className="gaib-section">
                    <h2 className="gaib-section-title">The launch poster</h2>
                    <div className="gaib-poster-frame">
                        <img
                            src="/GAIBPoster.jpg"
                            alt="GAIB launch poster"
                            className="gaib-poster-img"
                        />
                    </div>
                </section>

                <section className="gaib-cta">
                    <h2 className="gaib-cta-title">
                        Start generating tests from your commits
                    </h2>
                    <a
                        className="gaib-install"
                        href={MARKETPLACE}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on Marketplace
                        <ArrowRight size={16} />
                    </a>
                </section>
            </div>
        </AppFrame>
    );
};

export default GAIB;
