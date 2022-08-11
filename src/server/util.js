export function replaceContents(htmlString, { jsData, reactApp }) {
    return htmlString.replace('//@js-data', `window.__INIT_DATA = ${JSON.stringify(jsData)};`).replace('<!--ReactContent-->', reactApp);
}