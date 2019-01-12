import React, { Component } from 'react';
import './team.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Parallax, Background } from 'react-parallax';

import ProfilesCard from './../../Components/Profile/Everyone/profilesCard';
import DetailsCard from './../../Components/Profile/Details/detailsCard';

import ImageJulian from '../../resources/images/team/julian.jpg';
import ImageLinnea from '../../resources/images/team/linnea.jpg';
import ImageGustav from '../../resources/images/team/gustav.jpg';
import ImageAlex from '../../resources/images/team/alex.jpg';
import ImageLeif from '../../resources/images/team/leif.jpg';
import ImagePetter from '../../resources/images/team/petter.jpg';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProfile: {
        id: 1,
        firstname: 'julian',
        lastname: 'hedén',
        role: 'developer',
        description:
          'Mainly responsible for the back end services and the mobile app. Besides that some minor work with VR interactivity. The back end consist of a simple flask server which connects an Android application together with the VR scene running in Unity. The Android app is made with Android studio and sends data to the server upon simple interactions. Unity requests updates from the server on a short interval and act accordingly.',
        linkedin: 'https://www.linkedin.com/in/julian-heden/',
        mail: 'pjheden@kth.se',
        image: ImageJulian,
      },
      profiles: [
        {
          id: 1,
          firstname: 'julian',
          lastname: 'hedén',
          role: 'developer',
          description:
            'Mainly responsible for the back end services and the mobile app. Besides that some minor work with VR interactivity. The back end consist of a simple flask server which connects an Android application together with the VR scene running in Unity. The Android app is made with Android studio and sends data to the server upon simple interactions. Unity requests updates from the server on a short interval and act accordingly.',
          linkedin: 'https://www.linkedin.com/in/julian-heden/',
          mail: 'pjheden@kth.se',
          image: ImageJulian,
        },
        {
          id: 2,
          firstname: 'linnea',
          lastname: 'holm',
          role: 'project manager',
          description:
            "Project manager and responsible for the planning and execution of VRStressed. Responsibilities included following up with team members throughout the project, keeping track of individual contributions, where they were on time, overall communication, following up on goals and motivations with the group. Responsible and involved in the different interaction methods and mappings of the Vive controllers that we chose to work with, as well as ideation and continuous testing of these. Involved in coding the app for the animal interaction. Recorded the voice clips.",
          linkedin: 'https://linkedin.com/in/holmlinnea/',
          mail: 'lihol@kth.se',
          image: ImageLinnea,
        },
        {
          id: 3,
          firstname: 'gustav',
          lastname: 'johansson',
          role: 'UX / web developer',
          description:
            'Responsible for the UX of the game as well as the creation of the web page. I have, together with Petter, been leading the UX research by doing continous testing and evaluation during the development of the game. Several studies were conducted to figure out what kind of environments and sounds people find most soothing. During the evaluation, several think aloud were conducted. I have also taken part in creating the web page, more specifically; the team section as well as the slide show.',
          linkedin: 'https://www.linkedin.com/in/gustav-johansson-b85b42109/',
          mail: 'gustjoh@kth.se',
          image: ImageGustav,
        },
        {
          id: 4,
          firstname: 'alexandra',
          lastname: 'runhem',
          role: 'developer',
          description:
            "As part of the developer team, my main focus was to script our vision of the VR experience in C# and set up the functionality in Unity. Due to lack of hardware, Leif and I spend some time co-programming the interaction and effects, such as 3D sound and weather changes. I was also responsible for filming and processing the footage as well as creating a equirectangular footage in After Effects to extract images for a cube map later applied on our soap bubbles.",
          linkedin: 'https://www.linkedin.com/in/alexandrarunhem/',
          mail: 'arunhem@kth.se',
          image: ImageAlex,
        },
        {
          id: 5,
          firstname: 'leif',
          lastname: 'thysell sundqvist',
          role: 'developer / artist',
          description:
            'Mainly responsible for 2D and 3D design and assets as well as illustrations and animations. The 3D models were modelled in Blender and directly exported to the project in Unity. The 2D assets were designed in Adobe Photoshop, and the animated videos in Blender as well as Adobe After Effects. I also assisted with game mechanics and functionality!',
          linkedin: 'https://www.linkedin.com/in/leiftysellsundkvist/',
          mail: 'leifsun@kth.se',
          image: ImageLeif,
        },
        {
          id: 6,
          firstname: 'petter',
          lastname: 'tasola',
          role: 'UX / web developer',
          description:
            'Been taking part in doing research for user experience as well as developed the web page. Together with Gustav, I have been leading the UX research by doing continous testing and evaluation. We conducted studies to find out what environments and sounds people find most relaxing. As part of the evaluation, we conducted think alouds to see how people percieved our game. I have been developing the web page, more specifically; the about, feedback and future sections!',
          linkedin: 'https://www.linkedin.com/in/petter-tasola-699a8714b/',
          mail: 'pkul@kth.se',
          image: ImagePetter,
        },
      ],
    };

    this.onProfileClick = this.onProfileClick.bind(this);
  }

  onProfileClick(id) {
    var profile = this.state.profiles.find(x => x.id == id);

    if (profile != null) {
      this.setState({
        selectedProfile: profile,
      });
    }
  }

  render() {
    const profiles = this.state.profiles;
    const selectedProfile = this.state.selectedProfile;
    const onProfileClick = this.onProfileClick;

    return (
      <ScrollableAnchor id="teamPage">
        <Parallax className="teamParallax" strength={600}>
          <Background className="teamDetailsPicture">
            <img src={selectedProfile.image} />
          </Background>
          <div class="teamDetails">
            <DetailsCard selectedProfile={selectedProfile} />
          </div>
          <div className="teamContentWrapper">
            <div className="teamContent">
              <h2>team</h2>
              <p>VRStressed is a product of three weeks' intense work done by six M.Sc students at KTH.</p>
              <h4>meet the creators.</h4>
              <hr />
            </div>
            <ProfilesCard className="profileCard" profiles={profiles} onProfileClick={onProfileClick} />
          </div>
        </Parallax>
      </ScrollableAnchor>

      // <div className="teamPageWrapper">
      //   <h2>About the Team</h2>
      //   <ProfilesCard profiles={profiles} onProfileClick={onProfileClick} />
      //   <DetailsCard selectedProfile={selectedProfile} />
      // </div>
    );
  }
}

export default Team;
