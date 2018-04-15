
'use strict';

var assert = require('assert');
var lib = require('../src/index.js')

/*
  Assertion reference:
  --------------------
  assert(value[, message])
  assert.deepEqual(actual, expected[, message])
  assert.deepStrictEqual(actual, expected[, message])
  assert.doesNotThrow(block[, error][, message])
  assert.equal(actual, expected[, message])
  assert.fail([message])
  assert.fail(actual, expected[, message[, operator[, stackStartFunction]]])
  assert.ifError(value)
  assert.notDeepEqual(actual, expected[, message])
  assert.notDeepStrictEqual(actual, expected[, message])
  assert.notEqual(actual, expected[, message])
  assert.notStrictEqual(actual, expected[, message])
  assert.ok(value[, message])
  assert.strictEqual(actual, expected[, message])
  assert.throws(block[, error][, message])
*/

describe('Library', function() {
  it('should be defined', function() {
    assert(typeof lib !== 'undefined');
  });
});
