import React from 'react';
import '../../css/SectionBox.css';

function SectionBox(props) {

    return (
        <div className="SectionBox">
            <span className="SectionBox-image-container">
                <img className="SectionBox-image" src={props.image} />
            </span>
            <span className="SectionBox-text">
                {/* <h3 className="SectionBox-title">{props.title}</h3> */}
                {props.title}<br />
                {props.text}
            </span>
        </div>
    )
}

export default SectionBox;