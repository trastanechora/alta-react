import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './logo/logo-alterra-academy.png';
import profileBanner from './img/profile.png';
import './Project.css';
// import header from './img-header.png';

// document.row.style.fontSize = '20px';

class Project extends Component {
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

class ProjectBanner extends Component {
  render() {
    return (
      <section>
            <div id="front-banner">
                <div class="banner-element"><img src={profileBanner} alt="" id="profile-img"/></div>
                <div class="banner-element"><h1><span class="wow2">Evi</span> vs <span class="wow">Mae</span> | Alphatech</h1></div>
                <div class="banner-element" id="location"><span><img src="assets/ico/ico-location.png"/></span><span>   Malang, East Java, Indonesia.</span></div>
                <div class="banner-element">Front-end Developer</div>
                <div class="banner-element"><button type="button" class="btn btn-danger">Download CV</button></div>
            </div>
        </section>
    );
  }
}

export default Project; 
// ProjectBanner;
// export default ProjectBanner
