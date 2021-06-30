import React, { useState, useRef, useCallback } from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import './TodoTopic.css';
const TodoTopic = ({ topic }) => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "sample1",
        },
        {
            id: 2,
            text: "sample two dsfsdfsdsdf",
        },
        {
            id: 3,
            text: "dddd ff"
        }
    ]);
    const nextTodo = useRef(4);
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
        <div className="TodoTopic">
            <div className="app-title">{topic.text}</div>
            <div className="sub">
                <TodoInsert onInsert={onInsert} />
                <TodoList todos={todos} />
            </div>

        </div>
    )
}
export default TodoTopic;