import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const ButtonDiv1 =(props) =>{
    
    return (
    <div className="ButtonDiv">
    <ActionButton text="clear"/>
    <NumberButton buttonStyle="red" text="&#247;"/>

    </div>
    )
}

export default ButtonDiv1;