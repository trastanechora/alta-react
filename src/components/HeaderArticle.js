import React, { Component } from 'react';
import logo from '../logo/logo-alterra-academy.png';
import '../css/bootstrap.min.css';
import '../css/style.css';

class HeaderArticle extends Component {
  render() {
    return (
      <header className="header1">
        <div className="row head-row">
          <div className="col-md-1"></div>
          <div className="col-md-2 row">
            <div className="col-md-4"><img src={require("../logo/logo.svg")}/></div>
            <div className="col-md-8">KabarKabar</div>
          </div>
          <div className="col-md-4 row">
            <div className="col-md-3">Sepakbola</div>
            <div className="col-md-2">Ekonomi</div>
            <div className="col-md-2">Politik</div>
            <div className="col-md-2">Hiburan</div>
            <div className="col-md-2">Lainnya</div>
          </div>
          <div className="col-md-3 row">
            <div className="col-md-8">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Q</button>
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-2 row">
            <div className="col-md-6">Masuk</div>
            <div className="col-md-6">Daftar</div>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderArticle; 
