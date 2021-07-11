import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getGroupsAsync = createAsyncThunk(
    'group/getGroupsAsync',
    async () => {
        const resp = await fetch('/groups');
        if (resp.ok) {
            const groups = await resp.json();
            return { groups };
        }
    }
);

export const addGroupsAsync = createAsyncThunk(
    'todos/addGroupsAsync',
    async (payload) => {
        const resp = await fetch('/groups', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ group_id: payload.group_id }),
        });

        if (resp.ok) {
            const group = await resp.json();
            return { group };
        }
    }
);

let nextGroupId = 0
export const groupSlice = createSlice({
    name: 'groups',
    initialState: [],
    reducers: {
        addGroup: (state, action) => {
            const group = {
                group_id: nextGroupId++,
                content: action.payload.content,
            };
            state.push(group);

        },
    },
    extraReducers: {
        [getGroupsAsync.fulfilled]: (state, action) => {
            return action.payload.groups;
        },
        [addGroupsAsync.fulfilled]: (state, action) => {
            state.push(action.payload.group);
        },
    },
});
export const { addGroup } = groupSlice.actions;
export default groupSlice.reducer;