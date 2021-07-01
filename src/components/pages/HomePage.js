import React, { useState } from 'react';
import AboutSection from '../homePageSections/About';
import ExperienceSection from '../homePageSections/Experience';
import ProjectsSection from '../homePageSections/Projects';
import SkillsSection from '../homePageSections/Skills';
import '../../css/HomePage.css'
import EndSection from '../homePageSections/End';
import ColorfulBar from '../colorfulBar/ColorfulBar';


function HomePage() {
  let sections = [
    { text: "about", color: "#FFB6B9", link: "#About-anchor"}, // darker pink: #FFB6B9, lighter pink: #F5C0C0
    { text: "experience", color: "#93B4CC", link: "#Experience"},
    { text: "projects", color: "#9FD8DF", link: "#Projects"},
    { text: "skills", color: "#93B4CC", link: "#Skills"},
    { text: "contact", color: "#FFB6B9", link: "#Contact"}
  ]
  return (
    <div>
      <div id="About-anchor"/>
      <ColorfulBar sections={sections}/>
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EndSection />
    </div>
  );
}

export default HomePage;
