import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import ScrollableAnchor from 'react-scrollable-anchor';
import './about.css';

import vrIcon from '../../resources/icons/vr.png';
import mountain from '../../resources/images/about/mountain.jpg';

// Change the following to a downloaded img in /resources when an appropriate one is found.
const aboutImg = 'https://s3-eu-west-1.amazonaws.com/grm-assets/18088/maxresdefault.jpg';

class About extends Component {
  render() {
    return (
      <div className="aboutPage">
        <ScrollableAnchor id="aboutPage">
          <Parallax className="aboutParallax" bgImage={mountain} strength={600}>
            <div className="aboutContentWrapper">
              <div className="aboutContent">
                <h2>about</h2>
                <p>Life can sometimes be stressful. Common methods to reduce stress often focus on imagining a calm place in your mind.</p>
                <h4>We wanted to make that calm place real.</h4>

                <hr />

                <div className="aboutCard">
                  <img src={vrIcon} />
                  <h3>virtual reality</h3>
                  <p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                </div>
                <div className="aboutCard" id="inverseCard">
                  <img src={vrIcon} />
                  <h3>3d sound</h3>
                  <p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                </div>
                <div className="aboutCard">
                  <img src={vrIcon} />
                  <h3>raptor vision</h3>
                  <p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                </div>
              </div>
            </div>
          </Parallax>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default About;
