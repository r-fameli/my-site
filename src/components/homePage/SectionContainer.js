import React, { Component } from 'react';
import StartSection from '../homePageSections/Start';
import AboutSection from '../homePageSections/About';
import ExperienceSection from '../homePageSections/Experience';
import ProjectsSection from '../homePageSections/Projects';
import SkillsSection from '../homePageSections/Skills';

class SectionContainer extends Component {
    render() {
        return (
            <div className={"section-container"}>
                <StartSection />
                <AboutSection />
                <ProjectsSection />
                <ExperienceSection />
                <SkillsSection />
            </div>
        )
    }
}
export default SectionContainer;