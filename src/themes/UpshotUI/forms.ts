import { Theme } from 'theme-ui'
import sizes from './sizes'
import { fontWeights } from './text'

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

const currencySymbolBase = {
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
  basicSm: {
    ...basicLabelBase,
    fontSize: 0
  },
  basicMd: {
    ...basicLabelBase,
    fontSize: 2
  },
  currencyXs: {
    ...labelBase,
    fontWeight: 'heading',
    fontSize: 2
  },
  currencySm: {
    ...labelBase,
    fontWeight: 'heading',
    fontSize: 4
  },
  currencyMd: {
    ...labelBase,
    fontWeight: 'bold',
    fontSize: 6
  },
  currencyLg: {
    ...labelBase,
    fontWeight: 'bold',
    fontSize: 8
  },
  xsCurrencySymbol: {
    ...currencySymbolBase,
    fontWeight: 'heading',
    fontSize: 0,
    marginRight: '-2px',
    paddingTop: '3px'
  },
  smCurrencySymbol: {
    ...currencySymbolBase,
    fontWeight: 'heading',
    fontSize: 0,
    marginRight: '-2px',
    paddingTop: '4px'
  },
  mdCurrencySymbol: {
    ...currencySymbolBase,
    fontSize: 2,
    paddingTop: '5px',
    fontWeight: 'bold'
  },
  lgCurrencySymbol: {
    ...currencySymbolBase,
    fontSize: 3,
    paddingTop: '7px',
    fontWeight: 'bold'
  }
}

export default forms
