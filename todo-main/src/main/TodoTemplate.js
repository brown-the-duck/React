import React from 'react';
const TodoTemplate = ({ children }) => {
    return (
        <div classname="TodoTemplate">
            <div className="content">{children}</div>
        </div>
    )
}
export default TodoTemplate;