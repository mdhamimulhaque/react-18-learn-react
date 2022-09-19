import React from 'react';

const ChildPass = (props) => {
    return (
        <div>
            <button onClick={() => props.childToParent('Hii...how are you?')}>Child pass Data Parent Received</button>
        </div>
    );
};

export default ChildPass;