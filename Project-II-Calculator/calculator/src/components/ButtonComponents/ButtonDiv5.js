import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const ButtonDiv5 = (props) => {

    return (
        <div className='ButtonDiv'>
        <ActionButton text="0"/>
     <NumberButton buttonStyle="red" text="="/>
        </div>
    )
}

export default ButtonDiv5;