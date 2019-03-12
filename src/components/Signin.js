import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/style.css';

class Signin extends Component {
    state = { username: "", password: "", is_login: false };
    changeInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    postLogin = () => {
        const { username, password } = this.state;
        const data = {
            username: username,
            password: password
        };
        const self = this;
        axios
            .post("https://trastanechora.free.beeceptor.com/auth", data)
            .then(function(response) {
                console.log(response.data);
                if (response.data.hasOwnProperty("api_key")) {
                    localStorage.setItem("api_key", response.data.api_key);
                    localStorage.setItem("is_login", true);
                    localStorage.setItem("full_name", response.data.full_name);
                    localStorage.setItem("email", response.data.email);
                    self.props.history.push("/profile");
                    self.setState({ is_login: true })
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    };
    
    render() {
        console.log("state", this.state);
        return (
            <div className="article-content-wrapper row info-box">
                <section className="content signin">
                    <formm onSubmit={e => e.preventDefault()} className="signin-form">
                        <h4 className="login-title">SignIn</h4>
                        <div>
                            <label for="username" className="form-label">Email address:</label>
                            <input type="text" id="username" name="username" placeholder="Username" onChange={e => this.changeInput(e)} className="form-control" />
                        </div>
                        <div>
                            <label for="pw" className="form-label">Email address:</label>
                            <input type="password" id="pw" name="password" placeholder="Password" onChange={e => this.changeInput(e)} className="form-control" />
                        </div>
                        <button onClick={() => this.postLogin()} className="btn btn-primary signin-btn">Signin</button>
                        <button type="reset" className="btn btn-primary signin-btn">Reset</button>
                    </formm>
                </section>
            </div>
        );
    }      
}

export default withRouter(Signin);