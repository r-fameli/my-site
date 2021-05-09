import React, { Component } from 'react';
import {
    BrowserRouter as Router, Link,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

class PlaygroundPage extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/playground">Home</Link></li>
                </ul>
                <div className="centered">
                    <text>yoyoyoyoyoyoyoyoo</text>
                </div>
            </div>
        )
    }
}

export default PlaygroundPage;
