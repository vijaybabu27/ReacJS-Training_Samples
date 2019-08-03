import React, {Component} from 'react'
import {render} from 'react-dom'

class Day4_IncreDecre extends Component {

  constructor(props){
    super(props);

    this.state = {
      count : parseInt(this.props.type)
    }

  }

  increment= () => {
      this.setState (
        {count : parseInt(this.state.count) + 1}
      );
    }

    decrement = () => {
      this.setState (
        {count : parseInt(this.state.count) - 1}
      );
    }

  render(){
    return <div>
  <button onClick={this.increment}>Increment </button>
  <h3> Value : {this.state.count} </h3>
  <button onClick={this.decrement}>Decrement </button>
</div>
  }
}

export default Day4_IncreDecre