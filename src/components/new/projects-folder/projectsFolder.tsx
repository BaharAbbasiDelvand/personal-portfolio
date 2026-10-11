import React from "react";
import { Monitor, Folder, Trash2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AppFrame } from "../app-frames/App-frames";
import "./projectfolder.css";
import Apps from "../Apps/Apps";

export type FinderView = "desktop" | "folder" | "trash";

type FinderApp = {
    id: string;
    iconSrc: string;
    title: string;
    location: "desktop" | "folder" | "trash";
};

type ProjectsFolderProps = {
    isOpen: boolean;
    onClose: () => void;
    apps: FinderApp[];
    view: FinderView;
    onViewChange: (view: FinderView) => void;
    onOpenApp: (id: string) => void;
    focusToken?: number;
};

const locations: { id: FinderView; label: string; icon: LucideIcon }[] = [
    { id: "desktop", label: "Desktop", icon: Monitor },
    { id: "folder", label: "Projects", icon: Folder },
    { id: "trash", label: "Trash", icon: Trash2 },
];

const emptyText: Record<FinderView, { title: string; text: string }> = {
    desktop: {
        title: "Nothing on the desktop",
        text: "Desktop apps will show up here.",
    },
    folder: {
        title: "This folder is empty",
        text: "Drag any app onto the Projects icon to add it here.",
    },
    trash: {
        title: "Trash is empty",
        text: "Drag an app onto the Trash to remove it from the desktop.",
    },
};

const appsIn = (apps: FinderApp[], view: FinderView) =>
    apps.filter(
        (app) =>
            app.location === view &&
            !(view === "desktop" && (app.id === "folder" || app.id === "trash"))
    );

export const ProjectsFolder: React.FC<ProjectsFolderProps> = ({
    isOpen,
    onClose,
    apps,
    view,
    onViewChange,
    onOpenApp,
    focusToken,
}) => {
    const current = appsIn(apps, view);
    const activeLabel =
        locations.find((location) => location.id === view)?.label ?? "Projects";

    return (
        <AppFrame
            isOpen={isOpen}
            onClose={onClose}
            focusToken={focusToken}
            title={activeLabel}
            overlay
            contentClassName="finder-body"
            windowClassName="finder-window"
        >
            <div className="finder-layout">
                <aside className="finder-sidebar">
                    <p className="finder-sidebar-head">Locations</p>
                    {locations.map((location) => {
                        const LocationIcon = location.icon;
                        const count = appsIn(apps, location.id).length;
                        return (
                            <button
                                key={location.id}
                                type="button"
                                className={`finder-nav-item ${
                                    view === location.id ? "is-active" : ""
                                }`}
                                onClick={() => onViewChange(location.id)}
                            >
                                <span className="finder-nav-icon">
                                    <LocationIcon size={16} />
                                </span>
                                <span className="finder-nav-label">
                                    {location.label}
                                </span>
                                {count > 0 && (
                                    <span className="finder-nav-count">
                                        {count}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </aside>

                <section className="finder-main">
                    {current.length === 0 ? (
                        <div className="finder-empty">
                            <p className="finder-empty-title">
                                {emptyText[view].title}
                            </p>
                            <p className="finder-empty-text">
                                {emptyText[view].text}
                            </p>
                        </div>
                    ) : (
                        <div className="finder-grid">
                            {current.map((app) => (
                                <Apps
                                    key={app.id}
                                    id={app.id}
                                    iconSrc={app.iconSrc}
                                    title={app.title}
                                    variant="folder"
                                    onClick={() => onOpenApp(app.id)}
                                />
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </AppFrame>
    );
};

export default ProjectsFolder;
