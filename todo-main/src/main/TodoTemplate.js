import React from 'react';
import './TodoTemplate.css';
import TodoTopic from './TodoTopic';
import TopicInsert from './TopicInsert';
const TodoTemplate = ({ topics, onTopicInsert }) => {
    return (
        <div className="main">
            <div className="TodoTemplate">
                <TopicInsert onTopicInsert={onTopicInsert} />
                <div className="topicWrap">
                    {topics.map(topic => (
                        <TodoTopic topic={topic} key={topic.id} />
                    ))}
                </div>
            </div>
        </div >
    )
}
export default TodoTemplate;