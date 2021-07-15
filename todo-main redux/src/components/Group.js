import React from 'react'

const TodoItem = React.memo(function TodoItem({ group }) {
    return (
        <li>
            {group.title}
        </li>
    );
});

export default TodoItem
