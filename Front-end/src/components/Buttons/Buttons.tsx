import React from "react";
import "./buttons.css";
import SquareButton from "../SquareButton/Squarebutton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
const Buttons = () => {
    const handleEmailButtonClick = () => {
        window.location.href = "mailto:abbasidb@mcmaster.ca";
    };
    return (
        <div className="buttons">
            <SquareButton
                link="https://github.com/BaharAbbasiDelvand"
                icon={GitHubIcon}
            />
            <SquareButton
                link="https://www.linkedin.com/in/baharabbasidelvand/"
                icon={LinkedInIcon}
            />
            <SquareButton
                link=""
                icon={EmailIcon}
                click={handleEmailButtonClick}
            />
        </div>
    );
};

export default Buttons;
