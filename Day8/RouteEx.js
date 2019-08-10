import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

function Home () {
  return <div> Home </div>
}

function Dashboard () {
  return <div> Dashboard </div>
}

function About () {
  return <div> About </div>
}

class RouteEx extends Component {
  render() {
    return <div> <Router>
    <Link to="/Home">Home</Link> || 
    &nbsp;<Link to="/Dash">Dashboard</Link> || 
    &nbsp;<Link to="/About"> About</Link>

    <Route path="/home" component = {Home} />
    <Route path="/dash" component = {Dashboard} />
    <Route path="/about" component = {About} />
    </Router>
 </div>
  }
}

export default RouteEx;