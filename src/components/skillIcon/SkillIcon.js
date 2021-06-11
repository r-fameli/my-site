import React from 'react';
import '../../css/SkillIcon.css';

function CircleIcon(props) {
    return (
        <span className="SkillIcon">
            <a href={props.link}>
                <div className="SkillIcon-image-container">
                    <img className="SkillIcon-image" src={props.image} />
                </div>
                <p className="SkillIcon-name">{props.name}</p>
                
            </a>
        </span>
    )
}

export default CircleIcon;