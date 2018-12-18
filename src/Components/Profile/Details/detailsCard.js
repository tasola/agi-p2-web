import React, { Component } from 'react';
import './detailsCard.css';

import InformationCard from './Information/informationCard';
import ProfileDetailsCard from './ProfileDetails/profileDetailsCard';

class DetailsCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const profile = this.props.selectedProfile;
    const details = profile == null ? <InformationCard/> : <ProfileDetailsCard selectedProfile={profile}/>;

    return (
      <div className="detailsCard">
        { details }
      </div>
    );
  }
}

export default DetailsCard;
