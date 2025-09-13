"use client";

import { useState, useEffect } from "react";
import "./header.css";

export default function PortfolioHeader() {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                weekday: "short",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            };
            setCurrentTime(now.toLocaleDateString("en-US", options));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="header">
            <div className="header-left">
                <div className="apple-logo">
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
                        <path
                            d="M11.6 9.6c0-1.8 1.4-2.7 1.5-2.8-0.8-1.2-2.1-1.4-2.5-1.4-1.1-0.1-2.1 0.6-2.6 0.6s-1.4-0.6-2.3-0.6c-1.2 0-2.3 0.7-2.9 1.8-1.2 2.1-0.3 5.3 0.9 7 0.6 0.8 1.3 1.8 2.2 1.7 0.9 0 1.2-0.6 2.3-0.6s1.4 0.6 2.3 0.6c1 0 1.6-0.8 2.2-1.7 0.7-1 1-2 1-2.1-0.1 0-1.9-0.7-1.9-2.8v0.3z"
                            fill="currentColor"
                        />
                        <path
                            d="M9.1 3.7c0.5-0.6 0.8-1.5 0.7-2.4-0.7 0-1.6 0.5-2.1 1.1-0.5 0.6-0.9 1.5-0.8 2.3 0.8 0.1 1.6-0.4 2.2-1z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <span className="portfolio-name">Bahar Abbasi Delvand</span>
            </div>

            <div className="header-right">
                <div className="status-item language">
                    <span>US</span>
                </div>

                <div className="status-item battery">
                    <span>14%</span>
                    <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                        <rect
                            x="1"
                            y="2"
                            width="20"
                            height="8"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                        />
                        <rect
                            x="2.5"
                            y="3.5"
                            width="3.5"
                            height="5"
                            rx="0.5"
                            fill="currentColor"
                        />
                        <rect
                            x="22"
                            y="4.5"
                            width="1.5"
                            height="3"
                            rx="0.5"
                            fill="currentColor"
                        />
                    </svg>
                </div>

                <div className="status-item time">
                    <span>{currentTime}</span>
                </div>
            </div>
        </header>
    );
}
