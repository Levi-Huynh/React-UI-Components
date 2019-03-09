import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const ButtonDiv2 = (props) => {

    return(
        <div className="ButtonDiv">
        <NumberButton buttonStyle="white" text="7"/>
     <NumberButton buttonStyle="white" text="8"/>
     <NumberButton buttonStyle="white" text="9"/>
     <NumberButton buttonStyle="red" text="x"/>
        </div>
    )
}

export default ButtonDiv2;