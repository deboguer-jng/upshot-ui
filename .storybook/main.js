const path = require('path')
const fs = require('fs')
const { merge } = require('webpack-merge')

function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath))
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir
    }
    const { dir, root } = path.parse(currDir)
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`
      )
    }
    currDir = dir
  }
}

module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  features: {
    postcss: false, // We use styled-components instead.
  },
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    return merge(config, {
      resolve: {
        alias: {
          '@emotion/styled': getPackageDir('@emotion/styled'),
        },
      },
    })
  },
}
