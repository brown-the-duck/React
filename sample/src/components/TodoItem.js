import React from 'react';
import './sample.css';

const TodoItem = ({ id, title }) => {


    return (
        <div className="TodoItem">
            <div className="topArea">

            </div>
            <div className="TodoContent">
                {title}
            </div>
        </div>
    );
};

export default TodoItem;