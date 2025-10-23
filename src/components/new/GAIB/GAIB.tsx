import React from "react";
import { AppFrame } from "../app-frames/App-frames";
import "./gaib.css";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";

type GaibProps = { onClose: () => void; isOpen: boolean };
export const GAIB: React.FC<GaibProps> = ({ isOpen, onClose }) => {
    return (
        <AppFrame
            isOpen={isOpen}
            onClose={onClose}
            title="GAIB"
            overlay
            contentClassName="gaib-body"
            windowClassName="gaib-window"
        >
            <div>
                <AccordionGroup color="primary" size="lg" variant="plain">
                    <Accordion variant="soft" color="primary">
                        <AccordionSummary>GAIB</AccordionSummary>
                        <AccordionDetails>Content</AccordionDetails>
                    </Accordion>
                    <Accordion variant="soft" color="primary">
                        <AccordionSummary>Poster</AccordionSummary>
                        <AccordionDetails><div className="pdf-wrap">
                <embed src="/GAIBPoster.jpg" type="image/jpg" />
            </div></AccordionDetails>
                    </Accordion>
                    <Accordion variant="soft" color="primary">
                        <AccordionSummary>Get Him at VSCode Market!</AccordionSummary>
                        <AccordionDetails>Content</AccordionDetails>
                    </Accordion>
                </AccordionGroup>
            </div>
        </AppFrame>
    );
};

export default GAIB;
