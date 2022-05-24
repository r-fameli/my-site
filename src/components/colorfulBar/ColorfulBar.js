import React, { useState } from 'react';
import styled from 'styled-components/macro';
import ColoredBox from '../coloredBox/ColoredBox';

const ColorfulBarWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin-top:0;
    padding-top:0;
    overflow: hidden;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 30;
    opacity: ${props => props.opacity};
`

const BoxLink = styled.div`
    color:inherit;
    text-decoration: initial;
`

function ColorfulBar(props) {
    const [scrollPercent, setScrollPercent] = useState(0); 
    const [opacityLevel, setOpacityLevel] = useState(1)

    window.onscroll = function() {
        setScrollPercent((window.innerHeight + window.pageYOffset) / document.body.offsetHeight);
        const scrollThreshold = 0.8;
        if (scrollPercent >= scrollThreshold) {
            let scrollPercentLeft = scrollPercent - scrollThreshold;
            let normalizedScrollPercent = (scrollPercentLeft / (1 - scrollThreshold));
            setOpacityLevel(1 - normalizedScrollPercent);
        } else {
            setOpacityLevel(1);
        }
    }

    return (
        <ColorfulBarWrapper opacity={opacityLevel}>
            {props.sections.map(section => 
            <BoxLink href={section.link} key={section.text}>
                <ColoredBox text={section.text} color={section.color} />
            </BoxLink>
            )}
        </ColorfulBarWrapper>
    )
}


export default ColorfulBar;