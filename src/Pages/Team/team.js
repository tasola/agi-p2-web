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
        role: 'game developer',
        description:
          "Julian's contributions mostly consist of Augmented Reality and game programming within the app. His focus has been on creating, localizing and keeping track of objects in the AR space. He's also developed some game mechanics, such as the wind and boundaries/fences. Julian has also acted as part project manager and helped merge the pieces together (being the only one with an ARCore compatible device).",
        linkedin: 'https://www.linkedin.com/in/julian-heden/',
        mail: 'pjheden@kth.se',
        image: ImageJulian,
      },
      profiles: [
        {
          id: 1,
          firstname: 'julian',
          lastname: 'hedén',
          role: 'game developer',
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
          role: 'UX designer',
          description:
            "Responsible for the user experience of the game, Linnea has taken lead on the UX research, testing and evaluation during the development of this game. She has also been involved in some of the visual design decisions throughout the development process. At the later stages of the project, she was part of the website developing team, equally focused on coding and styling as well as being the project's copywriter.",
          linkedin: 'https://linkedin.com/in/holmlinnea/',
          mail: 'lihol@kth.se',
          image: ImageLinnea,
        },
        {
          id: 3,
          firstname: 'gustav',
          lastname: 'johansson',
          role: 'web developer',
          description:
            'Gustav’s focus in this project have mainly been on game mechanics; animating collectibles, developing functionality for power ups, integrating modalities such as vibration on collision and moving the zeppelin when blowing on the screen, signal processing, creating the leaderboard - both programmatically but also the UI design. He has also been rewriting parts of the code to make it more object oriented and scalable for future use.',
          linkedin: 'https://www.linkedin.com/in/gustav-johansson-b85b42109/',
          mail: 'gustjoh@kth.se',
          image: ImageGustav,
        },
        {
          id: 4,
          firstname: 'alexandra',
          lastname: 'runhem',
          role: 'game developer',
          description:
            "Alexandra has been responsible for programming game mechanics in C#, such as physical attributes of the objects, spawning logic as well as visual feedback. Been Julian's co-programmer and brainstormed the different mathematical functions that our application is built upon. As part of the web development team, she set up the core of this Angular website as well as basic layouting and styling.",
          linkedin: 'https://www.linkedin.com/in/alexandrarunhem/',
          mail: 'arunhem@kth.se',
          image: ImageAlex,
        },
        {
          id: 5,
          firstname: 'leif',
          lastname: 'thysell sundqvist',
          role: 'game developer / artist',
          description:
            'Mainly responsible for 2D and 3D design and assets as well as illustrations and animations. The 3D models were modelled in Blender and directly exported to the project in Unity. The 2D assets were designed in Adobe Photoshop, and the animated videos in Blender as well as Adobe After Effects. I also assisted with game mechanics and functionality whenever there was need of an extra hand.',
          linkedin: 'https://www.linkedin.com/in/leiftysellsundkvist/',
          mail: 'leifsun@kth.se',
          image: ImageLeif,
        },
        {
          id: 6,
          firstname: 'petter',
          lastname: 'tasola',
          role: 'web developer',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis nulla, dapibus non vehicula ut, consequat sit amet ipsum. Nullam ut tortor condimentum, hendrerit purus hendrerit, pretium ipsum. Suspendisse ultricies, ipsum ac volutpat imperdiet, ex nulla bibendum magna, sed condimentum felis turpis et velit. Ut eleifend risus a eros interdum feugiat. Nunc rhoncus quam vitae ipsum fringilla gravida. Praesent a volutpat neque. Vestibulum vitae consectetur sapien. Aliquam accumsan quis eros sed faucibus. Phasellus sodales facilisis metus vitae mattis.',
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
