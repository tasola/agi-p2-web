import React, { Component } from 'react';
import './team.css';

import ProfilesCard from './../../Components/Profile/Everyone/profilesCard';
import DetailsCard from './../../Components/Profile/Details/detailsCard';

import ImageJulian from "../../resources/images/team/julian.jpg";
import ImageLinnea from "../../resources/images/team/linnea.jpg";
import ImageGustav from "../../resources/images/team/gustav.jpg";
import ImageAlex from "../../resources/images/team/alex.jpg";
import ImageLeif from "../../resources/images/team/leif.jpg";
import ImagePetter from "../../resources/images/team/petter.jpg";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedProfile: null,
        profiles: [
          {
            id: 1,
            firstname: "Julian",
            lastname: "Hedén",
            role: "AR-DEVELOPER",
            description: "Julian's contributions mostly consist of Augmented Reality and game programming within the app. His focus has been on creating, localizing and keeping track of objects in the AR space. He's also developed some game mechanics, such as the wind and boundaries/fences. Julian has also acted as part project manager and helped merge the pieces together (being the only one with an ARCore compatible device).",
            linkedin: "https://www.linkedin.com/in/gustav-johansson-b85b42109/",
            github: "https://github.com/gustavjohansson",
            image: ImageJulian,
        },
        {
            id: 2,
            firstname: "Linnea",
            lastname: "Holm",
            role: "WEB DEVELOPER / UX / COPY",
            description: "Responsible for the user experience of the game, Linnea has taken lead on the UX research, testing and evaluation during the development of this game. She has also been involved in some of the visual design decisions throughout the development process. At the later stages of the project, she was part of the website developing team, equally focused on coding and styling as well as being the project's copywriter.",
            linkedin: "https://www.linkedin.com/in/gustav-johansson-b85b42109/",
            github: "https://github.com/gustavjohansson",
            image: ImageLinnea,
          },
        {
            id: 3,
            firstname: "Gustav",
            lastname: "Johansson",
            role: "GAME DEVELOPER",
            description: "Gustav’s focus in this project have mainly been on game mechanics; animating collectibles, developing functionality for power ups, integrating modalities such as vibration on collision and moving the zeppelin when blowing on the screen, signal processing, creating the leaderboard - both programmatically but also the UI design. He has also been rewriting parts of the code to make it more object oriented and scalable for future use.",
            linkedin: "https://www.linkedin.com/in/gustav-johansson-b85b42109/",
            github: "https://github.com/gustavjohansson",
            image: ImageGustav,
        },
        {
            id: 4,
            firstname: "Alexandra",
            lastname: "Runhem",
            role: "AR AND WEB DEVELOPER",
            description: "Alexandra has been responsible for programming game mechanics in C#, such as physical attributes of the objects, spawning logic as well as visual feedback. Been Julian's co-programmer and brainstormed the different mathematical functions that our application is built upon. As part of the web development team, she set up the core of this Angular website as well as basic layouting and styling.",
            linkedin: "https://www.linkedin.com/in/gustav-johansson-b85b42109/",
            github: "https://github.com/gustavjohansson",
            image: ImageAlex,
        },
        {
            id: 5,
            firstname: "Leif",
            lastname: "Thysell Sundqvist",
            role: "ARTIST",
            description: "Mainly responsible for 2D and 3D design and assets as well as illustrations and animations. The 3D models were modelled in Blender and directly exported to the project in Unity. The 2D assets were designed in Adobe Photoshop, and the animated videos in Blender as well as Adobe After Effects. I also assisted with game mechanics and functionality whenever there was need of an extra hand.",
            linkedin: "https://www.linkedin.com/in/gustav-johansson-b85b42109/",
            github: "https://github.com/gustavjohansson",
            image: ImageLeif,
        },
        {
            id: 6,
            firstname: "Petter",
            lastname: "Tasola",
            role: "GAME AND WEB DEVELOPER",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis nulla, dapibus non vehicula ut, consequat sit amet ipsum. Nullam ut tortor condimentum, hendrerit purus hendrerit, pretium ipsum. Suspendisse ultricies, ipsum ac volutpat imperdiet, ex nulla bibendum magna, sed condimentum felis turpis et velit. Ut eleifend risus a eros interdum feugiat. Nunc rhoncus quam vitae ipsum fringilla gravida. Praesent a volutpat neque. Vestibulum vitae consectetur sapien. Aliquam accumsan quis eros sed faucibus. Phasellus sodales facilisis metus vitae mattis.",
            linkedin: "https://www.linkedin.com/in/petter-tasola-699a8714b/",
            github: "https://github.com/tasola",
            image: ImagePetter,
        }]
    }

    this.onProfileClick = this.onProfileClick.bind(this);
  }

  onProfileClick(id) {
    var profile = this.state.profiles.find(x => x.id == id);

    if (profile != null) {
      this.setState({
            selectedProfile: profile
        });
    }
  }

  render() {
    const profiles = this.state.profiles;
    const selectedProfile = this.state.selectedProfile;
    const onProfileClick = this.onProfileClick;

    return (
      <div className="teamPage">
        <h2>About the Team</h2>
        <ProfilesCard profiles={profiles} onProfileClick={onProfileClick}/>
        <DetailsCard selectedProfile={selectedProfile}/>
      </div>
    );
  }
}

export default Team;
