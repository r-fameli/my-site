import React from 'react';
import '../../css/SkillIcon.css';

function CircleIcon(props) {
    return (
        <span className="SkillIcon">
            <a href={props.link} target="_blank" rel="noreferrer">
                <div className="SkillIcon-image-container">
                    <img className="SkillIcon-image" src={props.image} alt={props.name}/>
                </div>
                <p className="SkillIcon-name">{props.name}</p>
            </a>
        </span>
    )
}

export default CircleIcon;