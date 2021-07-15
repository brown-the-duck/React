import React, { useCallback, useState } from 'react';
import { addTodo, toggleTodo } from './store/todos';
import { useSelector, useDispatch } from 'react-redux';
import Todos from './components/Todos';
import { addGroup } from './store/groups';
import axios from 'axios';

function App() {
  // useSelector 에서 꼭 객체를 반환 할 필요는 없습니다.
  // 한 종류의 값만 조회하고 싶으면 그냥 원하는 값만 바로 반환하면 됩니다
  const groups = useSelector(state => state.groups);
  const dispatch = useDispatch();
  const onGroup = title => dispatch(addGroup(title));

  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onGroup(text);
    setText(''); // 인풋 초기화
    let body = {
      name: text,
    };
    axios
      .post('./groups', body)
      .then((res) => console.log(res))
      .catch((res) => console.log('error at App.js axios'))
    console.log(body);
  };


  return (
    <div>
      {/*<Todos todos={todos} onCreate={onCreate} onToggle={onToggle} /> */}
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="할 일을 입력하세요.."
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      {groups.map(group => (
        <Todos key={group.id} group={group} group_id={group.id} />
      ))}

    </div>
  )
}

export default App;