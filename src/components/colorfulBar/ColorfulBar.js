import React, { useState } from 'react';
import ColoredBox from './ColoredBox';
import '../../css/ColorfulBar.css'

function ColorfulBar(props) {
    const [scrollPercent, setScrollPercent] = useState(0); 
    const [opacityLevel, setOpacityLevel] = useState(1)

    window.onscroll = function() {
        setScrollPercent((window.innerHeight + window.pageYOffset) / document.body.offsetHeight)
        const scrollThreshold = 0.8
        if (scrollPercent >= scrollThreshold) {
            let scrollPercentLeft = scrollPercent - scrollThreshold
            let normalizedScrollPercent = (scrollPercentLeft / (1 - scrollThreshold))
            setOpacityLevel(1 - normalizedScrollPercent)
        } else {
            setOpacityLevel(1)
        }
    }
    const styleObj = {
        opacity: opacityLevel,
    }
    return (
        <div className="ColorfulBar" style={styleObj}>
            {props.sections.map(section => 
            <a href={section.link} key={section.text}>
                <ColoredBox text={section.text} color={section.color} />  
            </a>
            )}
        </div>
    )
}


export default ColorfulBar;