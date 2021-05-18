import React, { Component } from 'react';
import '../../css/Experience.css'
import SectionHeading from '../heading/SectionHeading';
import SectionBox from '../sectionBox/SectionBox';
import ccvImage from '../../assets/ccv-black-background.png'

class ExperienceSection extends Component {
    render() {
        return (
            <div className={"Experience section"}>
                <SectionHeading text="experience"/>
                <div className={"Experience-box-container"}>
                    <SectionBox title="Full Measure" text="stuff" image={ccvImage}/>
                    <SectionBox title="CCV User Services Internship" text="work work" image={ccvImage}/>
                </div>
            </div>
        )
    }
}
export default ExperienceSection;