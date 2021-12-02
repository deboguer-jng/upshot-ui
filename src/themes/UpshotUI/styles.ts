import colors from './colors'
import { fonts } from './text'

const styles = {
  root: {
    colorScheme: 'dark',
    body: {
      margin: 0,
      bg: colors.black,
      color: colors.text,
      fontFamily: fonts.body,
    },
  },
  a: {
    variant: 'text.default',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}

export default styles
