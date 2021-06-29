import React from 'react';
import '../../css/SectionBoxWithImage.css';

function SectionBoxWithImage(props) {
    return (
        <div className="SectionBoxWithImage" style={props.boxStyle}>
            <img className="SectionBoxWithImage-image" src={props.image} />
            {/* <span className="SectionBoxWithImage-image-container">
                <img className="SectionBoxWithImage-image" src={props.image} />
            </span> */}
            <span className="SectionBoxWithImage-text" style={props.textBoxStyle} >
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </span>
        </div>
    )
}

export default SectionBoxWithImage;