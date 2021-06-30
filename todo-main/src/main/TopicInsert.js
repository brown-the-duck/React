import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
const TopicInsert = ({ onTopicInsert }) => {
    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);
    const onSubmit = useCallback(e => {
        onTopicInsert(value);
        setValue('');
        e.preventDefault();
    }, [onTopicInsert, value]
    );
    return (
        <form className="TopicInsert" onSubmit={onSubmit}>
            <input
                placeholder="할 일 입력"
                value={value}
                onChange={onChange} />
            <button type="submit">
                <MdAdd />
            </button>
        </form >
    )
}
export default TopicInsert;