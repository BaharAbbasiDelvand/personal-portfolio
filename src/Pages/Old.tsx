import React from "react";
import AboutMe from "../Fragments/About/AboutMe";
import Contact from "../Fragments/Contact/Contact";
import Skills from "../Fragments/MySkills/Skills";
import Projects from "../Fragments/Projects/Projects";
import Navbar from "../components/old/Navbar/Navbar/Nav";

function Old() {
    return (
        <div>
            <Navbar />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default Old;
