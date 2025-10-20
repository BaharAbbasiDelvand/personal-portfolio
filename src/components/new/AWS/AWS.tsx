import React from "react";
import "./aws.css";
import { AppFrame } from "../app-frames/App-frames";
type AWSProps = { isOpen: boolean; onClose: () => void };

export const AWS: React.FC<AWSProps> = ({ isOpen, onClose }) => {
    return (
        <AppFrame
            isOpen={isOpen}
            onClose={onClose}
            title="My AWS Certification"
            overlay
            contentClassName="aws-body"
        >
            <div className="pdf-wrap">
                <embed src="/AWSCertification.pdf" type="application/pdf" />
            </div>
        </AppFrame>
    );
};

export default AWS;
