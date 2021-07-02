import React from 'react';
import IdInsert from './IdInsert';
import PwInsert from './PwInsert';
import NickInsert from './NickInsert';
import PwReInsert from './PwReInsert';
import './JoinTemplate.css';
import imgA from './join_img.png';

const JoinTemplate = () => {
    return (
        <div className="JoinTemplate">
            <div className="wrapper">
                <div className="title_area">
                    <div className="JoinTitle">Todo List</div>
                    <div className="JoinTitle2">계정 만들기</div>
                </div>
                <div className="insert_area">
                    <NickInsert />
                    <IdInsert />
                    <div className="pw_area">
                        <PwInsert /><PwReInsert />
                    </div>
                    <div className="pw_info">
                        <p>문자, 숫자, 기호를 조합하여 8자 이상을 사용하세요 </p>
                        <div className="check_area">
                            <input type="checkbox" className="cb1" /><p style={{ display: 'inline' }}>비밀번호 표시</p>
                        </div>
                    </div>
                </div>
                <div className="button_area">
                    <button className="back_button">취소 </button>
                    <button className="join_button">가입하기 </button>
                </div>
            </div>
            <img src={imgA} alt="이미지" />
        </div>
    )
};
export default JoinTemplate;