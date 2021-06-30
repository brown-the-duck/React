import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';
const TodoList = ({ todos }) => {
    return (
        <div className="TodoList">
            {todos && todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} />
            ))}
        </div>
    )
}
export default TodoList;