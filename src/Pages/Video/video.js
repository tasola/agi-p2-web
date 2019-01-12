import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './video.css';

class Video extends Component {
  render() {
    return (
        <ScrollableAnchor id="videoPage">
        <div className="videoPage">
            <div className="videoWrapper">
                <iframe className="video" src="https://www.youtube.com/embed/vUkSOgkVkjA" frameborder="0" allowfullscreen></iframe>
            </div>
            </div>
        </ScrollableAnchor>
    );
  }
}

export default Video;
