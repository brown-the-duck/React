import React from 'react';
import './sample.css';

const TodoItem = ({ id, content }) => {


    return (
        <div className="TodoItem">
            <div className="topArea">

            </div>
            <div className="TodoContent">
                {content}
            </div>
        </div>
    );
};

export default TodoItem;