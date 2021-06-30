import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './main/TodoTemplate';
import LeftBar from './main/LeftBar';
import './App.css';

const App = () => {
  const [topics, setTopics] = useState([
    {
      id: 1,
      text: 'School',
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
      <LeftBar topics={topics} />
      <TodoTemplate topics={topics} onTopicInsert={onTopicInsert} />
    </div>
  )
}
export default App;