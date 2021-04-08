/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  for (let i = 0; i < domains.length; i++) {
    const str = domains[i];
    const res = str.split('.').reverse().join('.');
    for (let j = 0; j < res.length; j++) {
      if (res[j] === '.') {
        const substr = `.${res.slice(0, j)}`;
        if (!obj[substr]) {
          obj[substr] = 1;
        } else {
          obj[substr]++;
        }
      }
    }
    const substr = `.${res}`;
    if (!obj[substr]) {
      obj[substr] = 1;
    } else {
      obj[substr]++;
    }
  }
  return obj;
}

module.exports = getDNSStats;
