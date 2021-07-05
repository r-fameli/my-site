import React from 'react';
import '../../css/SectionHeading.css'

function SectionHeading(props) {
    return (
        <h1 className="SectionHeading">
            {props.text}
        </h1>
    )
}

export default SectionHeading;