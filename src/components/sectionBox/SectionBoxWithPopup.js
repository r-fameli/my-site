import React, { useState } from 'react';
import '../../css/SectionBoxWithPopup.css';
import SampleImage from '../../assets/profile.jpg'


function SectionBoxWithPopup(props) {
    // TODO add bottom links
    const [sectionBoxClass, setSectionBoxClass] = useState("SectionBoxWithPopup");
    const [popupClass, setPopupClass] = useState("SectionBox-popup");
    const [isExpanded, setIsExpanded] = useState(false);

    function handleMouseEnter() {
        if (!isExpanded) {
            setSectionBoxClass("SectionBoxWithPopup SectionBoxWithPopup-hovered")
            setPopupClass("SectionBox-popup SectionBox-popup-hovered")
        }
    }

    function handleMouseLeave() {
        if (!isExpanded) {
            setSectionBoxClass("SectionBoxWithPopup")
            setPopupClass("SectionBox-popup")
        }
    }

    function handleClick() {
        const clickedClass = "SectionBoxWithPopup-clicked"
        if (sectionBoxClass.indexOf(clickedClass) === -1) {
            setIsExpanded(true)
            setSectionBoxClass("SectionBoxWithPopup SectionBoxWithPopup-clicked")
            setPopupClass("SectionBox-popup SectionBox-popup-clicked")
        } else {
            setIsExpanded(false)
            setSectionBoxClass("SectionBoxWithPopup SectionBoxWithPopup-hovered")
            setPopupClass("SectionBox-popup SectionBox-popup-hovered")
        }

    }

    return (
        <div
            className={sectionBoxClass}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <div className="SectionBoxWithPopup-text" style={props.textBoxStyle}>
                <h1>{props.title}</h1>
                {props.description}
            </div>
            <div className={popupClass}>
                <div className="SectionBoxWithPopup-tab">
                    {isExpanded ? 'Click to hide demo' : "Click to show demo"}
                    </div>
                <div className="SectionBoxWithPopup-frame">
                    <img className="SectionBoxWithPopup-image" src={SampleImage} />
                </div>
            </div>
        </div>
    )
}

export default SectionBoxWithPopup;