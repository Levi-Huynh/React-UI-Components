import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const ButtonDiv5 = (props) => {

    return (
        <div className='ButtonDiv'>
      <button onClick={e => props.onClick(e.target.name)} name="0" className="ActionButton">0</button>
      <button onClick={e => props.onClick(e.target.name)} name="="className="red">=</button>
        </div>
    )
}

export default ButtonDiv5;    

// <div className='ButtonDiv'>
// <ActionButton text="0"/>
// <NumberButton buttonStyle="red" text="="/>
// </div>