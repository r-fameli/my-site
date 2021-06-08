import React, { Component } from 'react';
import '../../css/Skills.css'
import SectionHeading from '../heading/SectionHeading';
import SearchableSkillsGrid from '../searchableSkillsGrid/SearchableSkillsGrid';
import SearchBar from '../searchBar/SearchBar';
import SkillBar from '../skillBar/SkillBar';

class SkillsSection extends Component {

    render() {
        return (
            <div id={"Skills"}>
                <SectionHeading text="skills" />
                <SearchableSkillsGrid />
                {/* <SearchBar /> */}
            </div>
        )
    }
}
export default SkillsSection;