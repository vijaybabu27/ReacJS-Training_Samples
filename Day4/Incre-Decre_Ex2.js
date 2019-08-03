import React, {Component} from 'react'
import {render} from 'react-dom'

class Day4_IncreDecre2 extends Component {

  constructor(props){
    super(props);

    this.state = {
      count : parseInt(this.props.type)
    }

  }

  update = (flag) => {
    this.setState(
      {count : (flag) ? parseInt(this.state.count) + 1 : parseInt(this.state.count) - 1}
    );
  }

  render(){
    return <div>
  <button onClick={() => {this.update(true);} } >Increment </button>
  <h4> Togle Click Value : {this.state.count} </h4>
  <button onClick={() => {this.update(false);} }>Decrement </button>
</div>
  }
}

export default Day4_IncreDecre2;