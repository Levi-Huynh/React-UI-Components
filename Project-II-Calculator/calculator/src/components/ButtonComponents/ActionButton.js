import React from 'react';
import './Button.css';


const ActionButton = (props) => {

    return (
        <button className="ActionButton">
            {props.text}

        </button>

    )
}

export default ActionButton;