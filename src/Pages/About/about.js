import React, { Component } from 'react';
import './about.css';
import ScrollableAnchor from 'react-scrollable-anchor';

class About extends Component {
  render() {
    return (
      <ScrollableAnchor id="aboutPage">
        <div className="aboutPageWrapper">
          <h2>About</h2>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default About;
