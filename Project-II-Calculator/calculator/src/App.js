import React,{ Component } from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import ButtonDiv1 from './components/ButtonComponents/ButtonDiv1';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import ButtonDiv2 from './components/ButtonComponents/ButtonDiv2';
import ButtonDiv3 from './components/ButtonComponents/ButtonDiv3';
import ButtonDiv4 from './components/ButtonComponents/ButtonDiv4';
import ButtonDiv5 from './components/ButtonComponents/ButtonDiv5';



class App extends Component {
  constructor(){
      super();

      this.state = {
          result: ""
      }
  }

  onClick = button => {

      if(button === "="){
          this.calculate()
      }

      else if(button === "C"){
          this.reset()
      }
      else if(button === "CE"){
          this.backspace()
      }

      else {
          this.setState({
              result: this.state.result + button
          })
      }
  };


  calculate = () => {
      try {
          this.setState({
              // eslint-disable-next-line
              result: (eval(this.state.result) || "" ) + ""
          })
      } catch (e) {
          this.setState({
              result: "error"
          })

      }
  };

  reset = () => {
      this.setState({
          result: ""
      })
  };

//  const App = () => {
//   return (
//     <div className="Container">
//      <Display/>
//      <ButtonDiv1/>
//      <ButtonDiv2/>
//     <ButtonDiv3/>
//     <ButtonDiv4/>
//      <ButtonDiv5/>
//     </div>
//   );
// };

  render() {
      return (
          <div>
              <div className="Container">
              <Display result={this.state.result}/>
              <ButtonDiv1 onClick={this.onClick}/>
     <ButtonDiv2 onClick={this.onClick}/>
    <ButtonDiv3 onClick={this.onClick}/>
    <ButtonDiv4 onClick={this.onClick}/>
     <ButtonDiv5 onClick={this.onClick}/>
              
              </div>
          </div>
      );
  }
}

export default App;



