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
                    I'm a passionate fourth-year computer science student in McMaster University, with a
                    fervor for all things tech. As a curious problem solver, I
                    thrive on challenges and love diving into the intricacies of
                    coding and software development. My
                    coursework has equipped me with a solid foundation in
                    algorithms, data structures, and software engineering
                    principles, preparing me to tackle real-world problems with
                    confidence and creativity. </p>
                    <p>
                    Outside
                    of the classroom, I enjoy [mention any relevant hobbies or
                    extracurricular activities that showcase your interests or
                    skills]. These experiences have not only enriched my
                    perspective but also taught me the importance of
                    collaboration, adaptability, and continuous learning. As I
                    embark on the next phase of my journey, I am eager to
                    explore opportunities that allow me to grow both personally
                    and professionally, and I'm ready to tackle new challenges
                    head-on. Let's connect and explore how we can create
                    something remarkable together!
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
