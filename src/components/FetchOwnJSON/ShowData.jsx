import React from 'react';
import { setDataToLocalStorage } from '../../utilities/localStorageManage';

const ShowData = (props) => {
    const { name, age, email, balance, _id } = props.myData;

    const handleAddToCard = (id) => {
        setDataToLocalStorage(id)
    }
    return (
        <div>
            <h2>Name : {name}</h2>
            <p>Age : {age}</p>
            <p>Email : {email}</p>
            <p>Amount : {balance}</p>
            <button onClick={() => { handleAddToCard(_id) }}>Add To Card</button>
        </div>
    );
};

export default ShowData;