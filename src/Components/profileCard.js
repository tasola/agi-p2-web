import React, { Component } from 'react';
import './profileCard.css';

class ProfileCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="profileCard">
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default ProfileCard;
