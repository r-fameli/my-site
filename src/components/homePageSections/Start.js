import React, { Component } from 'react';
import ColorfulBar from '../colorfulBar/ColorfulBar';
import profile from '../../assets/profile-cropped2.png'
import '../../css/Start.css'

class StartSection extends Component {
    render() {
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
            <div className={"Start section"}>
                <div className={"Start-fade"} />
                <img src={profile} id={"Start-profile"} />

            </div>
        )

    }
}
export default StartSection;