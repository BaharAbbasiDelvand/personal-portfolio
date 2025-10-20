import React from "react";
// import "./resume.css";
import { AppFrame } from "../app-frames/App-frames";
type ResumeProps = { isOpen: boolean; onClose: () => void };

export const AWS: React.FC<ResumeProps> = ({ isOpen, onClose }) => {
    return (
        <AppFrame
            isOpen={isOpen}
            onClose={onClose}
            title="My Resume"
            overlay
            contentClassName="resume-body"
        >
            <div className="pdf-wrap">
                <embed src="/Resume.pdf" type="application/pdf" />
            </div>
        </AppFrame>
    );
};

export default AWS;
