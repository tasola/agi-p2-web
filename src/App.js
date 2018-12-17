import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Start from './Pages/Start/start';
import About from './Pages/About/about';
import Team from './Pages/Team/team';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Start />
        <About />
        <Team />
      </div>
    );
  }
}

export default App;
