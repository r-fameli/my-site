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
  let topSections = [
    { text: "about", color: "#F5C0C0" },
    { text: "experience", color: "#93B4CC" },
    { text: "projects", color: "#9FD8DF" },
    { text: "skills", color: "#93B4CC" },
    { text: "other", color: "#F5C0C0" }
  ]
  let bottomSections = [
    { text: "", color: "#F5C0C0" },
    { text: "", color: "#93B4CC" },
    { text: "", color: "#9FD8DF" },
    { text: "", color: "#93B4CC" },
    { text: "", color: "#F5C0C0" },
  ]
  return (
    <div>
      <ColorfulBar sections={topSections} className={"header-bar"} id={"Start-top-bar"} />
      <StartSection />
      <ColorfulBar sections={bottomSections} id={"footer-bar"} className={"Start-bar"} />
      {/* <AboutSection /> */}
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EndSection />
    </div>
  );
}

export default HomePage;
