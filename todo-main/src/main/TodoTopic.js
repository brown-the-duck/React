import React, { useState, useRef, useCallback } from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import './TodoTopic.css';
import cn from 'classnames';
const TodoTopic = ({ topic }) => {
    const { show } = topic;
    const [todos, setTodos] = useState([
        {
            id: "Todo1",
            text: "sample page",
        },
    ]);
    const nextTodo = useRef("Todo" + 2);
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
    return (
        <div>
            <div className={cn('ShowState', { show })} >
                {show ? <div className="TodoTopic">
                    <div className="app-title">{topic.text}</div>
                    <div className="sub">
                        <TodoInsert onInsert={onInsert} />
                        <TodoList todos={todos} />
                    </div>
                </div>
                    : <div></div>}

            </div>
        </div >
    )
}
export default TodoTopic;