import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css';
import Home from './pages/Home';
import Galery from './pages/Galery';
import Contact from './pages/Contact';
import News from './pages/News';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        {/* <Home /> */}
        {/* <Galery /> */}
        {/* <Contact /> */}
        <News />
    </div>, 
document.getElementById('root')
);

serviceWorker.unregister();
