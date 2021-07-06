import React from 'react';
import '../../css/CircleIcon.css';

function CircleIcon(props) {
    return (
        <span className="CircleIcon">
            <a href={props.link}>
                <img className="CircleIcon-image" src={props.image} alt={props.link}/>
                <div className="CircleIcon-circle" />
            </a>
        </span>
    )
}

export default CircleIcon;