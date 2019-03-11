import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import '../css/style.css';

class Searchbox extends Component {
  render() {
    return (
      <div className="top-articles">
        <div className="col-md-12 row top-head box">
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Q</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Searchbox; 