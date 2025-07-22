import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Apps from "../Apps/Apps";

const GRID_SIZE = 10;

const snapToGrid = (x: number, y: number) => ({
    x: Math.round(x / GRID_SIZE) * GRID_SIZE,
    y: Math.round(y / GRID_SIZE) * GRID_SIZE,
});

function DesktopContent() {
    const [appPos, setAppPos] = useState({ x: 80, y: 80 });

    const [, dropRef] = useDrop(() => ({
        accept: "APP_ICON",
        drop: (_item, monitor) => {
            const offset = monitor.getClientOffset();
            if (!offset) return;
            const snapped = snapToGrid(offset.x, offset.y);
            setAppPos(snapped);
        },
    }));

    return (
        <div className="Desktop-container" ref={dropRef}>
            <div className="wallpaper" />
            <div>
                {/* <img src="../../../photos/Sonoma.png" alt="" /> */}
                <Apps
                    id="about-me"
                    iconSrc={"/Banner.png"}
                    title="About Me"
                    onClick={() => console.log("Clicked Add")}
                    position={appPos}
                />
            </div>
        </div>
    );
}

export default DesktopContent;
