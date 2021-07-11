import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../todo/todoSlice';
import TodoInsert from './TodoInsert';
import './sample.css';


const TodoList = ({ group_id }) => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);


    useEffect(() => {
        dispatch(getTodosAsync());
    }, [dispatch]);

    return (
        <div>
            <div className="GroupName"></div>
            <div className='TodoList'>
                {todos.map((todo) => (
                    <TodoItem id={todo.id} content={todo.content} key={todo.id} group_id={group_id} />
                ))}
            </div>
            <TodoInsert />
        </div>
    );
};

export default TodoList;