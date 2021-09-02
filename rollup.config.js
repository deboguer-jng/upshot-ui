import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import copy from 'rollup-plugin-copy'
import svg from 'rollup-plugin-svg'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  external: [
    '@emotion/css',
    '@emotion/react',
    '@emotion/styled',
    '@theme-ui/match-media',
    'polished',
    'react',
    'react-inlinesvg',
  ],
  plugins: [
    /* Clear cache on build for local development. */
    typescript({ clean: true }),

    /* Support commonjs modules. */
    commonjs(),

    /* Support SVG assets. */
    svg(),

    /* Support JSON files. */
    json(),

    /* Resolve dependencies */
    nodeResolve(),

    /* Additional static assets included in bundle. */
    copy({
      targets: [
        { src: 'public/css', dest: 'dist' },
        { src: './package.json', dest: 'dist' }, // Publishes to npm from ./dist
      ],
    }),
  ],
}
