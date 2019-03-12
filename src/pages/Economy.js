import axios from 'axios'
import React, { Component } from 'react';
import { BrowserRaouter, Switch, Route } from 'react-router-dom'
import HeaderArticle from '../components/HeaderArticle';
import '../css/bootstrap.min.css';
import '../css/style.css';
import Searchbox from '../components/Searchbox';
import ListNews from '../components/ListNews';
import ListTops from '../components/ListTops';

const urlHeadline = "https://newsapi.org/v2/top-headlines?country=id&apiKey=995ea15a75714a0496b4befa6ae915ef"
const urlEverything = "https://newsapi.org/v2/everything?q=economy&apiKey=995ea15a75714a0496b4befa6ae915ef"

class Economy extends Component {
  constructor (props) {
    super(props);
    this.state = {
      listNews: [],
      listNews2: []
    };
  }
  componentDidMount = () => {
    const self = this;
    // First Request
    axios
      .get(urlEverything)
      .then(function(response) {
        self.setState({listNews: response.data.articles});
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    
    // Second Request
    axios
    .get(urlHeadline)
    .then(function(response) {
      self.setState({listNews2: response.data.articles});
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
  };
  render() {
    const { listNews, listNews2 } = this.state;
    return (
      // <div>
      //   <HeaderArticle />
        <div className="article-content-wrapper row">
          <div className="col-md-4">
            <div className="top-articles sticky-please">
              <div className="col-md-12 row top-head box">
                <div className="col-md-7 title-top"><strong>BERITA TERKINI</strong></div>
                <div className="col-md-5 link-top"><a href="#">Lihat semua</a></div>
              </div>
              {listNews2.slice(0, 5).map((item, key) => {
                const title = item.title !== null ? item.title: "";
                return <ListTops key={key} title={title} i={key+1}/>
              })}
              <Searchbox /> 
            </div>  
          </div>
          <div className="col-md-8">
            <div className="container-fluid row top-articles blog-container">
              {listNews.map((item, key) => {
                const img = item.urlToImage === null ? '../image/profile.png': item.urlToImage;
                const content = item.content !== null ? item.content: "";
                const title = item.title !== null ? item.title: "";
                const publishedAt = item.publishedAt !== null ? item.publishedAt: "";
                return <ListNews key={key} title={title} img={img} content={content} publishedAt={publishedAt}/>
              })}
            </div>
          </div>
        </div>
      // </div>
    );
  }
}

export default Economy;
