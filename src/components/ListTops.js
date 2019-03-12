import React from 'react';
import PropTypes from 'prop-types';
import '../css/bootstrap.min.css';
import '../css/style.css';

const ListTops = props => {
  return (
    <div className="col-md-12 row box list">
      <div className="number-top">#{props.i}</div>
      <div className="col-md-12"><p className="top-paragraf">{props.title}</p></div> 
    </div>
  );
};

ListTops.propTypes = {
  title: PropTypes.string.isRequired,
  i: PropTypes.string
};

export default ListTops;