import React from 'react';
import LinkToGroup from './LinkToGroup';
const LeftBar = ({ topics, onToggle }) => {
    return (
        <div className="LeftBar">
            <div className="userID">아이디</div>
            <div className="Topics">
                <hr className="line" />
                {topics.map((topic, index) => (
                    <LinkToGroup topic={topic} onToggle={onToggle} key={index} />
                ))}
            </div>
        </div>
    )
}
export default LeftBar;