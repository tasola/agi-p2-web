import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import './about.css';

const aboutImg = 'https://s3-eu-west-1.amazonaws.com/grm-assets/18088/maxresdefault.jpg';

class About extends Component {
  render() {
    return (
      <div className="aboutPage">
        <Parallax className="aboutParallax" bgImage={aboutImg} strength={600}>
          <div className="aboutContentWrapper">
            <div className="aboutContent">
              <h2>About</h2>
              <p>Lorem ipsum</p>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default About;

// import React, { Component } from 'react';
// import './about.css';
//
// const aboutImg = 'https://s3-eu-west-1.amazonaws.com/grm-assets/18088/maxresdefault.jpg';
//
// class About extends Component {
//   render() {
//     return (
//       <div className="aboutPage">
//         <div className="aboutImgWrapper">
//           <div className="aboutImg" />
//         </div>
//         <div className="aboutContentWrapper">
//           <div className="aboutContent">
//             <h2>About</h2>
//             <p>Lorem ipsum</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// //Users/Petter/documents/github/agi-p2-web/src/resources/images/about/about.jpg
// export default About;
