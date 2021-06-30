import React from 'react';
import './LeftBar.css';
import LinkTopic from './LinkTopic';
const LeftBar = ({ topics, onToggle }) => {
    return (
        <div className="LeftBar">
            <div className="Topics">
                {topics.map(topic => (
                    <LinkTopic topic={topic} onToggle={onToggle} />
                ))}
            </div>
        </div>
    )
}
export default LeftBar;