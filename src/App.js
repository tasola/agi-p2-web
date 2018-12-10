import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Startpage from './Startpage/startpage';
import About from './Aboutpage/about';
import Team from './Teampage/team';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Startpage />
        <About />
        <Team />
      </div>
    );
  }
}

export default App;
