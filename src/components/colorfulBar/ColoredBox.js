import React, { Component } from 'react';
import '../../css/ColorfulBar.css'

class ColoredBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: props.color,
            text: props.text
        }
    }

    render() {
        return (
            <div className="ColoredBox centered" style={{background: this.state.color}}>
                <text>{this.state.text}</text>
            </div>
        )
    }
}

export default ColoredBox;