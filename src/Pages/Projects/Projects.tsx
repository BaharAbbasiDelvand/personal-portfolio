import React from "react";
import './projects.css';
import GAIB from "../../photos/GAIB.png";
import Checkers from "../../photos/Checkers.png"
import { Scale } from "@mui/icons-material";
import Angle from "../../photos/Angle.png";
const Projects =()=>{
    return(
        <div className="project-container">
            <h2 className="h2-container"><span style={{ fontWeight: 'normal', color: "white" }}>My </span><span className="second-text" style={{ fontWeight: 'bold', color: "white" }}>Projects:</span></h2>
            <div className="project">
                <div className="photo-proj1">
                    <img src={GAIB}/>
                </div>
                <div className="text-proj">
                    <h2 className="num-text"> 01 </h2>
                    <h3> GAIB: Gen AI TestBot</h3>
                    <p className="subtext">GAIB is blah blah</p>
                </div>
            </div>
            <div className="project">
                <div className="text-proj">
                    <h2>02</h2>
                    <h3>Checkers Game</h3>
                    <p className="subtext">m</p>
                </div>
                <div className="photo-proj2">
                    <img src={Checkers}/>
                </div>
            </div>
            <div className="project">
                <div className="photo-proj3">
                    <img src={Angle}/>
                </div>
                <div className="text-proj">
                    <h2 className="num-text"> 03 </h2>
                    <h3> Angle Management: Protractor Tutorial App</h3>
                    <p className="subtext">GAIB is blah blah</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;