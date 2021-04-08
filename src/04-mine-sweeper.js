/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    res.push(matrix[i].slice());
  }
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === true) {
      res[0][i] = 1;
    } else if (i === 0) {
      let num = 0;
      if (matrix[0][i + 1] === true) {
        num += 1;
      }
      if (matrix[1][i] === true) {
        num += 1;
      }
      if (matrix[1][i + 1] === true) {
        num += 1;
      }
      res[0][i] = num;
    } else if (i === res[0].length - 1) {
      let num = 0;
      if (matrix[0][i - 1] === true) {
        num += 1;
      }
      if (matrix[1][i] === true) {
        num += 1;
      }
      if (matrix[1][i - 1] === true) {
        num += 1;
      }
      res[0][i] = num;
    } else {
      let num = 0;
      if (matrix[0][i - 1] === true) {
        num += 1;
      }
      if (matrix[0][i + 1] === true) {
        num += 1;
      }
      if (matrix[1][i] === true) {
        num += 1;
      }
      if (matrix[1][i - 1] === true) {
        num += 1;
      }
      if (matrix[1][i + 1] === true) {
        num += 1;
      }
      res[0][i] = num;
    }
  }
  for (let i = 1; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        res[i][j] = 1;
      } else if (j === 0) {
        let num = 0;
        if (matrix[i][j + 1] === true) {
          num += 1;
        }
        if (matrix[i + 1][j] === true) {
          num += 1;
        }
        if (matrix[i - 1][j] === true) {
          num += 1;
        }
        if (matrix[i + 1][j + 1] === true) {
          num += 1;
        }
        if (matrix[i - 1][j + 1] === true) {
          num += 1;
        }
        res[i][j] = num;
      } else if (i === res[0].length - 1) {
        let num = 0;
        if (matrix[i][j - 1] === true) {
          num += 1;
        }
        if (matrix[i + 1][j] === true) {
          num += 1;
        }
        if (matrix[i - 1][j] === true) {
          num += 1;
        }
        if (matrix[i + 1][j - 1] === true) {
          num += 1;
        }
        if (matrix[i - 1][j - 1] === true) {
          num += 1;
        }
        res[i][j] = num;
      } else {
        let num = 0;
        if (matrix[i][j - 1] === true) {
          num += 1;
        }
        if (matrix[i][j + 1] === true) {
          num += 1;
        }
        if (matrix[i + 1][j] === true) {
          num += 1;
        }
        if (matrix[i - 1][j] === true) {
          num += 1;
        }
        if (matrix[i + 1][j - 1] === true) {
          num += 1;
        }
        if (matrix[i + 1][j + 1] === true) {
          num += 1;
        }
        if (matrix[i - 1][j - 1] === true) {
          num += 1;
        }
        if (matrix[i - 1][j + 1] === true) {
          num += 1;
        }
        res[i][j] = num;
      }
    }
  }
  const last = matrix.length - 1;
  for (let i = 0; i < matrix[last].length; i++) {
    if (matrix[last][i] === true) {
      res[last][i] = 1;
    } else if (i === 0) {
      let num = 0;
      if (matrix[last][i + 1] === true) {
        num += 1;
      }
      if (matrix[last - 1][i] === true) {
        num += 1;
      }
      if (matrix[last - 1][i + 1] === true) {
        num += 1;
      }
      res[last][i] = num;
    } else if (i === res[0].length - 1) {
      let num = 0;
      if (matrix[last][i - 1] === true) {
        num += 1;
      }
      if (matrix[last - 1][i] === true) {
        num += 1;
      }
      if (matrix[last - 1][i - 1] === true) {
        num += 1;
      }
      res[last][i] = num;
    } else {
      let num = 0;
      if (matrix[last][i - 1] === true) {
        num += 1;
      }
      if (matrix[last][i + 1] === true) {
        num += 1;
      }
      if (matrix[last - 1][i] === true) {
        num += 1;
      }
      if (matrix[last - 1][i - 1] === true) {
        num += 1;
      }
      if (matrix[last - 1][i + 1] === true) {
        num += 1;
      }
      res[last][i] = num;
    }
  }
  return res;
}

module.exports = minesweeper;
