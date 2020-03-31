import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput" onClick={props.click}>
            <p>
                {props.name}
            </p>
            <p>
                {props.memo}
            </p>
        </div>
    )
}

export default UserOutput;
