/**
 * Formats a large number into a smaller unit.
 */
export const formatLargeNumber = (num: number, digits = 2) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
  ]
  const item = lookup
    .slice()
    .reverse()
    .find((item) => num >= item.value)
  return item
    ? (num / item.value).toFixed(2) + item.symbol
    : Number(0).toFixed(digits)
}

/**
 * Format commas
 *
 * @param value
 * @returns Formatted currency
 */
export const formatCommas = (value: number) =>
  Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
