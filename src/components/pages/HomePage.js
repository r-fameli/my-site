import React, { useState } from 'react';
import AboutSection from '../homePageSections/About';
import ExperienceSection from '../homePageSections/Experience';
import ProjectsSection from '../homePageSections/Projects';
import SkillsSection from '../homePageSections/Skills';
import '../../css/HomePage.css'
import EndSection from '../homePageSections/End';


function HomePage() {
  return (
    <div>
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EndSection />
    </div>
  );
}

export default HomePage;
