import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const ButtonDiv4 =(props) =>{
    
    return (
    <div className="ButtonDiv">
  <button name="1" onClick={e => props.onClick(e.target.name)} className="white">1</button>
  <button name="2" onClick={e => props.onClick(e.target.name)} className="white">2</button>
  <button name="3"  onClick={e => props.onClick(e.target.name)} className="white">3</button>
  <button name="+" onClick={e => props.onClick(e.target.name)} className="red">+</button>

    </div>
    )
}

export default ButtonDiv4;

