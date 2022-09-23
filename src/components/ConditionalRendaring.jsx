import React from 'react';

const ConditionalRendaring = () => {
    const isGuest = false;
    return (
        <div>
            <h2>This is {isGuest ? 'Guest' : "My brother"}</h2>
        </div>
    );
};

export default ConditionalRendaring;