/*!
 * even <https://github.com/jonschlinkert/even>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var even = require('./');
require('should');

describe('even', function () {
  it('should filter the even numbered items from an array:', function () {
    even([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).should.eql([0, 2, 4, 6, 8, 10]);
  });

  it('should work with strings:', function () {
    even(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']).should.eql(['0', '2', '4', '6', '8', '10']);
    even(even([0, '1', 2, '3', '4', 5, 6, 7, 8, 9, 10])).should.eql([0, 2, '4', 6, 8, 10]);
  });

  it('should throw an error on bad args:', function () {
    (function () {
      even();
    }).should.throw('even expects an array.');
  });
});

