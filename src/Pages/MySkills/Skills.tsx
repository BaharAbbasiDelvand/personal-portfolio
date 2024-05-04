import React from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import Square from "../../components/Squares/Squares";
import FavoriteIcon from "@mui/icons-material/Favorite"; // Importing a Material-UI icon
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import JoinRightIcon from "@mui/icons-material/JoinRight";
import ApiIcon from "@mui/icons-material/Api";
import GitHubIcon from "@mui/icons-material/GitHub";
import DataArrayIcon from "@mui/icons-material/DataArray";
import TerminalIcon from "@mui/icons-material/Terminal";
import CodeIcon from "@mui/icons-material/Code";
import WebhookIcon from "@mui/icons-material/Webhook";
import BugReportIcon from "@mui/icons-material/BugReport";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import "./skills.css";
interface SquareProps {
    text: string;
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
}

const Skills = () => {
    return (
        <div id="skills">
            <h2 className="h2-container">
                <span style={{ fontWeight: "normal" }}>My </span>
                <span className="second-text" style={{ fontWeight: "bold" }}>
                    Skills:
                </span>
            </h2>
            <div className="first-row">
                <Square icon={<CodeIcon />} text="Full-Stack Development" />
                <Square icon={<TerminalIcon />} text="Shell Scripting" />
                <Square icon={<WebhookIcon />} text="RESTful APIs" />
                <Square icon={<DeveloperBoardIcon />} text="UI/UX Design" />
                <Square icon={<IntegrationInstructionsIcon />} text="CI/CD" />
            </div>
            <div className="second-row">
                <Square icon={<GitHubIcon />} text="Version Control (Git)" />
                <Square icon={<ApiIcon />} text="API Development" />
                <Square icon={<BugReportIcon />} text="Software Testing" />
                <Square
                    icon={<ArchitectureIcon />}
                    text="Prototyping (Figma)"
                />
                <Square icon={<DataArrayIcon />} text="Data Structures" />
            </div>
        </div>
    );
};

export default Skills;
