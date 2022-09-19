import React from 'react';

const Props = (props) => {
    return (
        <div>
            <h2>This is {props.name}</h2>
            {props.children}
        </div>
    );
};

export default Props;