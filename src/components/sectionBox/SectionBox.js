import React from 'react';
import '../../css/SectionBox.css';

function SectionBox(props) {
    // TODO add bottom links
    return (
        <div className="SectionBox" style={props.boxStyle}>
            <span className="SectionBox-image-container">
                <img className="SectionBox-image" src={props.image} />
            </span>
            <span className="SectionBox-text" style={props.textBoxStyle} >
                <h1>{props.title}</h1>
                {props.description}
            </span>
        </div>
    )
}

export default SectionBox;