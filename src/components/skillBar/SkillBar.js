import React from 'react';
import '../../css/SkillBar.css';

function SkillBar(props) {
    const level = props.level

    const levelBarStyle = { width: props.level }
    return (
        <div className="SkillBar">
            <text className="SkillBar-name">
                {props.name}
            </text>
            <div className="SkillBar-bar-container">
                <div className="SkillBar-background-bar" />
                <div className="SkillBar-level-bar" style={levelBarStyle} />
            </div>
        </div>
    )
}

export default SkillBar;