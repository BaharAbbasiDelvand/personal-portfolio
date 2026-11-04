import React from "react";
// import "./resume.css";
import { AppFrame } from "../app-frames/App-frames";
type ResumeProps = {
    isOpen: boolean;
    onClose: () => void;
    focusToken?: number;
};

export const AWS: React.FC<ResumeProps> = ({ isOpen, onClose, focusToken }) => {
    return (
        <AppFrame
            isOpen={isOpen}
            onClose={onClose}
            focusToken={focusToken}
            title="My Resume"
            overlay
            contentClassName="resume-body"
        >
            <div className="pdf-wrap">
                <embed src="/Resume.pdf?v=20261018" type="application/pdf" />
            </div>
        </AppFrame>
    );
};

export default AWS;
