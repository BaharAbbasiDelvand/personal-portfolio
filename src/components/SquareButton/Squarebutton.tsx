import React from "react";
import Button from "@mui/material/Button";
import './squarebutton.css';

interface SquareButtonProps {
    link: string;
    icon: React.ElementType;
    click?: () => void; // Use 'click' instead of 'onClick'
}

const SquareButton: React.FC<SquareButtonProps> = ({ link, icon: Icon, click }) => {
    const handleClick = () => {
        if (click) {
            click(); // Call the click function if provided
        } else {
            window.location.href = link;
        }
    };

    return (
        <Button
            className="square-button"
            variant="contained"
            color="primary"
            endIcon={<Icon className="button_icon" />}
            onClick={handleClick}
        >
            
        </Button>
    );
};

export default SquareButton;
