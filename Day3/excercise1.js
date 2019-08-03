import React, {Component} from 'react'
import {render} from 'react-dom'

function Greetf(props) {
  return <h3> Function Welcome {props.name} </h3>
}

class Greetc extends Component {
  render() {
    //return <Greetf name={this.props.name} />
    return <h3>Class Welcome {this.props.name} </h3>
  }
}

export {Greetf, Greetc};