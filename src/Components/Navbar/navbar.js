import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isHide: true };
    this.hideNavBar = this.hideNavBar.bind(this);
  }

  hideNavBar = () => {
    let { isHide } = this.state;
    window.scrollY > this.prev ? !isHide && this.setState({ isHide: true }) : isHide && this.setState({ isHide: false });
    this.prev = window.scrollY;
  };

  componentDidMount() {
    window.addEventListener('scroll', this.hideNavBar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideNavBar);
  }

  render() {
    let classHide = this.state.isHide ? 'hide' : '';
    console.log(classHide);
    return (
      <div className={`navbar ${classHide}`}>
        <a href="#aboutPage">hej</a>
        <a href="#teamPage">hejdå</a>
      </div>
    );
  }
}

export default Navbar;
