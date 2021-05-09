import React, { Component } from 'react';
import ColorfulBar from '../colorfulBar/ColorfulBar';
import profile from '../../assets/profile.jpg'

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
            {text: " a", color: "#F5C0C0"},
            {text: " b", color: "#93B4CC"},
            {text: " c", color: "#9FD8DF"},
            {text: " d", color: "#93B4CC"},
            {text: " e", color: "#F5C0C0"},
        ]
        return (
            <div className={"section"}>
                <ColorfulBar sections={topSections} />
                <img src={profile}/>
                <ColorfulBar sections={bottomSections} />
            </div>
        )

    }
}
export default StartSection;