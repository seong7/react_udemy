import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    const inputStyle = {
        boxSizing: "border-box",
        width: "40rem",
        marginTop: "4rem",
        borderRadius: "0.5rem",
        border: "1px solid #333",
        outline:"none",
        padding: "1rem",
        letterSpacing: "0.1rem"
    }

    return (
        <div>
            <input 
                className="UserInput" 
                style={inputStyle} 
                type="text" 
                placeholder="메모 내용 입력"
                onChange={props.change}
                ></input>
        </div>
    )
}

export default UserInput;