import React, { Component } from 'react';
import '../../css/Skills.css'
import SectionHeading from '../heading/SectionHeading';

class SkillsSection extends Component {
    render() {
        return (
            <div className={"Skills section"}>
                <SectionHeading text="skills" />
                <text>Hi, my name is Riki!</text>
            </div>
        )

    }
}
export default SkillsSection;