import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './main/TodoTemplate';

const App = () => {
  const [topics, setTopics] = useState([
    {
      id: 1,
      text: '안녕',
    },
    {
      id: 2,
      text: '헬로'
    }
  ]);
  const nextTopic = useRef(3);
  const onTopicInsert = useCallback(
    text => {
      const todo = {
        id: nextTopic.current,
        text
      };
      setTopics(topics.concat(todo));
      nextTopic.current += 1;
    }, [topics]
  );
  return (
    <div>
      <TodoTemplate topics={topics} onTopicInsert={onTopicInsert} />
    </div>
  )
}
export default App;