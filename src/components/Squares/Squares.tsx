import React, { ReactElement } from "react";
import PropTypes from "prop-types";
import "./square.css";

interface SquareProps {
    icon: ReactElement;
    text: string;
}

const Square: React.FC<SquareProps> = ({ icon, text }) => {
    return (
        <div className="square">
            <div className="icon">{icon}</div>
            <div className="text">{text}</div>
        </div>
    );
};

Square.propTypes = {
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
};

export default Square;
