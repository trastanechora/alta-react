import React from 'react';
import PropTypes from 'prop-types';
import '../css/bootstrap.min.css';
import '../css/style.css';

const ListNews = props => {
    return (
        <div className="blog-item">
            <div className="col-md-12 blog-photo">
                <img className="blog-img" src={props.img} />
            </div>
            <div className="col-md-12 container wrapping-content-news">
                <h4 className="blog-title">{props.title}</h4>
                <hr />
                <p class="blog-paragraf">{props.content}</p>
                <br/>
                <small>{props.publishedAt}</small>
            </div>
        </div>
    );
};

ListNews.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    img: PropTypes.string,
    publishedAt: PropTypes.string
};


export default ListNews;