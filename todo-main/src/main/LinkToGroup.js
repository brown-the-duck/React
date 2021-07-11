import React from 'react';
import cn from 'classnames';
const LinkToGroup = ({ topic, onToggle }) => {
    const { text, show, id } = topic;
    return (
        <div className={cn('LinkToGroup', { show })} onClick={() => onToggle(id)}>
            <div className="wrap">
                <div className="linkText">{text}</div>
                <div className="count">{id}</div>
            </div>

        </div>
    )
}
export default LinkToGroup;