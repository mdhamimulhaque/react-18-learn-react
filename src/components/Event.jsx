import React from 'react';

const Event = () => {
    // ------> handle event
    const handleClick = () => {
        alert('The button is clicked')
    }
    // ------> received event
    const handleEvent = (event, count = 1) => {
        console.log(event, count)
    }


    return (
        <div>
            <h2>EVENT HANDLE</h2>
            <h2>Event checker</h2>
            <button onClick={handleClick}>click</button>

            <h2>Show event console</h2>
            <button onClick={handleEvent}>Clink Event</button>

            <h2>Pass argument and event</h2>
            <button onClick={(event) => handleEvent(event, 5)}>Clink Argument</button>
        </div>
    );
};

export default Event;