import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ConnectWithoutContactSharpIcon from "@mui/icons-material/ConnectWithoutContactSharp";
import HardwareSharpIcon from "@mui/icons-material/HardwareSharp";
import LaptopMacSharpIcon from "@mui/icons-material/LaptopMacSharp";
import Face3SharpIcon from "@mui/icons-material/Face3Sharp";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import FileDownloadSharpIcon from "@mui/icons-material/FileDownloadSharp";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import "./nav.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";
type Anchor = "right";

export default function Navbar() {
    const [value, setValue] = React.useState("recents");
    const [state, setState] = React.useState({
        right: false,
    });
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };

    const smallScreen = useMediaQuery("(max-width:1100px)");

    const handleNavigation = (elm: string) => {
        const element = document.getElementById(elm);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    const list = (anchor: Anchor) => (
        <Box
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {["About Me", "My Skills", "My Projects", "Contacts"].map(
                    (text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 4 === 0 ? (
                                        <Face3SharpIcon onClick={() =>
                                            handleNavigation("about")
                                        }/>
                                    ) : index % 4 === 1 ? (
                                        <HardwareSharpIcon onClick={() =>
                                            handleNavigation("skills")
                                        }/>
                                    ) : index % 4 === 2 ? (
                                        <LaptopMacSharpIcon onClick={() =>
                                            handleNavigation("projects")
                                        } />
                                    ) : (
                                        <ConnectWithoutContactSharpIcon
                                            onClick={() =>
                                                handleNavigation("contact")
                                            }
                                        />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    )
                )}
            </List>
            <Divider />
            <List>
                {["Resume"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? (
                                    <Face3SharpIcon />
                                ) : (
                                    <HardwareSharpIcon />
                                )}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div className="nav-container">
            {smallScreen ? (
                <>
                    <div className="nav-avatar">
                        <Avatar sx={{ bgcolor: "black" }}>B</Avatar>
                    </div>
                    {(["right"] as const).map((anchor) => (
                        <React.Fragment key={anchor}>
                            <IconButton
                                className="nav-toggle-icon"
                                sx={{ position: "absolute" }}
                                onClick={toggleDrawer(anchor, true)}
                            >
                                <MenuIcon sx={{ color: "black" }} />
                            </IconButton>
                            <SwipeableDrawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                onOpen={toggleDrawer(anchor, true)}
                            >
                                {list(anchor)}
                            </SwipeableDrawer>
                        </React.Fragment>
                    ))}
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
