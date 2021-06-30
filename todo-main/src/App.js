import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './main/TodoTemplate';
import LeftBar from './main/LeftBar';
import './App.css';

const App = () => {
  const [topics, setTopics] = useState([
    {
      id: 1,
      text: 'School',
      toggle: 'false',
    }
  ]);
  const nextTopic = useRef(2);
  const onTopicInsert = useCallback(
    text => {
      const topic = {
        id: nextTopic.current,
        text,
        show: false,
      };
      setTopics(topics.concat(topic));
      nextTopic.current += 1;
    }, [topics]
  );
  const onToggle = useCallback(
    id => {
      setTopics(
        topics.map(topic =>
          topic.id === id ? { ...topic, show: !topic.show } : { ...topic, show: false },
        ),
      );
    }, [topics],
  );
  return (
    <div>
      <LeftBar topics={topics} onToggle={onToggle} />
      <TodoTemplate topics={topics} onTopicInsert={onTopicInsert} onToggle={onToggle} />
    </div>
  )
}
export default App;