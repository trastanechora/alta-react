import React, { Component } from 'react';
import MainRoute from "./routes/MainRoute";
import { withRouter } from "react-router-dom";

import Navigation from "./components/Navigation"

class AppAjax extends Component {
    postSignout = () => {
        localStorage.clear()
        this.props.history.push("/");
        console.log("Testing props value from APPROUTER: ", this.props)
    };
    // ChangeParam = (e) => {
    //     this.props.match.url = e
    //     console.log("Testing props value from APPROUTER: ", this.props)
    //     console.log("Testing MAtCH value from APPROUTER: ", this.e)
    // };

    render() {
        return (
            <div>
                <Navigation postSignout={this.postSignout} />
                <MainRoute />
            </div>
        );
    }
}

export default withRouter(AppAjax);