import React, { Component } from 'react';
import './profileDetailsCard.css';

import ImageLinkedIn from '../../../../resources/icons/linkedin.svg';
import ImageEmail from '../../../../resources/icons/email.svg';

class ProfileDetailsCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const profile = this.props.selectedProfile;
    const mail = "mailto:" + profile.mail;

    return (
      <div className="profileDetailsCard">
        <div className="profileDetailsNameRole">
          <h2>{ profile.firstname } { profile.lastname }</h2>
          <h3>{ profile.role }</h3>
        </div>
        <div className="profileDetailsDescription">
          <p>{ profile.description }</p>
        </div>
        <div className="profileDetailsLinks">
          <a id="linkedin" href={ profile.linkedin } target="_blank">
            <img classname="profileDetailsLogo" src={ ImageLinkedIn }/>
          </a>
          <a id="mail" href={ mail } target="_blank">
            <img classname="profileDetailsLogo" src={ ImageEmail }/>
          </a>
        </div>
      </div>
    );
  }
}

export default ProfileDetailsCard;
