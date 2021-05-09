import React, { Component } from 'react';
import ColoredBox from './ColoredBox';

class ColorfulBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sections: this.props.sections,
        };
    }
    render() {
        return (
            <div className="colorful-bar">
                {this.state.sections.map(section => 
                    <ColoredBox text={section.text} color={section.color} />  
                )}        
            </div>
        )
    }
}

export default ColorfulBar;