import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css';

import AppRouter from "./AppRouter";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

import createStore from 'unistore';
import { Provider } from 'unistore/react'
import { store } from './store'

const render = Component =>
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Component />
        </BrowserRouter>
    </Provider>
    , 
document.getElementById('root')
);

render(AppRouter)

serviceWorker.unregister();
