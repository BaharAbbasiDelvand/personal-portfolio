import React from "react";
import { AppFrame } from "../app-frames/App-frames";
import "./aboutmeapp.css";

type AboutMeAppProps = { isOpen: boolean; onClose: () => void };

export const AboutMeApp: React.FC<AboutMeAppProps> = ({ isOpen, onClose }) => {
  return (
    <AppFrame
      isOpen={isOpen}
      onClose={onClose}
      title="My Portfolio"
      overlay={true}
      windowClassName="aboutme-window"
      contentClassName="aboutme-body"
    >
      <div className="aboutme-main">
        <p className="aboutme-hello">Hello there! I&apos;m</p>
        <h1 className="aboutme-name">Bahar Abbasi Delvand</h1>
        <p className="aboutme-paragraph">
          I&apos;m a Computer Science graduate from McMaster University with a minor in Art History. My work blends
          technical problem-solving with clear, intentional design. Whether I&apos;m building full-stack web apps,
          integrating AI into development workflows, or analyzing 19th-century artists through geospatial data, I focus
          on creating systems that are intuitive, efficient, and thoughtful.
        </p>
        <p className="aboutme-paragraph">
          I&apos;m currently working as a full-stack developer at MBA4HIRE, where I&apos;ve helped build scalable tools
          for real-time financial operations and automated schema generation using GPT-powered features. I also assist
          in an art history research project using ArcGIS and SQL to study how geography shaped artistic networks in
          19th-century France.
        </p>
        <p className="aboutme-paragraph">
          This portfolio is a space for the things I&apos;ve built, explored, and continue to learn. Thanks for stopping by.
        </p>
      </div>

      <div className="aboutme-side">
        <div className="aboutme-photo">
          <div className="aboutme-photo-inner">Add Photo</div>
        </div>
      </div>
    </AppFrame>
  );
};
