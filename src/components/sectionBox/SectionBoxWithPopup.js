import React, { useState } from 'react';
import '../../css/SectionBoxWithPopup.css';
import '../../css/SectionBox.css';

function SectionBoxWithPopup(props) {
    const videoId = "demo-video-" + props.videoId;
    const [sectionBoxClass, setSectionBoxClass] = useState("SectionBoxWithPopup");
    const [popupClass, setPopupClass] = useState("SectionBox-popup");
    const [isExpanded, setIsExpanded] = useState(false);
    const [suppressExpand, setSuppressExpand] = useState(false);

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
        if (!suppressExpand) {
            if (sectionBoxClass.indexOf(clickedClass) === -1) {
                setIsExpanded(true)
                // Update classes
                setSectionBoxClass("SectionBoxWithPopup SectionBoxWithPopup-clicked")
                setPopupClass("SectionBox-popup SectionBox-popup-clicked")
                // Play the demo video
                document.querySelector('#' + videoId).play()
            } else {
                setIsExpanded(false)
                // Update classes
                setSectionBoxClass("SectionBoxWithPopup SectionBoxWithPopup-hovered")
                setPopupClass("SectionBox-popup SectionBox-popup-hovered")
                // Pause the demo video
                document.querySelector('#' + videoId).pause()
            }
        }
    }

    return (
        <div
            className={sectionBoxClass}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <div className="SectionBoxWithPopup-text">
                <h1>{props.title}</h1>
                {props.description}
                <div 
                className="SectionBoxWithPopup-links"
                onMouseEnter={() => setSuppressExpand(true)}
                onMouseLeave={() => setSuppressExpand(false)}
                >
                    {props.repo ? 
                    <a href={props.repo} target="_blank" rel="noreferrer">
                        <button className="SectionBoxWithPopup-link-btn">repo</button>
                    </a>
                    :
                    <div></div>
                    }
                    
                </div>
            </div>
            <div className={popupClass}>
                <div className="SectionBoxWithPopup-tab">
                    {isExpanded ? 'Click to hide demo' : "Click to show demo"}
                </div>
                <div className="SectionBoxWithPopup-frame">
                    <video
                        className="SectionBoxWithPopup-video"
                        id={videoId}
                        muted
                        loop
                    >
                        <source src={props.demoVideo} />
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </div>
            </div>
        </div>
    )
}

export default SectionBoxWithPopup;