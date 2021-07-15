import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios'

const TodoList = React.memo(function TodoList({ todos, onToggle, group_id }) {

    return (
        <ul>
            {todos.filter((cur) => cur.group_id === group_id).map(todo => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    );
});

export default TodoList
