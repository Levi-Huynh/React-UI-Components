import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const ButtonDiv2 = (props) => {

    return(
        <div className="ButtonDiv">
    <button className="white" name="7" onClick={e => props.onClick(e.target.name)}>7</button>
    <button className="white" name="8" onClick={e => props.onClick(e.target.name)}>8</button>
    <button className="white" name="9" onClick={e => props.onClick(e.target.name)}>9</button>
    <button className="red" name="*"onClick={e => props.onClick(e.target.name)}>X</button>
        </div>
    )
}

export default ButtonDiv2;

// const ButtonDiv1 =(props) =>{
    
//     return (
//     <div className="ButtonDiv">
//     <button className="ActionButton" name="C"  onClick={e => this.props.onClick(e.target.name)}>C</button>
//     <button className="white" name="/"  onClick={e => this.props.onClick(e.target.name)} buttonStyle="red">&#247;</button>

//     </div>
//     )
// }


// return(
//     <div className="ButtonDiv">
//     <NumberButton buttonStyle="white" text="7"/>
//  <NumberButton buttonStyle="white" text="8"/>
//  <NumberButton buttonStyle="white" text="9"/>
//  <NumberButton buttonStyle="red" text="x"/>
//     </div>
// )
// }