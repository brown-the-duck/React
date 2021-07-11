import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../todo/todoSlice';
import { MdAdd } from 'react-icons/md';
import './sample.css';


const TodoInsert = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        if (value) {
            dispatch(
                addTodoAsync({
                    content: value
                })
            )
        }
    }

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="할 일 입력"
                value={value}
                onChange={(e) => setValue(e.target.value)} />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert
