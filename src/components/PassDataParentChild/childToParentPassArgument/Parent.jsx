import React from 'react';
import ChildPass from './ChildPass';
import ChildReceived from './ChildReceived';



const Parent = () => {

    // -----> data reference pass from parent component to child component
    const parentToChild = () => {
        alert('hii...i am parents data. Show result by child component activities ')
    }

    // -----> data pass from child component to parent component
    const childToParent = (childValue) => {
        alert(`This value received from child ---->>> ${childValue}`)
    }
    return (
        <div>
            <h4>Passing Data reference from Parent || Child Received</h4>
            <ChildReceived parentToChild={parentToChild} />

            <h4>Passing Data from Child || parent received</h4>
            <ChildPass childToParent={childToParent} />
        </div>
    );
};

export default Parent;