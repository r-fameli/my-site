import React, { Component } from 'react';
import '../../css/Skills.css'
import SectionHeading from '../heading/SectionHeading';
import SearchBar from '../searchBar/SearchBar';
import '../../css/Skills2.css';
import SkillIcon from '../skillIcon/SkillIcon'

import JavaIcon from '../../assets/icons/java-icon.png'
import PythonIcon from '../../assets/icons/python-icon.png'
import PyretIcon from '../../assets/icons/pyret-icon.png'
import HtmlIcon from '../../assets/icons/html-icon.svg'
import CssIcon from '../../assets/icons/css-icon.svg'
import SqliteIcon from '../../assets/icons/sqlite-icon-edited.svg'
import ReactIcon from '../../assets/icons/react-icon-edited.svg'
import SheetsIcon from '../../assets/icons/sheets-icon.svg'
import GitIcon from '../../assets/icons/git-icon.png'

import DjangoIcon from '../../assets/icons/django-icon.svg'
import RIcon from '../../assets/icons/r-icon.svg'
import FigmaIcon from '../../assets/icons/figma-icon.svg'
import IllustratorIcon from '../../assets/icons/illustrator-icon.png'
import IndesignIcon from '../../assets/icons/indesign-icon.png'
import PhotoshopIcon from '../../assets/icons/photoshop-icon.png'
import ExcelIcon from '../../assets/icons/excel-icon.svg'

import CIcon from '../../assets/icons/c-icon.svg'
import PremiereIcon from '../../assets/icons/premiere-pro-icon.png'


class Skills2Section extends Component {
    render() {
        return (
            <div id={"Skills"}>
                <SectionHeading text="skills" />
                <h1>I'm most comfortable with...</h1>
                <div className="Skills-icons">
                    <SkillIcon name="java" image={JavaIcon} />
                    <SkillIcon name="python" image={PythonIcon}/>
                    <SkillIcon name="html" image={HtmlIcon}/>
                    <SkillIcon name="css" image={CssIcon}/>
                    <SkillIcon name="sqlite" image={SqliteIcon}/>
                    <SkillIcon name="react" image={ReactIcon}/>
                    <SkillIcon name="google sheets" image={SheetsIcon}/>
                    <SkillIcon name="git" image={GitIcon}/>
                    <SkillIcon name="pyret" image={PyretIcon}/>
                </div>
                <h1>I've had practice with...</h1>
                <div className="Skills-icons">
                    <SkillIcon name="django" image={DjangoIcon}/>
                    <SkillIcon name="r" image={RIcon}/>
                    <SkillIcon name="figma" image={FigmaIcon}/>
                    <SkillIcon name="excel" image={ExcelIcon}/>
                    <SkillIcon name="illustrator" image={IllustratorIcon}/>
                    <SkillIcon name="indesign" image={IndesignIcon}/>
                    <SkillIcon name="photoshop" image={PhotoshopIcon}/>
                </div>
                <h1>I've been exposed to...</h1>
                <div className="Skills-icons">
                    <SkillIcon name="c" image={CIcon}/>
                    <SkillIcon name="premiere pro" image={PremiereIcon}/>
                </div>
            </div>
        )
    }
}
export default Skills2Section;