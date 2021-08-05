const path = require('path')

const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ['@storybook/addon-docs'],
  features: {
    postcss: false, // We use styled-components instead.
  },
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          /* Support for Emotion 11 */
          '@emotion/core': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    }
  },
}
