import React, { Component } from 'react';

class ProfileDetailsCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const profile = this.props.selectedProfile;

    return (
      <div className="detailsCard">
        <div>
          <p>{ profile.id }</p>
          <p>{ profile.firstname }</p>
          <p>{ profile.lastname }</p>
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
