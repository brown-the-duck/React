import React from 'react';
import './LeftBar.css';
import LinkTopic from './LinkTopic';
const LeftBar = ({ topics, onToggle }) => {
    return (
        <div className="LeftBar">
            <div className="Topics">
                {topics.map((topic, index) => (
                    <LinkTopic topic={topic} onToggle={onToggle} key={index} />
                ))}
            </div>
        </div>
    )
}
export default LeftBar;