import { Global } from '@emotion/react'
import { ThemeProvider } from 'theme-ui'
import { theme, globalStyles } from '../src'

export const decorators = [
  (Story) => (
    /**
     * Wrap the stories with the UpshotUI theme provider.
     *
     * Disables inline to prevent duplicate globalStyles.
     * @see https://github.com/storybookjs/storybook/issues/9312
     */
    <ThemeProvider {...{ theme }}>
      <Global styles={globalStyles} />
      <Story inline={false} />
    </ThemeProvider>
  ),
]
