import * as ReactDOMClient from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MovieApp } from './app.jsx';
import './styles.scss';


const initialState = (window?.__INIT_DATA ?? {});
ReactDOMClient.hydrate(
    <React.StrictMode>
        <BrowserRouter>
                <MovieApp initialState={initialState} />
        </BrowserRouter>
    </React.StrictMode>, document.getElementById('root')
);