import React, { Component } from 'react';
import '../../css/End.css'
import FooterPhoto from '../../assets/footer-photo.png'
import MailIcon from '../../assets/mail-icon1.svg'
import GithubIcon from '../../assets/github-64px.png'
import LinkedinIcon from '../../assets/linkedin-white-72px.png'
import CircleIcon from '../circleIcon/CircleIcon';

class EndSection extends Component {
    render() {
        return (
            <div className={"End"} >
                <div className={"End-fade"} id="Contact"/>
                <div className={"End-footer"}>
                    Made by Riki Fameli © 2021
                    <p>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                    <hr/>
                    <div className={"End-icons-row"} >
                        <CircleIcon image={MailIcon} link={"mailto:rikifameli@gmail.com"}/>
                        <CircleIcon image={GithubIcon} link={"https://github.com/r-fameli"}/>
                        <CircleIcon image={LinkedinIcon} link={"https://www.linkedin.com/in/riki-fameli/"}/>
                    </div>
                </div>
                <img className={"End-footer-photo"} src={FooterPhoto}/>
            </div>
        )

    }
}
export default EndSection;