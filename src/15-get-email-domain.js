/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let res;
  let found = false;
  for (let i = email.length - 1; i >= 0; i--) {
    if (email[i] === '@' && !found) {
      res = email.slice(i + 1, email.length);
      found = true;
    }
  }
  return res;
}

module.exports = getEmailDomain;
