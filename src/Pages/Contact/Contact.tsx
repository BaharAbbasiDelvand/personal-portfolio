import React from "react";
import './contact.css';
import TextField from '@mui/material/TextField';

const Contact=()=>{
    return(
        
        <div className="contact-container" id="contacts">
            <div className="textfields">
            <TextField className="your-name" id="outlined-basic" label="Your name" variant="outlined" />
            <TextField className="email" id="outlined-basic" label="Email" variant="outlined" />
            <TextField className="website" id="outlined-basic" label="Website (If exists)" variant="outlined" />
            <TextField className="message" id="outlined-basic" label="How can I help?*" variant="outlined" />

            </div>
            <div className="contact-text">

            </div>
        </div>
    );
};

export default Contact;