import React, { Component } from 'react';

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
            <div className="colored-box centered" style={{background: this.state.color}}>
                <text>{this.state.text}</text>
            </div>
        )
    }
}

export default ColoredBox;