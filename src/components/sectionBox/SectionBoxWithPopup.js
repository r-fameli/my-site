import React from 'react';
import '../../css/SectionBoxWithPopup.css';
import SampleImage from '../../assets/profile.jpg'


function SectionBoxWithPopup(props) {
    // TODO add bottom links
    return (
        <div className="SectionBoxWithPopup" style={props.boxStyle}>
            <div className="SectionBoxWithPopup-text" style={props.textBoxStyle}>
                <h1>{props.title}</h1>
                {props.description}
            </div>
            <div className="SectionBox-popup">
                <img className="SectionBoxWithPopup-image" src={SampleImage}/>
            </div> 
        </div>
    )
}

export default SectionBoxWithPopup;