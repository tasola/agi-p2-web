import React, { Component } from 'react';
import './informationCard.css';

class InformationCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="informationCard">
        <p>Get to know the team!</p>
        <p>Select a member to view details.</p>
      </div>
    );
  }
}

export default InformationCard;
