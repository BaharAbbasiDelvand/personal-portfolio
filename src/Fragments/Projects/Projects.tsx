import React from "react";
import "./projects.css";
import GAIB from "../../photos/GAIB.png";
import Checkers from "../../photos/Checkers.png";
import { Scale } from "@mui/icons-material";
import Angle from "../../photos/Angle.png";
import ProjectSpace from "../../components/project-spaces/ProjectSpace";
const Projects = () => {
    return (
        <div className="project-container" id="projects">
            <h2 className="h2-container" style={{ marginBottom: "20px" }}>
                <span style={{ fontWeight: "normal", color: "white" }}>
                    My{" "}
                </span>
                <span
                    className="second-text"
                    style={{ fontWeight: "bold", color: "white" }}
                >
                    Projects:
                </span>
            </h2>
            <div className="odd">
                <ProjectSpace
                    number={1}
                    title="GAIB: Gen AI TestBot"
                    description="The GenAI Test Bot revolutionizes software testing by seamlessly connecting to GitHub repositories, fetching the latest commit details, and automating unit test case generation. Integrated into the VSCode environment, it analyzes code changes, crafts test scenarios, and provides precision reports, ensuring code quality and reliability. By automating test suite generation and documentation, it accelerates development cycles and enhances software quality. "
                    photo={GAIB}
                    link="https://github.com/BaharAbbasiDelvand/GAIB"
                />
            </div>
            <div className="even">
                <ProjectSpace
                    number={2}
                    title="Angle Management: Protractor Tutorial App"
                    description=" "
                    photo={Angle}
                    link="https://github.com/BaharAbbasiDelvand/AngleManagement"
                />
            </div>
            <div className="odd">
                <ProjectSpace
                    number={3}
                    title="Checkers Game"
                    description=" "
                    photo={Checkers}
                    link="https://github.com/BaharAbbasiDelvand/Checkers"
                />
            </div>
        </div>
    );
};

export default Projects;
