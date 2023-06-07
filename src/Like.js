import './Button.css'
import { FaHeart } from 'react-icons/fa';
import React, { useState } from 'react';

const Like = () => {
        const [counterValue, setCounterValue] = useState(1);
        const triggeredEvent = () => {
            console.log("Paris has " + counterValue + " like(s)")
            setCounterValue(counterValue + 1)

    }
    return (
        <button className="Like" onClick={triggeredEvent}>
            <h2>
                <FaHeart/>
            </h2>
        </button>
    );
}

export default Like;
