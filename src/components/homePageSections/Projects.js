import React, { Component } from 'react';
import '../../css/Projects.css'
import SectionHeading from '../heading/SectionHeading';

class ProjectsSection extends Component {
    render() {
        return (
            <div className={"Projects section"}>
                <SectionHeading text="projects"/>
                <text>Hi, my name is Riki!</text>
            </div>
        )

    }
}
export default ProjectsSection;