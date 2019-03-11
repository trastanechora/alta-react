import React, { Component } from 'react';
import './Project.css';
import logo from './logo/logo-alterra-academy-plain.png';
import fbIcon from './ico/ico-facebook.png';
import twIcon from './ico/ico-twitter.png';
import igIcon from './ico/ico-instagram.png'


class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="row">
                <div className="col-md-3 col-sm">
                    <div>
                        <img src={logo} className="logo-footer"/>
                    </div>
                    <div>
                        <p className="copyright"> © Copyright Alterra Group 2019</p>
                    </div>
                </div>
                <div className="col-md-2 col-sm">
                    <div className="socmed">Follow Us on:</div>
                    <div>
                        <table>
                            <tr>
                                <td><img src={fbIcon} /></td>
                                <td>Facebook</td>
                            </tr>
                            <tr>
                                <td><img src={twIcon} /></td>
                                <td>Twitter</td>
                            </tr>
                            <tr>
                                <td><img src={igIcon} /></td>
                                <td>Instagram</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
