import React from 'react';
import '../../css/Experience.css';
import SectionHeading from '../heading/SectionHeading';
import SectionBoxWithImage from '../sectionBox/SectionBoxWithImage';
import ccvImage from '../../assets/ccv-black-background.png';
import ferretImage from '../../assets/ferret.png'
import microsoftImage from '../../assets/microsoft-logo.png'

const microsoftDescription = <div>
    <ul>
        <li>Incoming intern for summer 2022 working on Azure Core team</li>
    </ul>
</div>

const cs111Description = <div><ul>
    <li>Assisted staff in redesigning course website in HTML/CSS/JS/Figma to fit early 2000's theme for the spring 2022 semester 
        <ul>
            <li>Added draggable windows in Javascript and improved ease of access for student resources 
                [<a className="blue-text" href='http://cs.brown.edu/courses/csci0111/spring2022/' target="_blank" rel="noreferrer">Link</a>]
                [<a className="blue-text" href='https://github.com/rsimpsonn/spring2022' target="_blank" rel="noreferrer">Github</a>]
            </li> 
        </ul> 
        </li>
    <li>Assisted teaching staff in creating course content and presentations for an introductory 
        course of 200+ undergraduates</li>
    <li>Taught students foundational concepts of functional programming and data manipulation at
        lab sessions and teaching hours</li>
</ul></div>

const ccvDescription = <div><ul>
    <li>Serviced over 100 tickets for creating user accounts, accessing software, updating privileges, and more</li>
    <li>Worked in Linux/Unix to establish user groups and privileges for CCV's supercomputer</li>
    <li>Updated documentation for software offered by CCV</li>
    <li>Developed an automation script for creating user accounts (see Projects)</li>
</ul></div>

function ExperienceSection() {
    return (
        <div id={"Experience"} className={"section"}>
            <SectionHeading text="experience"/>
            <div className={"Experience-box-container"}>
                <SectionBoxWithImage 
                    title="Microsoft Software Engineering Intern"
                    description={microsoftDescription}
                    image={microsoftImage}
                    link={"https://www.microsoft.com/en-us"}
                    alt={"cs111 icon"}
                />
                <SectionBoxWithImage 
                    title="cs111 Undergraduate Teaching Assistant"
                    description={cs111Description}
                    image={ferretImage}
                    link={"http://cs.brown.edu/courses/csci0111/spring2022/"}
                    alt={"cs111 icon"}
                />
                <SectionBoxWithImage
                    title="Center for Computation and Visualization Intern"
                    description={ccvDescription}
                    image={ccvImage}
                    link={"https://ccv.brown.edu/"}
                    alt={"Center for Computation and Visualization icon"}
                />
            </div>
        </div>
    )
}

export default ExperienceSection;