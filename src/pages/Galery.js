import React, { Component } from 'react';
import Header from '../components/Header';
import Photos from '../components/Photos';
import Footer from '../components/Footer';

class Galery extends Component {
  render() {
    return (
      <div>
        <Header />
        <Photos />
        <Footer />
    </div> 
    );
  }
}

export default Galery;
