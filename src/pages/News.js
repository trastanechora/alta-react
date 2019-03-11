import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderArticle from '../components/HeaderArticle';
import Top from '../components/Top';
import '../css/bootstrap.min.css';
import '../css/style.css';
import BlogPost from '../components/BlogPost';
import Searchbox from '../components/Searchbox';

class Home extends Component {
  render() {
    return (
      <div>
        <HeaderArticle />
        <div className="article-content-wrapper row">
          <div className="col-md-4">
            <Top />
            <Searchbox />
          </div>
          <div className="col-md-8">
            <BlogPost />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
