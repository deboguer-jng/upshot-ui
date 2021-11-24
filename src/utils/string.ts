/**
 * Truncates a string to a maximum length. Adds an
 * ellipsis if the text is longer than the length.
 *
 * @param {string}
 * @param {number }length
 * @returns {string} Truncated string with ellipsis.
 */
export const truncateString = (str: string, length: number = 10) =>
  str.length < length ? str : str.slice(0, length) + '...'
