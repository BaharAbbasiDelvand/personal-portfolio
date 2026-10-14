import React, { useState, useRef, useCallback, useEffect } from "react";
import "./app-frame.css";

type SnapZone = "left" | "right" | "top" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | null;

type SnapRect = { x: number; y: number; w: number; h: number };

const EDGE = 80;
const CORNER = 120;
const TOP_SNAP = 10;
const PHONE_MAX = 640;

const GRID_SIZE = 10;
const CASCADE = 30;
let openCount = 0;
let zTop = 50;

const snap = (n: number) => Math.round(n / GRID_SIZE) * GRID_SIZE;

function gridStartPos() {
    const step = openCount++ % 6;
    const baseX = window.innerWidth / 2 - 460;
    const baseY = window.innerHeight / 2 - 300;
    return {
        x: snap(Math.max(baseX + step * CASCADE, 120)),
        y: snap(Math.max(baseY + step * CASCADE, 60)),
    };
}

function getSnapZone(mx: number, my: number): SnapZone {
    const W = window.innerWidth;
    const H = window.innerHeight;
    if (W <= PHONE_MAX) return null;
    const nearLeft = mx < EDGE;
    const nearRight = mx > W - EDGE;
    const nearTop = my < TOP_SNAP;
    const nearBottom = my > H - EDGE;

    if (nearLeft && my < CORNER) return "top-left";
    if (nearLeft && my > H - CORNER) return "bottom-left";
    if (nearRight && my < CORNER) return "top-right";
    if (nearRight && my > H - CORNER) return "bottom-right";
    if (nearLeft) return "left";
    if (nearRight) return "right";
    if (nearTop) return "top";
    return null;
}

function snapRect(zone: SnapZone): SnapRect {
    const W = window.innerWidth;
    const H = window.innerHeight;
    switch (zone) {
        case "left":        return { x: 0,     y: 0,     w: W / 2, h: H };
        case "right":       return { x: W / 2, y: 0,     w: W / 2, h: H };
        case "top":         return { x: 0,     y: 0,     w: W,     h: H };
        case "top-left":    return { x: 0,     y: 0,     w: W / 2, h: H / 2 };
        case "top-right":   return { x: W / 2, y: 0,     w: W / 2, h: H / 2 };
        case "bottom-left": return { x: 0,     y: H / 2, w: W / 2, h: H / 2 };
        case "bottom-right":return { x: W / 2, y: H / 2, w: W / 2, h: H / 2 };
        default:            return { x: 0, y: 0, w: 0, h: 0 };
    }
}

type AppFrameProps = {
    isOpen: boolean;
    title: string;
    onClose: () => void;
    children: React.ReactNode;
    overlay?: boolean;
    windowClassName?: string;
    contentClassName?: string;
    focusToken?: number;
};

export function AppFrame({
    isOpen,
    title,
    onClose,
    children,
    overlay = true,
    windowClassName = "",
    contentClassName = "",
    focusToken,
}: AppFrameProps) {
    const [isMin, setIsMin] = useState(false);
    const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
    const [size, setSize] = useState<{ w: number; h: number } | null>(null);
    const [zIndex, setZIndex] = useState(50);
    const didInit = useRef(false);
    const windowRef = useRef<HTMLDivElement>(null);

    const bringToFront = useCallback((e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        zTop += 1;
        setZIndex(zTop);
    }, []);
    const [snapped, setSnapped] = useState<SnapZone>(null);
    const [snapPreview, setSnapPreview] = useState<SnapZone>(null);
    const dragging = useRef(false);
    const dragOffset = useRef({ x: 0, y: 0 });
    const preSnapPos = useRef<{ x: number; y: number } | null>(null);

    const onTitlebarMouseDown = useCallback((e: React.MouseEvent) => {
        if ((e.target as HTMLElement).closest("button")) return;

        if (snapped) {
            setSnapped(null);
            setPos(preSnapPos.current);
            dragOffset.current = { x: 460, y: 20 };
        } else {
            const rect = (e.currentTarget as HTMLElement).closest(".af-window")!.getBoundingClientRect();
            dragOffset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
            preSnapPos.current = pos;
        }

        dragging.current = true;

        const onMove = (ev: MouseEvent) => {
            if (!dragging.current) return;
            setPos({
                x: snap(ev.clientX - dragOffset.current.x),
                y: snap(ev.clientY - dragOffset.current.y),
            });
            setSnapPreview(getSnapZone(ev.clientX, ev.clientY));
        };

        const onUp = (ev: MouseEvent) => {
            dragging.current = false;
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
            const zone = getSnapZone(ev.clientX, ev.clientY);
            if (zone) {
                preSnapPos.current = { x: ev.clientX - dragOffset.current.x, y: ev.clientY - dragOffset.current.y };
                setSnapped(zone);
            }
            setSnapPreview(null);
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
    }, [snapped, pos]);

    useEffect(() => {
        if (isOpen) {
            if (!didInit.current) {
                didInit.current = true;
                setPos(gridStartPos());
                zTop += 1;
                setZIndex(zTop);
            }
        } else {
            didInit.current = false;
            setPos(null);
            setSize(null);
            setSnapped(null);
            setSnapPreview(null);
        }
    }, [isOpen]);

    const onResizeMouseDown = (dir: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        if (window.matchMedia("(max-width: 640px)").matches) return;
        const el = windowRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (snapped) setSnapped(null);
        setPos({ x: rect.left, y: rect.top });

        const start = {
            x: e.clientX,
            y: e.clientY,
            w: rect.width,
            h: rect.height,
            left: rect.left,
            top: rect.top,
        };
        const MIN_W = 360;
        const MIN_H = 220;

        const onMove = (ev: MouseEvent) => {
            const dx = ev.clientX - start.x;
            const dy = ev.clientY - start.y;
            let w = start.w;
            let h = start.h;
            let left = start.left;
            let top = start.top;

            if (dir.includes("e")) w = start.w + dx;
            if (dir.includes("s")) h = start.h + dy;
            if (dir.includes("w")) {
                w = start.w - dx;
                left = start.left + dx;
            }
            if (dir.includes("n")) {
                h = start.h - dy;
                top = start.top + dy;
            }

            if (w < MIN_W) {
                if (dir.includes("w")) left = start.left + (start.w - MIN_W);
                w = MIN_W;
            }
            if (h < MIN_H) {
                if (dir.includes("n")) top = start.top + (start.h - MIN_H);
                h = MIN_H;
            }

            setSize({ w, h });
            if (dir.includes("w") || dir.includes("n"))
                setPos({ x: left, y: top });
        };

        const onUp = () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
    };

    useEffect(() => {
        if (isOpen && focusToken !== undefined) {
            zTop += 1;
            setZIndex(zTop);
        }
    }, [focusToken, isOpen]);

    if (!isOpen) return null;

    const sr = snapped ? snapRect(snapped) : null;
    const pr = snapPreview ? snapRect(snapPreview) : null;

    const windowStyle: React.CSSProperties = sr
        ? { position: "fixed", left: sr.x, top: sr.y, width: sr.w, height: sr.h, transform: "none", borderRadius: 0 }
        : pos
        ? {
              position: "fixed",
              left: pos.x,
              top: pos.y,
              transform: "none",
              ...(size ? { width: size.w, height: size.h } : {}),
          }
        : {};

    const isFloating = !!(pos || snapped);

    return (
        <>
            {pr && (
                <div
                    className="af-snap-preview"
                    style={{ left: pr.x, top: pr.y, width: pr.w, height: pr.h }}
                />
            )}
            <div
                className={`af-overlay ${
                    overlay && !isFloating ? "" : "af-overlay-none"
                }`}
                style={{ zIndex }}
            >
                <div
                    ref={windowRef}
                    className={`af-window ${isMin ? "af-min" : ""} ${windowClassName}`}
                    style={windowStyle}
                    onMouseDown={bringToFront}
                >
                    {!isMin && (
                        <>
                            <div className="af-resize af-resize-n" onMouseDown={onResizeMouseDown("n")} />
                            <div className="af-resize af-resize-s" onMouseDown={onResizeMouseDown("s")} />
                            <div className="af-resize af-resize-e" onMouseDown={onResizeMouseDown("e")} />
                            <div className="af-resize af-resize-w" onMouseDown={onResizeMouseDown("w")} />
                            <div className="af-resize af-resize-ne" onMouseDown={onResizeMouseDown("ne")} />
                            <div className="af-resize af-resize-nw" onMouseDown={onResizeMouseDown("nw")} />
                            <div className="af-resize af-resize-se" onMouseDown={onResizeMouseDown("se")} />
                            <div className="af-resize af-resize-sw" onMouseDown={onResizeMouseDown("sw")} />
                        </>
                    )}
                    <div className="af-titlebar" onMouseDown={onTitlebarMouseDown}>
                        <div className="af-traffic">
                            <button aria-label="Close" className="af-light af-close" onClick={onClose} />
                            <button aria-label="Minimize" className="af-light af-minimize" onClick={() => setIsMin(!isMin)} />
                            <button
                                aria-label="Zoom"
                                className="af-light af-zoom"
                                onClick={() => {
                                    if (snapped) {
                                        setSnapped(null);
                                        setPos(preSnapPos.current);
                                    } else {
                                        preSnapPos.current = pos;
                                        setSnapped("top");
                                    }
                                }}
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
        </>
    );
}
