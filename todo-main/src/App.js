import React, { useState, useRef, useCallback } from 'react';
import LeftBar from './main/LeftBar';
import Group from './main/Group';
import GroupInsert from './main/GroupInsert';
import './App.css';

const App = () => {
  const [groups, setGroup] = useState([
    {
      id: 1,
      text: 'School',
      show: 'false',
    }
  ]);
  const nextGroup = useRef(2);
  const onGroupInsert = useCallback(
    text => {
      const group = {
        id: nextGroup.current,
        text,
        show: false,
      };
      setGroup(groups.concat(group));
      nextGroup.current += 1;
    }, [groups]
  );
  const onToggle = useCallback(
    id => {
      setGroup(
        groups.map(topic =>
          topic.id === id ? { ...topic, show: !topic.show } : { ...topic, show: false },
        ),
      );
    }, [groups],
  );
  return (
    <div>
      <LeftBar topics={groups} onToggle={onToggle} />
      <div className="main">
        <div className="GroupTemplate">
          <GroupInsert onGroupInsert={onGroupInsert} />
          <div>
            {groups && groups.map(topic => (
              <Group topic={topic} key={topic.id} />
            ))}
          </div>
        </div>
      </div >
    </div>
  )
}
export default App;