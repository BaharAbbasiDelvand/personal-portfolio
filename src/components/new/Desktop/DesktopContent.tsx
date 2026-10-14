import React, { useState, useRef } from "react";
import { useDrop } from "react-dnd";
import Apps from "../Apps/Apps";
import { AboutMeApp } from "../about-me/AboutMeApp";
import AWS from "../AWS/AWS";
import Resume from "../Resume/Resume";
import ContactMe from "../contact-me/ContactMe";
import ProjectsFolder from "../projects-folder/projectsFolder";
import type { FinderView } from "../projects-folder/projectsFolder";
import GAIB from "../GAIB/GAIB";
import WorkExperience from "../work-experience/WorkExperience";
import SkillsApp from "../skills-app/SkillsApp";
import FigmaClone from "../figma-clone/FigmaClone";
import ProjectApp from "../project-app/ProjectApp";
import { projectApps, projectAppIds } from "../project-app/projects-data";
const GRID_SIZE = 10;

type AppItem = {
    id: string;
    iconSrc: string;
    title: string;
    position: { x: number; y: number };
    location: "desktop" | "folder" | "trash";
};

const snapToGrid = (x: number, y: number) => ({
    x: Math.round(x / GRID_SIZE) * GRID_SIZE,
    y: Math.round(y / GRID_SIZE) * GRID_SIZE,
});

function DesktopContent() {
    const [openAboutMe, setOpenAboutMe] = useState(false);
    const [openAWS, setOpenAWS] = useState(false);
    const [openMyResume, setOpenMyResume] = useState(false);
    const [openContactMe, setOpenContactMe] = useState(false);
    const [openFolder, setOpenFolder] = useState(false);
    const [finderView, setFinderView] = useState<FinderView>("folder");
    const [openGaib, setOpenGaib] = useState(false);
    const [openWork, setOpenWork] = useState(false);
    const [openSkills, setOpenSkills] = useState(false);
    const [openFigma, setOpenFigma] = useState(false);
    const [openProjects, setOpenProjects] = useState<Record<string, boolean>>({});
    const [focusTokens, setFocusTokens] = useState<Record<string, number>>({});
    const handleAppClick = (id: string) => {
        setFocusTokens((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
        if (projectAppIds.includes(id))
            setOpenProjects((prev) => ({ ...prev, [id]: true }));
        if (id === "about-me") setOpenAboutMe(true);
        if (id === "figma") setOpenFigma(true);
        if (id === "Skills") setOpenSkills(true);
        if (id === "AWS") setOpenAWS(true);
        if (id === "Resume") setOpenMyResume(true);
        if (id === "Contact") setOpenContactMe(true);
        if (id === "folder") {
            setFinderView("folder");
            setOpenFolder(true);
        }
        if (id === "trash") {
            setFinderView("trash");
            setOpenFolder(true);
        }
        if (id === "GAIB") setOpenGaib(true);
        if (id === "work") setOpenWork(true);
    };

    const handleDesktopOpen = (id: string) => {
        const ids =
            selectedIds.includes(id) && selectedIds.length > 1
                ? selectedIds
                : [id];
        ids.forEach((appId) => handleAppClick(appId));
    };

    const [apps, setApps] = useState<AppItem[]>([
        {
            id: "about-me",
            iconSrc: "/Banner.png",
            title: "About Me",
            position: { x: 25, y: 40 },
            location: "desktop",
        },
        {
            id: "Skills",
            iconSrc: "/Skills.png",
            title: "Skills",
            position: { x: 25, y: 120 },
            location: "desktop",
        },
        {
            id: "work",
            iconSrc: "/Experience.png",
            title: "Relevant Work Experience",
            position: { x: 25, y: 200 },
            location: "desktop",
        },
        {
            id: "GAIB",
            iconSrc: "/GAIB.png",
            title: "GAIB",
            position: { x: 25, y: 280 },
            location: "folder",
        },
        {
            id: "AWS",
            iconSrc: "/AWS.png",
            title: "AWS Certification",
            position: { x: 25, y: 280 },
            location: "desktop",
        },
        {
            id: "Resume",
            iconSrc: "/resume.png",
            title: "My Resume",
            position: { x: 25, y: 360 },
            location: "desktop",
        },
        {
            id: "Contact",
            iconSrc: "/ContactMe.png",
            title: "Contact Me",
            position: { x: 25, y: 440 },
            location: "desktop",
        },
        {
            id: "folder",
            iconSrc: "/folder.png",
            title: "Selected Projects",
            position: { x: 25, y: 520 },
            location: "desktop",
        },
        {
            id: "figma",
            iconSrc: "/figma.svg",
            title: "Figma Clone",
            position: { x: 25, y: 680 },
            location: "folder",
        },
        {
            id: "bracket",
            iconSrc: "/bracket.svg",
            title: "Bracket Maker",
            position: { x: 115, y: 40 },
            location: "folder",
        },
        {
            id: "book-tracker",
            iconSrc: "/book-tracker.svg",
            title: "Book Tracker",
            position: { x: 115, y: 120 },
            location: "folder",
        },
        {
            id: "angle",
            iconSrc: "/angle.svg",
            title: "Angle Management",
            position: { x: 115, y: 200 },
            location: "folder",
        },
        {
            id: "checkers",
            iconSrc: "/checkers.svg",
            title: "Checkers",
            position: { x: 115, y: 280 },
            location: "folder",
        },
        {
            id: "trash",
            iconSrc: "/trash.svg",
            title: "Trash",
            position: { x: 25, y: 600 },
            location: "desktop",
        },
    ]);

    const findFreeDesktopSpot = (occupied: { x: number; y: number }[]) => {
        const cols = [25, 125, 225, 325, 425];
        const maxY = Math.max(280, window.innerHeight - 140);
        const slots: { x: number; y: number }[] = [];
        for (const x of cols) {
            for (let y = 40; y <= maxY; y += 80) {
                slots.push({ x, y });
            }
        }
        const free = slots.filter(
            (s) =>
                !occupied.some(
                    (o) =>
                        Math.abs(o.x - s.x) < 70 && Math.abs(o.y - s.y) < 70
                )
        );
        if (free.length === 0) {
            return {
                x: cols[Math.floor(Math.random() * cols.length)],
                y: 40 + Math.floor(Math.random() * 7) * 80,
            };
        }
        return free[Math.floor(Math.random() * free.length)];
    };

    const moveSelectedTo = (draggedId: string, destination: FinderView) => {
        const movingIds = (
            selectedIds.includes(draggedId) ? selectedIds : [draggedId]
        ).filter((id) => id !== "folder" && id !== "trash");
        if (movingIds.length === 0) return;
        setApps((prev) => {
            if (destination !== "desktop") {
                return prev.map((app) =>
                    movingIds.includes(app.id)
                        ? { ...app, location: destination }
                        : app
                );
            }
            const occupied = prev
                .filter(
                    (app) =>
                        app.location === "desktop" &&
                        !movingIds.includes(app.id)
                )
                .map((app) => ({ ...app.position }));
            return prev.map((app) => {
                if (!movingIds.includes(app.id)) return app;
                if (app.location === "desktop") return app;
                const spot = findFreeDesktopSpot(occupied);
                occupied.push(spot);
                return { ...app, location: "desktop", position: spot };
            });
        });
        setSelectedIds([]);
    };

    const moveToFolder = (draggedId: string) => moveSelectedTo(draggedId, "folder");
    const moveToTrash = (draggedId: string) => moveSelectedTo(draggedId, "trash");
    const moveToView = (draggedId: string) => moveSelectedTo(draggedId, finderView);

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
        setSelectedIds((prev) => {
            if (additive) {
                return prev.includes(id)
                    ? prev.filter((p) => p !== id)
                    : [...prev, id];
            }
            if (prev.includes(id)) return prev;
            return [id];
        });
    };

    const onDesktopMouseDown = (e: React.MouseEvent) => {
        if (e.button !== 0) return;
        setMarquee(null);
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
            window.removeEventListener("blur", onUp);
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
        window.addEventListener("blur", onUp);
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

    const [, dropRef] = useDrop(
        () => ({
            accept: "APP_ICON",
            drop: (item: { id: string }, monitor) => {
                if (monitor.didDrop()) return;

                const dragged = apps.find((app) => app.id === item.id);

                if (dragged && dragged.location !== "desktop") {
                    const clientOffset = monitor.getClientOffset();
                    const position = clientOffset
                        ? snapToGrid(clientOffset.x - 30, clientOffset.y - 30)
                        : dragged.position;
                    setApps((prev) =>
                        prev.map((app) =>
                            app.id === item.id
                                ? { ...app, location: "desktop", position }
                                : app
                        )
                    );
                    return;
                }

                const diff = monitor.getDifferenceFromInitialOffset();
                if (!diff) return;

                const movingIds = selectedIds.includes(item.id)
                    ? selectedIds
                    : [item.id];

                setApps((prev) =>
                    prev.map((app) =>
                        movingIds.includes(app.id) && app.location === "desktop"
                            ? {
                                  ...app,
                                  position: snapToGrid(
                                      app.position.x + diff.x,
                                      app.position.y + diff.y
                                  ),
                              }
                            : app
                    )
                );
            },
        }),
        [selectedIds, apps]
    );

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
            <div className="desktop-surface">
                {apps
                    .filter((app) => app.location === "desktop")
                    .map((app) => (
                        <Apps
                            key={app.id}
                            id={app.id}
                            iconSrc={app.iconSrc}
                            title={app.title}
                            onClick={() => handleDesktopOpen(app.id)}
                            position={app.position}
                            selected={selectedIds.includes(app.id)}
                            onSelect={handleSelect}
                            onDropApp={
                                app.id === "folder"
                                    ? moveToFolder
                                    : app.id === "trash"
                                    ? moveToTrash
                                    : undefined
                            }
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
                        focusToken={focusTokens["about-me"]}
                    />
                )}
                {openAWS && (
                    <AWS
                        isOpen={openAWS}
                        onClose={() => setOpenAWS(false)}
                        focusToken={focusTokens["AWS"]}
                    />
                )}
                {openMyResume && (
                    <Resume
                        isOpen={openMyResume}
                        onClose={() => setOpenMyResume(false)}
                        focusToken={focusTokens["Resume"]}
                    />
                )}
                {openContactMe && (
                    <ContactMe
                        isOpen={openContactMe}
                        onClose={() => setOpenContactMe(false)}
                        focusToken={focusTokens["Contact"]}
                    />
                )}
                {openFolder && (
                    <ProjectsFolder
                        isOpen={openFolder}
                        onClose={() => setOpenFolder(false)}
                        apps={apps}
                        view={finderView}
                        onViewChange={setFinderView}
                        onOpenApp={handleAppClick}
                        onDropInView={moveToView}
                        onMoveTo={moveSelectedTo}
                        focusToken={
                            (focusTokens["folder"] ?? 0) +
                            (focusTokens["trash"] ?? 0)
                        }
                    />
                )}
                {openGaib && (
                    <GAIB
                        isOpen={openGaib}
                        onClose={() => setOpenGaib(false)}
                        focusToken={focusTokens["GAIB"]}
                    />
                )}
                {openWork && (
                    <WorkExperience
                        isOpen={openWork}
                        onClose={() => setOpenWork(false)}
                        focusToken={focusTokens["work"]}
                    />
                )}
                {openSkills && (
                    <SkillsApp
                        isOpen={openSkills}
                        onClose={() => setOpenSkills(false)}
                        focusToken={focusTokens["Skills"]}
                    />
                )}
                {openFigma && (
                    <FigmaClone
                        isOpen={openFigma}
                        onClose={() => setOpenFigma(false)}
                        focusToken={focusTokens["figma"]}
                    />
                )}
                {projectApps
                    .filter((project) => openProjects[project.id])
                    .map((project) => (
                        <ProjectApp
                            key={project.id}
                            isOpen
                            onClose={() =>
                                setOpenProjects((prev) => ({
                                    ...prev,
                                    [project.id]: false,
                                }))
                            }
                            focusToken={focusTokens[project.id]}
                            project={project}
                        />
                    ))}
            </div>
        </div>
    );
}

export default DesktopContent;
