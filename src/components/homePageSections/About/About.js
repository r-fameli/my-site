import React, { Component } from 'react';
import styled, { css } from 'styled-components/macro';
// import '../../css/About.css'
import ProfilePhoto from '../../../assets/prof-pic.png'
import Resume from '../../../assets/Resume - Riki Fameli.pdf'


const aboutHeadingSize = '150%';
const aboutLargeFontSize = '110%';
const aboutLargePhotoHeight = '40vh'; 
const aboutSmallFontSize = '100%';
const aboutMiddleMargin = '0px';


const AboutWrapper = styled.div`
    /* section class styling */
    min-height: 50vh;
    padding-top: 40px;

    /* other */
    background-color: #f5c0c0; /* #F5C0C0 #FFB6B9 #FFD1DC #F4C2C2*/
    min-height: 100vh;
    display: flex;
    justify-content: center;
    margin-top: -10vh;
    padding-top: 0px;
    @media only screen and (max-width: 600px) {
        #About {
            margin-top: 0px;
        }
    }
`

const AboutPhotoContainer = styled.div`
    margin-top: auto;
    margin-bottom:auto;
    margin-right: 50px;
    margin-left: 50px;
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const AboutPhoto = styled.img`
    margin-top: auto;
    margin-bottom:auto;
    height:40vh;
    border-radius: 50%;
    transition: box-shadow 0.5s;
    margin-right: ${aboutMiddleMargin};
    &:hover {
        box-shadow: rgba(255, 255, 235, 0.685) 0px 0px 40px 20px;
    }
    @media only screen and (max-width: 600px) {
        .About-photo {
            height:25vh;
        }
    }
    @media only screen and (min-width: 1200px) {
        .About-photo {
            height:40vh;
        }
    }
`

const AboutInfo = styled.div`
    margin-top: 3%;
    width:50%;
    font-size: ${aboutLargeFontSize};
    margin-left: ${aboutMiddleMargin};
    @media only screen and (max-width: 600px) {
        .About-info {
            font-size: 80%;
        }
    }
    @media only screen and (min-width: 600px) {
        .About-info {
            padding-right: 0px;
            font-size: ${aboutSmallFontSize};
            margin-right: 20px;
        }
    }
    @media only screen and (min-width: 992px) {
        .About-info {
            font-size: ${aboutLargeFontSize};
        }
    }
`

const AboutHeader = styled.h1`
    font-size: ${aboutHeadingSize};
    margin-bottom:0px;
`

const AboutButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    justify-content: space-around;
    margin-top: 10px;
`

const AboutButtonLink = styled.a`
    text-decoration: underline;
`

function AboutSection(props) {
    return (
        <AboutWrapper>
            <AboutPhotoContainer>
                <AboutPhoto src={ProfilePhoto} alt={"Riki Fameli profile"} />
                <AboutInfo>
                    <AboutHeader>Hi! I'm Riki,</AboutHeader>
                    <AboutInfo>
                        I'm a junior currently studying Computer Science at Brown University.
                        I originally came into Brown planning to pursue Public Health, but found myself excited and 
                        intrigued by Computer Science after taking Harvard's popular online course,
                        <a href='https://cs50.harvard.edu/x/2020/syllabus/' target="_blank" rel="noreferrer">  CS50</a>. Since then, I've delved into web development, information technology, and artificial 
                        intelligence. Creative freedom and personal growth are greatly important to me, and this 
                        is evident in my projects, my love for calisthenics, and my performances on aerial hoop with
                        Brown Aerial Acrobatics. Feel free to look around at my projects and work experience down
                        below on desktop or on mobile!
                    </AboutInfo>
                    <AboutButtonGroup>
                        <AboutButtonLink href={Resume} target="_blank" rel="noreferrer">resume</AboutButtonLink>
                        <AboutButtonLink href='https://github.com/r-fameli' target="_blank" rel="noreferrer">github</AboutButtonLink>
                        <AboutButtonLink href='https://www.linkedin.com/in/riki-fameli/' target="_blank" rel="noreferrer">linkedin</AboutButtonLink>
                        <AboutButtonLink href='mailto:rikifameli@gmail.com' target="_blank" rel="noreferrer">email</AboutButtonLink>
                    </AboutButtonGroup>
                </AboutInfo>
            </AboutPhotoContainer>
        </AboutWrapper>
        // <div id={"About"} className={"section"}>
        //     <div className="About-photo-container">
        //         <img src={ProfilePhoto} className="About-photo" alt={"Riki Fameli profile"}/>
        //         <div className="About-info">
        //             <h1>Hi! I'm Riki,</h1>
        //             <p>
        // I'm a junior currently studying Computer Science at Brown University.
        // I originally came into Brown planning to pursue Public Health, but found myself excited and 
        // intrigued by Computer Science after taking Harvard's popular online course,
        // <a href='https://cs50.harvard.edu/x/2020/syllabus/' target="_blank" rel="noreferrer">  CS50</a>. Since then, I've delved into web development, information technology, and artificial 
        // intelligence. Creative freedom and personal growth are greatly important to me, and this 
        // is evident in my projects, my love for calisthenics, and my performances on aerial hoop with
        // Brown Aerial Acrobatics. Feel free to look around at my projects and work experience down
        // below on desktop or on mobile!
        //             </p>
        //             <div id="About-buttons">
        //                 <a href={Resume} target="_blank" rel="noreferrer">resume</a>
        //                 <a href='https://github.com/r-fameli' target="_blank" rel="noreferrer">github</a>
        //                 <a href='https://www.linkedin.com/in/riki-fameli/' target="_blank" rel="noreferrer">linkedin</a>
        //                 <a href='mailto:rikifameli@gmail.com' target="_blank" rel="noreferrer">email</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}


export default AboutSection;