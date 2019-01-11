import React, { Component } from 'react';
//import { Parallax } from 'react-parallax';
import ScrollableAnchor from 'react-scrollable-anchor';
import Rating from 'react-rating';
import './feedback.css';

import imageJulian from '../../resources/images/team/julian.jpg';
import imageGustav from '../../resources/images/team/gustav.jpg';
import imageLinnea from '../../resources/images/team/linnea.jpg';

import starFilled from '../../resources/icons/Feedback/starFilled.png';
import starEmpty from '../../resources/icons/Feedback/starEmpty.png';

const filledStar = <img src={starFilled} className="starFilled" />;
const emptyStar = <img src={starEmpty} className="starEmpty" />;

class Feedback extends Component {
  render() {
    return (
      <div className="feedbackPage">
        <ScrollableAnchor id="feedbackPage">
          <div>
            <div className="feedbackHeader">
              <h2>user feedback</h2>
              <p>
                VRStressed was constantly developed with the user in focus throughout the whole process. Multiple iterative user studies
                were carried out, which resulted in both encouraging and constructive feedback.
              </p>
            </div>
            {/* The following code repetition will be removed in another iteration */}
            <div className="reviewCards">
              <div className="reviewCard">
                <img src={imageJulian} />
                <h4 className="reviewName">Julian Hedén</h4>
                <div className="starRating">
                  <Rating initialRating={4} readonly emptySymbol={emptyStar} fullSymbol={filledStar} />
                </div>
                <div className="reviewQuote">
                  <p> "This was the most impressive experience ever. It was fantastic. Lorem ipsum!"</p>
                </div>
              </div>
              <div className="reviewCard">
                <img src={imageGustav} />
                <h4 className="reviewName">Gustav Johansson</h4>
                <div className="starRating">
                  <Rating initialRating={4} readonly emptySymbol={emptyStar} fullSymbol={filledStar} />
                </div>
                <div className="reviewQuote">
                  <p> "Wow...."</p>
                </div>
              </div>
              <div className="reviewCard">
                <img src={imageLinnea} />
                <h4 className="reviewName">Linnea Holm</h4>
                <div className="starRating">
                  <Rating initialRating={5} readonly emptySymbol={emptyStar} fullSymbol={filledStar} />
                </div>
                <div className="reviewQuote">
                  <p>
                    {' '}
                    "Lorem ipsum this was incredible. Simply the best application I have ever tried. I feel like a new human being after
                    this experience."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default Feedback;
