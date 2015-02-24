/*!
 * even <https://github.com/jonschlinkert/even>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var isEven = require('is-even');

module.exports = function even(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('even expects an array.');
  }
  return arr.filter(isEven);
};
