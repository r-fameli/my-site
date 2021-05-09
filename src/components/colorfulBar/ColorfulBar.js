import React, { Component } from 'react';
import ColoredBox from './ColoredBox';
import '../../css/ColorfulBar.css'

class ColorfulBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sections: this.props.sections,
        };
    }
    render() {
        return (
            <div className="ColorfulBar">
                {this.state.sections.map(section => 
                    <ColoredBox text={section.text} color={section.color} />  
                )}        
            </div>
        )
    }
}

export default ColorfulBar;