import React from 'react';
import { useState } from 'react';
import './Form.css'

const Form = () => {
    const [userName, setUserName] = useState('')
    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('hii')
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label>UserName</label> <br />
                <input type="text" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default Form;