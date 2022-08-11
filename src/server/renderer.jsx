import fs from 'node:fs';
import path from 'node:path';

import * as ReactDOMServer from 'react-dom/server';
import React from 'react';

import { MovieApp } from '../client/app.jsx';
import { PUBLIC_PATH } from '../../build-config';
import { StaticRouter } from 'react-router-dom/server';
import { replaceContents } from './util';

const indexFileContent = fs.readFileSync(path.resolve(__dirname, PUBLIC_PATH, 'index.html')).toString('utf-8');

function App({ initialState, url }) {
    return (
        <StaticRouter location={url}>
            <MovieApp initialState={initialState} />
        </StaticRouter>
    );
}

export function renderApp(url, { categories, selectedMovie }) {

    const initialObject = { categories, selectedMovie };

    const app = ReactDOMServer.renderToString(<App initialState={initialObject} url={url} />);
    let resultPage = replaceContents(indexFileContent, { jsData: initialObject, reactApp: app });

    return resultPage;
}