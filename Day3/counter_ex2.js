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
    return <h3>Counter Started : {this.state.count}</h3>
  }
}

export default Counter;