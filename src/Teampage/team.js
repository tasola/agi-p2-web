import React, { Component } from 'react';
import './team.css';

import ProfileCard from './../Components/profileCard';

class Team extends Component {
  render() {
    return (
      <div className="teamPage">
        <h2>About the Team</h2>
        <ProfileCard name="Piecterketchup" />
        <ProfileCard name="Golgi" />
      </div>
    );
  }
}

export default Team;
