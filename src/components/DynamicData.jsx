import React from 'react';

const DynamicData = () => {
    const friendsInfo = [
        { name: "Emon", age: 23 },
        { name: "Asif", age: 20 },
        { name: "Noor", age: 22 },
    ]
    return (
        <div>
            {
                friendsInfo.map(info => <li>Name: {info.name} || Age: {info.age}</li>)
            }

            {
                friendsInfo.map((info) => <FriendsInfoDisplay info={info} />)
            }
        </div>
    )
};

const FriendsInfoDisplay = (props) => {
    const { name, age } = props.info;
    return (
        <div className='dynamic_Friends'>
            <h2>Name: {name}</h2>
            <h2>age: {age}</h2>
        </div>
    )
}

export default DynamicData;