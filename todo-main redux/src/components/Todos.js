import axios from 'axios';
import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import TodoList from './TodoList';


const Todos = ({ group, group_id }) => {
    // 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해야하는 것은 아닙니다.

    const [todos, setTodos] = useState([
        {
        },
    ]);
    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const res = await axios.get('/todos');
                console.log('res.data')
                setTodos(res.data);
            } catch (e) {
                console.log('error');
            }
        };
        fetchTodo();
    }, [])

    const nextTodo = useRef();
    const onInsert = useCallback(
        content => {
            const todo = {
                id: nextTodo.current,
                content,
                group_id,
                group_name: group.title
            };
            setTodos(todos.concat(todo));
            nextTodo.current += 1;
        }, [group.title, group_id, todos]
    );

    const [content, setContent] = useState('');
    const onChange = e => setContent(e.target.value);
    const onSubmit = e => {
        e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
        onInsert(content);
        setContent(''); // 인풋 초기화
        let body = {
            id: todos.id,
            content: content,
            group_id: group_id,
            group_name: group.title
        };
        axios
            .post('./todos', body)
            .then((res) => console.log(res))
            .catch((res) => console.log('error at Todos.js axios'));
    };


    return (
        <div>
            <h1>{group.title}</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={content}
                    placeholder="할 일을 입력하세요.."
                    onChange={onChange}
                />
                <button type="submit">등록</button>
            </form>
            <TodoList todos={todos} group_id={group_id} setTodos={setTodos} />
        </div>
    );
}

export default Todos;