import React from 'react';
const TodoListItem = ({ todo }) => {
    const { text, checked } = todo;
    return (
        <div className="TodoListItem">
            <div className="check">
                <div className="text">{text}</div>
            </div>
        </div>
    )
}
export default TodoListItem;