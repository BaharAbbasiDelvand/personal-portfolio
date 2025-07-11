import React from "react";
import "./apps.css";

interface AppsProps {
    iconSrc: string;
    title: string;
    onClick: () => void;
}

const Apps: React.FC<AppsProps> = ({ iconSrc, title, onClick }) => {
    return (
        <button className="apps-wrapper" onClick={onClick}>
            <img src={iconSrc} alt={title} className="apps-icon" />
            <div className="apps-title">{title}</div>
        </button>
    );
};

export default Apps;
