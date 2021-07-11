import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo/todoSlice';
import groupsReducer from './Group/groupSlice'

export default configureStore({
    reducer: {
        todos: todoReducer,
        groups: groupsReducer
    },
});