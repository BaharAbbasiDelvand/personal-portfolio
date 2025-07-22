import React, { useState, useEffect } from "react";
import { useDrag, useDragLayer } from "react-dnd";
import "./apps.css";

interface AppsProps {
    iconSrc: string;
    title: string;
    onClick: () => void;
    id: string;
    position: { x: number; y: number };

}

const Apps: React.FC<AppsProps> = ({ iconSrc, title, onClick, id }) => {
    const [pos, setPos] = useState({ x: 100, y: 100 });

    const [{ isDragging }, dragRef, dragPreview] = useDrag(() => ({
        type: "APP_ICON",
        item: { id, pos },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const { currentOffset, draggingItem } = useDragLayer((monitor) => ({
        currentOffset: monitor.getClientOffset(),
        draggingItem: monitor.getItem(),
    }));

    useEffect(() => {
        if (draggingItem?.id === id && currentOffset) {
            setPos({
                x: currentOffset.x,
                y: currentOffset.y,
            });
        }
    }, [currentOffset, draggingItem, id]);

    return (
        <div
            ref={dragRef}
            className="app-container"
            style={{
                position: "absolute",
                left: pos.x,
                top: pos.y,
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
