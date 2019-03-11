import React, { Component } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import HomeContent from '../components/HomeContent';
import Footer from '../components/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <HomeContent />
        <Footer />
    </div> 
    );
  }
}

export default Home;
