import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
interface ProjectProps {
    number: number;
    title: string;
    description: string;
    photo: string;
    link: string;
}

const ProjectSpace: React.FC<ProjectProps> = ({ number, title, description, photo, link }) => {
    return (
        <div className="project">
            <div className="photo-proj">
                <img src={photo} alt={title} />
            </div>
            <div className="text-proj">
                <h2 className="num-text">{number < 10 ? `0${number}` : number}</h2>
                <h3>{title}</h3>
                <p className="subtext">{description}</p>
                <a href={link} className='link' target="_blank" rel="noopener noreferrer">
                    <OpenInNewIcon />
                </a>
            </div>
        </div>
    );
}

export default ProjectSpace;
