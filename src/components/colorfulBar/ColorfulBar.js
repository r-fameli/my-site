import React, { Component } from 'react';
import ColoredBox from './ColoredBox';
import '../../css/ColorfulBar.css'

class ColorfulBar extends Component {
    render() {
        return (
            <div className="ColorfulBar">
                {this.props.sections.map(section => 
                <a href={section.link}>
                    <ColoredBox text={section.text} color={section.color} />  
                </a>
                )}
            </div>
        )
    }
}

export default ColorfulBar;