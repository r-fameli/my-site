import React, { Component } from 'react';
import '../../css/About.css'
import ProfilePhoto from '../../assets/prof-pic.png'
import Resume from '../../assets/Resume - Riki Fameli.pdf'

class AboutSection extends Component {
    render() {
        return (
            <div id={"About"} className={"section"}>
                <div className="About-photo-container">
                    <img src={ProfilePhoto} className="About-photo" alt={"Riki Fameli profile"}/>
                    <div className="About-info">
                        <h1>Hi! I'm Riki,</h1>
                        <p>
                        I'm a junior currently studying Computer Science at Brown University.
                        I originally came into Brown planning to pursue Public Health, but found myself excited and 
                        intrigued by Computer Science after taking Harvard's popular online course,
                        <a href='https://cs50.harvard.edu/x/2020/syllabus/' target="_blank" rel="noreferrer">  CS50</a>. Since then, I've delved into web development, information technology, and artificial 
                        intelligence. Creative freedom and personal growth are greatly important to me, and this 
                        is evident in my projects, my love for calisthenics, and my performances on aerial hoop with
                        Brown Aerial Acrobatics. Feel free to look around at my projects and work experience down
                        below on desktop or on mobile!
                        </p>
                        <div id="About-buttons">
                            <a href={Resume} target="_blank" rel="noreferrer">resume</a>
                            <a href='https://github.com/r-fameli' target="_blank" rel="noreferrer">github</a>
                            <a href='https://www.linkedin.com/in/riki-fameli/' target="_blank" rel="noreferrer">linkedin</a>
                            <a href='mailto:rikifameli@gmail.com' target="_blank" rel="noreferrer">email</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        )

    }
}
export default AboutSection;