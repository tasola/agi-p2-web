import React, { Component } from 'react';
import './start.css';

class Start extends Component {
  render() {
    return (
      <div className="startPage">
        <div className="headerWrapper">
          <h2>VRStressed</h2>
        </div>
        <div className="scrollWrapper">
          <a className="icon-scroll" href="#about" />
        </div>
      </div>
    );
  }
}

export default Start;
