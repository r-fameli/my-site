import React, { useState } from 'react';
import AboutSection from '../homePageSections/About';
import ExperienceSection from '../homePageSections/Experience';
import ProjectsSection from '../homePageSections/Projects';
import SkillsSection from '../homePageSections/Skills';
import StartSection from '../homePageSections/Start';
import '../../css/HomePage.css'

function HomePage() {
  return (
    <div>
        <StartSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
    </div>
  );
}

export default HomePage;
