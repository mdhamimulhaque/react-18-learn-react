import React from 'react';
import { add, subtraction } from '../../utilities/calculate';
const ImportExport = () => {
    const x = 20;
    const y = 10;
    // ---> add
    const addResult = add(x, y)
    // ---> subtraction
    const subtractionResult = subtraction(x, y)
    return (
        <div>
            <h2>Import Export work</h2>
            <p>x = {x} || y = {y}</p>
            <p>Add : {addResult}</p>
            <p>subtraction : {subtractionResult}</p>
        </div>
    );
};

export default ImportExport;