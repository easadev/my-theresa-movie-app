import { makeHtmlAttributes } from '@rollup/plugin-html';

export function indexTemplate({ attributes, files, publicPath, title, meta }) {
    const scripts = (files.js || [])
        .map(({ fileName }) => {
            const attrs = makeHtmlAttributes(attributes.script);
            return `<script src="${publicPath}${fileName}"${attrs}></script>`;
        }).join('\n');

    const links = (files.css || [])
        .map(({ fileName }) => {
            const attrs = makeHtmlAttributes(attributes.link);
            return `<link href="${publicPath}${fileName}" rel="stylesheet"${attrs}>`;
        }).join('\n');

    const metas = meta
        .map((input) => {
            const attrs = makeHtmlAttributes(input);
            return `<meta${attrs}>`;
        }).join('\n');


    return `
        <html ${makeHtmlAttributes(attributes.html)}>
        <html>
            <head>
                ${metas}
                <title>${title}</title>
                ${links}
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                <script>
                    //@js-data
                </script>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
            </head>
            <body>
                <div id="root"><!--ReactContent--></div>
                
                ${scripts}
            </body>
        </html>
    `;
}