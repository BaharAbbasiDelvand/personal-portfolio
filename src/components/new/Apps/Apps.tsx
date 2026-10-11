import React from "react";
import { useDrag, useDrop } from "react-dnd";
import "./apps.css";

interface AppsProps {
    iconSrc: string;
    title: string;
    onClick: () => void;
    id: string;
    position?: { x: number; y: number };
    selected?: boolean;
    onSelect?: (id: string, additive: boolean) => void;
    variant?: "desktop" | "folder";
    onDropApp?: (draggedId: string) => void;
}

const Apps: React.FC<AppsProps> = ({
    iconSrc,
    title,
    onClick,
    id,
    position,
    selected = false,
    onSelect,
    variant = "desktop",
    onDropApp,
}) => {
    const [{ isDragging }, dragRef] = useDrag(
        () => ({
            type: "APP_ICON",
            item: { id },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [id]
    );

    const [{ isOver, canDrop }, dropRef] = useDrop(
        () => ({
            accept: "APP_ICON",
            canDrop: (item: { id: string }) => !!onDropApp && item.id !== id,
            drop: (item: { id: string }) => {
                if (onDropApp && item.id !== id) onDropApp(item.id);
                return { droppedInFolder: true };
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }),
        [onDropApp, id]
    );

    const isFolderVariant = variant === "folder";
    const droppableHover = isOver && canDrop;

    const setRefs = (node: HTMLDivElement | null) => {
        dragRef(node);
        if (onDropApp) dropRef(node);
    };

    const style: React.CSSProperties = isFolderVariant
        ? {
              position: "relative",
              cursor: "grab",
              opacity: isDragging ? 0.5 : 1,
          }
        : {
              position: "absolute",
              left: position?.x ?? 0,
              top: position?.y ?? 0,
              cursor: "grab",
              opacity: isDragging ? 0.5 : 1,
              zIndex: 10,
          };

    return (
        <div
            ref={setRefs}
            className={`app-container ${
                isFolderVariant ? "app-container-folder" : ""
            } ${droppableHover ? "app-droppable" : ""}`}
            data-app-id={isFolderVariant ? undefined : id}
            style={style}
            onMouseDown={(e) => {
                if (isFolderVariant) return;
                e.stopPropagation();
                onSelect?.(id, e.shiftKey || e.metaKey);
            }}
        >
            <button
                className={`apps-wrapper ${selected ? "apps-selected" : ""}`}
                onDoubleClick={onClick}
            >
                <img src={iconSrc} alt={title} className="apps-icon" />
                <div className="apps-title">{title}</div>
            </button>
        </div>
    );
};

export default Apps;
