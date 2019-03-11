import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import '../css/style.css';

class Top extends Component {
  render() {
    return (
      <div className="top-articles">
        <div className="col-md-12 row top-head box">
          <div className="col-md-7 title-top"><strong>BERITA TERKINI</strong></div>
          <div className="col-md-5 link-top"><a href="#">Lihat semua</a></div>
        </div>
        {/* Content top articles */}
        <div className="col-md-12 row box">
          <div className="number-top">#1</div>
          <div className="col-md-12"><p className="top-paragraf">Gabung Alphatech Academy Sekarang!</p></div> 
        </div>
        <div className="col-md-12 row box">
          <div className="number-top">#2</div>
          <div className="col-md-12"><p className="top-paragraf">Ada apa antara Kobar dan Hasan?</p></div> 
        </div>
        <div className="col-md-12 row box">
          <div className="number-top">#3</div>
          <div className="col-md-12"><p className="top-paragraf">Mengenal Arafat sang Master Python</p></div> 
        </div>
        <div className="col-md-12 row box">
          <div className="number-top">#4</div>
          <div className="col-md-12"><p className="top-paragraf">Belajar reactJS itu seru. Kamu setuju?</p></div> 
        </div>
        <div className="col-md-12 row box">
          <div className="number-top">#5</div>
          <div className="col-md-12"><p className="top-paragraf">Sudahkah kamu sehat mental?</p></div> 
        </div>
      </div>
    );
  }
}

export default Top; 
