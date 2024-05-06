import React from "react";
import './projects.css';
import GAIB from "../../photos/GAIB.png";
import Checkers from "../../photos/Checkers.png"
import { Scale } from "@mui/icons-material";
import Angle from "../../photos/Angle.png";
import ProjectSpace from "../../components/project-spaces/ProjectSpace";
const Projects =()=>{
    return(
        <div className="project-container" id="projects">
            <h2 className="h2-container"><span style={{ fontWeight: 'normal', color: "white" }}>My </span><span className="second-text" style={{ fontWeight: 'bold', color: "white" }}>Projects:</span></h2>
            <div className="odd">
            <ProjectSpace
                number={1}
                title="GAIB: Gen AI TestBot"
                description="GAIB is blah blah"
                photo={GAIB}
                link="https://example.com/gaib"
            />
            </div>
            <div className="even">
            <ProjectSpace 
                    number={2}
                    title="Checkers Game"
                    description=" "
                    photo={Checkers}
                    link="https://github.com/BaharAbbasiDelvand/Checkers"
                    />
            </div>
            <div className="odd">
                <ProjectSpace
                    number={3}
                    title="Angle Management: Protractor Tutorial App"
                    description=" "
                    photo={Angle}
                    link="https://github.com/BaharAbbasiDelvand/AngleManagement"
                    />
            </div>
        </div>
    );
};

export default Projects;