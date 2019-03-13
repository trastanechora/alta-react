import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from '../store'

// const Profile = props => {
//     const is_login = JSON.parse(localStorage.getItem("is_login"));
//     const email = localStorage.getItem("email");
//     const full_name = localStorage.getItem("full_name");
    // console.log("LOOOOOOOOOOOOOOOOOOGGGGGGGGGIN", is_login);
class Profile extends Component {
    render() {
        if (!this.props.is_login) {
            return <Redirect to={{ pathname: "/signin" }} />;
        } else {
            return (
                <div className="article-content-wrapper row info-box">
                <section className="content signin">
                    <h1 style={{textalign: "center"}}>Profile</h1>
                    <p>
                        <label className="form-label">Email:</label> <br />
                        <strong><i>{this.props.email}</i></strong>
                    </p>
                    <p>
                        <label className="form-label">Full Name:</label> <br />
                        <strong><i>{this.props.full_name}</i></strong>
                    </p>
                </section>
                </div>
            );
        }
    }
}

// export default Profile;
export default connect(
    "is_login, email, full_name", actions)
(withRouter(Profile));