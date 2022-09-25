import React from 'react';
import { useEffect, useState } from 'react';

const ApiDataLoad = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    return (
        <div>
            <h2>User Data {users.length}</h2>
            {
                users.map(user => <li>Name : {user.name} -----||----- Email : {user.email}</li>)
            }
        </div>
    );
};

export default ApiDataLoad;