import React, { useState } from 'react';
import AboutSection from '../homePageSections/About';
import ExperienceSection from '../homePageSections/Experience';
import ProjectsSection from '../homePageSections/Projects';
import SkillsSection from '../homePageSections/Skills';
import SectionContainer from '../homePage/SectionContainer';

function HomePage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <SectionContainer/>
    </div>
  );
}

export default HomePage;
