/**
 *
 * @param word
 * @returns {*}
 */
export const capitalize = (word) => {
  return word.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
}
