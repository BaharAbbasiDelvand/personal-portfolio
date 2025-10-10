import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Apps from "../Apps/Apps";
import { AboutMeApp } from "../about-me/AboutMeApp";

const GRID_SIZE = 80;

const snapToGrid = (x: number, y: number) => ({
    x: Math.round(x / GRID_SIZE) * GRID_SIZE,
    y: Math.round(y / GRID_SIZE) * GRID_SIZE,
});

function DesktopContent() {
    const [openAboutMe, setOpenAboutMe] = useState(false);

    const handleAppClick = (id: string) => {
        if (id === "about-me") setOpenAboutMe(true);
    };

    const [apps, setApps] = useState([
        {
            id: "about-me",
            iconSrc: "/Banner.png",
            title: "About Me",
            position: { x: 80, y: 80 },
        },
        {
            id: "Skills",
            iconSrc: "/Skills.png",
            title: "Skills",
            position: { x: 80, y: 160 },
        },
        {
            id: "XP",
            iconSrc: "/Experience.png",
            title: "My Experience",
            position: { x: 80, y: 240 },
        },
    ]);

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
        <div className="Desktop-container" ref={dropRef}>
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
                    />
                ))}
                {openAboutMe && (
                    <AboutMeApp
                        isOpen={openAboutMe}
                        onClose={() => setOpenAboutMe(false)}
                    />
                )}
            </div>
        </div>
    );
}

export default DesktopContent;
