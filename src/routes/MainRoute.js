import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";

import Home from "../pages/Home(backup)";
import Football from "../pages/Football";
import Economy from "../pages/Economy";
import Politic from "../pages/Politic";
import Entertainment from "../pages/Entertainment";
import Signin from "../components/Signin";
import Profile from "../components/Profile";

import { connect } from "unistore/react";
import { actions } from '../store'
import { withRouter } from "react-router-dom";

class MainRoute extends Component {
  GetParam = (match) => {
    this.props.updateCategory(match.match.params);
    return (
      <div>a</div>
    )
  };
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
        <Route path="/:query" component={this.GetParam} />
        <Route exact path="/" component={Home} />
        <Route path="/:query" component={this.GetParam} />
      </Switch>
    );
  }
}

export default connect(
  "is_login, email, full_name", actions)
(withRouter(MainRoute));
