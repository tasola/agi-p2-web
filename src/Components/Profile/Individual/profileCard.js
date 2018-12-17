import React, { Component } from 'react';
import './profileCard.css';

class ProfileCard extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
      this.props.onProfileClick(this.props.profile.id);
    }

  render() {
    return (
      <div className="profileCard">
        <h3 onClick={this.handleClick}>{this.props.profile.firstname}</h3>
      </div>
    );
  }
}

export default ProfileCard;
