import React, { Component } from 'react';
import logo from '../logo/logo-alterra-academy.png';
import '../css/Project.css';

class Header extends Component {
  render() {
    return (
      <header className="header1">
        <div className="row head-row">
          <div class="col-md-3 col-sm-6">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <img src={logo} alt=""/>
            </nav>
          </div>
        <div class="col-md-9 col-sm-6">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav row" id="ul-nav">
            <li className="nav-item active col-lg-2">
              <a className="nav-link a-orange" href="#">ABOUT <span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item col-lg-2">
              <a className="nav-link a-blue" href="galery.html">GALLERY</a>
              </li>
              <li className="nav-item col-lg-2">
              <a className="nav-link a-blue" href="contact.html">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
        </div>
      </header>
    );
  }
}

export default Header; 
