import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShowData from './ShowData';


const FetchOwnJSON = () => {
    const [loadMyData, setLoadMyData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setLoadMyData(data))
    }, [])

    return (
        <div>
            {
                loadMyData.map((myData) => <ShowData key={myData._id} myData={myData} />)
            }

        </div>
    );
};

export default FetchOwnJSON;