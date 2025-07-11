import React from "react";
import "./desktop.css";
import Apps from "../Apps/Apps";
// import Me from "/Banner.png"
function Desktop() {
    return (
        <div className="Desktop-container">
            <div className="wallpaper" />

            <div>
                {/* <img src="../../../photos/Sonoma.png" alt="" /> */}
                <Apps
                    iconSrc={"/Banner.png"}
                    title="Add"
                    onClick={() => console.log("Clicked Add")}
                />
            </div>
        </div>
    );
}

export default Desktop;
