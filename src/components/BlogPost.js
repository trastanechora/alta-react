import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import '../css/style.css';

class BlogPost extends Component {
  render() {
    return (
      <div className="container-fluid row top-articles blog-container">
      <div className="box blog-item">
        <div className="col-md-12 blog-photo">
          <img className="blog-img" src={require("../img/photo_2019-03-11_17-07-30.jpg")} />
        </div>
        <div className="col-md-12 container">
          <h4 className="blog-title">Aktivitas Alterra Academy Trainees</h4>
          <p class="blog-paragraf">Nullam nec eros quis ex accumsan finibus ut consequat magna. Nam vel elit efficitur, dictum dolor id, tristique ipsum. Pellentesque porttitor, lorem vel molestie euismod, elit ex tincidunt odio, et condimentum sapien felis quis lacus. Fusce elementum placerat leo, vel hendrerit augue eleifend in. Phasellus sit amet odio convallis, commodo nunc nec, venenatis quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, turpis ut elementum egestas, lorem neque semper urna, at rhoncus odio massa id ipsum. Morbi sed elit egestas, sagittis est vitae, luctus lacus. Phasellus ac dapibus sem. Mauris at facilisis enim. Nullam ac arcu tristique, aliquam erat sit amet, fermentum erat. Aliquam ipsum lorem, elementum nec ante eget, dapibus ultricies sem.</p>
          <br/>
          <small>Last updated 3 mins ago</small>
        </div>
      </div>

      <div className="box blog-item">
        <div className="col-md-12 blog-photo">
          <img className="blog-img" src={require("../img/alterra.jpeg")} />
        </div>
        <div className="col-md-12 container">
          <h4 className="blog-title">Alterra Academy, best place to learn technology.</h4>
          <p class="blog-paragraf">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <br/>
          <small>Last updated 3 mins ago</small>
        </div>
      </div>

      <div className="box blog-item">
        <div className="col-md-12 blog-photo">
          <img className="blog-img" src={require("../img/alterra2.jpeg")} />
        </div>
        <div className="col-md-12 container">
          <h4 className="blog-title">New year new us</h4>
          <p class="blog-paragraf">Suspendisse ut velit libero. Duis condimentum velit non semper finibus. Curabitur tempus risus ut tellus luctus fermentum. Morbi ornare venenatis mauris a dictum. Nulla facilisi. Fusce sodales enim vulputate massa dictum commodo. Nulla facilisi. Nam eu eros in justo vehicula volutpat vel sit amet erat. Integer tellus lectus, iaculis ac lorem non, commodo tempus urna. Nunc vitae nisl pulvinar, lacinia diam eget, suscipit massa. Pellentesque in consectetur risus. Maecenas tincidunt in ipsum at sagittis. In sit amet metus id felis sodales semper. </p>
          <br/>
          <small>Last updated 3 mins ago</small>
        </div>
      </div>
      </div>
    );
  }
}

export default BlogPost; 
