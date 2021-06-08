import React, { useState } from 'react';
import ColorfulBar from '../colorfulBar/ColorfulBar';
import AboutSection from '../homePageSections/About';
import ExperienceSection from '../homePageSections/Experience';
import ProjectsSection from '../homePageSections/Projects';
import SkillsSection from '../homePageSections/Skills';
import StartSection from '../homePageSections/Start';
import '../../css/HomePage.css'
import '../../css/ColorfulBar.css'
import EndSection from '../homePageSections/End';


function HomePage() {
  return (
    <div>
      <AboutSection />
      {/* <StartSection /> */}
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EndSection />
    </div>
  );
}

export default HomePage;
