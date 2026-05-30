import React from "react";
import { useDrag } from "react-dnd";
import "./apps.css";

interface AppsProps {
    iconSrc: string;
    title: string;
    onClick: () => void;
    id: string;
    position: { x: number; y: number };
    selected?: boolean;
    onSelect?: (id: string, additive: boolean) => void;
}

const Apps: React.FC<AppsProps> = ({
    iconSrc,
    title,
    onClick,
    id,
    position,
    selected = false,
    onSelect,
}) => {
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: "APP_ICON",
        item: { id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={dragRef}
            className="app-container"
            data-app-id={id}
            style={{
                position: "absolute",
                left: position.x,
                top: position.y,
                cursor: "grab",
                opacity: isDragging ? 0.5 : 1,
                zIndex: 10,
            }}
            onMouseDown={(e) => {
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
