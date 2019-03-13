import React, { Component } from "react";
import { Redirect } from "react-router-dom";

const Profile = props => {
    const is_login = JSON.parse(localStorage.getItem("is_login"));
    const email = localStorage.getItem("email");
    const full_name = localStorage.getItem("full_name");
    console.log("LOOOOOOOOOOOOOOOOOOGGGGGGGGGIN", is_login);

    if (is_login == null) {
        return <Redirect to={{ pathname: "/signin" }} />;
    } else {
        return (
            <div className="article-content-wrapper row info-box">
            <section className="content signin">
                <h1 style={{textalign: "center"}}>Profile</h1>
                <p>
                    <label className="form-label">Email:</label> <br />
                    <strong><i>{email}</i></strong>
                </p>
                <p>
                    <label className="form-label">Full Name:</label> <br />
                    <strong><i>{full_name}</i></strong>
                </p>
            </section>
            </div>
        );
    }
};

export default Profile;