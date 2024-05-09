import React from "react";
import Banner from "../../photos/Banner.png";
import "./aboutme.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SquareButton from "../../components/SquareButton/Squarebutton";
import GitHubIcon from '@mui/icons-material/GitHub';
import Buttons from "../../components/Buttons/Buttons";
const AboutMe = () => {

    return (
        <div className="about-container" id="about">
            <div className="text-container">
                <p> Hi! I'm</p>
                <h1>Bahar Abbasi Delvand</h1>
                <p>
                    I'm a fourth year student studying Computer Science in
                    McMaster University
                </p>
                <div className="button-container"> <Buttons/> </div>
                
            </div>
            <div className="photo-container">
                {/* <img src={Banner} alt="My Image" /> */}
            </div>
        </div>
    );
};

export default AboutMe;
