import React, { useState, ChangeEvent, useEffect } from "react";
import "./contact.css";
import { TextField, Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import Buttons from "../../components/Buttons/Buttons";
interface EmailFormat {
    name: string;
    email: string;
    website: string | null;
    message: string;
}

const initialEmail: EmailFormat = {
    name: "",
    email: "",
    website: "",
    message: "",
};

const Contact: React.FC = () => {
    const [messageInfo, setMessageinfo] = useState<EmailFormat>(initialEmail);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const validator = require("validator");
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;

    const handleFieldChange = (e: any) => {
        const {
            target: { value, name },
        } = e;
        setMessageinfo({ ...messageInfo, [name]: value });
    };

    const validateMessageInfo = (messageInfo: EmailFormat) => {
        const isValidEmail = validator.isEmail(messageInfo.email);
        const trimmedMessage = messageInfo.message.trim();
        const trimmedName = messageInfo.name.trim();
        if (
            isValidEmail &&
            trimmedMessage.length > 0 &&
            trimmedName.length > 0
        ) {
            setIsButtonDisabled(false);
            return;
        }
        setIsButtonDisabled(true);
        
    };

    const handleGetInTouch = () => {
        const template_forms = {
            from_name: messageInfo.name,
            from_email: messageInfo.email,
            to_name: "Bahar",
            message: messageInfo.message,
            website: messageInfo.website,
        };
        emailjs.send(
            SERVICE_ID ?? '',
            TEMPLATE_ID ?? '',
            template_forms,
            PUBLIC_KEY ?? ''
        ).then(
            () => {
                console.log("SUCCESS!");
            },
            (error) => {
                console.log("FAILED...", error.text);
            }
        );
        
        setMessageinfo(initialEmail);
    };

    useEffect(() => {
        validateMessageInfo(messageInfo);
    }, [messageInfo]);

    return (
        <div className="contact-container">
            <div className="texts-container" id="contact">
                <div className="textfields">
                    <TextField
                        name="name"
                        className="textfield"
                        sx={{
                            height: "56px",
                            borderRadius: "10px",
                            border: "2px solid black",
                            marginBottom: "40px",
                        }}
                        id="outlined-basic"
                        label="Your name*"
                        variant="outlined"
                        onChange={handleFieldChange}
                        value={messageInfo.name}
                    />
                    <TextField
                        name="email"
                        className="textfield"
                        sx={{
                            height: "56px",
                            border: "2px solid black",
                            marginBottom: "40px",
                            borderRadius: "10px",
                        }}
                        id="outlined-basic"
                        label="Email*"
                        variant="outlined"
                        onChange={handleFieldChange}
                        value={messageInfo.email}
                    />
                    <TextField
                        name="website"
                        className="textfield"
                        sx={{
                            height: "56px",
                            border: "2px solid black",
                            marginBottom: "40px",
                            borderRadius: "10px",
                        }}
                        id="outlined-basic"
                        label="Website (If exists)"
                        variant="outlined"
                        onChange={handleFieldChange}
                        value={messageInfo.website}
                    />
                    <TextField
                        name="message"
                        className="textfield"
                        sx={{
                            height: "56px",
                            border: "2px solid black",
                            borderRadius: "10px",
                            marginBottom: "40px",
                        }}
                        id="outlined-basic"
                        label="How can I help?*"
                        variant="outlined"
                        onChange={handleFieldChange}
                        value={messageInfo.message}
                    />
                    <div className="contact-buttons">
                        <Button
                            style={{
                                backgroundColor: isButtonDisabled
                                    ? "gray"
                                    : "black",
                                color: "white",
                                width: "176px",
                                height: "56px",
                                borderRadius: "10px",
                            }}
                            className="Connect-Button"
                            disabled={isButtonDisabled}
                            onClick={handleGetInTouch}
                        >
                            Get In Touch
                            
                        </Button>
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
