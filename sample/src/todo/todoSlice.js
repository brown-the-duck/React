import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getTodosAsync = createAsyncThunk(
    'todos/getTodosAsync',
    async () => {
        const resp = await fetch('/todos');
        if (resp.ok) {
            const todos = await resp.json();
            return { todos };
        }
    }
);
// 여기서 문제 발생했었음 completed: 값 설정안되는 문제
export const addTodoAsync = createAsyncThunk(
    'todos/addTodoAsync',
    async (payload) => {
        const resp = await fetch('/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: payload.content, group_id: payload.group_id }),
        });

        if (resp.ok) {
            const todo = await resp.json();
            return { todo };
        }
    }
);

let nextTodoId = 0
export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nextTodoId++,
                content: action.payload.content,
            };
            state.push(todo);

        },
    },
    extraReducers: {
        // 
        [getTodosAsync.fulfilled]: (state, action) => {
            return action.payload.todos;
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            state.push(action.payload.todo);
        },
    },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;