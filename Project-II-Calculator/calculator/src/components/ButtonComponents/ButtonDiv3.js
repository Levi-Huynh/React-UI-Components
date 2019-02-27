import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const ButtonDiv3=(props) =>{
    
    return (
    <div className="ButtonDiv">
    <NumberButton buttonStyle="white" text="4"/>
     <NumberButton buttonStyle="white" text="5"/>
     <NumberButton buttonStyle="white" text="6"/>
     <NumberButton buttonStyle="red" text="-"/>
    </div>
    )
}

export default ButtonDiv3;