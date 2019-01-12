import React, { Component } from 'react';
import './start.css';
import ScrollableAnchor from 'react-scrollable-anchor';

class Start extends Component {
  render() {
   return (
      <ScrollableAnchor id="startPage">
        <div className="startPageWrapper">
          <div className="headerWrapper">
            <h2>VRStressed</h2>
          </div>
          <div className="scrollWrapper">
            <a className="icon-scroll" href="#aboutPage" />
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Start;
