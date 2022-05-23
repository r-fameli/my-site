import React from 'react';
import styled from 'styled-components';

const CenteredColorBox = styled.div`
    max-height: 10vh;
    font-size: 200%;
    height: 100vh;
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    text-justify: center;

    /* media queries */
    @media only screen and (max-width: 600px) {
        max-height: 5vh;
        font-size: 75%;
    }
    @media only screen and (min-width: 600px) {
        max-height: 7.5vh;
        font-size: 125%;
    }
    @media only screen and (min-width: 768px) {
            font-size: 150%;
    }
    @media only screen and (min-width: 992px) {
        max-height: 10vh;
        font-size: 200%;
    }
    `;

function ColoredBox(props) {
    return (
        <CenteredColorBox color={props.color}>
            {props.text}
        </CenteredColorBox>
    )
}

export default ColoredBox;