import React from "react";
import "./projects.css";
import FigmaClone from "../../photos/FigmaClone.png";
import GAIB from "../../photos/GAIB.png";
import Checkers from "../../photos/Checkers.png";
import { Scale } from "@mui/icons-material";
import Angle from "../../photos/Angle.png";
import Portfolio from "../../photos/Portfolio.png";
import Book from "../../photos/BookMERN.png";
import ProjectSpace from "../../components/project-spaces/ProjectSpace";
const Projects = () => {
    return (
        <div className="project-container" id="projects">
            <h2 className="h2-container-proj" style={{ marginBottom: "20px" }}>
                    <span className="text-normal">My </span>
                    <span className="text-bold">Projects:</span>
            </h2>
            <div className="odd">
                <ProjectSpace
                    number={1}
                    title="GAIB: Gen AI TestBot"
                    description="The GenAI Test Bot revolutionizes software testing by seamlessly connecting to GitHub repositories, fetching the latest commit details, and automating unit test case generation. Integrated into the VSCode environment, it analyzes code changes, crafts test scenarios, and provides precision reports, ensuring code quality and reliability. By automating test suite generation and documentation, it accelerates development cycles and enhances software quality. "
                    photo={GAIB}
                    mandatoryLink="https://github.com/BaharAbbasiDelvand/GAIB"
                    optionalLink="https://marketplace.visualstudio.com/items?itemName=GAIB.genai"
                />
            </div>
            <div className="even">
                <ProjectSpace
                    number={2}
                    title="Figma Clone"
                    description="I designed and developed a highly interactive Figma clone utilizing Liveblocks, TailwindCSS, ShadCN, TypeScript, and Next.js. This innovative project enables real-time collaboration, featuring active user tracking, cursor sharing, chat functionality, and emoji reactions. I implemented robust functionalities such as freehand drawing, image uploads, and advanced shape customization options for colors, dimensions, and fonts, enhancing user engagement and creativity. Deployed on Vercel, the application ensures optimal performance, scalability, and seamless real-time updates, delivering a reliable and efficient user experience. This project showcases my ability to create complex, user-centric applications using modern web development technologies."
                    photo={FigmaClone}
                    mandatoryLink="https://github.com/BaharAbbasiDelvand/Figma-Clone"
                    optionalLink="https://bahars-figma-clone.vercel.app"
                />
            </div>
            <div className="odd">
                <ProjectSpace
                    number={3}
                    title="MERN Book Tracking Application"
                    description="In May 2024, I engineered a robust MERN (MongoDB, Express.js, React, Node.js) book tracking application designed to enhance personal book management. This project features complete CRUD (Create, Read, Update, Delete) functionalities, allowing users to efficiently manage their book collections. Users can also leave reviews and ratings for books, creating an engaging interactive experience. To accelerate development, I leveraged Vite, and I used Tailwind CSS to design a sleek, responsive user interface. Additionally, I integrated a secure MongoDB database to store and manage user and book details, including titles, authors, personal ratings, and reviews."
                    photo={Book}
                    mandatoryLink="https://github.com/BaharAbbasiDelvand/MERN-Book-Keeper"
                />
            </div>
            <div className="even">
                <ProjectSpace
                    number={4}
                    title="Personal Portfolio"
                    description="This site showcases my resume, skills, and project descriptions, offering a comprehensive view of my professional journey. Each project is accompanied by detailed descriptions and links, allowing you to explore my work in depth. I coded the portfolio using TypeScript for a robust and maintainable codebase and deployed it using AWS for reliable and scalable hosting. "
                    photo={Portfolio}
                    mandatoryLink="https://github.com/BaharAbbasiDelvand/personal-portfolio"
                    optionalLink="http://baharcantfly-portfolio.s3-website.us-east-2.amazonaws.com"
                />
            </div>
            <div className="odd">
                <ProjectSpace
                    number={5}
                    title="Angle Management: Protractor Tutorial App"
                    description="Angle Management is a game designed in Elm programming language specifically tailored for 7th graders in CBSE programs. Its primary aim is to facilitate the learning of protractor usage through several different tutorials and levels. Drawing inspiration from Norman's principles and implementing the Double Diamond design, the game ensures an intuitive user experience and structured learning approach. "
                    photo={Angle}
                    mandatoryLink="https://github.com/BaharAbbasiDelvand/AngleManagement"
                />
            </div>
            <div className="even">
                <ProjectSpace
                    number={6}
                    title="Checkers Game"
                    description="This project demonstrates my skills in game development and problem-solving. It features a user-friendly interface and follows the standard rules of the game. Players can enjoy traditional gameplay with moves, captures, and victory conditions accurately represented. It showcases my ability to design and implement software solutions for classic games while maintaining simplicity and functionality."
                    photo={Checkers}
                    mandatoryLink="https://github.com/BaharAbbasiDelvand/Checkers"
                />
            </div>
        </div>
    );
};

export default Projects;
