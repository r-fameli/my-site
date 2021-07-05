import React, { Component } from 'react';
import '../../css/Projects.css'
import SectionHeading from '../heading/SectionHeading';
import SectionBoxWithPopup from '../sectionBox/SectionBoxWithPopup';
import SockyDemo from '../../assets/videos/socky-demo.mp4';
import CCVDemo from '../../assets/videos/ccv-script-demo.mp4';
import JournalTexterDemo from '../../assets/videos/journaltexter-demo.mp4';


class ProjectsSection extends Component {
    render() {
        const ccvAutomationDescription = <div>
            <p>
                Script created using Python and Selenium WebDriver that automatically opens a browser and adds
                users through various web interfaces.
            </p>
            <ul>
                <li>Waits for users to log in manually to services</li>
                <li>Adds users to several mailing lists in Listserv</li>
                <li>Adds users to the correct group in Grouper</li>
                <li>Inserts a message to send to user into Deskpro</li>
            </ul>
        </div>
        
        const journalTexterDescription = <div>
            <p>
            A journalling web application for Intro to Sofware Engineering that prompts user with predetermined
            questions based on what they write.
            </p>
            <ul>
                <li>Relies on word count vectorization to suggest questions</li>
                <li>Uses Java for backend data manipulation</li>
                <li>Frontend UI developed using React.js</li>
                <li>Worked in a team of 4, relying on frequent communication and Git to develop ideas and combine components</li>
                <li>Personally created the database format to use and handled all backend interactions with SQLite databases</li>
            </ul>
        </div>

        const sockyDescription = <div>
            A short 2D collecting game developed using the Pygame library for Python as a final project for CS50x.
        </div>
        
        let textBoxStyle = {
            backgroundColor: "#8AC6D1",
        }

        return (
            <div id={"Projects"} className={"section"}>
                <SectionHeading text="projects" />
                <h3 id={"Projects-subtitle"}>Click on project boxes to display demo</h3>
                <div className={"Projects-box-container"}>
                    <SectionBoxWithPopup
                        title="CCV Automation Script"
                        description={ccvAutomationDescription}
                        className="Projects-box"
                        textBoxStyle={textBoxStyle}
                        demoVideo={CCVDemo}
                        videoId="1"
                        repo={"https://github.com/r-fameli/ccv_automation"}
                    />
                    <SectionBoxWithPopup
                        title="JournalTexter"
                        description={journalTexterDescription}
                        className="Projects-box"
                        textBoxStyle={textBoxStyle}
                        demoVideo={JournalTexterDemo}
                        videoId="2"
                        repo={"https://github.com/r-fameli/journaltexter"}
                    />
                    <SectionBoxWithPopup
                        title="Socky"
                        description={sockyDescription}
                        className="Projects-box"
                        textBoxStyle={textBoxStyle}
                        demoVideo={SockyDemo}
                        videoId="3"
                        repo={"https://github.com/r-fameli/Socky"}
                    />
                </div>
            </div>
        )

    }
}
export default ProjectsSection;