import React from 'react';
const Dot = ({ dot }) => {
    return (
        <div className="Dot" style={{
            position: 'fixed',
            left: 0,
            top: 0
        }}>
            {dot ? (<div className="content">하이</div>) : dot};
        </div>
    )
}
export default Dot;