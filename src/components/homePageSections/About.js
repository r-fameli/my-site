import React, { Component } from 'react';
import '../../css/About.css'
import aerialphoto from '../../assets/aerial-transparent-small.png'

class AboutSection extends Component {
    render() {
        return (
            <div className={"About section"}>
                <img className={"About-photo"} src={aerialphoto} />
            </div>
        )

    }
}
export default AboutSection;