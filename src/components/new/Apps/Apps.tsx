import React from "react";
import { useDrag } from "react-dnd";
import "./apps.css";

interface AppsProps {
    iconSrc: string;
    title: string;
    onClick: () => void;
    id: string;
    position: { x: number; y: number };
}

const Apps: React.FC<AppsProps> = ({
    iconSrc,
    title,
    onClick,
    id,
    position,
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
            style={{
                position: "absolute",
                left: position.x,
                top: position.y,
                cursor: "grab",
                opacity: isDragging ? 0.5 : 1,
                zIndex: 10,
            }}
        >
            <button className="apps-wrapper" onClick={onClick}>
                <img src={iconSrc} alt={title} className="apps-icon" />
                <div className="apps-title">{title}</div>
            </button>
        </div>
    );
};

export default Apps;
