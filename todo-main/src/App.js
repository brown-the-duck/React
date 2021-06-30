import React from 'react';
import TodoTemplate from './main/TodoTemplate';
import TodoTopic from './main/TodoTopic';
import TodoInsert from './main/TodoInsert';
import TodoList from './main/TodoList';
const App = () => {
  return (
    <div>
      <TodoTemplate>
        <TodoTopic>
          <TodoInsert />
          <TodoList />
        </TodoTopic>
      </TodoTemplate>
    </div>
  )
}
export default App;