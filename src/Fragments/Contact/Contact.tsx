import React from "react";
import './contact.css';
import {TextField, Button} from '@mui/material';
import Buttons from "../../components/Buttons/Buttons";

const Contact=()=>{
    return(
        <div className="contact-container"> 
        <div className="texts-container" id="contact">
            <div className="textfields">
            <TextField className="textfield" id="outlined-basic" label="Your name" variant="outlined" />
            <TextField className="textfield" id="outlined-basic" label="Email" variant="outlined" />
            <TextField className="textfield" id="outlined-basic" label="Website (If exists)" variant="outlined" />
            <TextField className="textfield" id="outlined-basic" label="How can I help?*" variant="outlined" />
            <div className="contact-buttons">
            <Button style={{backgroundColor:"black", color:"white", width:"176px", height:"56px"}} className="Connect-Button"> Get In Touch</Button>
            <Buttons/>
            </div>
            </div>
            <div className="contact-text">
                <h1>Let's connect</h1>
            </div>
            
        </div>
        
        
        </div>
    );
};

export default Contact;