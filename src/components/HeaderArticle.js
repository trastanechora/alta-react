import React, { Component } from 'react';
import logo from '../logo/logo-alterra-academy.png';
import '../css/bootstrap.min.css';
import '../css/style.css';

class HeaderArticle extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light header1">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <img className="nav-logo" src={require("../logo/logo.svg")}/>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">KabarKabar <span class="sr-only">(current)</span></a>
              </li>
            </ul>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Sepakbola</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Ekonomi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Politik</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Hiburan</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Lainnya
                </a>

                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>

              </li>
            </ul>
            <ul class="navbar-nav mr-auto">
              <li>
                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Q</button>
                </form>
              </li>
            </ul>
            <ul class="navbar-nav mr-auto">
              <li>
                <a class="nav-link" href="#">Masuk</a>
              </li>
              <li>
                <a class="nav-link" href="#">Daftar</a>
              </li>
            </ul>
            
          </div>
        </nav>
    );
  }
}

export default HeaderArticle; 
