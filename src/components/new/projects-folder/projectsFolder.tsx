import React from "react";
import { useDrop } from "react-dnd";
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
    onDropInView: (id: string) => void;
    onMoveTo: (id: string, location: FinderView) => void;
    focusToken?: number;
};

type LocationDef = { id: FinderView; label: string; icon: LucideIcon };

const locations: LocationDef[] = [
    { id: "desktop", label: "Desktop", icon: Monitor },
    { id: "folder", label: "Selected Projects", icon: Folder },
    { id: "trash", label: "Trash", icon: Trash2 },
];

const FinderLocationItem: React.FC<{
    location: LocationDef;
    count: number;
    isActive: boolean;
    onViewChange: (view: FinderView) => void;
    onMoveTo: (id: string, location: FinderView) => void;
}> = ({ location, count, isActive, onViewChange, onMoveTo }) => {
    const [{ isOver, canDrop }, dropRef] = useDrop(
        () => ({
            accept: "APP_ICON",
            drop: (item: { id: string }) => {
                onMoveTo(item.id, location.id);
                return { droppedInLocation: true };
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }),
        [location.id, onMoveTo]
    );
    const LocationIcon = location.icon;
    return (
        <button
            ref={dropRef}
            type="button"
            className={`finder-nav-item ${isActive ? "is-active" : ""} ${
                isOver && canDrop ? "is-drop-target" : ""
            }`}
            onClick={() => onViewChange(location.id)}
        >
            <span className="finder-nav-icon">
                <LocationIcon size={16} />
            </span>
            <span className="finder-nav-label">{location.label}</span>
            {count > 0 && (
                <span className="finder-nav-count">{count}</span>
            )}
        </button>
    );
};

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
    onDropInView,
    onMoveTo,
    focusToken,
}) => {
    const current = appsIn(apps, view);
    const activeLabel =
        locations.find((location) => location.id === view)?.label ?? "Projects";

    const [{ isOver }, dropRef] = useDrop(
        () => ({
            accept: "APP_ICON",
            drop: (item: { id: string }) => {
                onDropInView(item.id);
                return { droppedInFinder: true };
            },
            collect: (monitor) => ({ isOver: monitor.isOver() }),
        }),
        [onDropInView]
    );

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
                    {locations.map((location) => (
                        <FinderLocationItem
                            key={location.id}
                            location={location}
                            count={appsIn(apps, location.id).length}
                            isActive={view === location.id}
                            onViewChange={onViewChange}
                            onMoveTo={onMoveTo}
                        />
                    ))}
                </aside>

                <section
                    className={`finder-main ${isOver ? "is-drop-target" : ""}`}
                    ref={dropRef}
                >
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
