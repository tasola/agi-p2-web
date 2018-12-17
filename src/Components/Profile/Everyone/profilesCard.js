import React, { Component } from 'react';
import './profilesCard.css';

import ProfileCard from './../Individual/profileCard';

class ProfilesCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var allProfiles = this.props.profiles.map((profile) => (
      <ProfileCard key={profile.id} profile={profile} onProfileClick={this.props.onProfileClick}/>
    ))

    return (
      <div className="profilesCard">
          <div className="profilesList"> 
            { allProfiles }
          </div>
      </div>
    );
  }
}

export default ProfilesCard;
