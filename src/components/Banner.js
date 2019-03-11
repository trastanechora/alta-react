import React, { Component } from 'react';
import profileBanner from '../img/profile.png';
import locationIco from '../ico/ico-location.png'
import '../css/Project.css';

class Banner extends Component {
  render() {
    return (
      <section>
        <div id="front-banner">
            <div class="banner-element"><img src={profileBanner} alt="" id="profile-img"/></div>
            <div class="banner-element"><h1><span class="wow2">Evi</span> vs <span class="wow">Mae</span> | Alphatech</h1></div>
            <div class="banner-element" id="location"><span><img src={locationIco}/></span><span>   Malang, East Java, Indonesia.</span></div>
            <div class="banner-element">Front-end Developer</div>
            <div class="banner-element"><button type="button" class="btn btn-danger">Download CV</button></div>
        </div>
      </section>
    );
  }
}

export default Banner;
