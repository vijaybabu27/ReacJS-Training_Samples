import React, { Component } from 'react';
import { render } from 'react-dom';

class ParentChildEx extends Component {

  state = {
    inputVal : "1"
  }

  txtFunc = (evt) => {
    this.setState({inputVal : evt.target.value});
  }

  render() {
    
    return <div>
    <p>Enter the Number <input tyep="text" value={this.state.inputVal} onChange={this.txtFunc} size="5" /></p>
    <Child1 value={this.state.inputVal} />
    <Child2 value={this.state.inputVal} /></div>
  }
}

class Child1 extends Component {
  render() {
    let evnodd = (this.props.value %2 === 0)? "Even" : "Odd";
    return <div>From Child1 : {this.props.value} is {evnodd}</div>
  }
}

class Child2 extends Component {

  checkPrime = (value) => {
    for (var i = 2; i < value; i++) {
      if (value % i === 0) {
        return false;
      }
    }
    return value > 1; 
  }

  render() {
    let val = parseInt(this.props.value);
    let prime = (this.checkPrime(val)) ? "Prime Number" : "Not a Prime Number";
    return <div>From Child2 : {this.props.value} is {prime}</div>
  }
}

export default ParentChildEx;