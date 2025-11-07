import React, { useState } from "react";
import { AppFrame } from "../app-frames/App-frames";
import "./projectfolder.css";
import { useDrop } from "react-dnd";
import Apps from "../Apps/Apps";


type ProjectsFolderProps = { isOpen: boolean; onClose: () => void };

const GRID_SIZE = 10;
const snapToGrid = (x: number, y: number) => ({
    x: (x / GRID_SIZE) * GRID_SIZE,
    y: (y / GRID_SIZE) * GRID_SIZE,
});


export const ProjectsFolder: React.FC<ProjectsFolderProps> = ({
    isOpen,
    onClose,
}) => {

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
        }, 
    ]);
    
    
    const handleAppClick = (id: string) => {
        console.log(`App with id ${id} clicked`);
    }
        
        return (
        <AppFrame
            isOpen={isOpen}
            onClose={onClose}
            title="Projects Folder"
            overlay
            contentClassName="projects-folder-body"
            windowClassName="projects-folder-window"
        >
            <div className="projects-folder-wrap">
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
            </div>
        </AppFrame>
    );
};

export default ProjectsFolder;
