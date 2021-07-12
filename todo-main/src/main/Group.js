import React, { useState, useRef, useCallback } from 'react';

import cn from 'classnames';
import { MdAdd } from 'react-icons/md';
import TodoItem from './TodoItem';

const Group = ({ topic }) => {
    const { show } = topic;
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "sample page",
        },
    ]);
    const nextTodo = useRef(2);
    const onInsert = useCallback(
        text => {
            const todo = {
                id: nextTodo.current,
                text
            };
            setTodos(todos.concat(todo));
            nextTodo.current += 1;
        }, [todos]
    );

    const [value, setValue] = useState('');
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
            <div className={cn('ShowState', { show })} >
                {show ? <div className="Group">
                    <div className="app-title">{topic.text}</div>
                    <div className="sub">
                        <form className="TodoInsert" onSubmit={onSubmit}>

                            <input
                                placeholder="할 일 입력"
                                value={value}
                                onChange={onChange} />
                            <button type="submit">
                                <MdAdd />
                            </button>
                        </form>
                        <div className="TodoList">
                            {todos && todos.map(todo => (
                                <TodoItem todo={todo} key={todo.id} />
                            ))}
                        </div>
                    </div>
                </div>
                    : <div></div>}

            </div>
        </div >
    )
}
export default Group;