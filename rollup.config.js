import copy from 'rollup-plugin-copy'
import svg from 'rollup-plugin-svg'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  /* External dependencies not included in bundle. */
  external: ['@emotion/css', 'react', 'react-inlinesvg', '@theme-ui/color'],
  plugins: [
    /* Clear cache on build for local development. */
    typescript({ clean: true }),

    /* Enable support for SVG assets. */
    svg(),

    /* Additional static assets included in bundle. */
    copy({
      targets: [{ src: 'public/css', dest: 'dist' }],
    }),
  ],
}
