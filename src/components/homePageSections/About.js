import React, { Component } from 'react';
import '../../css/About.css'
import ProfilePhoto from '../../assets/prof-pic.png'
import ColorfulBar from '../colorfulBar/ColorfulBar';

class AboutSection extends Component {
    render() {
        let sections = [
            { text: "about", color: "#FFB6B9", link: "#About"}, // darker pink: #FFB6B9, lighter pink: #F5C0C0
            { text: "experience", color: "#93B4CC", link: "#Experience"},
            { text: "projects", color: "#9FD8DF", link: "#Projects"},
            { text: "skills", color: "#93B4CC", link: "#Skills"},
            { text: "contact", color: "#FFB6B9", link: "#Contact"}
          ]
        return (
            <div id={"About"}>

                <div className="About-photo-container">
                    <img src={ProfilePhoto} className="About-photo"/>
                    <div className="About-text">
                        <h1>Hi, I'm Riki</h1>
                        <p>
                        I’m a junior studying Computer Science at Brown University. 
                        Most of my experience lies in web development and user service, but I am currently learning web design. 
                        Outside of class and work, I perform with the aerial arts team and am also interested in calisthenics and dance!
                        </p>
                        
                    </div>
                </div>

                <div className="About-section-bar-container">
                    <ColorfulBar sections={sections} className={"About-section-bar"}/>
                </div>
                
            </div>
        )

    }
}
export default AboutSection;