import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { totalPrice } from '../../utilities/localStorageManage';
import ShowData from './ShowData';


const FetchOwnJSON = () => {
    const [loadMyData, setLoadMyData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setLoadMyData(data))
    }, [])

    const total = totalPrice(loadMyData)

    return (
        <div>
            <h2>Total Price : {total}</h2>
            {
                loadMyData.map((myData) => <ShowData key={myData._id} myData={myData} />)
            }

        </div>
    );
};

export default FetchOwnJSON;