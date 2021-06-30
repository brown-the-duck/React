import React from 'react';
import { MdAdd } from 'react-icons/md';
const TodoInsert = () => {
    return (
        <form className="TodoInsert">
            <input placeholder="할 일 입력" />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}
export default TodoInsert;