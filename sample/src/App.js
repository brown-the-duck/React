import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addGroup } from './redux/groupSlice';
import TodoItem from './components/TodoItem';
const App = () => {


  // export default App;
  const groups = useSelector(state => state.groups);
  const dispatch = useDispatch();
  const onGroup = title => dispatch(addGroup(title));

  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onGroup(text);
    setText(''); // 인풋 초기화
  };


  return (
    <div>
      <h2>todo sample</h2>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="할 일을 입력하세요.."
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      {groups}
      {groups.map(group => (
        <TodoItem key={group.id} group={group} group_id={group.id} title={text} />
      ))}

    </div>
  )
}
export default App;