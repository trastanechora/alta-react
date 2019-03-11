import React, { Component } from 'react';
import './Project.css';

class HomeContent extends Component {
  render() {
    return (
      <section>
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-md-6">
                        <h1>About Me</h1>
                        <p>Hi! I am <strong>Hian Oliviera</strong>, I work as a <i>Front-end Developer</i> at <span className="a-orange">Alterra Group.</span></p>
                        <p>Front-end Developer are constructive work websites use HTML,CSS, and JavaScript.</p>
                        <p>Front-end Developer are the people who make it design and develop the design until become a website that can run.</p>
                    </div>
                    <div className="col-md-6">
                        <h1>Information</h1>
                        <table className="info full-width">
                            <tr>
                                <td><strong>Age</strong></td>
                                <td className="middle-dotes">:</td>
                                <td className="end-dotes">22th</td>
                            </tr>
                            <tr>
                                <td><strong>Email</strong></td>
                                <td className="middle-dotes">:</td>
                                <td className="end-dotes">blablabla@blamail.com</td>
                            </tr>
                            <tr>
                                <td><strong>Address</strong></td>
                                <td className="middle-dotes">:</td>
                                <td className="end-dotes">Jl. Tidar Raya No.23 Malang, Jawa Timur, Indonesia</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default HomeContent;
