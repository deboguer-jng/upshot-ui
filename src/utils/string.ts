/**
 * Truncates a string to a maximum length. Adds an
 * ellipsis if the text is longer than the max length.
 *
 * @param {string}
 * @param {number} maxLength
 * @returns {string} Truncated string with ellipsis.
 */
export const truncateString = (str: string, maxLength: number = 10) =>
  str.length < maxLength ? str : str.slice(0, maxLength) + '...'
