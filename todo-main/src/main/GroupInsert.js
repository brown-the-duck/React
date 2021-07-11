import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
const GroupInsert = ({ onGroupInsert }) => {
    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);
    const onSubmit = useCallback(e => {
        onGroupInsert(value);
        setValue('');
        e.preventDefault();
    }, [onGroupInsert, value]
    );
    return (
        <form className="GroupInsert" onSubmit={onSubmit}>
            <input
                placeholder="주제 입력"
                value={value}
                onChange={onChange} />
            <button type="submit">
                <MdAdd />
            </button>
        </form >
    )
}
export default GroupInsert;