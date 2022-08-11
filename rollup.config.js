import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';


import { indexTemplate } from './src/index-template';
import { PUBLIC_PATH } from './build-config';

const defaultPlugins = [babel({ babelHelpers: 'bundled' }), nodeResolve(), commonjs()];



export default [
    {
        input: {
            main: 'src/client/main.jsx',
        },
        output: {
            dir: `dist/${PUBLIC_PATH}`,
            format: "esm",
            sourcemap: true,

        },
        plugins: [
            ...defaultPlugins,
            replace({
                'process.env.NODE_ENV': JSON.stringify(process?.env?.NODE_ENV ?? 'development'),
                preventAssignment: true,
            }),
            postcss({ extract: true }),
            html({ template: indexTemplate, title: 'MyTheresa', publicPath: '/' + PUBLIC_PATH + '/'  }),
        ]
    },
    {
        input: 'src/server/start.js',
        output: {
            dir: 'dist',
            format: "cjs",
            sourcemap: true
        },
        preserveEntrySignatures: false,
        plugins: [...defaultPlugins]
    }
]