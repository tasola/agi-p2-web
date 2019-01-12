import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import ScrollableAnchor from 'react-scrollable-anchor';
import './about.css';

import vrIcon from '../../resources/icons/vr.png';
import controllerIcon from '../../resources/icons/controllers.png';
import visionIcon from '../../resources/icons/vision.png';
import mountain from '../../resources/images/about/mountain.jpg';

// Change the following to a downloaded img in /resources when an appropriate one is found.
const aboutImg = 'https://s3-eu-west-1.amazonaws.com/grm-assets/18088/maxresdefault.jpg';

class About extends Component {
  render() {
    return (
      <div className="aboutPage">
        <ScrollableAnchor id="aboutPage">
          <Parallax className="aboutParallax" bgImage={mountain} strength={700}>
            <div className="aboutContentWrapper">
              <div className="aboutContent">
                <h2>about</h2>
                <p>Life can sometimes be stressful. Common methods to reduce stress often focus on imagining a calm place in your mind.</p>
                <h4>We wanted to make that calm place real.</h4>

                <hr />

                <div className="aboutCard">
                  <img src={vrIcon} />
                  <h3>virtual reality</h3>
                  <p>
                    In order to make the user feel like they actually are somewhere else, we decided to use virtual reality in combination
                    with 3D sound.
                  </p>
                </div>
                <div className="aboutCard" id="inverseCard">
                  <img src={controllerIcon} />
                  <h3>seamless controlling</h3>
                  <p>
                    As for the interactions it was of great importance for us to make the controlling as natural and seamless as possible to
                    not disrupt the user.
                  </p>
                </div>
                <div className="aboutCard">
                  <img src={visionIcon} id="smallerIcon" />
                  <h3>raptor vision</h3>
                  <p>
                    The most important part of a person's safe-zone is often the visuals. We had the pleasure to use Raptor Vision's 270 deg
                    camera to record the soothing visuals of VRStressed.
                  </p>
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
