import React from 'react';
import { useState } from 'react';
const StateLearn = () => {

    const [name, setName] = useState('Narail');
    const [number, setNumber] = useState(0);
    return (
        <div>
            <h2>STATE HANDLE</h2>
            <div className="display">
                <h2>{name}</h2>
                <button onClick={() => setName('Khulna')}>Name change</button>
                <h2>{number}</h2>
                <button onClick={() => setNumber(number + 1)}>Increase</button>
                <button onClick={() => setNumber(number - 1)}>Decrease</button>
            </div>
        </div>
    )
}

export default StateLearn;