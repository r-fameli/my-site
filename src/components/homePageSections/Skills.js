import React, { Component } from 'react';
import '../../css/Skills.css'
import SectionHeading from '../heading/SectionHeading';
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


class SkillsSection extends Component {
    render() {
        return (
            <div id={"Skills"}>
                <SectionHeading text="skills" />
                <h1>I'm most comfortable with...</h1>
                <div className="Skills-icons">
                    <SkillIcon name="java" image={JavaIcon} link={"https://www.java.com/en/"}/>
                    <SkillIcon name="python" image={PythonIcon} link={"https://www.python.org/"}/>
                    <SkillIcon name="html" image={HtmlIcon} link={"https://developer.mozilla.org/en-US/docs/Web/HTML"}/>
                    <SkillIcon name="css" image={CssIcon} link={"https://developer.mozilla.org/en-US/docs/Web/CSS"}/>
                    <SkillIcon name="sqlite" image={SqliteIcon} link={"https://sqlite.org/index.html"}/>
                    <SkillIcon name="react" image={ReactIcon} link={"https://reactjs.org/"}/>
                    <SkillIcon name="git" image={GitIcon} link={"https://git-scm.com/"}/>
                    <SkillIcon name="pyret" image={PyretIcon} link={"https://www.pyret.org/"}/>
                    <SkillIcon name="google sheets" image={SheetsIcon} link={"https://www.google.com/sheets/about/"}/>
                </div>
                <h1>I've had practice with...</h1>
                <div className="Skills-icons">
                    <SkillIcon name="django" image={DjangoIcon} link={"https://www.djangoproject.com/"}/>
                    <SkillIcon name="r" image={RIcon} link={"https://www.r-project.org/"}/>
                    <SkillIcon name="figma" image={FigmaIcon} link={"https://www.figma.com/about/"}/>
                    <SkillIcon name="excel" image={ExcelIcon} link={"https://www.microsoft.com/en-us/microsoft-365/excel"}/>
                    <SkillIcon name="illustrator" image={IllustratorIcon} link={"https://www.adobe.com/products/illustrator.html"}/>
                    <SkillIcon name="indesign" image={IndesignIcon} link={"https://www.adobe.com/products/indesign.html"}/>
                    <SkillIcon name="photoshop" image={PhotoshopIcon} link={"https://www.adobe.com/products/photoshop.html"}/>
                </div>
                <h1>I've been exposed to...</h1>
                <div className="Skills-icons">
                    <SkillIcon name="c" image={CIcon} link={"https://en.wikipedia.org/wiki/C_programming_language"}/>
                    <SkillIcon name="premiere pro" image={PremiereIcon} link={"https://www.adobe.com/products/premiere.html"}/>
                </div>
            </div>
        )
    }
}
export default SkillsSection;