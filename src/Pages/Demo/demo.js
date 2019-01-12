
import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './demo.css';

class Demo extends Component {
  render() {
    return (
        <ScrollableAnchor id="demoPage">
        <div className="videoPage">
            <div className="videoWrapper">
                <iframe className="video" src="https://www.youtube.com/embed/vUkSOgkVkjA" frameborder="0" allowfullscreen></iframe>
            </div>
            </div>
        </ScrollableAnchor>
    );
  }
}

export default Demo;
