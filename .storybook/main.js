const path = require('path')

const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ['@storybook/addon-docs'],
  features: {
    postcss: false, // We use Styled Components instead.
  },
  core: {
    builder: 'webpack5',
  },
  docs: {
    /**
     * Disables inline to prevent duplicate globalStyles.
     * @see https://github.com/storybookjs/storybook/issues/9312
     */
    inlineStories: false,
  },
  webpackFinal: async (config) => ({
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
  }),
}
