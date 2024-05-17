import React from "react";
import Banner from "../../photos/Banner.png";
import "./aboutme.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SquareButton from "../../components/SquareButton/Squarebutton";
import GitHubIcon from "@mui/icons-material/GitHub";
import Buttons from "../../components/Buttons/Buttons";
const AboutMe = () => {
    return (
        <div className="about-container" id="about">
            <div className="text-container">
                <p> Hello there! I'm </p>
                <h1>Bahar Abbasi Delvand</h1>
                <p>
                Hello, and welcome to my personal portfolio! I'm thrilled to have you here. I'm currently in my fourth year pursuing a degree in Computer Science at McMaster University. Throughout my academic journey, I've delved into various facets of computer science, from programming languages to algorithms, and have developed a deep passion for crafting elegant solutions to complex problems. This portfolio serves as a testament to my dedication, showcasing projects that highlight my skills, creativity, and commitment to excellence in the field.
                </p>
                <div className="button-container">
                    {" "}
                    <Buttons />{" "}
                </div>
            </div>
            <div className="photo-container">
                {/* <img src={Banner} alt="My Image" /> */}
            </div>
        </div>
    );
};

export default AboutMe;
