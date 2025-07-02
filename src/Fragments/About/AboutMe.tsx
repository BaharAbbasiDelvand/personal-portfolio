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

                <h1 className="name">Bahar Abbasi Delvand</h1>
                <p>
                    I’m a Computer Science graduate from McMaster University with
                    a minor in Art History. My work blends technical
                    problem-solving with creative structure. Whether I’m
                    building full-stack web apps, integrating AI into
                    development workflows, or analyzing 19th-century artists
                    through geospatial data, I focus on creating systems that
                    are intuitive, efficient, and thoughtful. I’m currently
                    working as a full-stack developer at MBA4HIRE, where I’ve
                    helped build scalable tools for real-time financial
                    operations and automated schema generation using GPT-powered
                    features. I also assist in an art history research project using ArcGIS and SQL to study how geography
                    shaped artistic networks in 19th-century France. This
                    portfolio is a space for the things I’ve built, explored,
                    and continue to learn. Thanks for stopping by :){" "}
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
