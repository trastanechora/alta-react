import React, { Component } from 'react';
import profileBanner from './img/profile.png';
import locationIco from './ico/ico-location.png'
import './Project.css';

class Photos extends Component {
  render() {
    return (
      <section>
        <div className="horrizontal-line">
            <span className="margin-left-50"><img src={require("./ico/ico-gallery.png")} alt="" /></span><span className="margin-left-30">GALLERY</span>
            <br /><hr />
        </div>
        <div className="wrapper-galery row">
            <div className="col-lg-4 col-md-6 col-sm-12"><img src={require("./img/exp-gallery/jake-allison-1322894-unsplash.jpg")} alt="" className="galery-photo" /></div>
            <div className="col-lg-4 col-md-6 col-sm-12"><img src={require("./img/exp-gallery/jay-lee-1323073-unsplash.jpg")} alt="" className="galery-photo" /></div>
            <div className="col-lg-4 col-md-6 col-sm-12"><img src={require("./img/exp-gallery/nic-yee-1321843-unsplash.jpg")} alt="" className="galery-photo" /></div>
            <div className="col-lg-4 col-md-6 col-sm-12"><img src={require("./img/exp-gallery/nordwood-themes-1319985-unsplash.jpg")} alt="" className="galery-photo" /></div>
            <div className="col-lg-4 col-md-6 col-sm-12"><img src={require("./img/exp-gallery/phil-desforges-1322844-unsplash.jpg")} alt="" className="galery-photo" /></div>
            <div className="col-lg-4 col-md-6 col-sm-12"><img src={require("./img/exp-gallery/ryan-1321510-unsplash.jpg")} alt="" className="galery-photo" /></div>
        </div>
    </section>
    );
  }
}

export default Photos;
