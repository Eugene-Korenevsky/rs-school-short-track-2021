/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length < 1) {
    return '';
  }
  let res = '';
  let count = 1;
  let char = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    } else if (count > 1) {
      res += `${count}${char}`;
      char = str[i];
      count = 1;
    } else {
      res += `${char}`;
      char = str[i];
    }
  }
  if (count > 1) {
    res += `${count}${char}`;
  } else {
    res += `${char}`;
  }
  return res;
}

module.exports = encodeLine;
