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
    const profile = this.props.profile;

    return (
      <div className="profileCard">
        <img onClick={this.handleClick} src={ profile.image } alt="Image not found."/>
      </div>
    );
  }
}

export default ProfileCard;
