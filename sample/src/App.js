import React from 'react';
import TodoList from './components/TodoList';
import GroupList from './components/GroupList';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <h1>My Todo List</h1>
      <GroupList />
    </div>
  );
};

export default App;