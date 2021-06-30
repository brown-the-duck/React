import React from 'react';
import './LinkTopic.css';
import cn from 'classnames';
const LinkTopic = ({ topic, onToggle }) => {
    const { text, show, id } = topic;
    return (
        <div className={cn('LinkTopic', { show })} onClick={() => onToggle(id)}>
            <div>{text}</div>
        </div>
    )
}
export default LinkTopic;