import React, {Component} from 'react';
import './Display.css';

class Display extends Component {

    render() {
        let {result} = this.props;
    return (
     <div className="Display" >
        {result}
     </div>   
    )
}
}

export default Display;

// const Display =(props) => {

//     return (
//      <form className="Display" >
//          <input type="text" placeholder="0"/>
//      </form>   
//     )
// }
