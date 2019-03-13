import React, { Component } from 'react';
import MainRoute from "./routes/MainRoute";
import { withRouter } from "react-router-dom";
import {connect} from 'unistore/react'
import {actions} from './store'

import Navigation from "./components/Navigation"
// import { connect } from 'tls';

class AppAjax extends Component {
    postSignout = () => {
        localStorage.clear()
        this.props.history.push("/");
        console.log("TEST PROPS FROM LOUGOUT", this.props)
    };
    checkState = () => {
        console.log("TEST STATE", this.props.username)
        console.log("TESTING")
    }

    render() {
        return (
            <div>
                <Navigation postSignout={this.postSignout} checkState={this.checkState}/>
                <MainRoute />
            </div>
        );
    }
}
// const AppAjax = connect('full_name', actions)(
//     ({full_name}) => (
//         <div>
//             <p>Fullname: {full_name}</p>
//         </div>
//     )
// )

// export default connect("is_login, username, password")(withRouter(AppAjax));
export default AppAjax;
