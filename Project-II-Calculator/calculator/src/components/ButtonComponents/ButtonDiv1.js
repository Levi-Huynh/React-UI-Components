import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const ButtonDiv1 =(props) =>{
    
    return (
    <div className="ButtonDiv">
    <button className="ActionButton" name="C"  onClick={e => props.onClick(e.target.name)}>C</button>
    <button className="white" name="/"  onClick={e => props.onClick(e.target.name)} buttonStyle="red">&#247;</button>

    </div>
    )
}

export default ButtonDiv1;

// const ButtonDiv1 =(props) =>{
    
//     return (
//     <div className="ButtonDiv">
//     <ActionButton name="C" text="C"/>
//     <NumberButton buttonStyle="red" text="&#247;"/>

//     </div>
//     )
// }
