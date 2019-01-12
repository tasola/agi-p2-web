import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isHide: true, time: 0, hover: false };
    this.hoverNavBar = this.hoverNavBar.bind(this);
    this.mouseOutNavBar = this.mouseOutNavBar.bind(this);
    this.hideNavBar = this.hideNavBar.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  hoverNavBar = () => {
    this.setState({
      hover: true,
    });
  };

  mouseOutNavBar = () => {
    this.setState({
      hover: false,
    });
  };

  hideNavBar = () => {
    let { isHide } = this.state;
    window.scrollY > this.prev ? !isHide && this.setState({ isHide: true }) : isHide && this.setState({ isHide: false });
    this.stopTimer();
    if (!this.state.isHide) this.startTimer();
    this.prev = window.scrollY;
  };

  startTimer = () => {
    clearInterval(this.timer);
    this.timer = setInterval(
      () =>
        this.setState({
          time: this.state.time + 1,
        }),
      1000,
    );
  };

  stopTimer = () => {
    this.setState({
      time: 0,
    });
  };

  componentDidMount() {
    const navbar = document.getElementById('navbar');
    console.log(navbar);
    navbar.addEventListener('mouseover', this.hoverNavBar);
    navbar.addEventListener('mouseout', this.mouseOutNavBar);
    window.addEventListener('scroll', this.hideNavBar);
  }

  componentWillUnmount() {
    const navbar = document.getElementById('navbar');
    window.removeEventListener('scroll', this.hideNavBar);
    navbar.removeEventListener('mouseover', this.hoverNavBar(true));
    navbar.removeEventListener('mouseout', this.hoverNavBar(false));
  }

  render() {
    let classHide = this.state.isHide ? 'hideNavbar' : '';
    if (this.state.time >= 2 && !this.state.hover) classHide = 'hideNavbar';
    return (
      <div id="navbar" className={`navbar ${classHide}`}>
        <a href="#aboutPage">about</a>
        <a href="#demoPage">demo</a>
        <a href="#teamPage">team</a>
        <a href="#reviewSection">reviews</a>
        <a href="#evaluationSection">evaluation</a>
        <a href="#processPage">process</a>
      </div>
    );
  }
}

export default Navbar;
