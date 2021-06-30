import React from 'react';
import TodoTopic from './TodoTopic';
import TopicInsert from './TopicInsert';
const TodoTemplate = ({ topics, onTopicInsert }) => {
    return (
        <div classname="TodoTemplate">
            <TopicInsert onTopicInsert={onTopicInsert} />
            {topics && topics.map(topic => (
                <TodoTopic topic={topic} key={topic.id} />
            ))}
        </div>
    )
}
export default TodoTemplate;