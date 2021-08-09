import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'
import svg from 'rollup-plugin-svg'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [
    svg(),
    typescript(),
    copy({
      targets: [{ src: 'public/css', dest: 'dist' }],
    }),
  ],
}
