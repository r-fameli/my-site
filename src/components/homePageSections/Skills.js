import React, { Component } from 'react';
import '../../css/Skills.css'
import SectionHeading from '../heading/SectionHeading';
import SearchableSkillsGrid from '../searchableSkillsGrid/SearchableSkillsGrid';
import SearchBar from '../searchBar/SearchBar';
import SkillBar from '../skillBar/SkillBar';

class SkillsSection extends Component {

    // TODO add tags
    render() {
        return (
            <div className={"Skills section"}>
                <SectionHeading text="skills" />
                <SearchableSkillsGrid />
                {/* <SearchBar /> */}
            </div>
        )
    }
}
export default SkillsSection;