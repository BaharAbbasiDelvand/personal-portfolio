import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub"; // Import GitHub icon

interface ProjectProps {
    number: number;
    title: string;
    description: string;
    photo: string;
    mandatoryLink: string;
    optionalLink?: string; 
}

const ProjectSpace: React.FC<ProjectProps> = ({
    number,
    title,
    description,
    photo,
    mandatoryLink,
    optionalLink,
}) => {
    return (
        <div className="project">
            <div className="photo-proj-container">
                <div className={`photo-proj photo-proj-${number}`} />
            </div>
            <div className="text-proj">
                <h2 className="num-text">
                    {number < 10 ? `0${number}` : number}
                </h2>
                <h3>{title}</h3>
                <p className="subtext">{description}</p>
                <a
                    href={mandatoryLink}
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon /> 
                </a>
                {optionalLink && (
                    <a
                        href={optionalLink}
                        className="link optional"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <OpenInNewIcon />
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectSpace;
