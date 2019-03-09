import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import ButtonDiv1 from './components/ButtonComponents/ButtonDiv1';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import ButtonDiv2 from './components/ButtonComponents/ButtonDiv2';
import ButtonDiv3 from './components/ButtonComponents/ButtonDiv3';
import ButtonDiv4 from './components/ButtonComponents/ButtonDiv4';
import ButtonDiv5 from './components/ButtonComponents/ButtonDiv5';

const App = () => {
  return (
    <div className="Container">
     <Display/>
     <ButtonDiv1/>
     <ButtonDiv2/>
    <ButtonDiv3/>
    <ButtonDiv4/>
     <ButtonDiv5/>
    </div>
  );
};

export default App;



