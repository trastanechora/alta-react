import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";

import Home from "../pages/Home";
// import GetParam from "../pages/Home";
import Football from "../pages/Football";
import Economy from "../pages/Economy";
import Politic from "../pages/Politic";
import Entertainment from "../pages/Entertainment";
import Signin from "../components/Signin";
import Profile from "../components/Profile";

class MainRoute extends Component {
    render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/football" component={Football} />
        <Route exact path="/economy" component={Economy} />
        <Route exact path="/politic" component={Politic} />
        <Route exact path="/entertainment" component={Entertainment} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/:query" component={GetParam} />
      </Switch>
    );
  }
}

function GetParam({ match }) {
  console.log("TESTING MATCH dari MAINROUTE: ", match)
  // console.log("STATE: ", this)
  localStorage.setItem("article", match.params.query)
  return (
    // localStorage.setItem("article", match),
    // "X",
    // console.log("TESTING MATCH dari MAINROUTE: ", match)
    <div>
      <h3>{match.params.query}</h3>
    </div>
    // this.props.ChangeParam
  );
}

export default MainRoute; 
