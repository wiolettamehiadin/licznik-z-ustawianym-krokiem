import React, { useState } from 'react';
import './Step.css';
import Counter from './Counter.js';

const Step = (props) => {

    return (
        <div className="steps">
            <h3>Steps:</h3>
            <input type="number" onChange={(e) => props.setStep(e.target.value)} value={props.value} />
        </div>
    );
}

export default Step;