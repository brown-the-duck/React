import React from 'react';
import './LoginTemplate.css';
import IdInsert from './IdInsert';
import PwInsert from './PwInsert';
import LoginBottom from './LoginBottom';

//여기다가 무지성으로 만들면되나 와타시!

const LoginTemplate = () => {
    return (
        <div className="wrapper">
            <div className="LoginTemplate">
                <div className="LoginTitle">Todo List</div>
                <IdInsert />
                <PwInsert />
                <button className="login_btn">로그인</button>
                <LoginBottom />
            </div>
        </div>
    )
};
export default LoginTemplate;

