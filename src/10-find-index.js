/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let found = false;
  let halfIndex = Math.round((array.length - 1) / 2);
  while (!found) {
    if (array[halfIndex] === value) {
      found = true;
    } else if (array[halfIndex - 1] === value) {
      found = true;
      halfIndex -= 1;
    } else if (array[halfIndex + 1] === value) {
      found = true;
      halfIndex += 1;
    } else if (array[halfIndex] > value) {
      halfIndex = Math.floor(halfIndex / 2);
    } else {
      halfIndex = Math.floor((array.length - 1) - ((array.length - 1 - halfIndex) / 2));
    }
  }
  return halfIndex;
}

module.exports = findIndex;
