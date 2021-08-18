import { UpshotThemeProvider } from '../src'
import { ThemeProvider } from 'theme-ui'
import { themes } from '@storybook/theming'

/**
 * Nested theme providers for Storybook specific UI
 * @see https://theme-ui.com/guides/nested-theme-providers
 */
const storybookTheme = {
  styles: {
    root: {
      body: {
        bg: null,
      },
    },
  },
}

export const parameters = {
  docs: {
    theme: themes.dark,
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={storybookTheme}>
      <UpshotThemeProvider>
        {/*
         * Disables inline to prevent duplicate globalStyles.
         * @see https://github.com/storybookjs/storybook/issues/9312
         */}
        <Story inline={false} />
      </UpshotThemeProvider>
    </ThemeProvider>
  ),
]
