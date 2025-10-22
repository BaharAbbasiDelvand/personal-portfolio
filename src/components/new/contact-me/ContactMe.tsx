import React from "react";
import { AppFrame } from "../app-frames/App-frames";
import EmailIcon from "@mui/icons-material/Email";
import "./contact-me.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedinIcon } from "lucide-react";

type ContactMeProps = { isOpen: boolean; onClose: () => void };



export const ContactMe: React.FC<ContactMeProps> = ({ isOpen, onClose }) => {
    const [value, setValue] = React.useState("linkedin");
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <AppFrame
            isOpen={isOpen}
            onClose={onClose}
            title="My Resume"
            overlay
            windowClassName="contact-me-window"
            contentClassName="contact-me-body"
        >
            <div className="contact-me-wrap">
                <div className="contact-me-tabs">
                    <Box sx={{ width: "100%" }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                        >
                            <Tab
                                value="linkedin"
                                label="LinkedIn"
                                icon={<LinkedinIcon />}
                            />
                            <Tab
                                value="github"
                                label="GitHub"
                                icon={<GitHubIcon />}
                            />
                            <Tab
                                value="email"
                                label="Email"
                                icon={<EmailIcon />}
                            />
                        </Tabs>
                    </Box>
                </div>
                <div className="contact-me-content">
                {value === 'github'   && <Box sx={{p:2}}>GitHub content</Box>}
{value === 'linkedin' && <Box sx={{p:2}}>LinkedIn content</Box>}
{value === 'email'    && <Box sx={{p:2}}>Email content</Box>}

                </div>
            </div>
        </AppFrame>
    );
};

export default ContactMe;
