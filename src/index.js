import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css';

import AppRouter from "./AppRouter";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import store from './store'
import Provider from 'unistore'

const render = Component =>
ReactDOM.render(
        <BrowserRouter>
            <Component />
        </BrowserRouter>

    , 
document.getElementById('root')
);

render(AppRouter)

serviceWorker.unregister();
