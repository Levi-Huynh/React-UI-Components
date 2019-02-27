import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const ButtonDiv4 =(props) =>{
    
    return (
    <div className="ButtonDiv">
   <NumberButton buttonStyle="white" text="1"/>
     <NumberButton buttonStyle="white" text="2"/>
     <NumberButton buttonStyle="white" text="3"/>
     <NumberButton buttonStyle="red" text="+"/>

    </div>
    )
}

export default ButtonDiv4;