import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import '../css/style.css';

class BlogPost extends Component {
  render() {
    return (
      <div className="container-fluid row top-articles box blog-container">
        <div className="col-md-12 blog-photo">
          <img className="blog-img" src={require("../img/photo_2019-03-11_17-07-30.jpg")} />
        </div>
        <div className="col-md-12 container">
          <h4 className="blog-title">Nikahi Rakyat Jelata, Putri Ayako dari Jepang Lepaskan Gelar Kerajaan</h4>
          <small>Pernikahan Putri Ayako dan Kei Moriya dilangsungkan lewat upacara tradisional Jepang.</small>
          <br/>

          <p>Last updated 3 mins ago</p>
        </div>
      </div>
    );
  }
}

export default BlogPost; 
