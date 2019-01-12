import React, { Component } from 'react';
import './process.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Parallax, Background } from 'react-parallax';
import { Carousel } from 'react-bootstrap';

import ProcessImg01 from '../../resources/images/process/process01.png';
import ProcessImg02 from '../../resources/images/process/process02.png';
import ProcessImg03 from '../../resources/images/process/process03.png';
import ProcessImg04 from '../../resources/images/process/process04.png';
import ProcessImg05 from '../../resources/images/process/process05.png';
import ProcessImg06 from '../../resources/images/process/process06.png';

class Process extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollableAnchor id="processPage">
        <Carousel className="processPageWrapper">
          <Carousel.Item>
            <img class="carouselImage" alt="900x500" src={ProcessImg01} />
            <Carousel.Caption>
              <h3>brainstorming</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img class="carouselImage" alt="900x500" src={ProcessImg02} />
            <Carousel.Caption>
              <h3>development</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img class="carouselImage" alt="900x500" src={ProcessImg03} />
            <Carousel.Caption>
              <h3>development</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img class="carouselImage" alt="900x500" src={ProcessImg04} />
            <Carousel.Caption>
              <h3>UX</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img class="carouselImage" alt="900x500" src={ProcessImg05} />
            <Carousel.Caption>
              <h3>open house</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img class="carouselImage" alt="900x500" src={ProcessImg06} />
            <Carousel.Caption>
              <h3>open house</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </ScrollableAnchor>
    );
  }
}

export default Process;
