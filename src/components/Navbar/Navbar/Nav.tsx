import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ConnectWithoutContactSharpIcon from "@mui/icons-material/ConnectWithoutContactSharp";
import HardwareSharpIcon from "@mui/icons-material/HardwareSharp";
import LaptopMacSharpIcon from "@mui/icons-material/LaptopMacSharp";
import Face3SharpIcon from "@mui/icons-material/Face3Sharp";
import FileDownloadSharpIcon from "@mui/icons-material/FileDownloadSharp";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import "./nav.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

export default function Navbar() {
    const [value, setValue] = React.useState("recents");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const smallScreen = useMediaQuery("(max-width:1100px)");

    const handleNavigation = (elm: string) => {
        const element = document.getElementById(elm);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="nav-container">
            {smallScreen ? (
                <>
                    <div className="nav-avatar">
                        <Avatar sx={{ bgcolor: "black" }}>B</Avatar>
                    </div>
                    <IconButton className="nav-toggle-icon" sx={{position: 'absolute'}}>
                        <MenuIcon sx={{ color: "black" }} />
                    </IconButton>
                </>
            ) : (
                <>
                    <div className="nav-avatar">
                        <Avatar sx={{ bgcolor: "black" }}>B</Avatar>
                    </div>
                    <div className="nav-buttons">
                        <BottomNavigation
                            sx={{ color: "black" }}
                            value={value}
                            onChange={handleChange}
                        >
                            <BottomNavigationAction
                                sx={{
                                    color: "black",
                                    "&:selected": { backgroundColor: "#333" },
                                }}
                                label="About Me"
                                value="Aboutme"
                                icon={<Face3SharpIcon />}
                            />
                            <BottomNavigationAction
                                sx={{ color: "black" }}
                                label="Skills"
                                value="skills"
                                icon={<HardwareSharpIcon />}
                                onClick={() => handleNavigation("skills")}
                            />
                            <BottomNavigationAction
                                sx={{ color: "black" }}
                                label="Projects"
                                value="projects"
                                icon={<LaptopMacSharpIcon />}
                                onClick={() => handleNavigation("projects")}
                            />

                            <BottomNavigationAction
                                sx={{ color: "black" }}
                                label="Contact Me"
                                value="contactme"
                                icon={<ConnectWithoutContactSharpIcon />}
                                onClick={() => handleNavigation("contact")}
                            />
                        </BottomNavigation>
                    </div>
                    <div className="nav-resume">
                        <Button
                            variant="contained"
                            startIcon={<FileDownloadSharpIcon />}
                            sx={{
                                backgroundColor: "black",
                                "&:hover": {
                                    backgroundColor: "#333",
                                },
                            }}
                        >
                            Resume
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
}

// const Menu = ({callBack}) => {

//     const list = [['About', AboutPic,<AboutMe/>], ['Skills', SkillPic, <Skillslol/>], ['Projects', ProjPic, <Proj/>], ['Contact', ContactPic,<Contacts/>]]

//     const clickHandler = (text) => {
//         callBack(text);
//     }

//     return (
//         <div className="menu-icons-container">
//             {
//                 list.map((item) => {
//                     return(
//                         <div className="menu-icon" onClick={() => clickHandler(item[2])}>
//                             <Skills image={item[1]}/>
//                             <h4>{item[0]}</h4>

//                         </div>
//                     )
//                 })
//             }

//         </div>
//     )
// }

// export default Menu;
