import { ethers } from 'ethers'
const BN = ethers.BigNumber

/**
 * Prefixes for formatted currency values.
 */
export const NUMBER_PREFIX = {
  USD: '$',
  ETHER: 'Ξ',
  NONE: '',
}

/**
 * Parse a uint256 string to a float.
 */
export const parseUint256 = (
  amount: string,
  decimals: number = 18,
  precision: number = 4
) => {
  try {
    const denom = BN.from(10).pow(decimals)
    const pow = BN.from(10).pow(precision)
    const val = BN.from(amount).mul(pow).div(denom).toNumber()
    return val / 10 ** precision
  } catch (err) {
    console.log(err)
    return null
  }
}

interface FormatNumberOptions {
  /**
   * The number of decimal places to show after the formatted value.
   */
  decimals?: number
  /**
   * If true, display 1,000.0 as "1k".
   */
  kmbUnits?: boolean
  /**
   * Parse the number from uint256 string representation.
   */
  fromWei?: boolean
  /**
   * Decimals for the uint256 representation (default: 18).
   */
  fromDecimals?: number
  /**
   * Adds a leading currency symbol prefix.
   */
  prefix?: keyof typeof NUMBER_PREFIX
}

/**
 * Formats a large number into a smaller unit.
 */
const formatLargeNumber = (num: number, decimals = 2) => {
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
    ? (num / item.value).toFixed(decimals) + item.symbol
    : Number(num).toFixed(decimals)
}

/**
 * Format number
 *
 * @param value
 * @returns Internationally-formatted number with optional decimals + kmb units.
 */
export const formatNumber = (
  value: string | number,
  opts?: FormatNumberOptions
) => {
  if (Number.isNaN(Number(value))) return undefined

  const prefix = opts?.prefix ? NUMBER_PREFIX[opts.prefix] : ''
  const decimals = opts?.decimals ?? 0

  if (opts?.fromWei)
    value = parseUint256(value.toString(), opts.fromDecimals ?? 18, decimals)

  if (opts?.kmbUnits) return prefix + formatLargeNumber(Number(value), decimals)

  const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  })

  return prefix + formatter.format(Number(value))
}
