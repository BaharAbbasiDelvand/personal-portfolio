import React from "react";
import "./projects.css";
import GAIB from "../../photos/GAIB.png";
import Checkers from "../../photos/Checkers.png";
import { Scale } from "@mui/icons-material";
import Angle from "../../photos/Angle.png";
import Portfolio from '../../photos/Portfolio.png';
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
                    title="Personal Portfolio"
                    description="This site showcases my resume, skills, and project descriptions, offering a comprehensive view of my professional journey. Each project is accompanied by detailed descriptions and links, allowing you to explore my work in depth. I coded the portfolio using TypeScript for a robust and maintainable codebase and deployed it using AWS for reliable and scalable hosting. "
                    photo={Portfolio}
                    link="https://github.com/BaharAbbasiDelvand/personal-portfolio"
                />
            </div>
            <div className="odd">
                <ProjectSpace
                    number={3}
                    title="Angle Management: Protractor Tutorial App"
                    description="Angle Management is a game designed in Elm programming language specifically tailored for 7th graders in CBSE programs. Its primary aim is to facilitate the learning of protractor usage through several different tutorials and levels. Drawing inspiration from Norman's principles and implementing the Double Diamond design, the game ensures an intuitive user experience and structured learning approach. "
                    photo={Angle}
                    link="https://github.com/BaharAbbasiDelvand/AngleManagement"
                />
            </div>
            <div className="even">
                <ProjectSpace
                    number={4}
                    title="Checkers Game"
                    description="This project demonstrates my skills in game development and problem-solving. It features a user-friendly interface and follows the standard rules of the game. Players can enjoy traditional gameplay with moves, captures, and victory conditions accurately represented. It showcases my ability to design and implement software solutions for classic games while maintaining simplicity and functionality."
                    photo={Checkers}
                    link="https://github.com/BaharAbbasiDelvand/Checkers"
                />
            </div>
        </div>
    );
};

export default Projects;
