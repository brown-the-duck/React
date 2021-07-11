import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGroupsAsync } from '../Group/groupSlice';
import TodoList from './TodoList';

const GroupList = () => {

    const dispatch = useDispatch();
    const groups = useSelector(state => state.groups);

    useEffect(() => {
        dispatch(getGroupsAsync());
    }, [dispatch]);

    return (
        <div className="GroupList">
            {groups.map((todos) => (
                <TodoList group_id={todos.group_id} />
            ))}
        </div>
    )
}

export default GroupList;
