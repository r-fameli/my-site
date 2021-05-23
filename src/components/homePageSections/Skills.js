import React, { Component } from 'react';
import '../../css/Skills.css'
import SectionHeading from '../heading/SectionHeading';
import SearchBar from '../searchBar/SearchBar';
import SkillBar from '../skillBar/SkillBar';

class SkillsSection extends Component {
    // TODO add tags
    render() {
        const skillProficiencies = [
            {name: "java", level: "80%"},
            {name: "python", level: "60%"},
            {name: "javascript", level: "40%"},
            {name: "pyret", level: "80%"},
            {name: "r", level: "40%"},
            {name: "c", level: "20%"},
            {name: "html+css", level: "60%"},
            {name: "sql", level: "60%"},
            {name: "django", level: "60%"},
            {name: "react", level: "60%"},
            {name: "figma", level: "40%"},
            {name: "illustrator", level: "60%"},
            {name: "indesign", level: "60%"},
            {name: "photoshop", level: "40%"},
            {name: "premiere pro", level: "20%"},
            {name: "excel/sheets", level: "60%"},
            {name: "google suite", level: "80%"},
            {name: "microsoft suite", level: "80%"},
        ]
        return (
            <div className={"Skills section"}>
                <SectionHeading text="skills" />
                <SearchBar />
                <div className="Skills-bars-grid">
                    {skillProficiencies.map(proficiency =>
                        <SkillBar name={proficiency.name} level={proficiency.level}/>
                        )}
                </div>
                <text>Hi, my name is Riki!</text>
            </div>
        )

    }
}
export default SkillsSection;