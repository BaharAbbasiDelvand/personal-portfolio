import React from "react";
import { AppFrame } from "../app-frames/App-frames";
import "./projectfolder.css";
type ProjectsFolderProps = { isOpen: boolean; onClose: () => void };
export const ProjectsFolder: React.FC<ProjectsFolderProps> = ({
    isOpen,
    onClose,
}) => {
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
                
            </div>
        </AppFrame>
    );
};

export default ProjectsFolder;
