import React, {Component} from 'react'
import {render} from 'react-dom'

class Counter extends Component {

  constructor(props){
    super(props);
    this.state = {
      count: parseInt(this.props.start)
    }

    setInterval(()=> {
      this.setState({
        count : parseInt(this.state.count) + 1
      })
    }, 1000);

  }

  render() {
    return <h2>Counter Started : {this.state.count}</h2>
  }
}

export default Counter;