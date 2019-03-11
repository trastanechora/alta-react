import React, { Component } from 'react';
import '../css/Project.css';

class Contact extends Component {
  render() {
    return (
    <div className="page-contact">
        <div className="row">
            <div className="left col-md-6" >
                <img id="alterra-at-contact" src={require("../logo/logo-alterra-academy-plain@2x.png")}/>
            </div>

            <div className="right col-md-6">
                <h5><strong>Contact Us</strong></h5>
                <p>Send us a message and we will get back to you as soon as possible</p>

                <form action="index.html">
                    <label for="name">Name<span className="red">*</span></label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="name"><img src={require("../ico/ico-user.png")}/></span>
                            </div>
                            <input type="text" class="form-control" id="name" aria-describedby="basic-addon3" />
                        </div>

                    <label for="email">Email<span className="red">*</span></label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="email"><img src={require("../ico/ico-email.png")}/></span>
                            </div>
                            <input type="text" class="form-control" id="email" aria-describedby="basic-addon3" />
                        </div>

                    <label for="phone">Phone Number<span className="red">*</span></label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="phone"><img src={require("../ico/ico-phone.png")}/></span>
                            </div>
                            <input type="text" class="form-control" id="phone" aria-describedby="basic-addon3" />
                        </div>
                    
                    <label for="national">National</label>
                        <select class="form-control" id="national">
                            <option>Indonesia</option>
                            <option>Malaysia</option>
                            <option>Singapore</option>
                            <option>Japan</option>
                        </select>
            
                    <label for="message">Message</label>
                        <textarea class="form-control no-resize" rows="5" id="message"></textarea>

                    <a href="index.html"><button type="button" class="form-control contact-button" id="submit">Submit</button></a>
                </form>
            </div>
        </div>
    </div>
    );
  }
}

export default Contact;
