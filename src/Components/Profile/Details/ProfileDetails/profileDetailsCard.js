import React, { Component } from 'react';
import './profileDetailsCard.css';

import ImageLinkedIn from '../../../../resources/icons/linkedInLogo.png';
import ImageEmail from '../../../../resources/icons/mailLogo.jpg';

class ProfileDetailsCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const profile = this.props.selectedProfile;

    return (
      <div className="profileDetailsCard">
        <div className="profileDetailsNameRole">
          <h2>{ profile.firstname } { profile.lastname }</h2>
          <h3>{ profile.role }</h3>
        </div>
        <div className="profileDetailsDescription">
          <h4>{ profile.description }</h4>
        </div>
        <div className="profileDetailsLinks">
          <a id="linkedin" href={ profile.linkedin } target="_blank">
            <img classname="profileDetailsLogo" src={ ImageLinkedIn }/>
          </a>
          <a id="mail" href={ profile.github } target="_blank">
            <img classname="profileDetailsLogo" src={ ImageEmail }/>
          </a>
        </div>
      </div>
    );
  }
}

export default ProfileDetailsCard;
