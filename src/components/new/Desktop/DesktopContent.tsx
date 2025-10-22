import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Apps from "../Apps/Apps";
import { AboutMeApp } from "../about-me/AboutMeApp";
import AWS from "../AWS/AWS";
import Resume from "../Resume/Resume";
import ContactMe from "../contact-me/ContactMe";
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

    const handleAppClick = (id: string) => {
        if (id === "about-me") setOpenAboutMe(true);
        if (id === "AWS") setOpenAWS(true);
        if (id==="Resume") setOpenMyResume(true);
        if(id==="Contact") setOpenContactMe(true);
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
            id: "XP",
            iconSrc: "/Experience.png",
            title: "Relevant Experience",
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
        } //make folder eventually for projects
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
                {openAWS && (
                    <AWS
                        isOpen={openAWS}
                        onClose={() => setOpenAWS(false)}
                        />
                )}
                {openMyResume && (<Resume 
                isOpen={openMyResume}
                onClose={() => setOpenMyResume(false)}
                />)}
                {openContactMe && (<ContactMe isOpen={openContactMe} onClose={() => setOpenContactMe(false)}/> )}
            </div>
        </div>
    );
}

export default DesktopContent;
