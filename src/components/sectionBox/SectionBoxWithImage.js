import React from 'react';
import '../../css/SectionBoxWithImage.css';

function SectionBoxWithImage(props) {
    return (
        <div className="SectionBoxWithImage">
            <span className="SectionBoxWithImage-text">
                <img className="SectionBoxWithImage-image" src={props.image} />     
                <h1>{props.title}</h1>
                <hr/>
                {props.description}
            </span>
            {/* <span className="SectionBoxWithImage-image-container"> */}
            {/* </span> */}
        </div>
    )
}

export default SectionBoxWithImage;