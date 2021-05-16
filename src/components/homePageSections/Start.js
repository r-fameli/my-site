import React, { Component } from 'react';
import ColorfulBar from '../colorfulBar/ColorfulBar';
import profile from '../../assets/profile.jpg'
import '../../css/Start.css'

class StartSection extends Component {
    render() {
        let topSections = [
            {text: "about", color: "#F5C0C0"},
            {text: "experience", color: "#93B4CC"},
            {text: "projects", color: "#9FD8DF"},
            {text: "skills", color: "#93B4CC"},
            {text: "other", color: "#F5C0C0"}
        ]
        let bottomSections = [
            {text: "", color: "#F5C0C0"},
            {text: "", color: "#93B4CC"},
            {text: "", color: "#9FD8DF"},
            {text: "", color: "#93B4CC"},
            {text: "", color: "#F5C0C0"},
        ]
        return (
            <div className={"Start section"}>
                <ColorfulBar sections={topSections} />
                <img src={profile} id={"Start-profile"}/>
                <ColorfulBar id={"Start-bottom-bar"} sections={bottomSections} />
            </div>
        )

    }
}
export default StartSection;