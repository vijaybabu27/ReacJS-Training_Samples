import React, {Component} from 'react'
import {render} from 'react-dom'

function Greetf(props) {
  return <h2> Function Welcome {props.name} </h2>
}

class Greetc extends Component {
  render() {
    //return <Greetf name={this.props.name} />
    return <h2>Class Welcome {this.props.name} </h2>
  }
}

export {Greetf, Greetc};