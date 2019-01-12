import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import ScrollableAnchor from 'react-scrollable-anchor';
import Rating from 'react-rating';
import './feedback.css';

import imageMattsson from '../../resources/images/feedback/mattsson.jpeg';
import imageBengtsson from '../../resources/images/feedback/bengtsson.jpeg';
import imageHeden from '../../resources/images/feedback/heden.jpeg';

import starFilled from '../../resources/icons/Feedback/starFilled.png';
import starEmpty from '../../resources/icons/Feedback/starEmpty.png';

const filledStar = <img src={starFilled} className="starFilled" />;
const emptyStar = <img src={starEmpty} className="starEmpty" />;

class Feedback extends Component {
  render() {
    return (
      <div className="feedbackPage">
        <ScrollableAnchor id="reviewSection">
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
                <img src={imageBengtsson} />
                <h4 className="reviewName">Olivia Bengtsson</h4>
                <div className="starRating">
                  <Rating initialRating={4} readonly emptySymbol={emptyStar} fullSymbol={filledStar} />
                </div>
                <div className="reviewQuote">
                  <p>
                    {' '}
                    "I love it. It's like the new fidget spinner in stress relief - only more real. I would love a Spotify integration in
                    this app!"
                  </p>
                </div>
              </div>
              <div className="reviewCard">
                <img src={imageMattsson} />
                <h4 className="reviewName">Gustav Mattsson</h4>
                <div className="starRating">
                  <Rating initialRating={5} readonly emptySymbol={emptyStar} fullSymbol={filledStar} />
                </div>
                <div className="reviewQuote">
                  <p>
                    {' '}
                    "It all feels very immersive... The visuals, the popping of the bubbles and even the reflections on the bubbles make the
                    experience very life-like. Well done! "
                  </p>
                </div>
              </div>
              <div className="reviewCard">
                <img src={imageHeden} />
                <h4 className="reviewName">Broder Hedén</h4>
                <div className="starRating">
                  <Rating initialRating={4} readonly emptySymbol={emptyStar} fullSymbol={filledStar} />
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
        <ScrollableAnchor id="evaluationSection">
          <div>
            <div className="evaluation">
              <img src={imageHeden} />
              <div className="futureCard">
                <div className="evaluationText">
                  <h3>the open house evaluation</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                    <br />
                    <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
            <div className="evaluation" id="inversedEvaluation">
              <img src={imageHeden} />
              <div className="futureCard">
                <div className="evaluationText">
                  <h3>the future</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                    <br />
                    <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
