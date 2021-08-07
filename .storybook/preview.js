import { ThemeProvider } from '@emotion/react'
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
      {globalStyles}
      <Story inline={false} />
    </ThemeProvider>
  ),
]
