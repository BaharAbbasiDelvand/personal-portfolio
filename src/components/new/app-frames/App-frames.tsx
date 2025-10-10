import React, { useState } from "react";
import "./app-frame.css";

type AppFrameProps = {
    isOpen: boolean;
    title: string;
    onClose: () => void;
    children: React.ReactNode;
    overlay?: boolean;
    windowClassName?: string;
    contentClassName?: string;
};

export function AppFrame({
    isOpen,
    title,
    onClose,
    children,
    overlay = true,
    windowClassName = "",
    contentClassName = "",
}: AppFrameProps) {
    const [isMin, setIsMin] = useState(false);
    const [isMax, setIsMax] = useState(false);

    if (!isOpen) return null;

    return (
        <div className={`af-overlay ${overlay ? "" : "af-overlay-none"}`}>
            <div
                className={`af-window ${isMin ? "af-min" : ""} ${
                    isMax ? "af-max" : ""
                } ${windowClassName}`}
            >
                <div className="af-titlebar">
                    <div className="af-traffic">
                        <button
                            aria-label="Close"
                            className="af-light af-close"
                            onClick={onClose}
                        />
                        <button
                            aria-label="Minimize"
                            className="af-light af-minimize"
                            onClick={() => setIsMin(!isMin)}
                        />
                        <button
                            aria-label="Zoom"
                            className="af-light af-zoom"
                            onClick={() => setIsMax(!isMax)}
                        />
                    </div>
                    <div className="af-title">{title}</div>
                    <div className="af-title-spacer" />
                </div>
                {!isMin && (
                    <div className={`af-body ${contentClassName}`}>
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}