import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Start from './Pages/Start/start';
import About from './Pages/About/about';
import Team from './Pages/Team/team';
import Feedback from './Pages/Feedback/feedback';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Start />
        <About />
        <Team />
        <Feedback />
      </div>
    );
  }
}

export default App;
