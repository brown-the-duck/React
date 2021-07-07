import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.css';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');
    const [btn, setBtn] = useState('visible');
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);
    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    }, [onInsert, value]
    );
    return (
        <div>
            <form className="TodoInsert" onSubmit={onSubmit}>

                <input
                    placeholder="할 일 입력"
                    value={value}
                    onChange={onChange} />
                <button type="submit">
                    <MdAdd />
                </button>
            </form>
        </div>
    )
}
export default TodoInsert;