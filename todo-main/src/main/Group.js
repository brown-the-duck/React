import React, { useState, useRef, useCallback, useEffect } from 'react';

import cn from 'classnames';
import { MdAdd } from 'react-icons/md';
import TodoItem from './TodoItem';

import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../redux/todoSlice';

const Group = ({ topic }) => {
    const { show } = topic;

    // const onInsert = useCallback(
    //     text => {
    //         const todo = {
    //             id: nextTodo.current,
    //             text
    //         };
    //         setTodos(todos.concat(todo));
    //         nextTodo.current += 1;
    //     }, [todos]
    // );

    // const [value, setValue] = useState('');
    // const onChange = useCallback(e => {
    //     setValue(e.target.value);
    // }, []);
    // const onSubmit = useCallback(e => {
    //     onInsert(value);
    //     setValue('');
    //     e.preventDefault();
    // }, [onInsert, value]
    // );

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(getTodosAsync());
    }, [dispatch]);

    return (
        <div>
            <div className={cn('ShowState', { show })} >
                {show ?
                    <div className="Group">
                        <div className="app-title">{topic.text}</div>
                        <div className="sub">
                            <form className="TodoInsert"
                            // onSubmit={onSubmit}
                            >

                                <input
                                    placeholder="할 일 입력"
                                // value={value}
                                // onChange={onChange} 
                                />
                                <button type="submit">
                                    <MdAdd />
                                </button>
                            </form>
                            <div className="TodoList">
                                {todos.map(todo => (
                                    <TodoItem id={todo.id} content={todo.content} key={todo.id} />
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