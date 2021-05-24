import React, { Component } from 'react';
import '../../css/End.css'
import footerphoto from '../../assets/footer-photo.png'

class EndSection extends Component {
    render() {
        return (
            <div className={"End"}>
                <div className={"End-fade"}></div>
                <div className={"End-footer"}></div>
                <img className={"End-footer-photo"} src={footerphoto}/>
            </div>
        )

    }
}
export default EndSection;