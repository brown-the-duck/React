const ADD_GROUP = 'groups/ADD_GROUP';

let nextId = 1;
export const addGroup = title => ({
    type: ADD_GROUP,
    group: {
        id: nextId++,
        title
    }
});
export function groups(state = [], action) {
    switch (action.type) {
        case ADD_GROUP:
            return state.concat(action.group);
        default:
            return state;
    }
}
export default groups