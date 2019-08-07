import React, { Component } from 'react';
import { render } from 'react-dom';

class FormComponentEx extends Component {

  constructor(props){
    super(props)
    this.state = {
      userName : '',
      password : ''
    }
  }

  update= (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit= (event) => {
    console.log("UserName: " + this.state.userName);
    console.log("Password: " + this.state.password);
  }

  render () {
    return <div><form onSubmit={this.handleSubmit}>
      <label>User Name: </label>
      <input type="text" name="userName" value={this.state.userName} placeholder="type something" onChange={this.update}/> 
      <br /><br />
      <label>Password: </label>
      <input type="text" name="password" value={this.state.password} placeholder="type something" onChange={this.update}/>
      <br /><br />
      <input type="Submit" />
      </form>
      </div>
  }
}

export default FormComponentEx;