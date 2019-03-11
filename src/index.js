import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css';
import './index.css';
// import App from './App';
import Project from './Project';
import ProjectBanner from './Banner';
import HomeContent from './HomeContent';
import Photos from './Photos';
import Footer from './Footer';
import Contact from './Contact';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        {/* Page 1  */}
        <Project /> 
        <ProjectBanner />
        <HomeContent />
        <Footer />
        
        {/* Page 2 */}
        {/* <Project /> 
        <Photos />
        <Footer /> */}

        {/* Page 3 */}
        {/* <Contact /> */}
    </div>, 
document.getElementById('root')
);
// ReactDOM.render(<ProjectBanner />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
