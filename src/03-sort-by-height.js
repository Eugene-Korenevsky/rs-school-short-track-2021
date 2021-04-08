/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const res = [...arr];
  for (let i = 0; i < res.length - 1; i++) {
    if (res[i] !== -1) {
      const current = res[i];
      let min = res[i];
      let minIndex = i;
      for (let j = i; j < res.length; j++) {
        if (res[j] !== -1) {
          if (res[j] < min) {
            minIndex = j;
            min = res[j];
          }
        }
      }
      res[i] = min;
      res[minIndex] = current;
    }
  }
  return res;
}

module.exports = sortByHeight;
