import React, { Component } from 'react';
import '../../css/ColorfulBar.css'

class ColoredBox extends Component {
    render() {
        return (
            <div className="ColoredBox centered" style={{background: this.props.color}}>
                <text>{this.props.text}</text>
            </div>
        )
    }
}

export default ColoredBox;