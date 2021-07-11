import React from 'react';
import { BiDotsVerticalRounded } from "react-icons/bi";

import { useDispatch } from 'react-redux';

const TodoItem = ({ todo }) => {
    const { text } = todo;
    return (
        <div className="TodoItem">
            <div className="check">
                <div className="blank">
                    <BiDotsVerticalRounded />
                </div>
                <div className="text">{text}</div>
            </div>
        </div>
    )
}
export default TodoItem;