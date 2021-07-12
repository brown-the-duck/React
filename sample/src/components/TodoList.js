import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../redux/todoSlice';
import TodoInsert from './TodoInsert';
import './sample.css';


const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);


    useEffect(() => {
        dispatch(getTodosAsync());
    }, [dispatch]);

    return (
        <div>
            <div classname="GroupName"></div>
            <div className='TodoList'>
                {todos.map((todo) => (
                    <TodoItem id={todo.id} content={todo.content} key={todo.id} />
                ))}
            </div>
            <TodoInsert />
        </div>
    );
};

export default TodoList;