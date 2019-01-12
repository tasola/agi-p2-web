import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import ScrollableAnchor from 'react-scrollable-anchor';
import Rating from 'react-rating';
import './feedback.css';

import imageMattsson from '../../resources/images/feedback/mattsson.jpeg';
import imageBengtsson from '../../resources/images/feedback/bengtsson.jpeg';
import imageHeden from '../../resources/images/feedback/heden.jpeg';
import imageOpenHouse from '../../resources/images/feedback/openhouse.jpeg';
import imageFuture from '../../resources/images/feedback/future.jpeg';

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
                    "I found VRStressed to be really soothing. The environment here is pretty stressful, but as soon as I put on that
                    headset it felt like I was somewhere else. I really enjoyed it!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="evaluationSection">
          <div>
            <div className="evaluation">
              <img src={imageOpenHouse} />
              <div className="futureCard">
                <div className="evaluationText">
                  <h3>the open house evaluation</h3>
                  <p>
                    At the end of the development we participated in KTH VIC:s Open House were we got the opportunity to evaluate the app
                    thanks to the many visitors. A total of 13 people tested VRStressed during the Open House, and the general impression
                    was very positive. People generally felt like they were taken away to a calm place thanks to the combination of virtual
                    reality and audio - something we aimed for from the very start. <br />
                    <br /> Overall the Open House was very rewarding in several ways. We got our final prototype evaluated, and to a great
                    extent also approved, by the users. Furthermore we got some great input on how VRStressed potentially could evolve.
                  </p>
                </div>
              </div>
            </div>
            <div className="evaluation" id="inversedEvaluation">
              <img src={imageFuture} />
              <div className="futureCard">
                <div className="evaluationText">
                  <h3>the future</h3>
                  <p>
                    During the development and evaluation we found several improvements that could be implemented if we decide to continue
                    working on VRStressed. For instance, the evaluations made us realize that it would be good to be able to toggle the
                    icons on/off so that you could appreciate your view completely. Furthermore it would have been nice to implement a
                    choice of environment, and perhaps a musical integration as well. <br />
                    <br /> One entrepreneurially minded participant even suggested that there could be potential in VRStressed-cafés; a
                    place where you could rent out an enhanced VRStressed experience with tactile addons such as wind and heat. The idea to
                    add further multimodality to the app and to speculate in it's market potential has made us discuss further development
                    after the course.
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
