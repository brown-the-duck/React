import { configureStore } from '@reduxjs/toolkit';
import groups from './groupSlice';
import todoSlice from './todoSlice';
export default configureStore({
    reducer: {
        todos: todoSlice,
        grops: groups
    },
});