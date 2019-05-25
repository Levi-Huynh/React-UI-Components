import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const ButtonDiv3=(props) =>{
    
    return (
    <div className="ButtonDiv">
    <button name="4" className="white" onClick={e => props.onClick(e.target.name)}>4</button>
    <button name="5" className="white" onClick={e => props.onClick(e.target.name)}>5</button>
    <button  name="6" className="white" onClick={e => props.onClick(e.target.name)}>6</button>
    <button name="-" className="red" onClick={e => props.onClick(e.target.name)}>-</button>
    </div>
    )
}

export default ButtonDiv3; 

// return (
//     <div className="ButtonDiv">
//     <NumberButton buttonStyle="white" text="4"/>
//      <NumberButton buttonStyle="white" text="5"/>
//      <NumberButton buttonStyle="white" text="6"/>
//      <NumberButton buttonStyle="red" text="-"/>
//     </div>
//     )