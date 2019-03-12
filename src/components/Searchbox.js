import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import '../css/style.css';

class Searchbox extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {value: ''};

  //   this.handlerChange = this.handlerChange.bind(this);
  // }

  // handlerChange(event) {
  //   this.setState({ value: event.target.value })
  // }

  render() {
    return (
      <div className="top-articles">
        <div className="col-md-12 row top-head box">
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.props.doSearch} value={this.props.keywords} />
            {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Q</button> */}
            {/* <p>{this.state.value}</p> */}
          </form>
        </div>
      </div>
    );
  }
  // render() {
  //   return (
  //     <section>
        
  //     </section>
  //   )
  // }
}

export default Searchbox; 
