import React from 'react'
import { AppFrame} from '../app-frames/App-frames';
type AWSProps = { isOpen: boolean; onClose: () => void };

// import "./aws.css";
export const AWS: React.FC<AWSProps> = ({ isOpen, onClose }) => {
    return (
        <AppFrame
            isOpen={isOpen}
            onClose={onClose}
            title="My Portfolio"
            overlay={true}

        >
            <div className="aboutme-main">
                <h1>AWS Certification</h1>
                <p>
                I have earned the AWS Certified Solutions Architect – Associate certification, which validates my expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS. This certification demonstrates my ability to effectively utilize AWS services to meet business requirements and optimize cloud solutions.
                </p>
            </div>
        </AppFrame>
)
}

export default AWS
