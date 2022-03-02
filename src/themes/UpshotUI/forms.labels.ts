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
  borderWidth: 1,
  borderRadius: 'xs',
  paddingLeft: '6px',
  paddingRight: '6px',
}

const currencySymbolBase = {
  ...labelBase,
  padding: 0,
  verticalAlign: 'top',
}

export const labels = {
  basicSm: {
    ...basicLabelBase,
    fontSize: 0,
  },
  basicMd: {
    ...basicLabelBase,
    fontSize: 2,
  },
  currencyXs: {
    ...labelBase,
    fontWeight: 'heading',
    fontSize: 2,
  },
  currencySm: {
    ...labelBase,
    fontWeight: 'heading',
    fontSize: 4,
  },
  currencyMd: {
    ...labelBase,
    fontWeight: 'bold',
    fontSize: 5,
  },
  currencyLg: {
    ...labelBase,
    fontWeight: 'bold',
    fontSize: 7,
  },
  xsCurrencySymbol: {
    ...currencySymbolBase,
    fontWeight: 'heading',
    fontSize: 0,
    marginRight: '-2px',
    paddingTop: '3px',
  },
  smCurrencySymbol: {
    ...currencySymbolBase,
    fontWeight: 'heading',
    fontSize: 0,
    marginRight: '-2px',
    paddingTop: '4px',
  },
  mdCurrencySymbol: {
    ...currencySymbolBase,
    fontSize: 2,
    paddingTop: '5px',
    fontWeight: 'bold',
  },
  lgCurrencySymbol: {
    ...currencySymbolBase,
    fontSize: 3,
    paddingTop: '7px',
    fontWeight: 'bold',
  },
}

export default labels
