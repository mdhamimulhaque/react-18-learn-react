import React from 'react';

const ShowData = (props) => {
    const { name, age, email } = props.myData;
    return (
        <div>
            <h2>Name : {name}</h2>
            <p>Age : {age}</p>
            <p>Email : {email}</p>
        </div>
    );
};

export default ShowData;