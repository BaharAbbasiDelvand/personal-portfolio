import React from "react";
import Button from "@mui/material/Button";
import "./squarebutton.css";

interface SquareButtonProps {
    link: string;
    icon: React.ElementType;
    click?: () => void;
}

const SquareButton: React.FC<SquareButtonProps> = ({
    link,
    icon: Icon,
    click,
}) => {
    const handleClick = () => {
        if (click) {
            click();
        } else {
            window.location.href = link;
        }
    };

    return (
        <Button
            className="square-button"
            variant="contained"
            sx={{
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                    backgroundColor: "#333",
                }, minWidth: "50px", border:"none", width:"60px"
                , height:"60px", borderRadius:"5px", fontSize:"16px",
                cursor:"pointer", justifyContent:"center"
            }}
            endIcon={<Icon className="button_icon" />}
            onClick={handleClick}
        ></Button>
    );
};

export default SquareButton;
