import React, { Component } from 'react';
import logo from '../logo/logo-alterra-academy.png';
import '../css/bootstrap.min.css';
import '../css/style.css';

class HeaderArticle extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light header1">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <img className="nav-logo" src={require("../logo/logo.svg")}/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">KabarKabar <span className="sr-only">(current)</span></a>
              </li>
            </ul>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Sepakbola</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Ekonomi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Politik</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Hiburan</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Lainnya
                </a>

                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>

              </li>
            </ul>
            {/* <ul className="navbar-nav mr-auto">
              <li>
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Q</button>
                </form>
              </li>
            </ul> */}
            <ul className="navbar-nav mr-auto">
              <li>
                <a className="nav-link" href="#">Masuk</a>
              </li>
              <li>
                <a className="nav-link" href="#">Daftar</a>
              </li>
            </ul>
            
          </div>
        </nav>
    );
  }
}

export default HeaderArticle; 
