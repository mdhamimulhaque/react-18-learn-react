import React from 'react';
import { useState } from 'react';
const StateLearn = () => {

    const [name, setName] = useState('Narail');
    const [number, setNumber] = useState(0);

    const [newNumber, setNewNumber] = useState(100);
    const increaseNumber = () => setNewNumber(newNumber + 5);
    const decreaseNumber = () => setNewNumber(newNumber - 5);
    return (
        <div>
            <h2>STATE HANDLE</h2>
            <div className="display">
                <h2>{name}</h2>
                <button onClick={() => setName('Khulna')}>Name change</button>
                <h2>{number}</h2>
                <button onClick={() => setNumber(number + 1)}>Increase</button>
                <button onClick={() => setNumber(number - 1)}>Decrease</button>
                <h2>{newNumber}</h2>
                <button onClick={increaseNumber}>Increase 5</button>
                <button onClick={decreaseNumber}>Decrease 5</button>
            </div>
        </div>
    )
}

export default StateLearn;