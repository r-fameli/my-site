import React, { Component } from 'react';
import '../../css/About.css'
import aerialphoto from '../../assets/aerial-transparent-small.png'
import AboutTextbox from '../textbox/AboutTextbox.js'
import SectionHeading from '../heading/SectionHeading.js'

class AboutSection extends Component {
    render() {
        return (
            <div className={"About section"}>
                <img className={"About-photo"} src={aerialphoto} />
                <SectionHeading text="about" />
                <AboutTextbox />
            </div>
        )

    }
}
export default AboutSection;