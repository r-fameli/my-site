import React, { Component } from 'react';
import '../../css/Projects.css'
import SectionHeading from '../heading/SectionHeading';
import SectionBoxWithPopup from '../sectionBox/SectionBoxWithPopup';
import ccvImage from '../../assets/ccv-black-background.png'


class ProjectsSection extends Component {
    render() {
        const ccvAutomationDescription = <div>
            <text>
                Script created using Python and Selenium WebDriver that automatically opens a browser and adds
                users through various web interfaces.
            </text>
            <ul>
                <li>Waits for users to log in manually to services</li>
                <li>Adds users to several mailing lists in Listserv</li>
                <li>Adds users to the correct group in Grouper</li>
                <li>Inserts a message to send to user into Deskpro</li>
            </ul>
        </div>
        
        const journalTexterDescription = <div>
            <text>
            A journalling web application for Intro to Sofware Engineering that prompts user with predetermined
            questions based on what they write.
            </text>
            <ul>
                <li>Relies on word count vectorization to suggest questions</li>
                <li>Uses Java for backend data manipulation</li>
                <li>Frontend UI developed using React.js</li>
                <li>Worked in a team of 4, relying on frequent communication and Git to develop ideas and combine components</li>
                <li>Personally created the database format to use and handled all backend interactions with SQLite databases</li>
            </ul>
        </div>

        const auctionsProject = <div>
            Created a basic auctions website with user authentication using Django and SQLite for CS50 Web Programming
        </div>

        const sockyDescription = <div>
            A short 2D collecting game developed using the Pygame library for Python as a final project for CS50x.
        </div>
        let textBoxStyle = {
            backgroundColor: "#8AC6D1",
        }
        let boxStyle = {}

        return (
            <div id={"Projects"}>
                <SectionHeading text="projects" />
                <div className={"Projects-box-container"}>
                    <SectionBoxWithPopup
                        title="CCV Automation Script"
                        description={ccvAutomationDescription}
                        className="Projects-box"
                        boxStyle={boxStyle}
                        textBoxStyle={textBoxStyle}
                    />
                    <SectionBoxWithPopup
                        title="JournalTexter"
                        description={journalTexterDescription}
                        className="Projects-box"
                        boxStyle={boxStyle}
                        textBoxStyle={textBoxStyle}
                    />
                    <SectionBoxWithPopup
                        title="Socky"
                        description={sockyDescription}
                        className="Projects-box"
                        boxStyle={boxStyle}
                        textBoxStyle={textBoxStyle}
                    />
                    <SectionBoxWithPopup
                        title="Auctions Project"
                        description={auctionsProject}
                        className="Projects-box"
                        boxStyle={boxStyle}
                        textBoxStyle={textBoxStyle}
                    />
                </div>
            </div>
        )

    }
}
export default ProjectsSection;