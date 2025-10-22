import React from "react";
import { AppFrame } from "../app-frames/App-frames";
import EmailIcon from "@mui/icons-material/Email";
import "./contact-me.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedinIcon, Subtitles } from "lucide-react";
import Button from "@mui/material/Button";

type ContactMeProps = { isOpen: boolean; onClose: () => void };

export const ContactMe: React.FC<ContactMeProps> = ({ isOpen, onClose }) => {
    const [value, setValue] = React.useState("linkedin");
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const handleEmailButtonClick = () => {
        window.location.href = "mailto:baharabbasidelvand@gmail.com";
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
                                label="email"
                                icon={<EmailIcon />}
                            />
                        </Tabs>
                    </Box>
                </div>
                <div className="contact-me-content">
                    {value === "github" && (
                        <Box sx={{ p: 2 }}>
                            <div className="github-content">
                                You could stay updated on the coding projects I
                                do on GitHub!{" "}
                                <Button
                                    variant="outlined"
                                    sx={{ marginTop: 5 }}
                                    href="https://github.com/BaharAbbasiDelvand"
                                >
                                    Go To My GitHub Profile
                                </Button>
                            </div>
                        </Box>
                    )}
                    {value === "linkedin" && (
                        <Box sx={{ p: 2 }}>
                            <div className="linkedin-content">
                                You can follow me and/or connect with me on
                                LinkedIn!{" "}
                                <Button
                                    variant="outlined"
                                    sx={{ marginTop: 5 }}
                                    href="https://www.linkedin.com/in/baharabbasidelvand/"
                                >
                                    Go To My LinkedIn Profile
                                </Button>
                            </div>
                        </Box>
                    )}
                    {value === "email" && (
                        <Box sx={{ p: 2 }}>
                            <div className="email-content">
                                Or you can email me! I'm looking forward to
                                connect!{" "} 
                                <Button
                                    variant="outlined"
                                    sx={{ marginTop: 5 }}
                                    onClick={handleEmailButtonClick}
                                >
                                    Email Me
                                </Button>
                            </div>
                        </Box>
                    )}
                </div>
            </div>
        </AppFrame>
    );
};

export default ContactMe;
