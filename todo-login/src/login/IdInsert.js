import React from 'react';
import { IoPersonOutline } from "react-icons/io5";
import './IdInsert.css';

const IdInsert = () => {
    return (
        <form className="IdInsert">
            <IoPersonOutline />
            <input placeholder="아이디" />
        </form>
    )
};
export default IdInsert;

