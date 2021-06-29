import React, { Component } from 'react';
import '../../css/Experience.css';
import SectionHeading from '../heading/SectionHeading';
import SectionBoxWithImage from '../sectionBox/SectionBoxWithImage';
import ccvImage from '../../assets/ccv-black-background.png';
import TanCircleScatter from '../../assets/tan-circle-scatter.svg';

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
            <div id={"Experience"} className={"section"}>
                {/* <div className="Experience-background-pattern-container">
                    <img className="Experience-background-pattern" src={TanCircleScatter}/>
                </div> */}
                <SectionHeading text="experience" />
                
                <div className={"Experience-box-container"}>
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