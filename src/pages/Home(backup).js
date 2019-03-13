import axios from 'axios'
import React, { Component } from 'react';
import { BrowserRaouter, Switch, Route } from 'react-router-dom'
import HeaderArticle from '../components/HeaderArticle';
import '../css/bootstrap.min.css';
import '../css/style.css';
import Searchbox from '../components/Searchbox';
import ListNews from '../components/ListNews';
import ListTops from '../components/ListTops';

import { connect } from "unistore/react";
import { actions } from '../store';
import { withRouter } from "react-router-dom";

const urlHeadline = "https://newsapi.org/v2/top-headlines?country=id&apiKey=995ea15a75714a0496b4befa6ae915ef"
const urlEverything = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=995ea15a75714a0496b4befa6ae915ef"

const baseUrl = "https://newsapi.org/v2/everything?q="
const apiKey = "&apiKey=995ea15a75714a0496b4befa6ae915ef"

class Home extends Component {
  // constructor (props) {
  //   // console.log("TEST props from HOME: ", this.props)
  //   // console.log("Test local storage: ", JSON.parse(localStorage.getItem("article")));
  //   super(props);
  //   this.state = {
  //     listNews: [],
  //     listNews2: [],
  //     url: ""
  //   };
  // }
  state = {
    listNews: [],
      listNews2: [],
      url: ""
  }

  componentDidMount = () => {
    // if (this.state.listNews==null) {
      axios
      .get(urlEverything)
      .then(function(response) {
        this.setState({listNews: response.data.articles});
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    
    //   // Second Request
    //   axios
    //   .get(urlHeadline)
    //   .then(function(response) {
    //     this.setState({listNews2: response.data.articles});
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    // } else {
    //   console.log("Take news from store", this.props)
    //   this.setState({listNews: this.props.ListNews, listNews2: this.props.ListNews})
    // }
  }

  handleInputChange = e => {
    // console.log("event: ", e.target.value)
    // console.log("Testing Url: ", baseUrl + e.target.value + apiKey)
    // self.setState({url: baseUrl + e.target.value + apiKey})
    let value = e.target.value;

    this.setState(
      {
        search: value
      },
      () => {
        this.searchNews(value);
      }
    );
  };

  searchNews = async keywords => {
    console.log("searchNews", keywords);
    // const self = this;
    if (keywords.length > 2) {
      try {
        const response = await axios.get(
            baseUrl + keywords + apiKey
          );
          console.log(response);
          this.setState({ listNews: response.data.articles })
      } catch (error) {
        console.error(error);
      }
    }
  }


  render() {
    console.log("stateeee", this.state.listNews2);
    
    // const { listNews, listNews2 } = this.state;
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
              {/* {this.state.listNews2.slice(0, 5).map((item, key) => {
                const title = item.title !== null ? item.title: "";
                return <ListTops key={key} title={title} i={key+1}/>
              })} */}
              <Searchbox doSearch={(e) => this.handleInputChange(e)} /> 
            </div>  
          </div>
          <div className="col-md-8">
            <div className="container-fluid row top-articles blog-container">
              {/* {this.state.listNews.map((item, key) => {
                const img = item.urlToImage === null ? '../image/profile.png': item.urlToImage;
                const content = item.content !== null ? item.content: "";
                const title = item.title !== null ? item.title: "";
                const publishedAt = item.publishedAt !== null ? item.publishedAt: "";
                return <ListNews key={key} title={title} img={img} content={content} publishedAt={publishedAt}/>
              })} */}
            </div>
          </div>
        </div>
      // </div>
    );
  }
}

// export default Home;
export default connect(
  "listNews", actions)
(withRouter(Home));
