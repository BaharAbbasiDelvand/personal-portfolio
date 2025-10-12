import React from "react";
import "./desktop.css";
import Apps from "../Apps/Apps";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrop } from "react-dnd";
import DesktopContent from "./DesktopContent";

// import Me from "/Banner.png"

function Desktop() {
    return (
     /* <img src="../../../photos/Sonoma.png" alt="" /> */

        <DndProvider backend={HTML5Backend}>
            <DesktopContent/>
        </DndProvider>
    );
}

export default Desktop;

