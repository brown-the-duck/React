import React from 'react';
import './TodoListItem.css';
import { BiDotsVerticalRounded } from "react-icons/bi";
const TodoListItem = ({ todo }) => {
    const { text, checked } = todo;
    return (
        <div className="TodoListItem">
            <div className="check">
                <div className="blank">
                    <BiDotsVerticalRounded />
                </div>
                <div className="text">{text}</div>
            </div>
        </div>
    )
}
export default TodoListItem;