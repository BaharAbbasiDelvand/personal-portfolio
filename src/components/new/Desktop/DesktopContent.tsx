import React, { useState, useRef } from "react";
import { useDrop } from "react-dnd";
import Apps from "../Apps/Apps";
import { AboutMeApp } from "../about-me/AboutMeApp";
import AWS from "../AWS/AWS";
import Resume from "../Resume/Resume";
import ContactMe from "../contact-me/ContactMe";
import ProjectsFolder from "../projects-folder/projectsFolder";
import GAIB from "../GAIB/GAIB";
import WorkExperience from "../work-experience/WorkExperience";
const GRID_SIZE = 10;

const snapToGrid = (x: number, y: number) => ({
    x: (x / GRID_SIZE) * GRID_SIZE,
    y: (y / GRID_SIZE) * GRID_SIZE,
});

function DesktopContent() {
    const [openAboutMe, setOpenAboutMe] = useState(false);
    const [openAWS, setOpenAWS] = useState(false);
    const [openMyResume, setOpenMyResume] = useState(false);
    const [openContactMe, setOpenContactMe] = useState(false);
    const [openFolder, setOpenFolder] = useState(false);
    const [openGaib, setOpenGaib] = useState(false);
    const [openWork, setOpenWork] = useState(false);
    const handleAppClick = (id: string) => {
        if (id === "about-me") setOpenAboutMe(true);
        if (id === "AWS") setOpenAWS(true);
        if (id === "Resume") setOpenMyResume(true);
        if (id === "Contact") setOpenContactMe(true);
        if (id === "folder") setOpenFolder(true);
        if (id === "GAIB") setOpenGaib(true);
        if (id === "work") setOpenWork(true);
    };

    const [apps, setApps] = useState([
        {
            id: "about-me",
            iconSrc: "/Banner.png",
            title: "About Me",
            position: { x: 25, y: 40 },
        },
        {
            id: "Skills",
            iconSrc: "/Skills.png",
            title: "Skills",
            position: { x: 25, y: 120 },
        },
        {
            id: "work",
            iconSrc: "/Experience.png",
            title: "Relevant Work Experience",
            position: { x: 25, y: 200 },
        },
        {
            id: "GAIB",
            iconSrc: "/GAIB.png",
            title: "GAIB",
            position: { x: 25, y: 280 },
        },
        {
            id: "AWS",
            iconSrc: "/AWS.png",
            title: "AWS Certification",
            position: { x: 25, y: 360 },
        },
        {
            id: "Resume",
            iconSrc: "/Resume.png",
            title: "My Resume",
            position: { x: 25, y: 440 },
        },
        {
            id: "Contact",
            iconSrc: "/ContactMe.png",
            title: "Contact Me",
            position: { x: 25, y: 520 },
        },
        {
            id: "folder",
            iconSrc: "/folder.png",
            title: "Projects",
            position: { x: 25, y: 600 },
        }, 
    ]);

    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [marquee, setMarquee] = useState<{
        x: number;
        y: number;
        w: number;
        h: number;
    } | null>(null);
    const marqueeStart = useRef<{ x: number; y: number } | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleSelect = (id: string, additive: boolean) => {
        setSelectedIds((prev) =>
            additive
                ? prev.includes(id)
                    ? prev.filter((p) => p !== id)
                    : [...prev, id]
                : [id]
        );
    };

    const onDesktopMouseDown = (e: React.MouseEvent) => {
        if (e.button !== 0) return;
        const start = { x: e.clientX, y: e.clientY };
        marqueeStart.current = start;
        if (!e.shiftKey && !e.metaKey) setSelectedIds([]);

        const onMove = (ev: MouseEvent) => {
            if (!marqueeStart.current) return;
            const s = marqueeStart.current;
            const rect = {
                x: Math.min(s.x, ev.clientX),
                y: Math.min(s.y, ev.clientY),
                w: Math.abs(ev.clientX - s.x),
                h: Math.abs(ev.clientY - s.y),
            };
            setMarquee(rect);

            const hits: string[] = [];
            containerRef.current
                ?.querySelectorAll<HTMLElement>("[data-app-id]")
                .forEach((el) => {
                    const b = el.getBoundingClientRect();
                    const intersects =
                        b.left < rect.x + rect.w &&
                        b.right > rect.x &&
                        b.top < rect.y + rect.h &&
                        b.bottom > rect.y;
                    if (intersects) {
                        const id = el.getAttribute("data-app-id");
                        if (id) hits.push(id);
                    }
                });
            setSelectedIds(hits);
        };

        const onUp = () => {
            marqueeStart.current = null;
            setMarquee(null);
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
    };

    const isOccupied = (x: number, y: number, draggingId: string) => {
        return apps.some(
            (app) =>
                app.id !== draggingId &&
                app.position.x === x &&
                app.position.y === y
        );
    };

    const findNextFreeSpot = (
        startX: number,
        startY: number,
        draggingId: string
    ) => {
        const maxY = window.innerHeight - GRID_SIZE;
        const maxX = window.innerWidth - GRID_SIZE;
        let x = startX;
        let y = startY;

        while (isOccupied(x, y, draggingId)) {
            y += GRID_SIZE;

            if (y > maxY) {
                y = 0;
                x += GRID_SIZE;

                if (x > maxX) {
                    console.warn("No space left for icon!");
                    break;
                }
            }
        }

        return { x, y };
    };

    const [, dropRef] = useDrop(() => ({
        accept: "APP_ICON",
        drop: (item: { id: string }, monitor) => {
            const offset = monitor.getClientOffset();
            if (!offset) return;

            const snapped = snapToGrid(offset.x, offset.y);

            const nextFree = isOccupied(snapped.x, snapped.y, item.id)
                ? findNextFreeSpot(snapped.x, snapped.y, item.id)
                : snapped;

            setApps((prev) =>
                prev.map((app) =>
                    app.id === item.id ? { ...app, position: nextFree } : app
                )
            );
        },
    }));

    return (
        <div
            className="Desktop-container"
            ref={(node) => {
                dropRef(node);
                containerRef.current = node;
            }}
            onMouseDown={onDesktopMouseDown}
        >
            <div className="wallpaper" />
            <div>
                {apps.map((app) => (
                    <Apps
                        key={app.id}
                        id={app.id}
                        iconSrc={app.iconSrc}
                        title={app.title}
                        onClick={() => handleAppClick(app.id)}
                        position={app.position}
                        selected={selectedIds.includes(app.id)}
                        onSelect={handleSelect}
                    />
                ))}
                {marquee && (
                    <div
                        className="marquee-selection"
                        style={{
                            left: marquee.x,
                            top: marquee.y,
                            width: marquee.w,
                            height: marquee.h,
                        }}
                    />
                )}
                {openAboutMe && (
                    <AboutMeApp
                        isOpen={openAboutMe}
                        onClose={() => setOpenAboutMe(false)}
                    />
                )}
                {openAWS && (
                    <AWS isOpen={openAWS} onClose={() => setOpenAWS(false)} />
                )}
                {openMyResume && (
                    <Resume
                        isOpen={openMyResume}
                        onClose={() => setOpenMyResume(false)}
                    />
                )}
                {openContactMe && (
                    <ContactMe
                        isOpen={openContactMe}
                        onClose={() => setOpenContactMe(false)}
                    />
                )}
                {openFolder && (
                    <ProjectsFolder
                        isOpen={openFolder}
                        onClose={() => setOpenFolder(false)}
                    />
                )}
                {openGaib && (
                    <GAIB
                        isOpen={openGaib}
                        onClose={() => setOpenGaib(false)}
                    />
                )}
                {openWork && (
                    <WorkExperience
                        isOpen={openWork}
                        onClose={() => setOpenWork(false)}
                    />
                )}
            </div>
        </div>
    );
}

export default DesktopContent;
