import React, { useState, useRef, useCallback } from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
const TodoTopic = ({ topic }) => {
    const [todos, setTodos] = useState(['']);
    const nextTodo = useRef(1);
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
        <div className="TodoTopic" style={{
            border: '1px solid black',
            margin: '1rem',
        }}>
            <div className="app-title">{topic.text}</div>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} />
        </div>
    )
}
export default TodoTopic;