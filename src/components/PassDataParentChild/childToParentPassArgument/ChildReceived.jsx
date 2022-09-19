import React from 'react';

const ChildReceived = (props) => {
    return (
        <div>
            <button onClick={props.parentToChild}>Parent pass Data Child Received</button>
        </div>
    );
};

export default ChildReceived;