import { ThemeProvider } from '@emotion/react'
import { theme, globalStyles } from '../src'

export const decorators = [
  (Story) => (
    /**
     * Wrap the stories with the UpshotUI theme provider.
     */
    <ThemeProvider {...{ theme }}>
      {globalStyles}
      <Story inline={false} />
    </ThemeProvider>
  ),
]
