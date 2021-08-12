import { Theme } from 'theme-ui'
import sizes from './sizes'

const labelBase = {
  fontFamily: 'body',
  color: 'grey-300',
  display: 'inline-block',
  width: 'auto',
  padding: sizes[1] + 'px',
}

const basicLabelBase = {
  ...labelBase,
  border: 'solid',
  borderColor: 'grey-300',
  borderWidth: 2,
  borderRadius: 'xs',
}

const dollarSignBase = {
  ...labelBase,
  padding: 0,
  verticalAlign: 'top'
}

const forms: Theme['forms'] = {
  input: {
    height: '45px',
    bg: 'grey-800',
    border: 'none',
    borderRadius: 'pill',
    color: 'grey-500',
    padding: '0 1rem',
    outline: 'none',
    fontFamily: 'degular',
    fontWeight: 'heading',
    fontSize: 4,
    lineHeight: 1,
    '&::placeholder': {
      fontWeight: 'heading',
    },
  },
  switch: {
    bg: 'grey-500', // Off: background
    '& div': {
      bg: 'grey-900', // Off: circle
    },
    '&:disabled div': {
      bg: 'grey-700', // Disabled: circle
    },
    'input:checked ~ &': {
      bg: 'primary', // On: background
    },
    'input:checked ~ & div': {
      bg: 'grey-900', // On: circle
    },
  },
  basicSmall: {
    ...basicLabelBase,
    fontSize: 0
  },
  basicMedium: {
    ...basicLabelBase,
    fontSize: 2
  },
  currencyMini: {
    ...labelBase,
    fontSize: 2
  },
  currencySmall: {
    ...labelBase,
    fontSize: 4
  },
  currencyMedium: {
    ...labelBase,
    fontSize: 6
  },
  currencyLarge: {
    ...labelBase,
    fontSize: 8
  },
  currencyMiniDollarSign: {
    ...dollarSignBase,
    fontSize: 0,
    marginRight: '-2px',
    paddingTop: '3px'
  },
  currencySmallDollarSign: {
    ...dollarSignBase,
    fontSize: 0,
    marginRight: '-2px',
    paddingTop: '4px'
  },
  currencyMediumDollarSign: {
    ...dollarSignBase,
    fontSize: 2,
    paddingTop: '5px'
  },
  currencyLargeDollarSign: {
    ...dollarSignBase,
    fontSize: 3,
    paddingTop: '7px'
  }
}

export default forms
