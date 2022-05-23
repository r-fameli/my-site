import React from 'react';
import '../../css/SectionBoxWithImage.css';
import '../../css/SectionBox.css';

function SectionBoxWithImage(props) {
    return (
        <div className="SectionBoxWithImage SectionBox">
            <span className="SectionBoxWithImage-text">
                <a href={props.link} target="_blank" rel="noreferrer">
                    <img className="SectionBoxWithImage-image" src={props.image} alt={props.alt}/>     
                </a>
                <h1>{props.title}</h1>
                <hr/>
                {props.description}
            </span>
        </div>
    )
}

export default SectionBoxWithImage;