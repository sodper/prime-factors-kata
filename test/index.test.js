/* eslint-env mocha */
'use strict'

var assert = require('assert')
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

describe('Prime Factors', function () {
  it('1 should return []', function () {
    let expected = []
    let actual = lib.primeFactors(1)
    assert.deepEqual(expected, actual)
  })

  it('2 should return [2]', function () {
    let expected = [2]
    let actual = lib.primeFactors(2)
    assert.deepEqual(expected, actual)
  })

  it('3 should return [3]', function () {
    let expected = [3]
    let actual = lib.primeFactors(3)
    assert.deepEqual(expected, actual)
  })

  it('4 should return [2,2]', function () {
    let expected = [2, 2]
    let actual = lib.primeFactors(4)
    assert.deepEqual(expected, actual)
  })

  it('6 should return [2,3]', function () {
    let expected = [2, 3]
    let actual = lib.primeFactors(6)
    assert.deepEqual(expected, actual)
  })

  it('8 should return [2,2,2]', function () {
    let expected = [2, 2, 2]
    let actual = lib.primeFactors(8)
    assert.deepEqual(expected, actual)
  })

  it('9 should return [3,3]', function () {
    let expected = [3, 3]
    let actual = lib.primeFactors(9)
    assert.deepEqual(expected, actual)
  })

  it('10 should return [2,5]', function () {
    let expected = [2, 5]
    let actual = lib.primeFactors(10)
    assert.deepEqual(expected, actual)
  })

  it('100 should return [2,2,5,5]', function () {
    let expected = [2, 2, 5, 5]
    let actual = lib.primeFactors(100)
    assert.deepEqual(expected, actual)
  })

  it('256 should return [2,2,2,2,2,2,2,2]', function () {
    let expected = [2, 2, 2, 2, 2, 2, 2, 2]
    let actual = lib.primeFactors(256)
    assert.deepEqual(expected, actual)
  })
})
