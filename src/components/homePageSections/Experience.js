import React, { Component } from 'react';
import '../../css/Experience.css'
import SectionHeading from '../heading/SectionHeading';
import SectionBoxWithImage from '../sectionBox/SectionBoxWithImage';
import ccvImage from '../../assets/ccv-black-background.png'

class ExperienceSection extends Component {
    render() {
        const ccvDescription = <div><ul>
            <li>Serviced over 100 tickets for creating user accounts, accessing software, updating privileges, and more</li>
            <li>Worked in Linux/Unix to establish user groups and privileges for CCV’s supercomputer</li>
            <li>Updated documentation for software offered by CCV</li>
            <li>Developed an automation script for creating user accounts (see Projects)</li>
        </ul></div>
        let textBoxStyle = {
            backgroundColor: "#E2B5BC",
        }
        let boxStyle = { }
        return (
            <div className={"Experience section"}>
                <SectionHeading text="experience" />
                <div className={"Experience-box-container"}>
                    <SectionBoxWithImage
                        title="Full Measure Grad Support Worker"
                        description={ccvDescription}
                        image={ccvImage}
                        className="Experience-box"
                        boxStyle={boxStyle}
                        textBoxStyle={textBoxStyle}
                    />
                    <SectionBoxWithImage
                        title="CCV User Services Internship"
                        description={ccvDescription}
                        image={ccvImage}
                        boxStyle={boxStyle}
                        textBoxStyle={textBoxStyle}
                    />
                </div>
            </div>
        )
    }
}
export default ExperienceSection;