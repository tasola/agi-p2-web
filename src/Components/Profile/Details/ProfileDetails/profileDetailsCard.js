import React, { Component } from 'react';
import './profileDetailsCard.css';

class ProfileDetailsCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const profile = this.props.selectedProfile;

    return (
      <div className="profileDetailsCard">
        <div>
          <img src={ profile.image } alt="Image not found."/>
          <p>{ profile.firstname } { profile.lastname }</p>
          <p>{ profile.role }</p>
          <p>{ profile.description }</p>
          <p>{ profile.github }</p>
          <p>{ profile.linkedin }</p>


        </div>
      </div>
    );
  }
}

export default ProfileDetailsCard;
