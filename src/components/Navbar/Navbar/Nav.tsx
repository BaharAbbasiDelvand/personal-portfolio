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
export default function Navbar() {
    const [value, setValue] = React.useState("recents");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const handleNavigation = (elm: string) => {
        const element = document.getElementById(elm);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="nav-container">
            <div className="nav-avatar">
                <Avatar sx={{ bgcolor: "black" }}>B</Avatar>
            </div>
            <div className="nav-buttons">
                <BottomNavigation
                    sx={{ width: 500 }}
                    value={value}
                    onChange={handleChange}
                >
                    <BottomNavigationAction
                        label="About Me"
                        value="Aboutme"
                        icon={<Face3SharpIcon />}
                    />
                    <BottomNavigationAction
                        label="Skills"
                        value="skills"
                        icon={<HardwareSharpIcon />}
                        onClick={() => handleNavigation("skills")}
                    />
                    <BottomNavigationAction
                        label="Projects"
                        value="projects"
                        icon={<LaptopMacSharpIcon />}
                    />

                    <BottomNavigationAction
                        href="#contacts"
                        label="Contact Me"
                        value="contactme"
                        icon={<ConnectWithoutContactSharpIcon />}
                    />
                </BottomNavigation>
            </div>
            <div className="nav-resume">
                <Button
                    variant="contained"
                    startIcon={<FileDownloadSharpIcon />}
                >
                    Resume
                </Button>
            </div>
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
