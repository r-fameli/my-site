import React, { Component } from 'react';
import '../../css/Experience.css';
import SectionHeading from '../heading/SectionHeading';
import SectionBoxWithImage from '../sectionBox/SectionBoxWithImage';
import ccvImage from '../../assets/ccv-black-background.png';
import ferretImage from '../../assets/ferret.png'

class ExperienceSection extends Component {
    render() {
        const cs111Description = <div><ul>
            <li>Assisted teaching staff in creating course content and presentations for an introductory 
                course of 200+ undergraduates</li>
            <li>Taught students foundational concepts of functional programming and data manipulation at
                lab sessions and teaching hours
            </li>
        </ul></div>

        const ccvDescription = <div><ul>
            <li>Serviced over 100 tickets for creating user accounts, accessing software, updating privileges, and more</li>
            <li>Worked in Linux/Unix to establish user groups and privileges for CCV’s supercomputer</li>
            <li>Updated documentation for software offered by CCV</li>
            <li>Developed an automation script for creating user accounts (see Projects)</li>
        </ul></div>

        return (
            <div id={"Experience"} className={"section"}>
                <SectionHeading text="experience"/>
                <div className={"Experience-box-container"}>
                    <SectionBoxWithImage 
                        title="cs111 Undergraduate Teaching Assistant"
                        description={cs111Description}
                        image={ferretImage}
                        link={"http://cs.brown.edu/courses/csci0111/fall2021/"}
                        alt={"cs111 icon"}
                    />
                    <SectionBoxWithImage
                        title="Center for Computation and Visualization Internship"
                        description={ccvDescription}
                        image={ccvImage}
                        link={"https://ccv.brown.edu/"}
                        alt={"Center for Computation and Visualization icon"}
                    />
                </div>
            </div>
        )
    }
}
export default ExperienceSection;