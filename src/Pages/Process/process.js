import React, { Component } from 'react';
import './process.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Parallax, Background } from 'react-parallax';
import { Carousel } from 'react-bootstrap';

import ProcessImg01 from '../../resources/images/process/process01.jpg';
import ProcessImg02 from '../../resources/images/process/process02.jpg';

class Process extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollableAnchor id="processPage">
        <Carousel className="processPageWrapper">
            <Carousel.Item>
                  <img class="carouselImage" alt="900x500" src={ ProcessImg01 } />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img class="carouselImage" alt="900x500" src={ ProcessImg02 } />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img class="carouselImage" alt="900x500" src={ ProcessImg01 } />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img class="carouselImage" alt="900x500" src={ ProcessImg01 } />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
      </ScrollableAnchor>

      // <div className="teamPageWrapper">
      //   <h2>About the Team</h2>
      //   <ProfilesCard profiles={profiles} onProfileClick={onProfileClick} />
      //   <DetailsCard selectedProfile={selectedProfile} />
      // </div>


    );
  }
}

export default Process;
