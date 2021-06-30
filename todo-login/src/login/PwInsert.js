import React from 'react';
import { CgLock } from "react-icons/cg";
import './PwInsert.css';

const PwInsert = () => {
    return (
        <form className="PwInsert">
            <CgLock />
            <input placeholder="비밀번호" />
        </form>
    )
};
export default PwInsert;
