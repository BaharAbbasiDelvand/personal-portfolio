import React, { useCallback, useMemo, useRef, useState } from "react";
import { AppFrame } from "../app-frames/App-frames";
import "./gaib.css";

type GaibProps = { onClose: () => void; isOpen: boolean };

type Slide = {
    id: string;
    content: React.ReactNode;
    label: string;
};

export const GAIB: React.FC<GaibProps> = ({ isOpen, onClose }) => {
    // Build slides (replaces your Accordions; same content)
    const slides: Slide[] = useMemo(
        () => [
            {
                id: "gaib-intro",
                label: "GAIB",
                content: (
                    <div className="gaib-slide-content gaib-hero">
                        <div className="gaib-hero-glow" />
                        <div className="gaib-hero-inner">
                            <span className="gaib-badge">
                                <span className="gaib-badge-dot" />
                                VS Code Extension
                            </span>
                            <h2 className="gaib-title">GAIB</h2>
                            <p className="gaib-tagline">
                                Your AI test generator, right inside the editor.
                            </p>
                            <p className="gaib-lede">
                                GAIB analyzes your commits, infers intent, and
                                writes targeted unit tests in seconds — tighter
                                feedback loops, more reliable code.
                            </p>
                            <div className="gaib-features">
                                <div className="gaib-feature">
                                    <div className="gaib-feature-icon">⎇</div>
                                    <div className="gaib-feature-title">
                                        Reads your commits
                                    </div>
                                    <div className="gaib-feature-text">
                                        Diffs become context — no manual setup.
                                    </div>
                                </div>
                                <div className="gaib-feature">
                                    <div className="gaib-feature-icon">✦</div>
                                    <div className="gaib-feature-title">
                                        Infers intent
                                    </div>
                                    <div className="gaib-feature-text">
                                        Understands what the change is meant to
                                        do.
                                    </div>
                                </div>
                                <div className="gaib-feature">
                                    <div className="gaib-feature-icon">⚡</div>
                                    <div className="gaib-feature-title">
                                        Tests in seconds
                                    </div>
                                    <div className="gaib-feature-text">
                                        Targeted unit tests, generated on the
                                        fly.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ),
            },
            {
                id: "gaib-poster",
                label: "Poster",
                content: (
                    <div className="gaib-slide-content gaib-poster-slide">
                        <span className="gaib-eyebrow">The launch poster</span>
                        <h2 className="gaib-h2">GAIB, on display</h2>
                        <div className="gaib-media-frame">
                            <img
                                src="/GAIBPoster.jpg"
                                alt="GAIB Poster"
                                className="gaib-media"
                            />
                        </div>
                    </div>
                ),
            },
            {
                id: "gaib-market",
                label: "Marketplace",
                content: (
                    <div className="gaib-slide-content gaib-cta-slide">
                        <span className="gaib-eyebrow">Get started</span>
                        <h2 className="gaib-h2">Install from the Marketplace</h2>
                        <p className="gaib-p">
                            Grab GAIB from the Visual Studio Code Marketplace and
                            start generating tests from commit context —
                            quickstart and changelogs included.
                        </p>
                        <ol className="gaib-steps">
                            <li>
                                <span className="gaib-step-num">1</span>
                                Open <strong>Extensions</strong> in VS Code
                                (⇧⌘X).
                            </li>
                            <li>
                                <span className="gaib-step-num">2</span>
                                Search <strong>“GAIB”</strong> and hit Install.
                            </li>
                            <li>
                                <span className="gaib-step-num">3</span>
                                Make a commit — let GAIB write the tests.
                            </li>
                        </ol>
                        <a
                            className="gaib-install-btn"
                            href="https://marketplace.visualstudio.com/items?itemName=GAIB.genai"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on Marketplace →
                        </a>
                    </div>
                ),
            },
        ],
        []
    );

    const [index, setIndex] = useState(0);
    const clamp = (n: number) => Math.max(0, Math.min(slides.length - 1, n));
    const goTo = useCallback(
        (n: number) => setIndex(clamp(n)),
        [slides.length]
    );
    const next = useCallback(
        () => setIndex((i) => clamp(i + 1)),
        [slides.length]
    );
    const prev = useCallback(
        () => setIndex((i) => clamp(i - 1)),
        [slides.length]
    );

    const startX = useRef<number | null>(null);
    const deltaX = useRef(0);

    const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
        startX.current = e.touches[0].clientX;
        deltaX.current = 0;
    };
    const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
        if (startX.current == null) return;
        deltaX.current = e.touches[0].clientX - startX.current;
    };
    const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
        const threshold = 60; // px
        if (deltaX.current > threshold) prev();
        else if (deltaX.current < -threshold) next();
        startX.current = null;
        deltaX.current = 0;
    };

    return (
        <AppFrame
            isOpen={isOpen}
            onClose={onClose}
            title="GAIB"
            overlay
            contentClassName="gaib-body"
            windowClassName="gaib-window"
        >
            <div
                className="gaib-carousel"
                role="region"
                aria-roledescription="carousel"
                aria-label="GAIB slides"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <div
                    className="gaib-track"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {slides.map((s) => (
                        <section
                            key={s.id}
                            className="gaib-slide"
                            role="group"
                            aria-roledescription="slide"
                            aria-label={s.label}
                        >
                            {s.content}
                        </section>
                    ))}
                </div>

                <button
                    className="gaib-control gaib-prev"
                    onClick={prev}
                    aria-label="Previous slide"
                    disabled={index === 0}
                >
                    ‹
                </button>
                <button
                    className="gaib-control gaib-next"
                    onClick={next}
                    aria-label="Next slide"
                    disabled={index === slides.length - 1}
                >
                    ›
                </button>

                <div
                    className="gaib-dots"
                    role="tablist"
                    aria-label="Slide selectors"
                >
                    {slides.map((s, i) => (
                        <button
                            key={s.id}
                            role="tab"
                            aria-selected={index === i}
                            aria-controls={`panel-${s.id}`}
                            className={`gaib-dot ${
                                index === i ? "is-active" : ""
                            }`}
                            onClick={() => goTo(i)}
                            title={s.label}
                        />
                    ))}
                </div>
            </div>
        </AppFrame>
    );
};

export default GAIB;
